import {appRouter} from '@/router/router'
import Cookies from 'js-cookie'
import Util from '@/utils/util'

const app = {
  state: {
    openedSubmenuArr: [], // 要展开的菜单数组
    currentPageName: '',
    routers: [
      ...appRouter
    ],
    menuList: [],        // 左侧导航
    menuTheme: 'light'          // 主题
  },
  mutations: {

    /*
    *   增加展开的导航
    * */
    addOpenSubmenu (state, name) {
      let hasThisName = false;
      let isEmpty = false;
      if (name.length === 0) {
        isEmpty = true;
      }
      if (state.openedSubmenuArr.indexOf(name) > -1) {
        hasThisName = true;
      }
      if (!hasThisName && !isEmpty) {
        state.openedSubmenuArr.push(name)
      }
    },

    /*
    *   通过权限过滤出对应的导航
    * */
    updateMenulist(state) {
      let accessCode = parseInt(Cookies.get('access'))
      let menuList = []
      appRouter.forEach((item, index) => {
        if (item.access !== undefined) {
          if (Util.showThisRoute(item.access, accessCode)) {
            if (item.children.length === 1) {
              menuList.push(item);
            } else {
              let len = menuList.push(item);
              let childrenArr = [];
              childrenArr = item.children.filter(child => {
                if (child.access !== undefined && !child.hide) {
                  if (child.access === accessCode) {
                    return child;
                  }
                } else if (!child.hide) {
                  return child;
                }
              });
              menuList[len - 1].children = childrenArr;
            }
          }
        } else {
          if (item.children.length === 1) {
            menuList.push(item)
          } else {
            let len = menuList.push(item)
            let childrenArr = []
            childrenArr = item.children.filter(child => {
              if (child.access !== undefined && !child.hide) {
                if (Util.showThisRoute(child.access, accessCode)) {
                  return child;
                }
              } else if (!child.hide) {
                return child
              }
            })
            if (childrenArr === undefined || childrenArr.length === 0) {
              menuList.splice(len - 1, 1);
            } else {
              let handledItem = JSON.parse(JSON.stringify(menuList[len - 1]));
              handledItem.children = childrenArr;
              menuList.splice(len - 1, 1, handledItem);
            }
          }
        }
      })
      state.menuList = menuList
    },


    setCurrentPageName (state, name) {
      state.currentPageName = name;
    },
  }
}

export default app
