<template>
  <el-dialog class="mixin-form" :append-to-body="true" title="表单配置" :visible.sync="show" width="600px" @closed="close">
    <el-form :model="form" ref="form" label-width="100px" label-position="right">
      <el-form-item label="表单名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入表单名称"></el-input>
      </el-form-item>
      <el-form-item label="表单字段" prop="field">
        <el-input v-model="form.field" placeholder="请输入表单字段"></el-input>
      </el-form-item>
      <el-form-item label="选项名称与值" v-if="config.type === 'select' || config.type === 'checkbox'">
        <div v-for="(item, i) in form.options" :key="i" class="mb10">
          <el-input v-model="item.label" style="width: 45%;" placeholder="请输入选项名称"></el-input>
          <el-input v-model="item.value" style="width: 45%; margin-left: 2%;" placeholder="请输入选项值"></el-input>
          <el-button type="text" size="small" icon="el-icon-delete" @click="removeOption(i)" class="del-btn" :disabled="i == 0"></el-button>
        </div>
        <div>
          <el-button type="text" size="small" @click="addOption">新增选项</el-button>
        </div>
      </el-form-item>
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
        options: [
          {
            value: '',
            label: ''
          }
        ]
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
      this.$set(this.form, 'options', [{
        value: '',
        label: ''
      }])
    },
    // 关闭
    close() {
      this.$emit('close');
      this.$refs['form'].resetFields();
      this.$set(this.form, 'options', [{
        value: '',
        label: ''
      }])
    },
    // 添加选项
    addOption() {
      this.form.options.push({
        value: '',
        label: '',
      });
    },
    // 移除选项
    removeOption(index) {
      this.form.options.splice(index, 1);
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
  /deep/.el-form-item{
    margin-bottom: 10px !important;
    .del-btn{
      margin-left: 10px;
    }
  }
</style>
