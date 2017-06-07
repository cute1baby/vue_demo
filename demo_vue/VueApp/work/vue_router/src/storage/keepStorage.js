//本地存储
//把存储另外用一个模块封起来，引进去。
const STORAGE_KEY = 'TODOS';
export default {
  fetch: function(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||"[]");
  },
  save: function(todos){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
  }
}
