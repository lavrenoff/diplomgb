<template>
  <main>
    
    <div class="cart center" v-if="CART.length>0">      
      <div class="cart__left">
        <h2>Оформление заказа</h2>
        <div class="cart__delivery">
            <p>Способ доставки</p>
          <div class="cart__delivery_radio">
            <div style="display: flex; gap: 12px">
              <div>
                <input
                  id="delivery1"
                  type="radio"
                  name="radio_delivery"
                  checked                  
                  v-bind:value="{name:'del1'}"
                  v-model="delradio"
                />
              </div>
              <div><label :class="{ activelabel: delradio.name === 'del1' }" for="delivery1">Доставка по Владивостоку</label></div>
            </div>

            <div style="display: flex; gap: 12px">
              <div>
                <input
                  id="delivery2"
                  type="radio"
                  name="radio_delivery"
                  v-bind:value="{name:'del2'}"
                  v-model="delradio"
                />
              </div>
              <div><label :class="{ activelabel: delradio.name === 'del2' }" for="delivery2">Самовызов г. Владивосток, ул. Пушкинская, 17 А</label></div>
            </div>

            
          </div>
        </div>

        <div class="cart__dt">
            
            <p>Дата и время</p>
            <div class="cart__dt1">
                <p>Дата</p><Calendar class="calendar" v-model="date" :manualInput="false" showIcon/> 
            </div>            
            
            
            
            <div class="cart__dt2">
                <div><input
                  id="dt1"
                  type="radio"
                  name="radio_dt"
                  checked                  
                  v-bind:value="{name:'dt1'}"
                  v-model="dtradio"
                />
                <label :class="{ activelabel: dtradio.name === 'dt1' }" for="dt1">Указать промежуток времени</label>
                </div>
                
                <div>
                    <Calendar id="calendar-timeonly" v-model="time" timeOnly :manualInput="false"  iconDisplay="button" showIcon/>    
                </div>
                
                
            </div>

            <div class="cart__dt3">
                <div><input
                  id="dt2"
                  type="radio"
                  name="radio_dt"                                 
                  v-bind:value="{name:'dt2'}"
                  v-model="dtradio"
                />
                <label :class="{ activelabel: dtradio.name === 'dt2' }" for="dt2">Позвонить получателю для уточнения времени и адреса</label>
                </div>
                                                
                
            </div>
            
            
        </div>

        <div class="cart__recipient">
            <p>Получатель</p>

            <div class="cart__recipient_radio" style="display:flex; gap:40px;">
            <div style="display: flex; gap: 12px">
              <div>
                <input
                  id="recipient1"
                  type="radio"
                  name="radio_recipient"
                  checked                  
                  v-bind:value="{name:'rec1'}"
                  v-model="recradio"
                />
              </div>
              <div><label :class="{ activelabel: recradio.name === 'rec1' }" for="recipient1">Я получатель</label></div>
            </div>

            <div style="display: flex; gap: 12px;">
              <div>
                <input
                  id="recipient2"
                  type="radio"
                  name="radio_recipient"
                  v-bind:value="{name:'rec2'}"
                  v-model="recradio"
                />
              </div>
              <div><label :class="{ activelabel: recradio.name === 'rec2' }" for="recipient2">Получатель другой человек</label></div>
            </div>

            
          </div>
          
          <div class="cart__recipient_1">
          <div>
            <p>Имя и фамилия</p>
            <InputText placeholder="Имя и фамилия" v-model="recipient_name"/>            
          </div>
          <div>
            <p>Моб. номер</p>
            <InputText placeholder="Моб. номер" v-model="recipient_tel"/>
            
          </div>
        </div>
        <div class="cart__recipient_2">
          <div>
            <p>Город</p>
            <InputText placeholder="Город" v-model="recipient_city"/>
            
          </div>
          <div>
            <p>Адрес</p>
            <InputText placeholder="Адрес" v-model="recipient_adress"/>            
          </div>
        </div>
        <div class="cart__recipient_3">
            <p>Примечание</p>
            
            <Textarea v-model="recipient_note" autoResize rows="5" cols="30" />
        </div>



        </div>

        <div v-if="!user" class="cart__contact">
            <p>Ваши контакты</p>
            <div class="cart__contact1">
          <div>
            <p>Имя и фамилия</p>
            <InputText placeholder="Имя и фамилия" v-model="contact_name"/>            
          </div>
          <div>
            <p>Моб. номер</p>
            <InputText placeholder="Моб. номер" v-model="contact_tel"/>            
          </div>
          <div>
            <p>Город</p>
            <InputText placeholder="Город" v-model="contact_city"/>            
          </div>
        </div>


        </div>

        <div class="cart__payment">
            <p>Способ оплаты</p>

            <div style="display: flex; gap: 12px; padding-top:15px;padding-bottom:15px;border-bottom:1px solid #E0E0E0;">
              <div>
                <input
                  id="payment1"
                  type="radio"
                  name="radio_payment"
                  checked                  
                  v-bind:value="{name:'pay1'}"
                  v-model="payradio"
                />
              </div>
              <div><label :class="{ activelabel: payradio.name === 'pay1' }" for="payment1">Оплата наличными во время получения (самовызов)</label></div>
            </div>

            <div style="display: flex; gap: 12px; padding-top:15px;padding-bottom:15px;border-bottom:1px solid #E0E0E0;">
              <div>
                <input
                  id="payment2"
                  type="radio"
                  name="radio_payment"
                  v-bind:value="{name:'pay2'}"
                  v-model="payradio"
                />
              </div>
              <div><label :class="{ activelabel: payradio.name === 'pay2' }" for="payment2">Оплата наличными курьеру (только, если получатель — Вы)</label></div>
            </div>

            <div style="display: flex; gap: 12px;padding-top:15px;padding-bottom:15px">
              <div>
                <input
                  id="payment3"
                  type="radio"
                  name="radio_payment"
                  v-bind:value="{name:'pay3'}"
                  v-model="payradio"
                />
              </div>
              <div><label :class="{ activelabel: payradio.name === 'pay3' }" for="payment3">Онлайн оплата — Сбербанк</label></div>
            </div>

            


        </div>

        <div style="display: flex;flex-direction: row-reverse;">
            <button class="btn" @click="orderadd">Оформить заказ</button>
            </div>    
      </div>
      <div class="cart__right">
        <h2>КОРЗИНА</h2>        
        <CartComponent v-for="(cart,index) in CART" :article="cart" @increment="onClickIncrement" @decrement="onClickDecrement" @deleteFromCart="onDeleteFromCart(cart)"/>                
        <div class="cart__sum">
        <div>
         <p>Итоговая стоимость:</p>
         <p>{{ SUM }} руб.</p>
        </div>                        
        <p class="cart__right1" v-if="user">Скидка: 0% </p>
        <p class="cart__right1" v-else>Зайдите в <router-link to="/loginreg">личный кабинет</router-link> чтобы проверить вашу СКИДКУ!</p>        
      </div>
      </div>            
    </div>
    <div class="cart center" style="text-align: center; padding-top:100px;padding-bottom:100px;display:flex; justify-content: center;" v-else >
      <p style="font-size: 24px;
        color: #5B4A58">{{ txt }}</p>
    </div>
    
  </main>
  
