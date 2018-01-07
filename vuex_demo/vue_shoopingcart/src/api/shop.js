/**
 * Mocking client-server processing
 */
// inventory表示的是购物车里面买进了两个
const _products111 = [
  {
    'id': 1,
    'title': 'iPad4Mini',
    'price': 500,
    'inventory': 2
  },
  {
    'id': 2,
    'title': 't-shift',
    'price': 10,
    'inventory': 10
  },
  {
    'id': 3,
    'title': 'my-CD',
    'price': 19,
    'inventory': 5
  }
]

export default {
  getProducts (cb) {   // _products111这个变量其实相当于传递一个实参
    setTimeout(() => cb(_products111), 1000)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Date.now() % 2 === 0)
        ? cb()
        : errorCb()
    }, 1000)
  }
}
