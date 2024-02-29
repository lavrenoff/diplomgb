<template>

  <div class="center product">
    <div class="product__left">
      <div v-if="getProductIndex(id)[0].promotion" class="product__promoution">
        Акция
      </div>
      <div v-if="getProductIndex(id)[0].new" class="product__new">Новинка</div>

      <img
        :src="require(`@/assets/img/${getProductIndex(id)[0].url}`)"
        :alt="getProductIndex(id)[0].name"
      />
    </div>
    <div class="product__right">
      <p class="product__right_p1">{{ getProductIndex(id)[0].name }}</p>
      <p class="product__right_p2">Размер:</p>
      <div class="product__right_price">
        <label class="product__right_bl bl" @click="Calc('small')">
          <div>
            <label for="small">Малый</label><br />
            <label for="small">{{ getProductIndex(id)[0].price }} руб.</label>
          </div>
          <div>
            <input type="radio" name="price" id="small" value="small" v-model="priid"/>
          </div>
        </label>

        <label class="product__right_bl bl" @click="Calc('avg')">
          <div>
            <label for="avg">Средний</label><br />
            <label for="avg">{{ getProductIndex(id)[0].pricesvg }} руб.</label>
          </div>
          <div>
            <input type="radio" name="price" id="avg" value="avg" v-model="priid"/>
          </div>
        </label>

        <label class="product__right_bl bl" @click="Calc('big')">
          <div>
            <label for="big">Большой</label><br />
            <label for="big">{{ getProductIndex(id)[0].pricebig }} руб.</label>
          </div>
          <div>
            <input type="radio" name="price" id="big" value="big" v-model="priid"/>
          </div>
        </label>
      </div>
      <div class="product__right_compound">
        <p>Состав</p>
        <div class="txt" v-if="getProductIndex(id)[0].rose>0">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
          </svg>
          <span>Роза - {{ getProductIndex(id)[0].rose }} шт.</span>
        </div>
        <div class="txt" v-if="getProductIndex(id)[0].tulip>0">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
          </svg>
          <span>Тюльпан - {{ getProductIndex(id)[0].tulip }} шт.</span>
        </div>
        <div class="txt" v-if="getProductIndex(id)[0].hydrangea>0">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
          </svg>
          <span>Гортензия - {{ getProductIndex(id)[0].hydrangea }} шт.</span>
        </div>
        <div class="txt" v-if="getProductIndex(id)[0].gerber>0">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
          </svg>
          <span>Гербера - {{ getProductIndex(id)[0].gerber }} шт.</span>
        </div>
        <div class="txt" v-if="getProductIndex(id)[0].sunflower>0">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
          </svg>
          <span>Подсолнухи - {{ getProductIndex(id)[0].sunflower }} шт.</span>
        </div>
        <div class="txt" v-if="getProductIndex(id)[0].orchid>0">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
          </svg>
          <span>Орхидея - {{ getProductIndex(id)[0].orchid }} шт.</span>
        </div>
        <div class="txt" v-if="getProductIndex(id)[0].iris>0">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
          </svg>
          <span>Ирис - {{ getProductIndex(id)[0].iris }} шт.</span>
        </div>
        <div class="txt" v-if="getProductIndex(id)[0].lily>0">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
          </svg>
          <span>Ирис - {{ getProductIndex(id)[0].lily }} шт.</span>
        </div>        
      </div>
      <div class="product__right_cart">
        <div class="cart__left">                        
        <button @click="decrement()">
          <svg
            width="9"
            height="2"
            viewBox="0 0 9 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="9" y2="1" stroke="#5B4A58" stroke-width="2" />
          </svg>
        </button >
        <span> {{ quantity }} шт.</span>
        <button @click="increment()">
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 4.5H9M4.5 9L4.5 0" stroke="#5B4A58" stroke-width="2" />
          </svg>
        </button>      
        </div>
        <div class="cart__right">
            <div>
                <p>Сумма:</p>
                <p>{{ sum }} руб.</p>
            </div>
            <button class="btn1" @click="cartbtn()">
                <svg
          width="19"
          height="23"
          viewBox="0 0 19 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9555 9.21606C10.9555 9.60266 11.2689 9.91606 11.6555 9.91606C12.0421 9.91606 12.3555 9.60266 12.3555 9.21606H10.9555ZM7.86768 1.1239V0.423901V1.1239ZM3.37986 9.21606C3.37986 9.60266 3.69326 9.91606 4.07986 9.91606C4.46646 9.91606 4.77986 9.60266 4.77986 9.21606H3.37986ZM15.2158 6.84023C15.2158 7.22683 15.5293 7.54023 15.9158 7.54023C16.3024 7.54023 16.6158 7.22683 16.6158 6.84023H15.2158ZM15.9158 4.9291H16.6159L16.6158 4.91982L15.9158 4.9291ZM11.9372 0.492385C11.5506 0.492445 11.2372 0.805894 11.2373 1.19249C11.2373 1.57909 11.5508 1.89244 11.9374 1.89238L11.9372 0.492385ZM6.69398 13.1589C6.69398 13.5455 7.00738 13.8589 7.39398 13.8589C7.78058 13.8589 8.09398 13.5455 8.09398 13.1589H6.69398ZM7.39398 6.84009H8.09398C8.09398 6.45349 7.78058 6.14009 7.39398 6.14009V6.84009ZM1.23877 6.84009V6.14009C0.85217 6.14009 0.53877 6.45349 0.53877 6.84009H1.23877ZM1.23877 22H0.53877C0.53877 22.3866 0.85217 22.7 1.23877 22.7L1.23877 22ZM9.69454 6.14009C9.30795 6.14009 8.99454 6.45349 8.99454 6.84009C8.99454 7.22668 9.30795 7.54008 9.69454 7.54008V6.14009ZM14.9703 22V22.7H15.2602L15.4653 22.495L14.9703 22ZM15.9172 21.053L16.4122 20.558L15.9173 20.0631L15.4223 20.558L15.9172 21.053ZM16.8642 22L16.3692 22.495L16.5743 22.7H16.8642V22ZM17.3377 22V22.7H18.0377V22H17.3377ZM17.3377 6.84009H18.0377V6.14009H17.3377V6.84009ZM7.86799 13.4774L8.36296 12.9824C8.23169 12.8512 8.05364 12.7774 7.86799 12.7774V13.4774ZM9.28842 14.8979H9.98842C9.98842 14.7122 9.91467 14.5342 9.78339 14.4029L9.28842 14.8979ZM9.28842 18.6857V19.3857C9.67502 19.3857 9.98842 19.0723 9.98842 18.6857H9.28842ZM5.5006 18.6857H4.8006C4.8006 19.0723 5.114 19.3857 5.5006 19.3857V18.6857ZM5.5006 14.8979L5.00562 14.4029C4.87435 14.5342 4.8006 14.7122 4.8006 14.8979H5.5006ZM6.92103 13.4774V12.7774C6.73538 12.7774 6.55733 12.8512 6.42606 12.9824L6.92103 13.4774ZM3.13321 8.51616C2.74661 8.51616 2.43321 8.82956 2.43321 9.21616C2.43321 9.60276 2.74661 9.91616 3.13321 9.91616V8.51616ZM5.02712 9.91616C5.41372 9.91616 5.72712 9.60276 5.72712 9.21616C5.72712 8.82956 5.41372 8.51616 5.02712 8.51616V9.91616ZM10.7079 8.51616C10.3213 8.51616 10.0079 8.82956 10.0079 9.21616C10.0079 9.60276 10.3213 9.91616 10.7079 9.91616V8.51616ZM12.6018 9.91616C12.9884 9.91616 13.3018 9.60276 13.3018 9.21616C13.3018 8.82956 12.9884 8.51616 12.6018 8.51616V9.91616ZM12.3555 9.21606V4.91172H10.9555V9.21606H12.3555ZM12.3555 4.91172C12.3555 3.72148 11.8827 2.57998 11.0411 1.73835L10.0511 2.7283C10.6302 3.30738 10.9555 4.09278 10.9555 4.91172H12.3555ZM11.0411 1.73835C10.1994 0.896725 9.05793 0.423901 7.86768 0.423901V1.8239C8.68662 1.8239 9.47202 2.14922 10.0511 2.7283L11.0411 1.73835ZM7.86768 0.423901C6.67744 0.423901 5.53594 0.896725 4.69431 1.73835L5.68426 2.7283C6.26334 2.14922 7.04874 1.8239 7.86768 1.8239V0.423901ZM4.69431 1.73835C3.85268 2.57998 3.37986 3.72148 3.37986 4.91172H4.77986C4.77986 4.09278 5.10518 3.30738 5.68426 2.7283L4.69431 1.73835ZM3.37986 4.91172V9.21606H4.77986V4.91172H3.37986ZM16.6158 6.84023V4.9291H15.2158V6.84023H16.6158ZM16.6158 4.91982C16.6068 4.23936 16.444 3.56975 16.1397 2.96108L14.8875 3.58718C15.0974 4.00706 15.2097 4.46898 15.2159 4.93838L16.6158 4.91982ZM16.1397 2.96108C15.8353 2.3524 15.3973 1.82043 14.8583 1.40494L14.0036 2.51371C14.3753 2.80033 14.6775 3.1673 14.8875 3.58718L16.1397 2.96108ZM14.8583 1.40494C14.3194 0.989454 13.6934 0.701213 13.0274 0.561778L12.7405 1.93208C13.2 2.02826 13.6318 2.2271 14.0036 2.51371L14.8583 1.40494ZM13.0274 0.561778C12.897 0.53449 12.8324 0.518472 12.7858 0.507466C12.7362 0.495723 12.6449 0.473131 12.5222 0.475563C12.3724 0.478531 12.4121 0.492312 11.9372 0.492385L11.9374 1.89238C12.3597 1.89232 12.5914 1.87447 12.5499 1.87529C12.4814 1.87665 12.4233 1.86035 12.4637 1.8699C12.5072 1.88019 12.5895 1.90046 12.7405 1.93208L13.0274 0.561778ZM8.09398 13.1589V6.84009H6.69398V13.1589H8.09398ZM7.39398 6.14009H1.23877V7.54008H7.39398V6.14009ZM0.53877 6.84009V22H1.93877V6.84009H0.53877ZM1.23877 22.7H14.4961V21.3H1.23877V22.7ZM15.1961 22V6.84009H13.7961V22H15.1961ZM14.4961 6.14009H9.69454V7.54008H14.4961V6.14009ZM14.4961 22.7H14.9703V21.3H14.4961V22.7ZM15.4653 22.495L16.4122 21.548L15.4223 20.558L14.4753 21.505L15.4653 22.495ZM15.4223 21.548L16.3692 22.495L17.3592 21.505L16.4122 20.558L15.4223 21.548ZM16.8642 22.7H17.3377V21.3H16.8642V22.7ZM18.0377 22V6.84009H16.6377V22H18.0377ZM17.3377 6.14009H14.4961V7.54008H17.3377V6.14009ZM7.37301 13.9724L8.79344 15.3928L9.78339 14.4029L8.36296 12.9824L7.37301 13.9724ZM8.58842 14.8979V18.6857H9.98842V14.8979H8.58842ZM9.28842 17.9857H5.5006V19.3857H9.28842V17.9857ZM6.2006 18.6857V14.8979H4.8006V18.6857H6.2006ZM5.99557 15.3928L7.41601 13.9724L6.42606 12.9824L5.00562 14.4029L5.99557 15.3928ZM6.92103 14.1774H7.86799V12.7774H6.92103V14.1774ZM3.13321 9.91616H5.02712V8.51616H3.13321V9.91616ZM10.7079 9.91616H12.6018V8.51616H10.7079V9.91616Z"
            fill="white"
          />
        </svg>
                В корзину
                </button>
                <Dialog v-model:visible="dialogvisible" modal :style="{ width: '25rem' }" header="Изменен!" >            
        </Dialog>
            


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dialog from 'primevue/dialog';
import { mapGetters,mapActions } from "vuex";
export default {
  name: "ProductView",

  components: {Dialog},

  data() {
    return {
        id: this.$route.params.id,
        quantity:0,
        sum:0,
        priid:'small',
        dialogvisible:false,                
    };

  },  
  
  computed: {
    ...mapGetters(["getProductList", "CART"]),
    isDisabled() {        
        return this.quantity<=0;
      },    
    
  },
  mounted(){
    let article=this.getProductIndex(this.id)[0]
    this.quantity=article.quantity;

    let idprice=this.getProductIndex(this.id)[0].idprice;

    if(idprice===0){
        this.priid='small';        
    }
    if(idprice===1){
        this.priid='avg';        
    }
    if(idprice===2){
        this.priid='big';        
    }    

  this.Calc(this.priid);
  
  },
  methods: {    
    ...mapActions(['ADD_TO_CART','REMOVE_TO_CART_V1']      
    ),    
    cartbtn()    {
        let article=this.getProductIndex(this.id)[0];
        // console.log(article);
        
        article.quantity=this.quantity;

        if(this.priid=='small'){article.idprice=0}
        else
        if(this.priid=='avg'){article.idprice=1}
        else
        {article.idprice=2};        

        // console.log(article);

        if(article.quantity===0) 
        {
            this.REMOVE_TO_CART_V1(article)
        } else {
            this.ADD_TO_CART(article);
            this.dialogvisible=true;
        }

        
        
        
        // this.$emit('sendProduct', article);                
    },

    Calc(idprice){
        this.priid=idprice;        
        let article=this.getProductIndex(this.id)[0];
        
        if(idprice=='small'){
            this.sum=article.price*this.quantity;
        }

        if(idprice==='avg'){
            this.sum=article.pricesvg*this.quantity;
        }

        if(idprice==='big'){
            this.sum=article.pricebig*this.quantity;
        }


    },
    getProductIndex(index) {
      let crt = this.CART.filter((product) => product.id == index);
      if (crt.length > 0) {
        let pdct = this.getProductList.filter((product) => product.id == index);
        pdct[0].quantity = crt[0].quantity;
        return pdct;
      } else {
        let pdct = this.getProductList.filter((product) => product.id == index);
        pdct[0].quantity = 0;
        return pdct;
      }
    },
    decrement(){
        if((this.quantity-1)>=0){
            this.quantity--;
        }
        this.Calc(this.priid);
    },
    increment(){
        this.quantity++;
        this.Calc(this.priid);

    },
  },
};
</script>