</template>
<script>
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import { mapGetters,mapActions } from "vuex";
import CartComponent from '../components/CartComponent.vue'
import axios from 'axios';

import '../axios'


export default {
  name: "CartView",
  components: {
    Calendar,
    InputText,
    Textarea,
    CartComponent
    
  },  

  data() {
    return{
        txt:'В корзине пусто',
        delradio:{name:'del1'},                
        dtradio:{name:'dt1'},   
        recradio:{name:'rec1'},
        payradio:{name:'pay1'},             
        date:'',
        time:'',
        recipient_name:'',
        recipient_tel:'',
        recipient_city:'',
        recipient_adress:'',
        recipient_note:'',
        contact_name:'',
        contact_tel:'',
        contact_city:'',        
    }

  },
  computed: {
    ...mapGetters(["user", "CART","SUM"]),
  },
  methods:{
    ...mapActions(['INCREMENT_TO_CART','DECREMENT_TO_CART','REMOVE_TO_CART','REMOVE_TO_CART_V1','REMOVE_TO_CART_ALL']      
    ),
    async orderadd(){      
      let id_users=0;
      
      
      if(this.user){        
        id_users=this.$store.state.user.id;           
      }
      
      const placing = {  
            delivery_method: (this.delradio.name==='del1')?'0':'1',              
            dt:this.date,
            tm:this.time,
            period_of_time:(this.dtradio.name==='dt1')?'0':'1',
            recipient:(this.recradio.name==='rec1')?'0':'1',
            recipient_name:this.recipient_name,
            recipient_tel:this.recipient_tel,
            recipient_city:this.recipient_city,
            recipient_adress:this.recipient_adress,
            recipient_note:this.recipient_note,
            contact_name:this.contact_name,
            contact_tel:this.contact_tel,
            contact_city:this.contact_city,        
            payment:(this.payradio.name==='pay1')?'0':(this.payradio.name==='pay2')?'1':'2',            
            id_users:id_users,
          }
      const cart = this.CART;            
      
      // console.log(cart);
      await axios.post(`placing`, {placing,cart}); 
                          
      
      this.onDeleteAllCart(this.CART);
      this.txt='Заявка оформлена!'


      },
    test(){
        console.log(this.date);
    },
    onClickIncrement(cart){
        this.INCREMENT_TO_CART(cart);        
    },
    onClickDecrement(cart){
        this.DECREMENT_TO_CART(cart);        
    },
    
    // onDeleteFromCart(index)    {
    //     this.REMOVE_TO_CART(index)  
    // }

    onDeleteFromCart(cart)    {
        // console.log(cart);
        this.REMOVE_TO_CART_V1(cart)  
    },

    onDeleteAllCart(cart){
      this.REMOVE_TO_CART_ALL(cart);
    }



  }
};
</script>

