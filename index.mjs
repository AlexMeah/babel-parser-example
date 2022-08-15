import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import fs from "fs/promises";
import _ from "lodash";
import t from "@babel/types";
import generate from "@babel/generator";

const path =
  "/Users/iv0697/Code/DealerPlatform/src/redux/options/optionsReducer.js";

const contents = await fs.readFile(path, "utf8");

const ast = parser.parse(contents, {
  sourceType: "module",
  plugins: ["env"],
});

// Regex to match numbers
const numberRegex = /^[\d,+]+$/;

// Matches "number string"
const isNumberString = (str) => {
  return /^\d+ \w+$/.test(str);
};

const strings = {};

traverse.default(ast, {
  ObjectProperty(path) {
    if (
      path.node.key.name === "value" &&
      !numberRegex.test(path.node.value.value)
    ) {
      strings[_.snakeCase(path.node.value.value)] = path.node.value.value;

      if (isNumberString(path.node.value.value)) {
        const [count, str] = path.node.value.value.split(" ");

        path.node.value = t.callExpression(
          t.memberExpression(t.identifier("i18n"), t.identifier("t"), false),
          [
            t.stringLiteral(`options.count_${_.snakeCase(str)}`),
            t.objectExpression([
              t.objectProperty(
                t.identifier("ns"),
                t.stringLiteral("Common"),
                false,
                false
              ),
              t.objectProperty(
                t.identifier("count"),
                t.numericLiteral(+count),
                false,
                false
              ),
            ]),
          ]
        );
      } else {
        path.node.value = t.callExpression(
          t.memberExpression(t.identifier("i18n"), t.identifier("t"), false),
          [
            t.stringLiteral(`options.${_.snakeCase(path.node.value.value)}`),
            t.objectExpression([
              t.objectProperty(
                t.identifier("ns"),
                t.stringLiteral("Common"),
                false,
                false
              ),
            ]),
          ]
        );
      }
    }
  },
});

const output = generate.default(ast, contents);

fs.writeFile("./gen.js", output.code, "utf8");
fs.writeFile("./gen.json", JSON.stringify(strings, null, 2), "utf8");
