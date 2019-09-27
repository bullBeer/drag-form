<template>
  <el-form-item :label="config.title || '开关'" :draggable="draggable" :data-form-type="config.type" :prop="rule ? config.field : ''">
    <el-switch v-model="form.delivery"></el-switch>
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
