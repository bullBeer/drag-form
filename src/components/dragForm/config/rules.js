/*
说明：
1.该配置为表单字段数据验证规则
*/
export default {
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  userName: [
    { required: true, message: '请选择', trigger: 'blur' }
  ],
}