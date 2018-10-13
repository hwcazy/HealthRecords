
export function shadowCloneToOldJson(source, target) {
  for (let key in source) {
    source[key] = target[key]
  }
}

export function shadowCloneToNewJson(source) {
  let newJson = {}
  for (let key in source) {
    newJson[key] = source[key]
  }
  return newJson
}
