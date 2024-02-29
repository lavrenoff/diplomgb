<template>
  <div class="crt">
    <div class="crt__close">
      <!-- <a class="crt__close" href="#!" @click="deletecart()"> -->
        <button @click="deletecart()">
            <svg  width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.30217 1.3033L11.9088 11.9099M1.30217 11.9099L11.9088 1.3033" stroke="#BDBDBD" stroke-width="3"/>
</svg>
</button>
<!-- </a>               -->
      </div>
    <div class="crt__top">
      <router-link :to="{name:'productview',params:{id:article.id}}"> 
      <img class="crt__img" :src="require(`@/assets/img/${article.url}`)" />
    </router-link>   
      <div>
        <p>{{ article.name }}</p>
        <span>{{
          printPrice(
            article.idprice,
            article.price,
            article.pricesvg,
            article.pricebig
          )
        }}</span>
      </div>
      
    </div>
    <div class="crt__bottom">
      <div class="crt__inc">
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
        <span>{{ article.quantity }} шт.</span>
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
      <div>
        <p>Сумма</p>
        <p>{{ sum() }} руб.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartComponent",
  data() {
    return {
        // quantity:article.quantity,
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
  methods: {
    printPrice(idprice, price1, price2, price3) {
      if (idprice === 0) return `Маленький (${price1} руб.)`;
      else if (idprice === 1) return `Средний (${price2} руб.)`;
      else return `Большой (${price3} руб.)`;
    },

    increment(){
        this.$emit('increment',this.article);        
    },
    decrement(){
        this.$emit('decrement',this.article);        
    },

    sum(){
        if(this.article.idprice===0) 
           return this.article.quantity*this.article.price;
        else
        if(this.article.idprice===1) 
        return this.article.quantity*this.article.pricesvg;        
           else
           return this.article.quantity*this.article.pricebig;        
    },

    deletecart(){
        console.log('delete');
        this.$emit('deleteFromCart');
    }
  },
};
</script>

<style lang="scss" scoped>
.crt {
  margin-top: 20px;
  padding: 25px;
  border-radius: 10px;
  background-color: white;

  &__close{    
    z-index:1;
    position:absolute;
    right:20px;        

    button{
        border:0;
        background-color:inherit;
        cursor:pointer;
    }

  }

  &__inc{
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  &__bottom{
    padding-top:10px;
    display:flex;
    align-items:center;
    justify-content: space-between;

    p:first-child{
        font-size:12px;
    }    

    p:last-child{
        font-size:16px;
        font-weight:bold;
        color:#5B4A58;
    }
    button{
        border:0;
        border-radius:5px;
        cursor:pointer;
        // margin-top:15px;        
    }

    button:first-child{
        margin-right:25px;
        display:flex;
        align-items:center;
        height:21px;
        // background-color:red;
        // padding-bottom:15px;
        // padding-top:15px;
    }

    button:last-child{
        margin-left:25px;

    }

  }

  &__top {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #c4c4c4;

    p {
      font-size: 16px;
      color: #5b4a58;
      font-weight: bold;
      padding-bottom: 10px;
    }
    
    span {
      color: #4f4f4f;
    }
    div {
      padding-left: 20px;
    }
  }

  &__img {
    width: 120px;
    height: 120px;
  }
}
</style>
