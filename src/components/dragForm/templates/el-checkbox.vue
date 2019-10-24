<template>
  <el-form-item :label="config.title || '复选框'" :draggable="draggable" :data-form-type="config.type" :prop="isRule ? config.field : ''">
    <el-checkbox-group v-model="iForm[config.field]">
      <el-checkbox :label="item.value" :key="i" v-for="(item, i) in config.options">{{item.label}}</el-checkbox>
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
    isRule: {
      default() {
        return false;
      }
    },
  },
  data() {
    return {
      iForm: {
        [this.config.field]: []
      }
    }
  }
}
</script>


