<template>
  <div class="preview-form-container">
    <div class="ct-header">
      <el-button type="danger" size="small"  @click="$router.push({name: 'dragForm'})">修改模板</el-button>
    </div>
    <el-form :model="form" ref="form" :rules="rules" label-width="80px" label-position="top" class="preview-container">
      <div class="form-box" v-for="index in config.col * config.row" :key="index" :data-index="index" :style="boxStyle">
        <form-component v-if="config.list[index - 1].type" :config="config.list[index - 1]" :draggable="false" :form="form" :rule="true">
        </form-component>
      </div>
    </el-form>

  </div>
</template>

<script>
import formComponent from '@/components/dragForm/formComponent'
import rules from '@/components/dragForm/config/rules'
export default {
  name: 'preview',
  data() {
    return {
      form: {},
      rules: {},
      config: JSON.parse(localStorage.getItem('previewConfig')) || {},
      boxStyle: {}
    }
  },
  created() {
    this.init(this.config)
  },
  mounted() {
    const self = this;

  },
  methods: {
    // 初始化
    init(config) {
      let len = config.row * config.col;
      this.boxList = [];
      for (let i = 0; i < len; i++) {
        this.boxList.push({
          index: i
        })
      }
      const marginX = 1;
      Object.assign(this.boxStyle, {
        margin: '10px 1%',
        width: (100 - 1 * config.col * 2) / config.col + '%'
      });

      // 初始化表单数据与验证规则
      config.list.forEach(item => {
        if (item.field) {
          this.$set(this.form, item.field, '');
          this.$set(this.rules, item.field, rules[item.field]);
        }
      })
      console.log('this.form', this.form)
      console.log('this.rules', this.rules)
    }
  },
  components: {
    formComponent,
  }
}
</script>


<style lang="less">
@import './less/dragForm.less';
</style>