<style lang="scss" scoped>

btn1:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}
.cart__left {    
    width: 35%;    
    margin-top: 20px;
  padding: 25px;
  border-radius: 10px;
  background-color: white;
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;  
    

    button{
        border:0;
        // background-color:inherit;
        cursor:pointer;
        border-radius: 5px;
    }

    span{
        padding-left: 20px;
        padding-right: 20px;
    }
}

.cart__right{
    margin-top: 20px;
    margin-left: 20px;
    // height: 100%;
  padding: 13px;
  border-radius: 10px;
  background-color: white;
  display: flex;
    align-items: center;
    justify-content: space-between;

    width: 65%;    
    border-radius: 10px;
    background-color: white;

    p:first-child{
        color: #6AAE55;
        font-size: 16px;
        font-weight: bold;
    }

    p:last-child{
        color: #5B4A58;
        font-weight: bold;
        font-size: 18px;
    }
    
    button{
        background-color: #6aae55;
    color: white;
    
    font-size: 16px;
    border: 0;    
    
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap:10px;
    padding-left: 20px;
    padding-right: 20px;
    }
    
}
.txt{
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 5px; 
    padding-bottom: 5px;
}
.bl {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 9px;
  padding-bottom: 9px;
}

.product {
  background-color: #e5e5e5;
  padding-top: 85px;
  padding-bottom: 85px;
  display: flex;

  &__promoution {
    z-index: 1;
    position: absolute;
    right: 0px;
    font-size: 14px;
    background-color: #f2994a;
    color: white;
    font-weight: bold;
    padding-left: 22px;
    padding-right: 22px;
    width: 85px;
    border-radius: 0px 10px 0px 10px;
  }

  &__new {
    z-index: 1;
    position: absolute;
    right: 0px;
    font-size: 14px;
    background-color: #6aae55;
    color: white;
    font-weight: bold;
    text-align: center;
    width: 85px;
    border-radius: 0px 10px 0px 10px;
  }

  &__left {
    width: 40%;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  &__right {
    
    &_cart{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    width: 60%;
    padding-left: 36px;
    &_compound{
        background-color: white;
        border-radius: 10px;
        padding: 20px;

        p{
            color: #5B4A58;
            font-weight: bold;
            font-size: 16px;
        }

        span{
            color: #5B4A58;
            font-size: 16px;
        }
    }

    &_p1 {
      color: #5b4a58;
      font-size: 24px;
      font-weight: bold;
      width: 100%;
    }

    &_p2 {
      color: #5b4a58;
      font-size: 18px;
      font-weight: bold;
      width: 100%;
    }

    &_price {
      margin-top: 9px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    &_bl {
      background-color: white;
      border-radius: 10px;
      label:first-child {
        color: #5b4a58;
        font-size: 14px;
        font-weight: bold;
      }

      label:last-child {
        color: #5b4a58;
        font-size: 16px;
      }
    }
  }

  div {
    // border:1px solid;
  }
}

input[type="radio"]:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #d1d3d1;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #6aae55;
  content: "";
  display: inline-block;
  visibility: visible;

  border: 2px solid #c9f7bbf3;
}

@media(max-width:1035px){
    .product{
        padding-left:20px;
        padding-right:20px;
    }
}

@media(max-width:992px){
    .product__right_price{
        flex-direction:column;
    }

    .product__right_cart{
        flex-direction:column;
    }

    .cart__left{
        width:100%;
    }

    .cart__right{
        width:100%;
        margin-left:0;
    }

    .product__left{
        width:50%;
    }

    .product__right{
        width:50%;
    }    
}

@media(max-width:768px){
.product{
    flex-direction:column;
}

.product__left{
        width:100%;
    }

    .product__right{
        width:100%;
        padding-left:0;
    }

    
}
</style>
