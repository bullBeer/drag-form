/*
验证正则
*/
export default [
  // 手机号
  {
    'phone': /^[1][3,4,5,7,8][0-9]{9}$/, // 因验证器提取枚举，验证类型必须为第一行位置
    'label': '手机号'
  },
  // 邮箱
  {
    'email': /^[a-zA-Z\d]+([-_\.][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z\d]{2,4}$/,
    'label': '邮箱'
  },
  // 身份证
  {
    'IDCard': /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    'label': '身份证号'
  },
  // 数字
  {
    'number': /^[0-9]*$/,
    'label': '数字'
  },
  // 浮点保留两位小数
  {
    'floatFixed2': /^[-|+]?\d+(\.\d{0,2})?$/,
    'label': '数字(保留两位小数)'
  },
  // 整型
  {
    'integer': /^[+|-]?(0|[1-9])*[0-9]*$/,
    'label': '整型数字'
  },
  // 正整数
  {
    'apn': /^[1-9]|[1-9][0-9]*$/,
    'label': '正整数'
  },
  // 负整数
  {
    'nn': /^-([1-9]|[1-9][0-9])*$/,
    'label': '负整数'
  },
  // url
  {
    'url': /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/,
    'label': 'URL网址'
  },
  // ip
  {
    'ip': /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g,
    'label': 'IP地址'
  },
  // 英文字母
  {
    'letter': /^[a-zA-Z]*$/,
    'label': '字母'
  },
  // 字母与数字
  {
    'numberLetter': /^[a-zA-Z0-9]*$/,
    'label': '字母与数字'
  },
  // 中文
  {
    'CHS': /^[\u4e00-\u9fa5]*$/,
    'label': '中文'
  },
  // 字母、数字、下划线
  {
    'l_n': /^[a-zA-Z0-9_]*$/,
    'label': '字母、数字、下划线'
  },
]