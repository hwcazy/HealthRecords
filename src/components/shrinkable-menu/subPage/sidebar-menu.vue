<style lang="scss" scoped>
  .layout-text{
    display: inline-block;
    white-space:nowrap;
    position: absolute;
  }
  .ivu-menu-dark {
    background: none;
  }
</style>

<template>
  <Menu ref="sideMenu" accordion :active-name="$route.name" :open-names="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
    <template v-for="item in menuList">
      <MenuItem v-if="item.children.length <= 1" :name="item.children[0].name" :key="'menuitem' + item.name">
        <Icon :type="item.children[0].icon || item.icon" :size="iconSize" :key="'menuicon' + item.name"></Icon>
        <span class="layout-text" :key="'title' + item.name">{{ item.children[0].title }}</span>
      </MenuItem>
      <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.name">
        <template slot="title">
          <Icon :type="item.icon" :size="iconSize"></Icon>
          <span class="layout-text">{{ item.title }}</span>
        </template>
        <template v-for="child in item.children">
          <MenuItem :name="child.name" :key="'menuitem' + child.name">
            <Icon :type="child.icon" :size="iconSize" :key="'icon' + child.name"></Icon>
            <span class="layout-text" :key="'title' + child.name">{{ child.title }}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
    export default {
      props: {
        menuList: Array,
        menuTheme: {
          type: String,
          default: 'dark'
        },
        openNames: {
          type: Array
        }
      },
      data () {
        return {
          iconSize: 20
        }
      },
      updated () {
        this.$nextTick(() => {
          if (this.$refs.sideMenu) {
            this.$refs.sideMenu.updateOpened();
          }
        })
      },
      methods: {
        changeMenu (active) {
          this.$emit('on-change', active)
        }
      }
    }
</script>
