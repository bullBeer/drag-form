/*
说明：
1.该配置为所有表单模板初始配置
2.templates目录下的模板文件命名规则：el-${typeName}.vue
*/
const options = [
  {
    value: '1',
    label: '选项1'
  },
  {
    value: '2',
    label: '选项2'
  }
];
export default [
  {
    type: 'input',
  },
  {
    type: 'select',
    options
  },
  {
    type: 'date',
  },
  {
    type: 'datetime',
  },
  {
    type: 'switch',
  },
  {
    type: 'checkbox',
    options
  },
  {
    type: 'radio',
    options
  },
  {
    type: 'textarea',
  }
]