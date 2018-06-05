export const data = [
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'},
  {name: 'lizhong', age: 18, hobby: 'music'}
]
export const imgList = [
  {
    linkUrl: 'https://y.qq.com/m/act/singwithme3/index.html?ADTAG=jiaodiantu&_video=true',
    picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000003uFabC4BZpYO.jpg'
  },
  {
    linkUrl: 'https://y.qq.com/m/act/HiddenSinger2/v3/index.html?ADTAG=jiaodiantu&_video=true',
    picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000QM7IT44zskP.jpg'
  },
  {
    linkUrl: 'https://y.qq.com/m/act/KingCross/index.html?ADTAG=jiaodiantu',
    picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002yFrNU0RoVCG.jpg'
  },
  {
    linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2271035&g_f=shoujijiaodian',
    picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000003w4dA62pSQTQ.jpg'
  }
]
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  /* 在现有的类名下插入新的类名 */
  newClass.push(className)
  el.className = newClass.join(' ')
}
