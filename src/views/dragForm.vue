<template>
  <div class="drag-form-container">
    <div class="el-icon-delete del-bar" :class="{show: showDel}"></div>
    <div class="ct-header">
      <el-button type="primary" size="small" @click="showSettings = true">主屏设置</el-button>
      <el-button type="danger" size="small"  @click="saveConfig">保存配置</el-button>
      <el-button type="warning" size="small" @click="preview">预览</el-button>
    </div>
    <div class="left-col">
      <el-form label-width="80px" label-position="top" class="form-option-list">
        <form-item v-for="(item, index) in formOptions" :key="index" :config="item" class="form-option-item"></form-item>
      </el-form>
    </div>
    <div class="right-col">
      <drag-view 
        :boxList="boxList" 
        :styles="boxStyle"
        @update="updateConfig"
      >

      </drag-view>
    </div>
    <setting 
      :showDialog="showSettings" 
      @close="showSettings = false"
      @confirm="confirmSetting"
    >
    </setting>
  </div>
</template>

<script>
import formItem from '@/components/dragForm/formItem'
import dragView from '@/components/dragForm/dragView'
import setting from '@/components/dragForm/setting'
export default {
  name: 'formDrag',
  data() {
    return {
      showDel: false,
      showSettings: false,
      config: null, // 保存配置
      screen: {
        col: 2,
        row: 4
      },
      // 表单选择列表
      formOptions: [
        {
          type: 'input',
        },
        {
          type: 'select',
        },
        {
          type: 'date',
        },
        {
          type: 'switch',
        },
        {
          type: 'checkbox',
        },
        {
          type: 'radio',
        },
        {
          type: 'textarea',
        }
      ],
      // 表单渲染容器列表
      boxList: [],
      boxStyle: {},
      fromDragIndex: '' // 当前容器里拖拽的index，用于与目标容器对换表单
    }
  },
  computed: {

  },
  created() {
    this.init(this.screen)
  },
  mounted() {
    const self = this;

    // 预览重新编辑 --> 模板编辑初始化
    const previewConfig = JSON.parse(localStorage.getItem('previewConfig')) || false;
    if (previewConfig) {
      this.init(previewConfig);
      this.boxList = previewConfig.list;
    }

    // 拖拽事件交互
    document.addEventListener("dragstart", function(event) {
      event.target.style.opacity = .5;
      self.dragFormType = event.target.dataset.formType;
      const target = self.findClass(event.target, 'form-box')
      if (target) {
        self.fromDragIndex = Number(target.dataset.index);
        if (!self.showDel) {
          self.showDel = true;
        }
      }
    }, false);
    document.addEventListener("dragend", function(event) {
      event.target.style.opacity = "";
    }, false);
    document.addEventListener("dragover", function(event) {
      event.preventDefault();
    }, false);
    document.addEventListener("dragenter", function(event) {
      const target = self.findClass(event.target, 'form-box');
      if (target) {
        target.classList.add('active');
      }
      const delBar = self.findClass(event.target, 'del-bar');
      if (delBar) {
        delBar.classList.add('active');
      }

    }, false);
    document.addEventListener("dragleave", function(event) {
      const target = self.findClass(event.target, 'form-box');
      if (target) {
        if (self.mouseOutEl(event.clientX, event.clientY, target)) {
          target.classList.remove('active');
        }
      }
      const delBar = self.findClass(event.target, 'del-bar');
      if (delBar) {
        if (self.mouseOutEl(event.clientX, event.clientY, delBar)) {
          delBar.classList.remove('active');
        }
      }
    }, false);
    document.addEventListener("drop", function(event) {
      event.preventDefault();
      self.showDel = false;
      const target = self.findClass(event.target, 'form-box');
      if (target) {
        target.classList.remove('active');
        // 互换位置
        if (self.fromDragIndex !== '') {
          const item1 = self.boxList[self.fromDragIndex];
          const item2 = self.boxList[target.dataset.index];
          // 复制下标
          const index1 = item1.index;
          const index2 = item2.index;
          item1.index = index2;
          item2.index = index1;
          self.$set(self.boxList, target.dataset.index, item1);
          self.$set(self.boxList, self.fromDragIndex, item2);
          self.fromDragIndex = '';
        } else {
          self.$set(self.boxList[target.dataset.index], 'type', self.dragFormType);
        }
      }
      // 清空当前容器表单
      const delBar = self.findClass(event.target, 'del-bar');
      if (delBar) {
        self.$set(self.boxList, self.fromDragIndex, {
          row: self.boxList[self.fromDragIndex].row,
          col: self.boxList[self.fromDragIndex].col,
          index: self.fromDragIndex
        });
        self.fromDragIndex = '';
      }
      self.saveConfig();
    }, false);
  },
  methods: {
    // 初始化
    init(config) {
      this.config = {
        ...config
      }
      let len = config.row * config.col;
      this.boxList = [];
      for (let i = 0; i < len; i++) {
        // 计算容器位置
        const row =  Math.ceil((i + 1) / config.col), col = i % config.col + 1;
        this.boxList.push({
          index: i, // 容器下标
          row,
          col
        })
      }
      const marginX = 1;
      Object.assign(this.boxStyle, {
        margin: '10px 1%',
        width: (100 - 1 * config.col * 2) / config.col + '%'
      });
    },
    confirmSetting(config) {
      this.init(config)
    },
    saveConfig() {
      this.$set(this.config, 'list', this.boxList);
      localStorage.setItem('previewConfig', JSON.stringify(this.config));
    },
    // 预览
    preview() {
      this.saveConfig();
      this.$router.push({name: 'preview'})
    },
    // 更新渲染容器内表单配置
    updateConfig(config) {
      this.$set(this.boxList, config.index, config);
    },
    // 查找元素以及它父级是否含有className
    findClass(el, className) {
      if (el.classList) {
        if (el.classList.contains(className)) {
          return el;
        }
        return this.findClass(el.parentNode, className);
      }
      return false;
    },
    // 鼠标移出拖拽容器元素
    mouseOutEl(clientX, clientY, el) {
      if(clientX < el.getBoundingClientRect().left || 
        clientX > el.getBoundingClientRect().right - 1 ||
        clientY < el.getBoundingClientRect().top ||
        clientY > el.getBoundingClientRect().bottom - 1
      ) {
        return true;
      }
      return false;
    }
  },
  components: {
    formItem,
    dragView,
    setting
  }
}
</script>


<style lang="less">
@import '../assets/less/dragForm.less';
</style>
