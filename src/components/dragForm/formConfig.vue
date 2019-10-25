<template>
  <el-dialog class="mixin-form" :append-to-body="true" title="表单配置" :visible.sync="show" width="600px" @closed="close">
    <el-form :model="form" ref="form" label-width="100px" label-position="right">
      <el-form-item label="表单名称">
        <el-input v-model="form.title" placeholder="请输入表单名称"></el-input>
      </el-form-item>
      <el-form-item label="表单字段">
        <el-input v-model="form.field" placeholder="请输入表单字段"></el-input>
      </el-form-item>
      <el-form-item label="开启验证">
        <el-switch
          v-model="isRule"
          active-color="#13ce66"
          inactive-color="#dedede"
          :active-value="1"
          :inactive-value="0"
          @change="changeSwitch"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="验证规则" v-if="isRule">
        <el-select v-model="form.regType" placeholder="请选择验证规则">
          <el-option :label="item.label" :value="item.value" v-for="item in reqularOptions" :key="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选项名称与值" v-if="config.type === 'select' || config.type === 'checkbox' || config.type === 'radio'">
        <div v-for="(item, i) in form.options" :key="i" class="mb10">
          <el-input v-model="item.label" style="width: 45%;" placeholder="请输入选项名称"></el-input>
          <el-input v-model="item.value" style="width: 45%; margin-left: 2%;" placeholder="请输入选项值"></el-input>
          <el-button type="text" size="small" icon="el-icon-delete" @click="removeOption(i)" class="del-btn" :disabled="form.options.length == 1"></el-button>
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
import regularList from './config/regularList'
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
      isRule: 0,
      reqularOptions: [],
      form: {
        title: '',
        field: '',
        regType: '',
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
        this.resetConfig();
        Object.assign(this.form, this.config);
        this.isRule = this.form.regType ? 1 : 0;
      }
    }
  },
  created () {
    regularList.forEach(item => {
      this.reqularOptions.push({
        label: Object.values(item)[1],
        value: Object.keys(item)[0]
      })
    })
  },
  mounted() {

  },
  methods: {
    // 确认
    confirm() {
      this.show = false;
      this.$emit('confirm', this.form);
    },
    // 关闭
    close() {
      this.$emit('close');
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
    },
    // 开启验证规则
    changeSwitch(value) {
      if (!value) this.form.regType = '';
    },
    // 重置配置
    resetConfig() {
      for (let key in this.form) {
        this.form[key] = '';
      }
      this.isRule = 0;
      if(this.config.type === 'select' || this.config.type === 'checkbox' || this.config.type === 'radio') {
        this.$set(this.form, 'options', [{
          value: '',
          label: ''
        }])
        return;
      }
      this.$delete(this.form, 'options');
    },
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
