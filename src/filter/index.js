import Vue from 'vue'
import Unix from "../utils/Unix";
Vue.filter('date', function (value, defaultValue='-') {
  return value ? Unix.unixToDate(value) : defaultValue
})

Vue.filter('datetime', function (value, defaultValue='-') {
  return value ? Unix.unixToTime(value) : defaultValue
})
