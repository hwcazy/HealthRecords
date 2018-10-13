
let routerUtil = {

}



routerUtil.toDefaultPage = function (routers, name, route, next) {
  routerUtil.routers = routers
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

export default routerUtil

export function getFirstPath(name) {
  let len = routerUtil.routers.length,
    i = 0,
    result = []

  while (i < len) {

    for (let item of routerUtil.routers[i].children) {
      if (item.name === name) {
        result = [routerUtil.routers[i].name]
      }
    }

    if (result.length) {
      break
    }
    i++
  }
  return result

}




