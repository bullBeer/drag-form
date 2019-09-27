<template>
  <div>
    <el-form-item :label="config.title || '输入框'" v-if="config.type === 'input'" draggable="true" :data-form-type="config.type">
      <el-input v-model="form[config.field]"></el-input>
    </el-form-item>
    <el-form-item :label="config.title || '下拉框'"  v-if="config.type === 'select'" draggable="true" :data-form-type="config.type">
      <el-select v-model="form[config.field]" placeholder="请选择">
        <el-option label="选项1" value="1"></el-option>
        <el-option label="选项2" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label="config.title || '时间选择'"  v-if="config.type === 'date'" draggable="true" :data-form-type="config.type">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form[config.field]" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form[config.field]" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item :label="config.title || '开关'"  v-if="config.type === 'switch'" draggable="true" :data-form-type="config.type">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item :label="config.title || '复选框'"  v-if="config.type === 'checkbox'" draggable="true" :data-form-type="config.type">
      <el-checkbox-group v-model="form[config.field]">
        <el-checkbox label="选项1" name="type"></el-checkbox>
        <el-checkbox label="选项2" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="config.title || '单选框'"  v-if="config.type === 'radio'" draggable="true" :data-form-type="config.type">
      <el-radio-group v-model="form[config.field]">
        <el-radio label="选项1"></el-radio>
        <el-radio label="选项2"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="config.title || '文本框'"  v-if="config.type === 'textarea'" draggable="true" :data-form-type="config.type">
      <el-input type="textarea" v-model="form[config.field]"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'formItem',
  props: {
    config: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      form: {
        [this.config.field]: '',
        [this.config.label]: '',
        [this.config.value]: '',
      }
    }
  },
  watch: {
    config(val) {
      // 清空表单值
      for(let key in this.form) {
        this.form[key] = ''
      }
    }
  },
  created() {
    
  },
  mouted() {
    
  },
  
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
</style>
