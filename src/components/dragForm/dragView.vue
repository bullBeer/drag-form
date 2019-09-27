<template>
  <div>
    <el-form ref="form" label-width="80px" label-position="top" class="form-view-container">
      <div class="form-box" v-for="(item, index) in boxList" :key="index" :data-index="index" :style="styles">
        <el-button type="text" size="small" v-if="item.type" @click="getCurrentConfig(item)">配置</el-button>
        <form-item :config="item"></form-item>
      </div>
    </el-form>
    <form-config 
      :config="currentConfig"
      :showDialog="showFieldConfig" 
      @close="showFieldConfig = false"
      @confirm="confirmConfig"
    >
    </form-config>
  </div>
</template>

<script>
import formItem from './formItem'
import formConfig from '@/components/dragForm/formConfig'
export default {
  name: 'formView',
  props: {
    boxList: { // 容器列表
      default() {
        return []
      }
    },
    styles: {
      default() {
        return {}
      }
    } 
  },
  data() {
    return {
      showFieldConfig: false,
      currentConfig: {}
    }
  },
  methods: {
    confirmConfig(config) {
      this.$emit('update', JSON.parse(JSON.stringify(config)));
    },
    getCurrentConfig(config) {
      this.currentConfig = config;
      this.showFieldConfig = true;
    }
  },
  components: {
    formItem,
    formConfig
  }
}
</script>

<style lang="less">
  .form-view-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .form-box{
      width: 48%;
      box-sizing: border-box;
      height: 100px;
      border: 1px solid #dfdfdf;
      margin: 1% 1% 0;
      position: relative;
      &.active{
        background-color: #f2f2f2;
      }
      div:first-child{
        height: 100%;
      }
      .el-form-item{
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
      }
      .el-button{
        position: absolute;
        right: 10px;
        top: 0;
      }
    }
  }
</style>
