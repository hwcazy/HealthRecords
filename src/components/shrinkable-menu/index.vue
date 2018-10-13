<style lang="scss" scoped>
  .ivu-shrinkable-menu {
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div :style="{background: bgColor}" class="ivu-shrinkable-menu">
    <slot name="top"></slot>
    <sidebar-menu
      v-show="!shrink"
      :menu-theme="theme"
      :menu-list="menuList"
      :open-names="openNames"
      @on-change="handleChange"
    ></sidebar-menu>
    <sidebar-menu-shrink
      v-show="shrink"
      :menu-theme="theme"
      :menu-list="menuList"
      :icon-color="shrinkIconColor"
      @on-change="handleChange"
    ></sidebar-menu-shrink>
  </div>
</template>

<script>
  import sidebarMenu from './subPage/sidebar-menu.vue'
  import sidebarMenuShrink from './subPage/sidebar-menu-shrink.vue'

  export default {
    props: {
      shrink: {
        type: Boolean,
        default: false
      },
      menuList: {
        type: Array,
        required: true
      },
      theme: {
        type: String,
        default: 'dark',
      },
      beforePush: {
        type: Function
      },
      openNames: {
        type: Array
      }
    },
    methods: {
      handleChange (name) {
        let willpush = true;
        if (this.beforePush !== undefined) {
          if (!this.beforePush(name)) {
            willpush = false;
          }
        }
        if (willpush) {
          this.$router.push({
            name: name
          });
        }
        this.$emit('on-change', name);
      }
    },
    computed: {
      bgColor() {
        return this.theme === 'dark' ? 'rgb(42, 52, 62)' : '#fff';
      },
      shrinkIconColor () {
        return this.theme === 'dark' ? '#fff' : '#495060';
      }
    },
    components: {
      sidebarMenu,
      sidebarMenuShrink
    }
  }
</script>
