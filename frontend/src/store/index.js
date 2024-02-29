import { createStore } from 'vuex'
// import axios from 'axios'


export default createStore({
  state: {
    user: null,
    DiscountList: [
      { id: 1, date: '02.02.23', comment: 'Скидки на все цветы в коробке 15%', discount: 15, img: '1.png' },
      { id: 2, date: '02.02.23', comment: 'Скидки на все цветы в коробке 15%', discount: 15, img: '2.png' },
      { id: 3, date: '02.02.23', comment: 'Скидки на все цветы в коробке 15%', discount: 15, img: '3.png' },
    ],
    QuestionList: [
      {
        id: 1, question: 'Какую страну считают родиной розы?', answer: 'Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.'
      },
      { id: 2, question: 'Какой цветок называют божественным цветком, «цветком Зевса»?', answer: 'Lorem Lorem' },
      { id: 3, question: 'Какое символическое значение розы?', answer: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ' },
      { id: 4, question: 'Актуальны ли цены и наличие на вашем сайте?', answer: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ' },
      { id: 5, question: 'Вы отправляете товары наложенным платежом?', answer: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ' },
      { id: 6, question: 'Где гарантия того, что вы не мошенники, и если я внесу предоплату, то затем получу оплаченный товар?', answer: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem' },
      { id: 7, question: 'Я оплатил заказ переводом денег на банковскую карту, что дальше?', answer: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem' },
      { id: 8, question: 'Вы работаете с оптовыми покупателями? Какие условия/скидки?', answer: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem' },
    ],
    ProductList: [
      { id: 1, name: 'Букет из разноцветных роз', url: '1.png', price: 1000, pricesvg: 1500, pricebig: 2000, idprice: 0, new: false, rose: 10, tulip: 40, hydrangea: 10, gerber: 10, sunflower: 10, orchid: 10, iris: 10, lily: 10, package: 0, color: 0, popularity: 100, promotion: false },
      { id: 2, name: 'Лилия', url: '2.png', price: 500, pricesvg: 1000, pricebig: 2000, idprice: 0, new: false, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 1, color: 0, popularity: 10, promotion: true },
      { id: 3, name: 'Букет из разноцветных роз', url: '3.png', price: 2000, pricesvg: 3000, pricebig: 4000, idprice: 0, new: true, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 2, color: 0, popularity: 200, promotion: false },
      { id: 4, name: 'Букет из разноцветных роз', url: '4.png', price: 3000, pricesvg: 4000, pricebig: 5000, idprice: 0, new: false, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 2, color: 1, popularity: 150, promotion: false },
      { id: 5, name: 'Букет из разноцветных роз', url: '5.png', price: 5000, pricesvg: 6000, pricebig: 7000, idprice: 0, new: false, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 1, popularity: 170, promotion: true },
      { id: 6, name: 'Букет из разноцветных роз', url: '6.png', price: 1000, pricesvg: 1500, pricebig: 2000, idprice: 0, new: false, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 2, color: 1, popularity: 10, promotion: false },
      { id: 7, name: 'Букет из разноцветных роз', url: '7.png', price: 9000, pricesvg: 11500, pricebig: 20000, idprice: 0, new: true, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 1, popularity: 10, promotion: false },
      { id: 8, name: 'Букет из разноцветных роз', url: '8.png', price: 10000, pricesvg: 12000, pricebig: 13000, idprice: 0, new: false, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 2, popularity: 1, promotion: false },
      { id: 9, name: 'Букет из разноцветных роз', url: '9.png', price: 1500, pricesvg: 2000, pricebig: 2500, idprice: 0, new: true, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 2, popularity: 500, promotion: false },
      { id: 10, name: 'Букет из разноцветных роз', url: '10.png', price: 2000, pricesvg: 3000, pricebig: 4000, idprice: 0, new: false, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 3, popularity: 700, promotion: true },
      { id: 11, name: 'Букет из разноцветных роз', url: '11.png', price: 500, pricesvg: 1000, pricebig: 2000, idprice: 0, new: false, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 4, popularity: 800, promotion: false },
      { id: 12, name: 'Букет из разноцветных роз', url: '12.png', price: 1000, pricesvg: 2000, pricebig: 2000, idprice: 0, new: true, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 5, popularity: 900, promotion: true },
      { id: 13, name: 'Букет из разноцветных роз', url: '13.png', price: 700, pricesvg: 1000, pricebig: 2000, idprice: 0, new: true, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 6, popularity: 1000, promotion: false },
      { id: 14, name: 'Букет из разноцветных роз', url: '14.png', price: 800, pricesvg: 1000, pricebig: 2000, idprice: 0, new: false, rose: 10, tulip: 0, hydrangea: 5, gerber: 7, sunflower: 0, orchid: 8, iris: 0, lily: 7, package: 0, color: 7, popularity: 1120, promotion: false },
    ],
    cart: []
  },
  getters: {
    user: (state) => {
      return state.user
    },
    getProductList(state) {
      return state.ProductList
    },
    CART(state) {
      return state.cart;
    },
    getQuestionList(state) {
      return state.QuestionList
    },
    getDiscountList(state) {
      return state.DiscountList
    },

    SUM(state) {
      let nsum = 0;
      state.cart.map(function (item) {
        if (item.idprice === 0) {
          nsum = nsum + (item.quantity * item.price);
        }
        else
          if (item.idprice === 1) {
            nsum = nsum + (item.quantity * item.pricesvg);
          }
          else {
            nsum = nsum + (item.quantity * item.pricebig);
          }
      })
      return nsum;
    }
  },
  mutations: {
    user(state, user) {
      state.user = user
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;


        state.cart.map(function (item, i) {
          if (item.id === product.id) {
            isProductExists = true;
          }
        })

        if (!isProductExists) {
          if (product.quantity > 0) { state.cart.push(product); }

        }

      } else {
        if (product.quantity > 0) { state.cart.push(product) }
      }

      // if (state.cart.length) {
      //   let isProductExists = false;

      //   state.cart.map(function (item) {
      //     if (item.id === product.id) {
      //       isProductExists = true;
      //       item.quantity++;
      //     }
      //   })

      //   if (!isProductExists) {
      //     product.quantity = 1;
      //     state.cart.push(product);
      //   }

      // } else {
      //   product.quantity = 1;
      //   state.cart.push(product);
      // }


    },

    INCREMENT_CART: (state, product) => {
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.id === product.id) {
            item.quantity++;
          }
        })

      }
    },

    DECREMENT_CART: (state, product) => {
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.id === product.id) {
            if ((item.quantity - 1) > 0)
              item.quantity--;
          }
        })

      }
    },


    REMOVE_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    REMOVE_CART_ALL: (state, product) => {
      if (state.cart.length) {
        state.cart.splice(0, state.cart.length);
      }
    },
    REMOVE_CART_V1: (state, product) => {
      if (state.cart.length) {

        let element = state.cart.find(item => item.id == product.id);
        if (element) {
          state.cart.forEach(function (item, i) {
            if (item.id == product.id) {
              product.quantity = 0;
              state.cart.splice(i, 1);
            }
          })
        }


      }
    }
  },
  actions: {
    user(context, user) {
      context.commit('user', user)
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    INCREMENT_TO_CART({ commit }, product) {
      commit('INCREMENT_CART', product)
    },
    DECREMENT_TO_CART({ commit }, product) {
      commit('DECREMENT_CART', product)
    },
    REMOVE_TO_CART({ commit }, index) {
      commit('REMOVE_CART', index)
    },
    REMOVE_TO_CART_V1({ commit }, product) {
      commit('REMOVE_CART_V1', product)
    },
    REMOVE_TO_CART_ALL({ commit }, product) {
      commit('REMOVE_CART_ALL', product)
    }
  },
  modules: {
  },

})
