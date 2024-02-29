<template>
  <main>        
    <div class="center" style="background-color: #f9f8fb">               
      <div v-if="user" class="center profile">
        <div class="profile__left">
          <ProfileMenuComponent />
        </div>
        <div class="profile__right">
          <div class="profile__discount">
            <p>Скидка 0%</p>
            <p>Сумма заказов - <span>0 руб</span></p>
            <p>от 10000 руб - 3%</p>
            <p>от 50000 руб - 5%</p>
            <p>от 90000 руб - 7%</p>
          </div>
          <form @submit.prevent="updateuser">
          <div class="profile__block">
            <div><p>Информация обо мне</p></div>
            <div class="profile__info">
              <div>
                <label for="username">Имя и фамилия</label>
                <InputText id="username" type="text" v-model="name" />
              </div>
              <div>
                <label for="usertel">Моб.тел</label>
                <InputText id="usertel" type="text" v-model="tel" />
              </div>
              <div>
                <label for="usercity">Город</label>
                <InputText id="usercity" type="text" v-model="city" />
              </div>
              <div>
                <label for="useradress">Адрес</label>
                <InputText id="useradress" type="text" v-model="adress" />
              </div>
            </div>
            <Button type="submit" label="Сохранить"/>

          </div>
        </form>
        <Dialog v-model:visible="dialogvisible" modal :style="{ width: '25rem' }" :header="message" >            
        </Dialog>
        </div>

      </div>     
      <div v-else><p class="prt">Не вошли в личный кабинет !{{ user }}!</p></div>  
    </div>


  </main>
</template>

<script>
import { mapGetters } from "vuex";
import Dialog from 'primevue/dialog';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import ProfileMenuComponent from "../components/ProfileMenuComponent.vue";
import axios from 'axios';
import '../axios'


export default {
   name: "ProfileView",
   components: { ProfileMenuComponent, InputText,Button,Dialog },
   data() {
     return {       
      //  name1: this.$store.state.user.name, 
      //  tel: this.$store.state.user.tel, 
      //  city: this.$store.state.user.city, 
      //  adress: this.$store.state.user.adress,

       name: '', 
       tel: '',
       city: '',
       adress: '',
       
       dialogvisible:false,
       message:'',      
      };
   },
   computed: {
     ...mapGetters(["user"]),
   },
  mounted() {
    if(this.user) {
      this.name=this.$store.state.user.name;
      this.tel=this.$store.state.user.tel;
      this.city=this.$store.state.user.city;
      this.adress=this.$store.state.user.adress;    
      this.id=this.$store.state.user.id;    
      this.email=this.$store.state.user.email;    
    }    
  },
  methods: {    
    async updateuser(){
      const data={
        name:this.name,
        tel:this.tel,
        city:this.city,
        adress:this.adress,
      }
            
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')      
      await axios.post(`auth/updateuser`, data)
      .then(
        (res)=>{
          this.$store.state.user.name=this.name;
          this.$store.state.user.tel=this.tel;
          this.$store.state.user.city=this.city;
          this.$store.state.user.adress=this.adress;
          this.message=res.data.message;
          this.dialogvisible=true;
        }
      ).catch(
  (err)=>{
                    this.message="Ошибка со стороны сервера";
                    console.log(err.response.data.message);                    
                    this.dialogvisible=true;
        }
      )
      
      
      
    }

  },
 };
</script>
<style lang="scss" scoped>
.prt {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 25px;
}

.profile {
  display: flex;
  background-color: #f9f8fb;
  &__discount{    
    background-color:white;
    padding:20px;
    border-radius:10px;
    margin-bottom:20px;

    p{
      color:#5B4A58;
      padding-bottom:10px;      
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
    width: 75%;
    padding-top:30px;
    padding-left:20px;
    
  }

  &__block{
      background-color:white;
      border-radius:10px;      
      padding:30px;
      display:flex;
      flex-direction:column;
      gap:20px;
      margin-bottom:20px;

      button{
        width:250px;
      }

      p{
        color:#5B4A58;
        font-size:18px;
        font-weight:bold;
      }

      label{
        color:#5B4A58;
        font-size:14px;
        font-weight:bold;
        padding-bottom:10px;
      }
    }  

  &__info {
    display:flex;
    gap:20px;
    flex-wrap:wrap;            
    justify-content: space-between;
  }
  &__info div{
    display:flex;
    flex-direction:column;    
    width: 48%;
  }
}

@media (max-width: 1035px) {
  .profile {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 768px) {
  .profile {
    flex-direction: column;
    padding-left:0;
    padding-right:0;


    &__left {
      width: 100%;
    }

    &__right {
      width: 100%;
      padding-right: 20px;
    }

    &__info div{
      width:100%;
    }

    button{
      width:100%;
    }
  }
}
</style>
