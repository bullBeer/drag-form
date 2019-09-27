<template>
  <el-form-item :label="config.title || '下拉框'" :draggable="draggable" :data-form-type="config.type" :prop="rule ? config.field : ''">
    <el-select v-model="form[config.field]" placeholder="请选择">
      <el-option label="选项1" value="1"></el-option>
      <el-option label="选项2" value="2"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'formItem',
  props: {
    draggable: {
      default() {
        return true;
      }
    },
    config: {
      default() {
        return {}
      }
    },
    form: {
      default() {
        return {}
      }
    },
    rule: {
      default() {
        return false;
      }
    },
  }
}
</script>