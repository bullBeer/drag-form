<template>
  <el-form-item :label="config.title || '复选框'" :draggable="draggable" :data-form-type="config.type" :prop="rule ? config.field : ''">
    <el-checkbox-group v-model="form[config.field]">
      <el-checkbox label="选项1" name="type"></el-checkbox>
      <el-checkbox label="选项2" name="type2"></el-checkbox>
    </el-checkbox-group>
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


