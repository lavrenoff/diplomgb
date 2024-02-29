<template>
  <div class="product">
    <div v-if="article.promotion" class="product__promoution">Акция</div>
    <div v-if="article.new" class="product__new">Новинка</div>
    
    <router-link :to="{name:'productview',params:{id:article.id}}">    
    <img class="product__img" :src="require(`@/assets/img/${article.url}`)" />
  </router-link>
    <div class="product__bottom">        
      <p class="product__name">{{ article.name }}</p>
      <div class="product__price">
        <span class="product__span">Стоимость:</span>
        <strong class="product__pr">от {{ article.price }} руб.</strong>
      </div>
    </div>
    <div class="product__bottom1" v-if="article.quantity==0">
      <button class="product__btn" @click="sendDataToParent">В корзину</button>            
    </div>    
    <div class="cart__left" v-if="article.quantity>0">                        
        <button @click="decrement">
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
        <span> {{ article.quantity }} шт.</span>
        <button @click="increment">
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

    
    
    

  </div>
</template>

<script>

export default {
  name: "ProductComponent",
  data() {
    return {
        db:[],
        quantity:0,
    };
  },
  props: {
    article: {
    //   id:Integer,
      name: String,
      price: String,
      url: String,
      new: Boolean,
      promotion: Boolean,            
    },    
  },
  computed:{
    
    
  },

  created(){
  },
  mounted(){
    if(this.$store.state.cart.length===0)
       {
        this.article['quantity']=0;
       }
//   db=CART;
    //  if(CART){

    //  }

// } else {
// this.article['quantity']=1; }

    // this.article['quantity']=1; 
  },
    
  methods:{
    sendDataToParent(){
      this.$emit('sendProduct', this.article);
    },
    decrement(){
      this.$emit('sendDecrement', this.article);
    },
    increment(){
      this.$emit('sendIncrement', this.article);
    },


  }
};
</script>

<style lang="scss" scoped>
.cart__left {    
  display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px ;  
    align-items: center;
  // margin-top: 20px;
  // padding: 25px;
  // border-radius: 10px;
  // background-color: white;
  // display: flex;
  // align-items: center;
  // justify-content: center;
      
    

    button{
        border:0;
        padding-left:15px;
        padding-right:15px;
        padding-top: 10px;
        padding-bottom:10px ;
        // background-color:inherit;
        cursor:pointer;
        border-radius: 5px;
    }    

    span{
        padding-left: 20px;
        padding-right: 20px;
    }
}

.product {
  width: 263px;
//   border: 1px solid;
  border-radius: 10px;
  background-color: white;

display: flex;
    flex-direction: column;
    justify-content: space-between;

  &__promoution{
    z-index: 1;
    position: absolute;
    right:0px;
    font-size: 14px;
    background-color: #F2994A;
    color: white;
    font-weight: bold;
    padding-left: 22px;
    padding-right: 22px;
    width: 85px;
    border-radius: 0px 10px 0px 10px;
  }

  &__new{
    z-index: 1;
    position: absolute;
    right:0px;
    font-size: 14px;
    background-color: #6AAE55;
    color: white;
    font-weight: bold;
    text-align: center;
    width: 85px;
    border-radius: 0px 10px 0px 10px;
  }

  &__img{
    border-radius: 10px;
    // border: 1px solid;
  }

  &__bottom {
    padding: 20px;    
    
  }

  &__bottom1 {
    padding-left: 20px;    
    padding-right: 20px;    
    padding-bottom: 20px;
  }

  &__name {
    color: #5b4a58;
    font-size: 18px;
    font-weight: bold;
  }

  &__span {
    color: #828282;
    font-size: 14px;
  }
  &__pr {
    font-size: 16px;
    color: #5b4a58;
  }

  &__price {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  &__btn {    
    background-color: #6aae55;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    width: 100%;
    
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
