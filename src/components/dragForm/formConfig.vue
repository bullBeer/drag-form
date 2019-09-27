<template>
  <el-dialog class="mixin-form" :append-to-body="true" title="表单配置" :visible.sync="show" width="600px" @closed="close">
    <el-form :model="form" ref="form" label-width="80px" label-position="top">
      <div v-if="config.type === 'input' || config.type === 'textarea' || config.type === 'switch' || config.type === 'date'">
        <el-form-item label="表单名称" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="表单字段" prop="field">
          <el-input v-model="form.field"></el-input>
        </el-form-item>
      </div>
      <div v-if="config.type === 'select'|| config.type === 'checkbox' || config.type === 'radio'">
        <el-form-item label="表单名称" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="表单字段" prop="field">
          <el-input v-model="form.field"></el-input>
        </el-form-item>
        <el-form-item label="选项名称" prop="label">
          <el-input v-model="form.label"></el-input>
        </el-form-item>
        <el-form-item label="选项字段" prop="value">
          <el-input v-model="form.value"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="show = false">取 消</el-button>
      <el-button type="primary" size="small" @click="confirm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'formConfig',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    config: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      show: this.showDialog,
      form: {
        title: '',
        field: '',
        value: '',
        label: ''
      }
    }
  },
  watch: {
    'showDialog'(value) {
      this.show = value;
      if (value) {
        Object.assign(this.form, this.config);
      }
    }
  },
  created () {
    
  },
  mounted() {

  },
  methods: {
    // 确认
    confirm() {
      this.show = false;
      this.$emit('confirm', this.form);
      this.$refs['form'].resetFields();
    },
    // 关闭
    close() {
      this.$emit('close');
      this.$refs['form'].resetFields();
    }
  },
  components: {
    
  }
}

</script>

<style lang="less" scoped>
  .mb10{
    margin-bottom: 10px !important;
  }
</style>
