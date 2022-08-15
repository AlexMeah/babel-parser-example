import * as actionTypes from '../actionTypes';
import _ from 'lodash';
import { makeMonthOptions, makeDayOptions } from './options.factory';
const monthOptions = {
  '12-60': makeMonthOptions(12, 60),
  '12-120': makeMonthOptions(12, 120),
  '12-121': makeMonthOptions(12, 121)
};
const dayOptions = {
  '1-30': makeDayOptions(1, 30)
};
export const defaultState = {
  Titles: [{
    key: 'Dr',
    value: i18n.t("options.dr", {
      ns: "Common"
    })
  }, {
    key: 'Mr',
    value: i18n.t("options.mr", {
      ns: "Common"
    })
  }, {
    key: 'Mrs',
    value: i18n.t("options.mrs", {
      ns: "Common"
    })
  }, {
    key: 'Miss',
    value: i18n.t("options.miss", {
      ns: "Common"
    })
  }, {
    key: 'Ms',
    value: i18n.t("options.ms", {
      ns: "Common"
    })
  }, {
    key: 'Professor',
    value: i18n.t("options.professor", {
      ns: "Common"
    })
  }],
  Dependants: [{
    key: '0',
    value: i18n.t("options.none", {
      ns: "Common"
    })
  }, {
    key: '1',
    value: '1'
  }, {
    key: '2',
    value: '2'
  }, {
    key: '3',
    value: '3'
  }, {
    key: '4',
    value: '4'
  }, {
    key: '5',
    value: '5'
  }, {
    key: '6',
    value: '6+'
  }],
  Genders: [{
    key: 'Female',
    value: i18n.t("options.female", {
      ns: "Common"
    })
  }, {
    key: 'Male',
    value: i18n.t("options.male", {
      ns: "Common"
    })
  }],
  YesOrNo: [{
    key: 'true',
    value: i18n.t("options.yes", {
      ns: "Common"
    })
  }, {
    key: 'false',
    value: i18n.t("options.no", {
      ns: "Common"
    })
  }],
  MileageOptions: [{
    key: '3000',
    value: '3,000'
  }, {
    key: '4000',
    value: '4,000'
  }, {
    key: '5000',
    value: '5,000'
  }, {
    key: '6000',
    value: '6,000'
  }, {
    key: '7000',
    value: '7,000'
  }, {
    key: '8000',
    value: '8,000'
  }, {
    key: '9000',
    value: '9,000'
  }, {
    key: '10000',
    value: '10,000'
  }, {
    key: '11000',
    value: '11,000'
  }, {
    key: '12000',
    value: '12,000'
  }, {
    key: '13000',
    value: '13,000'
  }, {
    key: '14000',
    value: '14,000'
  }, {
    key: '15000',
    value: '15,000'
  }, {
    key: '16000',
    value: '16,000'
  }, {
    key: '17000',
    value: '17,000'
  }, {
    key: '18000',
    value: '18,000'
  }, {
    key: '19000',
    value: '19,000'
  }, {
    key: '20000',
    value: '20,000'
  }, {
    key: '21000',
    value: '21,000'
  }, {
    key: '22000',
    value: '22,000'
  }, {
    key: '23000',
    value: '23,000'
  }, {
    key: '24000',
    value: '24,000'
  }, {
    key: '25000',
    value: '25,000'
  }, {
    key: '26000',
    value: '26,000'
  }, {
    key: '27000',
    value: '27,000'
  }, {
    key: '28000',
    value: '28,000'
  }, {
    key: '29000',
    value: '29,000'
  }, {
    key: '30000',
    value: '30,000'
  }, {
    key: '31000',
    value: '31,000'
  }, {
    key: '32000',
    value: '32,000'
  }, {
    key: '33000',
    value: '33,000'
  }, {
    key: '34000',
    value: '34,000'
  }, {
    key: '35000',
    value: '35,000'
  }, {
    key: '36000',
    value: '36,000'
  }, {
    key: '37000',
    value: '37,000'
  }, {
    key: '38000',
    value: '38,000'
  }, {
    key: '39000',
    value: '39,000'
  }, {
    key: '40000',
    value: '40,000'
  }, {
    key: '41000',
    value: '41,000'
  }, {
    key: '42000',
    value: '42,000'
  }, {
    key: '43000',
    value: '43,000'
  }, {
    key: '44000',
    value: '44,000'
  }, {
    key: '45000',
    value: '45,000'
  }],
  MotorBikeMileageOptions: [{
    key: '2500',
    value: '2,500'
  }, {
    key: '3000',
    value: '3,000'
  }, {
    key: '4000',
    value: '4,000'
  }, {
    key: '5000',
    value: '5,000'
  }, {
    key: '6000',
    value: '6,000'
  }, {
    key: '7000',
    value: '7,000'
  }, {
    key: '8000',
    value: '8,000'
  }, {
    key: '9000',
    value: '9,000'
  }, {
    key: '10000',
    value: '10,000'
  }, {
    key: '11000',
    value: '11,000'
  }, {
    key: '12000',
    value: '12,000'
  }, {
    key: '13000',
    value: '13,000'
  }, {
    key: '14000',
    value: '14,000'
  }, {
    key: '15000',
    value: '15,000'
  }, {
    key: '16000',
    value: '16,000'
  }, {
    key: '17000',
    value: '17,000'
  }, {
    key: '18000',
    value: '18,000'
  }, {
    key: '19000',
    value: '19,000'
  }, {
    key: '20000',
    value: '20,000'
  }, {
    key: '21000',
    value: '21,000'
  }, {
    key: '22000',
    value: '22,000'
  }, {
    key: '23000',
    value: '23,000'
  }, {
    key: '24000',
    value: '24,000'
  }, {
    key: '25000',
    value: '25,000'
  }, {
    key: '26000',
    value: '26,000'
  }, {
    key: '27000',
    value: '27,000'
  }, {
    key: '28000',
    value: '28,000'
  }, {
    key: '29000',
    value: '29,000'
  }, {
    key: '30000',
    value: '30,000'
  }, {
    key: '31000',
    value: '31,000'
  }, {
    key: '32000',
    value: '32,000'
  }, {
    key: '33000',
    value: '33,000'
  }, {
    key: '34000',
    value: '34,000'
  }, {
    key: '35000',
    value: '35,000'
  }, {
    key: '36000',
    value: '36,000'
  }, {
    key: '37000',
    value: '37,000'
  }, {
    key: '38000',
    value: '38,000'
  }, {
    key: '39000',
    value: '39,000'
  }, {
    key: '40000',
    value: '40,000'
  }, {
    key: '41000',
    value: '41,000'
  }, {
    key: '42000',
    value: '42,000'
  }, {
    key: '43000',
    value: '43,000'
  }, {
    key: '44000',
    value: '44,000'
  }, {
    key: '45000',
    value: '45,000'
  }],
  Terms: monthOptions['12-60'],
  MotorhomeTerms: [{
    key: 24,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 24
    })
  }, {
    key: 25,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 25
    })
  }, {
    key: 26,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 26
    })
  }, {
    key: 27,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 27
    })
  }, {
    key: 28,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 28
    })
  }, {
    key: 29,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 29
    })
  }, {
    key: 30,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 30
    })
  }, {
    key: 31,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 31
    })
  }, {
    key: 32,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 32
    })
  }, {
    key: 33,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 33
    })
  }, {
    key: 34,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 34
    })
  }, {
    key: 35,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 35
    })
  }, {
    key: 36,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 36
    })
  }, {
    key: 37,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 37
    })
  }, {
    key: 38,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 38
    })
  }, {
    key: 39,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 39
    })
  }, {
    key: 40,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 40
    })
  }, {
    key: 41,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 41
    })
  }, {
    key: 42,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 42
    })
  }, {
    key: 43,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 43
    })
  }, {
    key: 44,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 44
    })
  }, {
    key: 45,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 45
    })
  }, {
    key: 46,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 46
    })
  }, {
    key: 47,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 47
    })
  }, {
    key: 48,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 48
    })
  }, {
    key: 49,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 49
    })
  }, {
    key: 50,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 50
    })
  }, {
    key: 51,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 51
    })
  }, {
    key: 52,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 52
    })
  }, {
    key: 53,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 53
    })
  }, {
    key: 54,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 54
    })
  }, {
    key: 55,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 55
    })
  }, {
    key: 56,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 56
    })
  }, {
    key: 57,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 57
    })
  }, {
    key: 58,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 58
    })
  }, {
    key: 59,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 59
    })
  }, {
    key: 60,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 60
    })
  }, {
    key: 61,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 61
    })
  }, {
    key: 62,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 62
    })
  }, {
    key: 63,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 63
    })
  }, {
    key: 64,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 64
    })
  }, {
    key: 65,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 65
    })
  }, {
    key: 66,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 66
    })
  }, {
    key: 67,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 67
    })
  }, {
    key: 68,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 68
    })
  }, {
    key: 69,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 69
    })
  }, {
    key: 70,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 70
    })
  }, {
    key: 71,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 71
    })
  }, {
    key: 72,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 72
    })
  }, {
    key: 73,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 73
    })
  }, {
    key: 74,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 74
    })
  }, {
    key: 75,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 75
    })
  }, {
    key: 76,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 76
    })
  }, {
    key: 77,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 77
    })
  }, {
    key: 78,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 78
    })
  }, {
    key: 79,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 79
    })
  }, {
    key: 80,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 80
    })
  }, {
    key: 81,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 81
    })
  }, {
    key: 82,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 82
    })
  }, {
    key: 83,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 83
    })
  }, {
    key: 84,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 84
    })
  }, {
    key: 85,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 85
    })
  }, {
    key: 86,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 86
    })
  }, {
    key: 87,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 87
    })
  }, {
    key: 88,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 88
    })
  }, {
    key: 89,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 89
    })
  }, {
    key: 90,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 90
    })
  }, {
    key: 91,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 91
    })
  }, {
    key: 92,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 92
    })
  }, {
    key: 93,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 93
    })
  }, {
    key: 94,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 94
    })
  }, {
    key: 95,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 95
    })
  }, {
    key: 96,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 96
    })
  }, {
    key: 97,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 97
    })
  }, {
    key: 98,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 98
    })
  }, {
    key: 99,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 99
    })
  }, {
    key: 100,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 100
    })
  }, {
    key: 101,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 101
    })
  }, {
    key: 102,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 102
    })
  }, {
    key: 103,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 103
    })
  }, {
    key: 104,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 104
    })
  }, {
    key: 105,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 105
    })
  }, {
    key: 106,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 106
    })
  }, {
    key: 107,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 107
    })
  }, {
    key: 108,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 108
    })
  }, {
    key: 109,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 109
    })
  }, {
    key: 110,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 110
    })
  }, {
    key: 111,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 111
    })
  }, {
    key: 112,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 112
    })
  }, {
    key: 113,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 113
    })
  }, {
    key: 114,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 114
    })
  }, {
    key: 115,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 115
    })
  }, {
    key: 116,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 116
    })
  }, {
    key: 117,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 117
    })
  }, {
    key: 118,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 118
    })
  }, {
    key: 119,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 119
    })
  }, {
    key: 120,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 120
    })
  }],
  CloseDealTerms: [{
    key: 12,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 12
    })
  }, {
    key: 13,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 13
    })
  }, {
    key: 14,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 14
    })
  }, {
    key: 15,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 15
    })
  }, {
    key: 16,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 16
    })
  }, {
    key: 17,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 17
    })
  }, {
    key: 18,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 18
    })
  }, {
    key: 19,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 19
    })
  }, {
    key: 20,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 20
    })
  }, {
    key: 21,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 21
    })
  }, {
    key: 22,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 22
    })
  }, {
    key: 23,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 23
    })
  }, {
    key: 24,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 24
    })
  }, {
    key: 25,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 25
    })
  }, {
    key: 26,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 26
    })
  }, {
    key: 27,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 27
    })
  }, {
    key: 28,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 28
    })
  }, {
    key: 29,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 29
    })
  }, {
    key: 30,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 30
    })
  }, {
    key: 31,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 31
    })
  }, {
    key: 32,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 32
    })
  }, {
    key: 33,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 33
    })
  }, {
    key: 34,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 34
    })
  }, {
    key: 35,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 35
    })
  }, {
    key: 36,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 36
    })
  }, {
    key: 37,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 37
    })
  }, {
    key: 38,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 38
    })
  }, {
    key: 39,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 39
    })
  }, {
    key: 40,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 40
    })
  }, {
    key: 41,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 41
    })
  }, {
    key: 42,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 42
    })
  }, {
    key: 43,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 43
    })
  }, {
    key: 44,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 44
    })
  }, {
    key: 45,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 45
    })
  }, {
    key: 46,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 46
    })
  }, {
    key: 47,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 47
    })
  }, {
    key: 48,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 48
    })
  }, {
    key: 49,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 49
    })
  }, {
    key: 50,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 50
    })
  }, {
    key: 51,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 51
    })
  }, {
    key: 52,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 52
    })
  }, {
    key: 53,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 53
    })
  }, {
    key: 54,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 54
    })
  }, {
    key: 55,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 55
    })
  }, {
    key: 56,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 56
    })
  }, {
    key: 57,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 57
    })
  }, {
    key: 58,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 58
    })
  }, {
    key: 59,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 59
    })
  }, {
    key: 60,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 60
    })
  }, {
    key: 61,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 61
    })
  }, {
    key: 62,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 62
    })
  }, {
    key: 63,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 63
    })
  }, {
    key: 64,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 64
    })
  }, {
    key: 65,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 65
    })
  }, {
    key: 66,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 66
    })
  }, {
    key: 67,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 67
    })
  }, {
    key: 68,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 68
    })
  }, {
    key: 69,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 69
    })
  }, {
    key: 70,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 70
    })
  }, {
    key: 71,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 71
    })
  }, {
    key: 72,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 72
    })
  }, {
    key: 73,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 73
    })
  }, {
    key: 74,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 74
    })
  }, {
    key: 75,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 75
    })
  }, {
    key: 76,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 76
    })
  }, {
    key: 77,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 77
    })
  }, {
    key: 78,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 78
    })
  }, {
    key: 79,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 79
    })
  }, {
    key: 80,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 80
    })
  }, {
    key: 81,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 81
    })
  }, {
    key: 82,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 82
    })
  }, {
    key: 83,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 83
    })
  }, {
    key: 84,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 84
    })
  }, {
    key: 85,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 85
    })
  }, {
    key: 86,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 86
    })
  }, {
    key: 87,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 87
    })
  }, {
    key: 88,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 88
    })
  }, {
    key: 89,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 89
    })
  }, {
    key: 90,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 90
    })
  }, {
    key: 91,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 91
    })
  }, {
    key: 92,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 92
    })
  }, {
    key: 93,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 93
    })
  }, {
    key: 94,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 94
    })
  }, {
    key: 95,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 95
    })
  }, {
    key: 96,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 96
    })
  }, {
    key: 97,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 97
    })
  }, {
    key: 98,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 98
    })
  }, {
    key: 99,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 99
    })
  }, {
    key: 100,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 100
    })
  }, {
    key: 101,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 101
    })
  }, {
    key: 102,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 102
    })
  }, {
    key: 103,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 103
    })
  }, {
    key: 104,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 104
    })
  }, {
    key: 105,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 105
    })
  }, {
    key: 106,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 106
    })
  }, {
    key: 107,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 107
    })
  }, {
    key: 108,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 108
    })
  }, {
    key: 109,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 109
    })
  }, {
    key: 110,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 110
    })
  }, {
    key: 111,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 111
    })
  }, {
    key: 112,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 112
    })
  }, {
    key: 113,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 113
    })
  }, {
    key: 114,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 114
    })
  }, {
    key: 115,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 115
    })
  }, {
    key: 116,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 116
    })
  }, {
    key: 117,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 117
    })
  }, {
    key: 118,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 118
    })
  }, {
    key: 119,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 119
    })
  }, {
    key: 120,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 120
    })
  }, {
    key: 121,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 121
    })
  }],
  VatStatus: [{
    key: 'inc',
    value: i18n.t("options.vat_inc", {
      ns: "Common"
    })
  }],
  VehicleType: [{
    key: 'used',
    value: i18n.t("options.used", {
      ns: "Common"
    })
  }, {
    key: 'new',
    value: i18n.t("options.new", {
      ns: "Common"
    })
  }],
  VehicleClass: [{
    key: 'car',
    value: i18n.t("options.car", {
      ns: "Common"
    })
  }, {
    key: 'lcv',
    value: i18n.t("options.lcv", {
      ns: "Common"
    })
  }, {
    key: 'bike',
    value: i18n.t("options.bike", {
      ns: "Common"
    })
  }],
  StockVehicleClass: [{
    key: 'car',
    value: i18n.t("options.car", {
      ns: "Common"
    })
  }, {
    key: 'van',
    value: i18n.t("options.van", {
      ns: "Common"
    })
  }, {
    key: 'motorbike',
    value: i18n.t("options.motorbike", {
      ns: "Common"
    })
  }],
  StockVehicleClassIncUnknown: [{
    key: 'car',
    value: i18n.t("options.car", {
      ns: "Common"
    })
  }, {
    key: 'van',
    value: i18n.t("options.van", {
      ns: "Common"
    })
  }, {
    key: 'motorbike',
    value: i18n.t("options.motorbike", {
      ns: "Common"
    })
  }, {
    key: 'unknown',
    value: i18n.t("options.unknown", {
      ns: "Common"
    })
  }],
  Currency: [{
    key: 'GBP',
    value: i18n.t("options.gbp", {
      ns: "Common"
    })
  }, {
    key: 'USD',
    value: i18n.t("options.usd", {
      ns: "Common"
    })
  }, {
    key: 'EUR',
    value: i18n.t("options.eur", {
      ns: "Common"
    })
  }],
  MileageUnits: [{
    key: 'MILE',
    value: i18n.t("options.mile", {
      ns: "Common"
    })
  }, {
    key: 'KM',
    value: i18n.t("options.km", {
      ns: "Common"
    })
  }],
  VehicleClassIncMotorhome: [{
    key: 'car',
    value: i18n.t("options.car", {
      ns: "Common"
    })
  }, {
    key: 'lcv',
    value: i18n.t("options.lcv", {
      ns: "Common"
    })
  }, {
    key: 'bike',
    value: i18n.t("options.bike", {
      ns: "Common"
    })
  }, {
    key: 'motorhome',
    value: i18n.t("options.motorhome", {
      ns: "Common"
    })
  }],
  BuyerType: [{
    key: 'private',
    value: i18n.t("options.private_individuals", {
      ns: "Common"
    })
  }, {
    key: 'business',
    value: i18n.t("options.businesses", {
      ns: "Common"
    })
  }],
  ContactType: [{
    key: 'consumer',
    value: i18n.t("options.private_individual", {
      ns: "Common"
    })
  }, {
    key: 'corporate',
    value: i18n.t("options.business", {
      ns: "Common"
    })
  }],
  PreferredTerm: [{
    key: 12,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 12
    })
  }, {
    key: 18,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 18
    })
  }, {
    key: 24,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 24
    })
  }, {
    key: 30,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 30
    })
  }, {
    key: 36,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 36
    })
  }, {
    key: 42,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 42
    })
  }, {
    key: 48,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 48
    })
  }, {
    key: 54,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 54
    })
  }, {
    key: 60,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 60
    })
  }],
  PreferredTermExtended: [{
    key: 24,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 24
    })
  }, {
    key: 30,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 30
    })
  }, {
    key: 36,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 36
    })
  }, {
    key: 42,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 42
    })
  }, {
    key: 48,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 48
    })
  }, {
    key: 54,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 54
    })
  }, {
    key: 60,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 60
    })
  }, {
    key: 66,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 66
    })
  }, {
    key: 72,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 72
    })
  }, {
    key: 78,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 78
    })
  }, {
    key: 84,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 84
    })
  }, {
    key: 90,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 90
    })
  }, {
    key: 102,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 102
    })
  }, {
    key: 108,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 108
    })
  }, {
    key: 114,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 114
    })
  }, {
    key: 120,
    value: i18n.t("options.count_months", {
      ns: "Common",
      count: 120
    })
  }],
  DepositType: [{
    key: 'fixed',
    value: i18n.t("options.fixed", {
      ns: "Common"
    })
  }, {
    key: 'percent',
    value: i18n.t("options.of_cash_price", {
      ns: "Common"
    })
  }],
  CommissionType: [{
    key: 'APR',
    value: i18n.t("options.apr", {
      ns: "Common"
    })
  }, {
    key: 'FlatRate',
    value: i18n.t("options.flat_rate", {
      ns: "Common"
    })
  }, {
    key: 'CommissionAdvance',
    value: i18n.t("options.of_advance", {
      ns: "Common"
    })
  }, {
    key: 'CommissionFixed',
    value: i18n.t("options.commission", {
      ns: "Common"
    })
  }],
  CompanyType: [{
    key: 'Association',
    value: i18n.t("options.association", {
      ns: "Common"
    })
  }, {
    key: 'Corporate',
    value: i18n.t("options.corporate", {
      ns: "Common"
    })
  }, {
    key: 'LimitedCompany',
    value: i18n.t("options.limited_company", {
      ns: "Common"
    })
  }, {
    key: 'LimitedLiabilityPartnership',
    value: i18n.t("options.limited_liability_partnership", {
      ns: "Common"
    })
  }, {
    key: 'LocalAuthority',
    value: i18n.t("options.local_authority", {
      ns: "Common"
    })
  }, {
    key: 'NHSTrust',
    value: i18n.t("options.nhs_trust", {
      ns: "Common"
    })
  }, {
    key: 'PublicLimitedCompany',
    value: i18n.t("options.public_limited_company", {
      ns: "Common"
    })
  }, {
    key: 'Partnership',
    value: i18n.t("options.partnership", {
      ns: "Common"
    })
  }, {
    key: 'RegisteredCharity',
    value: i18n.t("options.registered_charity", {
      ns: "Common"
    })
  }, {
    key: 'School',
    value: i18n.t("options.school", {
      ns: "Common"
    })
  }],
  PremisesType: [{
    key: 'Leased',
    value: i18n.t("options.leased", {
      ns: "Common"
    })
  }, {
    key: 'Licensed',
    value: i18n.t("options.licensed", {
      ns: "Common"
    })
  }, {
    key: 'OwnedMortgage',
    value: i18n.t("options.owned_mortgage", {
      ns: "Common"
    })
  }, {
    key: 'OwnedOutright',
    value: i18n.t("options.owned_outright", {
      ns: "Common"
    })
  }],
  Lenders: _.chain([{
    key: 'MOT',
    value: i18n.t("options.moto_novo_finance", {
      ns: "Common"
    })
  }, {
    key: 'BLA',
    value: i18n.t("options.black_horse_motor_finance", {
      ns: "Common"
    })
  }, {
    key: 'BAR',
    value: i18n.t("options.barclays_partner_finance", {
      ns: "Common"
    })
  }, {
    key: 'MON',
    value: i18n.t("options.moneyway", {
      ns: "Common"
    })
  }, {
    key: 'SAN',
    value: i18n.t("options.santander_consumer_finance_uk_plc", {
      ns: "Common"
    })
  }, {
    key: 'MOE',
    value: i18n.t("options.moneybarn", {
      ns: "Common"
    })
  }, {
    key: 'GMF',
    value: i18n.t("options.gm_financial", {
      ns: "Common"
    })
  }, {
    key: 'ADV',
    value: i18n.t("options.advantage_finance", {
      ns: "Common"
    })
  }, {
    key: 'ALD',
    value: i18n.t("options.ald_automotive_limited", {
      ns: "Common"
    })
  }, {
    key: 'ALA',
    value: i18n.t("options.alfa_romeo_financial_services", {
      ns: "Common"
    })
  }, {
    key: 'ALP',
    value: i18n.t("options.alphera", {
      ns: "Common"
    })
  }, {
    key: 'ALL',
    value: i18n.t("options.all_in_one_finance_ltd_uk_car_group_ltd", {
      ns: "Common"
    })
  }, {
    key: 'AML',
    value: i18n.t("options.amigo_loans", {
      ns: "Common"
    })
  }, {
    key: 'AUF',
    value: i18n.t("options.auto_union_finance", {
      ns: "Common"
    })
  }, {
    key: 'BLU',
    value: i18n.t("options.blue_motor_finance_ltd", {
      ns: "Common"
    })
  }, {
    key: 'BWF',
    value: i18n.t("options.borderway", {
      ns: "Common"
    })
  }, {
    key: 'BIL',
    value: i18n.t("options.billing_finance_ltd", {
      ns: "Common"
    })
  }, {
    key: 'BMW',
    value: i18n.t("options.bmw_financial_services_gb_limited", {
      ns: "Common"
    })
  }, {
    key: 'BNP',
    value: i18n.t("options.bnp_paribas", {
      ns: "Common"
    })
  }, {
    key: 'CF7',
    value: i18n.t("options.car_finance_247", {
      ns: "Common"
    })
  }, {
    key: 'CLU',
    value: i18n.t("options.car_loans_4_u", {
      ns: "Common"
    })
  }, {
    key: 'CIT',
    value: i18n.t("options.citroen_financial_services", {
      ns: "Common"
    })
  }, {
    key: 'CHR',
    value: i18n.t("options.chrysler_financial_services", {
      ns: "Common"
    })
  }, {
    key: 'CLO',
    value: i18n.t("options.close_brothers_motor_finance", {
      ns: "Common"
    })
  }, {
    key: 'DPF',
    value: i18n.t("options.dpdg_finance_limited", {
      ns: "Common"
    })
  }, {
    key: 'DSG',
    value: i18n.t("options.dsg_financial_services_limited", {
      ns: "Common"
    })
  }, {
    key: 'EVO',
    value: i18n.t("options.evolution_funding", {
      ns: "Common"
    })
  }, {
    key: 'FCA',
    value: i18n.t("options.fca_automotive_services_uk_ltd", {
      ns: "Common"
    })
  }, {
    key: 'FIA',
    value: i18n.t("options.fiat_financial_services", {
      ns: "Common"
    })
  }, {
    key: 'FIR',
    value: i18n.t("options.first_response_finance_limited", {
      ns: "Common"
    })
  }, {
    key: 'FOR',
    value: i18n.t("options.fce_banks_plc_t_a_ford_credit_britain", {
      ns: "Common"
    })
  }, {
    key: 'GMA',
    value: i18n.t("options.gmac_uk_plc", {
      ns: "Common"
    })
  }, {
    key: 'HDF',
    value: i18n.t("options.harley_davidson_financial_services_europe_limited", {
      ns: "Common"
    })
  }, {
    key: 'HIT',
    value: i18n.t("options.hitachi_capital_uk_plc", {
      ns: "Common"
    })
  }, {
    key: 'HON',
    value: i18n.t("options.honda_finance_europe_plc", {
      ns: "Common"
    })
  }, {
    key: 'HSB',
    value: i18n.t("options.hsbc_asset_finance_uk_ltd", {
      ns: "Common"
    })
  }, {
    key: 'HYU',
    value: i18n.t("options.hyundai_capital_uk_limited", {
      ns: "Common"
    })
  }, {
    key: 'JAG',
    value: i18n.t("options.jaguar_financial_services", {
      ns: "Common"
    })
  }, {
    key: 'LDR',
    value: i18n.t("options.land_rover_financial_services", {
      ns: "Common"
    })
  }, {
    key: 'LAS',
    value: i18n.t("options.la_ser_uk", {
      ns: "Common"
    })
  }, {
    key: 'LEA',
    value: i18n.t("options.lease_plan_uk_limited", {
      ns: "Common"
    })
  }, {
    key: 'LOM',
    value: i18n.t("options.lombard_north_central_plc", {
      ns: "Common"
    })
  }, {
    key: 'LSF',
    value: i18n.t("options.london_and_surrey_motor_finance", {
      ns: "Common"
    })
  }, {
    key: 'MIF',
    value: i18n.t("options.mann_island_finance", {
      ns: "Common"
    })
  }, {
    key: 'MAR',
    value: i18n.t("options.marsh_finance_ltd", {
      ns: "Common"
    })
  }, {
    key: 'MAZ',
    value: i18n.t("options.mazda_financial_services", {
      ns: "Common"
    })
  }, {
    key: 'MBF',
    value: i18n.t("options.mercedes_benz_financial_services_uk_limited", {
      ns: "Common"
    })
  }, {
    key: 'NOR',
    value: i18n.t("options.northridge_finance", {
      ns: "Common"
    })
  }, {
    key: 'PCF',
    value: i18n.t("options.paccar_financial_plc", {
      ns: "Common"
    })
  }, {
    key: 'PAG',
    value: i18n.t("options.paragon_car_finance", {
      ns: "Common"
    })
  }, {
    key: 'PEU',
    value: i18n.t("options.peugeot_financial_services", {
      ns: "Common"
    })
  }, {
    key: 'PAC',
    value: i18n.t("options.private_and_commercial", {
      ns: "Common"
    })
  }, {
    key: 'PSA',
    value: i18n.t("options.psa_finance_uk_ltd", {
      ns: "Common"
    })
  }, {
    key: 'RCI',
    value: i18n.t("options.rci_financial_services_limited", {
      ns: "Common"
    })
  }, {
    key: 'MIT',
    value: i18n.t("options.shogun_finance_ltd_t_a_finance_mitsubishi", {
      ns: "Common"
    })
  }, {
    key: 'SOU',
    value: i18n.t("options.southern_finance", {
      ns: "Common"
    })
  }, {
    key: 'SPO',
    value: i18n.t("options.spot_finance_ltd", {
      ns: "Common"
    })
  }, {
    key: 'STL',
    value: i18n.t("options.startline_motor_finance_ltd", {
      ns: "Common"
    })
  }, {
    key: 'SUZ',
    value: i18n.t("options.suzuki_financial_services_limited", {
      ns: "Common"
    })
  }, {
    key: 'TCF',
    value: i18n.t("options.the_car_finance_company", {
      ns: "Common"
    })
  }, {
    key: 'FUN',
    value: i18n.t("options.the_funding_corporation_limited", {
      ns: "Common"
    })
  }, {
    key: 'TOY',
    value: i18n.t("options.toyota_financial_services_uk_plc", {
      ns: "Common"
    })
  }, {
    key: 'VOK',
    value: i18n.t("options.volkswagen_financial_services_uk_limited", {
      ns: "Common"
    })
  }, {
    key: 'VOL',
    value: i18n.t("options.volvo_car_credit", {
      ns: "Common"
    })
  }, {
    key: 'ZUT',
    value: i18n.t("options.zuto", {
      ns: "Common"
    })
  }, {
    key: '1ST',
    value: i18n.t("options.1st_stop_car_finance", {
      ns: "Common"
    })
  }, {
    key: 'CRE',
    value: i18n.t("options.creation_consumer_finance_limited", {
      ns: "Common"
    })
  }]).concat([{
    key: 'Other',
    value: i18n.t("options.other", {
      ns: "Common"
    })
  }]).value(),
  ProductType: [{
    key: 'HP',
    value: i18n.t("options.hire_purchase", {
      ns: "Common"
    })
  }, {
    key: 'CS',
    value: i18n.t("options.conditional_sale", {
      ns: "Common"
    })
  }, {
    key: 'BHP',
    value: i18n.t("options.balloon_hire_purchase", {
      ns: "Common"
    })
  }, {
    key: 'LP',
    value: i18n.t("options.loan", {
      ns: "Common"
    })
  }, {
    key: 'CH',
    value: i18n.t("options.contract_hire", {
      ns: "Common"
    })
  }, {
    key: 'FL',
    value: i18n.t("options.finance_lease", {
      ns: "Common"
    })
  }, {
    key: 'PCP',
    value: i18n.t("options.personal_contract_purchase", {
      ns: "Common"
    })
  }],
  FinanceApplicationsSortOptions: [{
    key: 'Quote.ProductName',
    value: i18n.t("options.product", {
      ns: "Common"
    })
  }, {
    key: 'Quote.CashPrice',
    value: i18n.t("options.retail_price", {
      ns: "Common"
    })
  }, {
    key: 'Quote.RepresentativeApr',
    value: i18n.t("options.apr", {
      ns: "Common"
    })
  }, {
    key: 'Quote.TotalAmountPayable',
    value: i18n.t("options.total_amount_payable", {
      ns: "Common"
    })
  }, {
    key: 'Quote.FollowingPayments',
    value: i18n.t("options.monthly_payments", {
      ns: "Common"
    })
  }, {
    key: 'LastModifiedTimestamp',
    value: i18n.t("options.date", {
      ns: "Common"
    })
  }],
  SavedQuotesSortOptions: [{
    key: 'Quote.ProductName',
    value: i18n.t("options.product", {
      ns: "Common"
    })
  }, {
    key: 'Quote.RepresentativeApr',
    value: i18n.t("options.apr", {
      ns: "Common"
    })
  }, {
    key: 'Quote.TotalAmountPayable',
    value: i18n.t("options.total_amount_payable", {
      ns: "Common"
    })
  }, {
    key: 'Quote.Term',
    value: i18n.t("options.agreement_term", {
      ns: "Common"
    })
  }, {
    key: 'Quote.FollowingPayments',
    value: i18n.t("options.monthly_payments", {
      ns: "Common"
    })
  }, {
    key: 'SavedTime',
    value: i18n.t("options.date_saved", {
      ns: "Common"
    })
  }],
  CarFinanceChecksSortOptions: [{
    key: 'ProductName',
    value: i18n.t("options.product", {
      ns: "Common"
    })
  }, {
    key: 'MatchRate',
    value: i18n.t("options.eligibility_match", {
      ns: "Common"
    })
  }, {
    key: 'RepresentativeApr',
    value: i18n.t("options.apr", {
      ns: "Common"
    })
  }, {
    key: 'TotalAmountPayable',
    value: i18n.t("options.total_amount_payable", {
      ns: "Common"
    })
  }, {
    key: 'Term',
    value: i18n.t("options.agreement_term", {
      ns: "Common"
    })
  }, {
    key: 'FollowingPayments',
    value: i18n.t("options.monthly_payments", {
      ns: "Common"
    })
  }],
  QuotesListSortOptions: [{
    key: 'ProductName',
    value: i18n.t("options.product", {
      ns: "Common"
    })
  }, {
    key: 'RepresentativeApr',
    value: i18n.t("options.apr", {
      ns: "Common"
    })
  }, {
    key: 'TotalAmountPayable',
    value: i18n.t("options.total_amount_payable", {
      ns: "Common"
    })
  }, {
    key: 'Term',
    value: i18n.t("options.agreement_term", {
      ns: "Common"
    })
  }, {
    key: 'FollowingPayments',
    value: i18n.t("options.monthly_payments", {
      ns: "Common"
    })
  }],
  SortDirectionOptions: [{
    key: 'asc',
    value: i18n.t("options.ascending", {
      ns: "Common"
    })
  }, {
    key: 'desc',
    value: i18n.t("options.descending", {
      ns: "Common"
    })
  }],
  QuickQuoteCustomerType: [{
    key: 'consumer',
    value: i18n.t("options.private_customer", {
      ns: "Common"
    })
  }, {
    key: 'corporate',
    value: i18n.t("options.business_customer", {
      ns: "Common"
    })
  }],
  ExportLeadType: [{
    key: 'closed-leads',
    value: i18n.t("options.closed_deals", {
      ns: "Common"
    })
  }, {
    key: 'cfcleads',
    value: i18n.t("options.car_finance_checks", {
      ns: "Common"
    })
  }, {
    key: 'applications',
    value: i18n.t("options.finance_applications", {
      ns: "Common"
    })
  }],
  BnppLicenceType: [{
    key: 'FullUKLicence',
    value: i18n.t("options.full_uk_licence", {
      ns: "Common"
    })
  }, {
    key: 'ProvisionalLicence',
    value: i18n.t("options.provisional_licence", {
      ns: "Common"
    })
  }],
  ReservationPeriod: dayOptions['1-30'],
  RefundFilterOptions: [{
    key: 'all',
    value: i18n.t("options.all", {
      ns: "Common"
    })
  }, {
    key: 'active',
    value: i18n.t("options.active", {
      ns: "Common"
    })
  }, {
    key: 'refunded',
    value: i18n.t("options.refunded", {
      ns: "Common"
    })
  }, {
    key: 'overdue',
    value: i18n.t("options.expired", {
      ns: "Common"
    })
  }, {
    key: 'incomplete',
    value: i18n.t("options.incomplete", {
      ns: "Common"
    })
  }, {
    key: 'paymentUsedAsDeposit',
    value: i18n.t("options.payment_used_as_deposit", {
      ns: "Common"
    })
  }],
  LeadsFilterOptions: [{
    key: 'all',
    value: i18n.t("options.all_leads", {
      ns: "Common"
    })
  }, {
    key: 'mine',
    value: i18n.t("options.my_leads", {
      ns: "Common"
    })
  }, {
    key: 'unassigned',
    value: i18n.t("options.unassigned_leads", {
      ns: "Common"
    })
  }],
  LenderStatusDev: [{
    key: 'Submitting',
    value: i18n.t("options.submitting", {
      ns: "Common"
    })
  }, {
    key: 'Accepted',
    value: i18n.t("options.accepted", {
      ns: "Common"
    })
  }, {
    key: 'ConditionalAccept',
    value: i18n.t("options.conditional_accept", {
      ns: "Common"
    })
  }, {
    key: 'Rejected',
    value: i18n.t("options.rejected", {
      ns: "Common"
    })
  }, {
    key: 'NoDecisionYet',
    value: i18n.t("options.no_decision_yet", {
      ns: "Common"
    })
  }, {
    key: 'Referred',
    value: i18n.t("options.referred", {
      ns: "Common"
    })
  }, {
    key: 'PaidOut',
    value: i18n.t("options.paid_out", {
      ns: "Common"
    })
  }, {
    key: 'Pending',
    value: i18n.t("options.pending", {
      ns: "Common"
    })
  }, {
    key: 'ProblemPayout',
    value: i18n.t("options.problem_payout", {
      ns: "Common"
    })
  }, {
    key: 'Submitted',
    value: i18n.t("options.submitted", {
      ns: "Common"
    })
  }, {
    key: 'NotTakenUp',
    value: i18n.t("options.not_taken_up", {
      ns: "Common"
    })
  }, {
    key: 'WaitingForFurtherInformation',
    value: i18n.t("options.waiting_for_further_information", {
      ns: "Common"
    })
  }, {
    key: 'SentForPayout',
    value: i18n.t("options.sent_for_payout", {
      ns: "Common"
    })
  }, {
    key: 'NotProceeding',
    value: i18n.t("options.not_proceeding", {
      ns: "Common"
    })
  }, {
    key: 'Other',
    value: i18n.t("options.other", {
      ns: "Common"
    })
  }, {
    key: 'Error',
    value: i18n.t("options.error", {
      ns: "Common"
    })
  }, {
    key: 'ProposalAdjustedAccepted',
    value: i18n.t("options.proposal_adjusted_accepted", {
      ns: "Common"
    })
  }, {
    key: 'ContactLender',
    value: i18n.t("options.contact_lender", {
      ns: "Common"
    })
  }, {
    key: 'RateAdjustedAccepted',
    value: i18n.t("options.rate_adjusted_accepted", {
      ns: "Common"
    })
  }, {
    key: 'NoChange',
    value: i18n.t("options.no_change", {
      ns: "Common"
    })
  }, {
    key: 'Timeout',
    value: i18n.t("options.timeout", {
      ns: "Common"
    })
  }],
  CreditScoreOptions: [{
    key: 'NonTieredTier1',
    value: i18n.t("options.excellent", {
      ns: "Common"
    })
  }, {
    key: 'NonTieredTier2',
    value: i18n.t("options.very_good", {
      ns: "Common"
    })
  }, {
    key: 'NonTieredTier3',
    value: i18n.t("options.good", {
      ns: "Common"
    })
  }, {
    key: 'NonTieredTier4',
    value: i18n.t("options.fair", {
      ns: "Common"
    })
  }, {
    key: 'NonTieredTier5',
    value: i18n.t("options.below_average", {
      ns: "Common"
    })
  }],
  SentDealsFilterOptions: [{
    key: 'all',
    value: i18n.t("options.all", {
      ns: "Common"
    })
  }, {
    key: 'applicationSubmitted',
    value: i18n.t("options.applied", {
      ns: "Common"
    })
  }, {
    key: 'viewed',
    value: i18n.t("options.opened", {
      ns: "Common"
    })
  }, {
    key: 'sent',
    value: i18n.t("options.sent", {
      ns: "Common"
    })
  }],
  SentDealsSoryByOptions: [{
    key: 'sentAt',
    value: i18n.t("options.sent_date", {
      ns: "Common"
    })
  }, {
    key: 'updatedAt',
    value: i18n.t("options.last_updated", {
      ns: "Common"
    })
  }]
};
export default function optionsReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.FETCH_OPTIONS_SUCCESS:
      var newOptions = {};

      _.forEach(action.response, function (options, fieldName) {
        newOptions[fieldName] = [];

        _.forEach(options, function (value, key) {
          newOptions[fieldName].push({
            key: key,
            value: i18n.t("options.", {
              ns: "Common"
            })
          });
        }, this);
      }, this);

      newOptions.LenderStatus2 = _.cloneDeep(newOptions.LenderStatus);
      _.find(newOptions.LenderStatus2, {
        key: 'ConditionalAccept'
      }).value = 'Conditional';
      _.find(newOptions.LenderStatus2, {
        key: 'NoDecisionYet'
      }).value = 'No Decision';
      _.find(newOptions.LenderStatus2, {
        key: 'WaitingForFurtherInformation'
      }).value = 'Waiting';
      newOptions.CompanySector = _.orderBy(newOptions.CompanySector, 'key');
      return Object.assign({}, state, newOptions);

    default:
      return state;
  }
}