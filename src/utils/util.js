let util = {}

/*
*   获取当前name所在的路由对象
*   routers 首页路由
*   name 当前路由name
* */
util.getRouterObjByName = function (routers, name) {
  if (!name || !routers || !routers.length) {
    return null
  }
  // debugger;
  let routerObj = null
  for (let item of routers) {
    if (item.name === name) {
      return item
    }
    routerObj = util.getRouterObjByName(item.children, name)
    if (routerObj) {
      return routerObj
    }
  }
  return null
}

/*
*   通过子路由的名字获取父路由
* */
util.getRouterByChild = function (routers, name) {
   for (let item of routers) {
     for (let child of item.children) {
       if (child.name === name) {
         return [item, child]
       }
     }
   }
}

/*
*   去第一个子路由
* */
util.toDefaultPage = function (routers, name, route, next) {
  let len = routers.length
  let i = 0
  let notHandle = true
  while (i < len) {
    if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
      route.replace({
        name: routers[i].children[0].name
      })
      notHandle = false
      next()
      break
    }
    i++
  }
  if (notHandle) {
    next()
  }
}

util.isShowRoute = function (hide) {
  if (hide) {
    return false
  } else {
    return true
  }
}

/*
*   查看itAccess是否包含currentAccess
*   itAccess: 权限集合
*   currentAccess: 当前权限
* */
util.showThisRoute = function (itAccess, currentAccess) {
  if (typeof itAccess === 'object' && Array.isArray(itAccess)) {
    return util.oneOf(currentAccess, itAccess);
  } else {
    return itAccess === currentAccess
  }
}

util.oneOf = function (ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true;
  } else {
    return false;
  }
}

export default util
