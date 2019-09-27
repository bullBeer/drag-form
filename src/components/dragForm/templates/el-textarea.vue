<template>
  <el-form-item :label="config.title || '文本框'" :draggable="draggable" :data-form-type="config.type" :prop="rule ? config.field : ''">
    <el-input type="textarea" v-model="form[config.field]"></el-input>
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