<style lang="scss" scoped>
.btn {
    background-color: #6aae55;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    width:222px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    margin-top:20px;

  }

.calendar p-inputtext{
    text-align:right;
}
.activelabel {
  color: #5b4a58;
  font-weight: bold;
}

.cart {

  background-color: #e5e5e5;
//   padding-top: 75px;
  padding-bottom: 40px;
  font-size: 16px;
  display: flex;
  &__sum{
    margin-top:20px;
    border-radius:10px;
    padding:20px;
    background-color:white;
    div{
        border-bottom:1px solid #E0E0E0;
        padding-bottom:20px;
    }
    div p:first-child{
        font-size:18px;
        color:#6AAE55;
        font-weight:bold;
        text-align:center;        
    }

    div p:last-child{
        font-size:24px;
        color:#5B4A58;
        text-align:center;
        padding-top:10px;
    }

    p{
        text-align:center;
        padding-top:10px;                        
    }

  }
  &__right{
    background-color: #F2F2F2;
    padding-top:75px;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:20px;

    h2{
        font-family: 'KARTON';
            color: #5B4A58;
    }

  }
   
  
  &__contact1{
    font-size:14px;
    display:flex;
    gap:20px;
    padding-top:10px;

    div{
        width:33%;
        p{
            padding-bottom:10px;
        }
        input{
            width:100%;
        }
    }
    
  }
  &__recipient{
    font-size:14px;
    &_1,&_2{
        padding-top:20px;
        display:flex;
        justify-content: space-between; 
        gap:20px;                       
        padding-bottom:20px;
        input{
            width:100%;
        }

        div{
            width:50%;    
            
            p{
                padding-bottom:10px;
            }
        }

    }    
    &_3{
        p{
                padding-bottom:10px;
         }

         textarea{
            width:100%;
         }

    }
  }

  &__dt{
    
    &1{
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #E0E0E0;
        padding-bottom:20px;
    }
    &2{
        display:flex;
        border-bottom:1px solid #E0E0E0;
        padding-bottom:20px;
        padding-top:20px;
        justify-content: space-between;
        align-items: center;

        label{
            padding-left:20px;
        }
    }
    &3{
        display:flex;
        
        padding-bottom:20px;
        padding-top:20px;
        justify-content: space-between;
        align-items: center;

        label{
            padding-left:20px;
        }
    }

    

  }
  &__left {
    width: 60%;
    padding-top:75px;
    padding-right:20px;
  }
  &__right {
    width: 40%;
  }
  &__delivery,&__dt,&__recipient,&__contact,&__payment {
    margin-top:20px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    &_radio {
      display: flex;
      padding-top:20px;
    }
  }

  label {
    // padding-left:12px;
    color: #828282;
  }

  p {
    color: #5b4a58;
    font-weight: bold;
  }
}

h2 {
  color: #5b4a58;
  font-size: 24px;
  font-weight: bold;
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
  .cart{
    padding-left:20px;
    padding-right:20px;
  }
}

@media(max-width:992px){
  .cart{
    flex-direction: column-reverse;

    &__left{
      width:100%;
      padding-right:0;
    }

    &__right{
      width:100%;
      background-color:inherit;
      padding-left:0;
      padding-right:0;
    }

    &__delivery_radio{
      flex-direction:column;
      gap:20px;
    }

    &__recipient_radio{
      flex-direction:column;
      gap:20px!important;
    }

    
    &__recipient_1,&__recipient_2,&__contact1{
      flex-direction:column;

      div{
        width:100%;
      }
    }

    
  }

  
}
</style>
