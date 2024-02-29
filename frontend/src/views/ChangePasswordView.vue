<template>
    <main>
      <div class="center" style="background-color:#F9F8FB">
        <div v-if="user" class="center profile">
          <div class="profile__left">
            <ProfileMenuComponent/>
          </div> 
          <div class="profile__right">
            <div class="profile__block">
            <div><p>Смена пароля</p></div>
            <div class="profile__info">
              <div>
                <label for="curr">Текущий пароль</label>
                <InputText id="curr" type="text" v-model="currentPassword" />
              </div>
              <div>
                <label for="new">Новый пароль</label>
                <InputText id="new" type="text" v-model="newPassword" />
              </div>
              <div>
                <label for="confirm">Повторите новый пароль</label>
                <InputText id="confirm" type="text" v-model="confirmPassword" />
              </div>
              <Button label="Сохранить" style="margin-top:20px;" @click="updatePassword"/>
            </div>
            <Dialog v-model:visible="dialogvisible" modal :style="{ width: '25rem' }" :header="message" >            
        </Dialog>
            
          </div>
          </div>        
        </div>
        <div v-else><p class="prt">Не вошли в личный кабинет</p></div>
      </div>
    </main>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import InputText from "primevue/inputtext";
  import Button from 'primevue/button';
  import ProfileMenuComponent from "../components/ProfileMenuComponent.vue"
  import axios from 'axios';
  import '../axios'
  import Dialog from 'primevue/dialog';

  export default {
    name: "Home",
    components:{ProfileMenuComponent,InputText,Button,Dialog},
    data() {
      return {
        currentPassword:'',
        newPassword:'',
        confirmPassword:'',
        dialogvisible:false,
        message:'',
      };
    },
    computed: {
      ...mapGetters(["user"]),
    },
    mounted() {},
    methods: {
        async updatePassword(){
            const data={
                currentPassword:this.currentPassword,
                newPassword:this.newPassword,
                confirmPassword:this.confirmPassword,    
      }

      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')      
      await axios.post(`auth/updatepassword`, data)
      .then(
        (res)=>{          
          this.message=res.data.message;
          this.dialogvisible=true;
        }
      ).catch(
        (err)=>{
         this.message=err.response.data.message;
         
         this.dialogvisible=true;
        }
      )
        }
    },
  };
  </script>
  <style lang="scss" scoped>
  .prt{
      text-align: center;
      padding-top: 50px;
      padding-bottom: 50px;
      font-size: 25px;
  }
  

  .profile__info{    
    display: flex;
    flex-direction: column;
    align-items: center;

    div{display:flex;
    flex-direction:column;
    width:250px;    
    }
    
  }

  .profile{
      display: flex;
      background-color: #F9F8FB;
  
      &__block{
        margin-top:20px;  
        margin-bottom:20px;  
        margin-left:20px;  
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

      &__left {
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 35px;
          padding-bottom: 35px;
          width:25%;                
          background-color: #F2F2F2;
      }
  
      &__right {
        width:75%;
      }                
  }
  
  @media(max-width:1035px){
    .profile{
      padding-left:20px;
      padding-right:20px;
    }
  }
  
  
  @media(max-width:768px){
    .profile{
      flex-direction:column;
      padding-left:0;
    padding-right:0;
  
      &__left{
        width:100%;
      }
  
      &__right{
        width:100%;
      }

      &__block{
        // margin-left:0;
        margin-right:15px;
        margin-left:15px;
        
      }
    }
  }
  
  </style>
  