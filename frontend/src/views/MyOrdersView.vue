<template>
  <main>
    <div class="center" style="background-color: #f9f8fb">
      <div v-if="user" class="center profile">
        <div class="profile__left">
          <ProfileMenuComponent />
        </div>
        <div class="profile__right">
          <div class="profile__block1">
            <div class="profile__block" v-for="item in placing">
              <div class="profile__block_1">
                <p class="z">Дата заказа</p>
                <p class="s ss">{{item.dt}}</p>
                <p class="z">Номер заказа</p>
                <p class="s">{{item.kod}}</p>
              </div>
              <div class="profile__block_2">
                <p class="z">Наименование:</p>

                <div class="profile__orders" v-for="itm in item.orders">
                  <div><p class="s">{{itm.name}}</p></div>
                  <div><p class="s">*{{ itm.quantity }} {{ itm.price }} руб</p></div>
                </div>                
              </div>
              <div class="profile__block_3">
                <p class="z">Сумма</p>
                <p class="ss s sbold">{{ item.sum }} руб</p>
              </div>
              <div class="profile__block_4">
                <p class="z">Статус</p>
                
                <p class="ss s sbold" :class="{ opl: item.status === 1 },{dost: item.status === 2 }">{{ caption(item.status) }}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else><p class="prt">Не вошли в личный кабинет</p></div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileMenuComponent from "../components/ProfileMenuComponent.vue";
import axios from 'axios';
import '../axios';

export default {
  name: "Home",
  components: { ProfileMenuComponent },
  data() {
    return {
      placing: [
        // {
        //   dt: "28.02.2024",
        //   num: 1,
        //   status: 0,
        //   orders: [
        //     { name: "Букет 1", price: 1000, quantity: 1 },
        //     { name: "Букет 2", price: 2000, quantity: 2 },
        //     { name: "Букет 3", price: 3000, quantity: 2 },
        //   ],
        // },
        // {
        //   dt: "29.02.2024",
        //   num: 2,
        //   status: 1,
        //   orders: [
        //     { name: "Букет 10", price: 1000, quantity: 1 },
        //     { name: "Букет 12", price: 2000, quantity: 20 },
        //     { name: "Букет 13", price: 3000, quantity: 2 },
        //     { name: "Букет 15", price: 2000, quantity: 2 },
        //     { name: "Букет 16", price: 4000, quantity: 2 },
        //   ],
        // },
        // {
        //   dt: "30.02.2024",
        //   num: 3,
        //   status: 2,
        //   orders: [{ name: "Букет 11", price: 1000, quantity: 10 }],
        // },
      ],
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async mounted() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')      
      await axios.get(`auth/myaddorders`)
      .then(
        (res)=>{          
          this.placing=res.data.data;          
        }
      ).catch(
        (err)=>{
                    // this.message="Ошибка со стороны сервера";
                    console.log(err.response.data.message);                    
                    // this.dialogvisible=true;
        }
      )
    
    
  },
  methods: {
    caption(kod){
      return (kod===0)?'В обработке':(kod===1)?'Оплачен':'Доставлено';      
    }
  },
};
</script>
<style lang="scss" scoped>
.dost{
  color:#6AAE55!important;
}
.opl{
  color: #F2994A!important;
}
.z {
  font-size: 14px;
  color: #828282;
  padding-bottom:5px;
}

.s {
  font-size: 16px;
  color: #5b4a58;
  padding-bottom:5px;
}

.ss{
    padding-top:10px;
}

.sbold {
  font-weight: bold;
}
.prt {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 25px;
}

.profile {
  display: flex;
  background-color: #f9f8fb;
  &__orders:not(:first-child){
    margin-top:5px;
  }
  
  &__orders:not(:last-child){
    border-bottom:1px solid #E0E0E0;     
  }
  &__orders{
    display: flex;

    div:first-child{
        width:60%;
        border-right:1px solid #E0E0E0; 
        margin-bottom:5px;        
    }
    div:last-child{
        padding-left:20px;
        width:40%;
        text-align:right;
        padding-right:20px;        
    }

    div{
        padding-bottom:5px;
        padding-top:5px;
    }
  }
  
  &__block:not(:last-child){
    border-bottom:1px solid #E0E0E0;
  }

  &__block {
    display: flex;
    padding-top:20px;
    padding-bottom:20px;
    // border:1px solid;
    &1 {
    //   padding: 20px;
      background-color: white;
      border-radius: 10px;
      padding-left:20px;
      padding-right:20px;
      margin-top:20px;
      margin-bottom:20px;
    }
    div {
    //   border: 1px solid;
    }

    &_1 {
      width: 15%;            
    }
    &_2 {
        padding-left:20px;
      width: 55%;
      margin-right:20px;
    }
    &_3 {
      width: 15%;
    }
    &_4 {
      width: 15%;
    }
  }

  &__left {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 35px;
    padding-bottom: 35px;
    width: 25%;
    background-color: #f2f2f2;
  }

  &__right {
    padding-left:20px;
    width: 75%;
  }
}

@media (max-width: 1035px) {
  .profile {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 768px) {
  .ss{
    padding-top:0;
  }
  .profile {
    flex-direction: column;
    padding-left:0;
    padding-right:0;

    &__left {
      width: 100%;
    }

    &__right {
      width: 100%;
      padding-left:0;
      padding-right:20px;
    }

    &__orders{
        flex-direction:column;
        div:first-child{
            width:100%;  
            border:0;          
        }
        div:last-child{
            width:100%;
            text-align:left;
            padding-left:0;

        }
    }

    &__block1{
        margin-left: 15px;
    }
    &__block{        
        flex-direction:column;        

        div{
            width:100%;
        }
        &_1{
            display:flex;
            justify-content:space-between;
            border-bottom:1px solid #E0E0E0;
            padding-bottom:10px;
            
        }

        &_2{
            padding-top:10px;
            padding-left:0;
        }

        &_3{
            border-top:1px solid #E0E0E0;
            width:100%;
            padding-top:10px;
        }

        &4{
            width:100%;
        }
    }
  }
}
</style>
