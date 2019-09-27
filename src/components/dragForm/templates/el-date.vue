<template>
  <el-form-item :label="config.title || '时间选择'" :draggable="draggable" :data-form-type="config.type" :prop="rule ? config.field : ''">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form[config.field]" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form[config.field]" style="width: 100%;"></el-time-picker>
    </el-col>
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