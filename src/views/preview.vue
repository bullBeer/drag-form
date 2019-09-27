<template>
  <div class="preview-form-container">
    <div class="ct-header">
      <el-button type="danger" size="small"  @click="$router.push({name: 'dragForm'})">修改模板</el-button>
    </div>
    <el-form ref="form" label-width="80px" label-position="top" class="preview-container">
      <div class="form-box" v-for="index in config.col * config.row" :key="index" :data-index="index" :style="boxStyle">
        <form-item v-if="config.list[index - 1].type" :config="config.list[index - 1]">
        </form-item>
      </div>
    </el-form>

  </div>
</template>

<script>
import formItem from '@/components/dragForm/formItem'
export default {
  name: 'preview',
  data() {
    return {
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
    }
  },
  components: {
    formItem,
  }
}
</script>


<style lang="less">
@import '../assets/less/dragForm.less';
</style>
