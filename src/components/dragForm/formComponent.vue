<template>
  <component :is="component" :config="config" :draggable="draggable" :form="form" :rule="rule"/>
</template>

<script>
export default {
  name: 'formComponent',
  props: {
    rule: {
      default() {
        return false;
      }
    },
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
        return {
          [this.config.field]: '',
          [this.config.label]: '',
          [this.config.value]: ''
        }
      }
    }
  },
  data() {
    return {
      component: null,
      
    }
  },
  watch: {
    'config.type'(val) {
      // 清空表单值
      for(let key in this.form) {
        this.form[key] = ''
      }
      this.load(val);
    }
  },
  created() {
    this.load(this.config.type);
  },
  methods: {
    load(name) {
      if (!name) {
        this.component = null;
        return;
      }
      this.component = () => import(`./templates/el-${name}`)
    }
  }
}
</script>
