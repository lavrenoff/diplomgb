<template>
  <main>
    <div class="center login">
      <div class="photo">
        <img src="../assets/img/loginreg.png" alt="" />
      </div>
      <div class="logreg">
        <div class="btns">
          <div
            @click="bool = true"
            class="btnLogin"
            v-bind:class="bool ? 'white' : 'blue'"
          >
            Войти
          </div>
          <div
            @click="bool = false"
            class="btnReg"
            v-bind:class="bool ? 'blue' : 'white'"
          >
            Зарегистрироваться
          </div>
        </div>
        <div class="lg" v-if="bool">
          <form @submit.prevent="handleSubmit()">
            <!-- <div v-if="error" class="alert alert-danger" role="alert">
              {{ error }}
            </div> -->
            <Message v-if="error" severity="error" @click="close($event)">{{ error }}</Message>
            <div class="form-group">
              <label>Электронная почта:</label>
              <InputText type="email" placeholder="Электронная почта" v-model="email"/>              
            </div>
            <div class="form-group">
              <label>Пароль:</label>
              <InputText type="password" v-model="password" placeholder="Пароль"/>              
            </div>
            <button>Войти</button>
            <!-- <Button label="Войти" />             -->
          </form>
        </div>
        <div class="reg" v-if="!bool">
          
          <form @submit.prevent="handleSubmitReg">
            <!-- <div v-if="regerror" class="alert alert-danger" role="alert">
              {{ regerror }}
            </div> -->
            <Message v-if="regerror" severity="error" @click="close($event)">{{ regerror }}</Message>
            <div class="form-group">
              <label>Имя:</label>
              <InputText type="text" v-model="regname" placeholder="Имя"/>              
            </div>

            <div class="form-group">
              <label>Электронная почта:</label>
              <InputText type="email" v-model="regemail" placeholder="Электронная почта"/>              
            </div>

            <div class="form-group">
              <label>Пароль:</label>
              <InputText type="password" v-model="regpassword" placeholder="Пароль"/>              
            </div>

            <div class="form-group">
              <label>Подтвердите пароль:</label>
              <InputText type="password" v-model="regconfirm_password" placeholder="Подтвердите пароль"/>              
            </div>
            <button>Регистрация</button>
            <!-- <Button label="Регистрация"/>             -->
          </form>

          <Dialog v-model:visible="dialogvisible" modal :style="{ width: '25rem' }" header="Регистрация успешно выполнено!" >            
          </Dialog>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import axios from "axios";
import Message from 'primevue/message';
export default {
  name: "LoginReg",

  components: {
    InputText,
    Dialog,
    Message    
  },

  data() {
    return {
      dialogvisible:false,
      bool: true,
      email: "",
      password: "",
      error: "",

      regname: "",
      regemail: "",
      regpassword: "",
      regconfirm_password: "",
      regerror: "",
    };
  },

  mounted() {
    // this.$emit('close', event);
  },

  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };

      await axios
        .post("auth/login", data)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          this.$store.state.user = res.data;          
          this.$router.push("/profileview");
        })
        .catch((err) => {
          this.error = err.response.data.message;
        });
    },
    close(event) {
      this.regerror="";
      this.error="";

            // this.$emit('close', event);
        },

    handleSubmitReg() {
            const data = {
                name: this.regname,
                email: this.regemail,
                password: this.regpassword,
                confirm_password: this.regconfirm_password
            }
                        
            axios.post('auth/register',data)
            .then(
                (res)=>{
                    this.email='';
                    this.password='';          
                    this.dialogvisible=true;                                   
                }
            ).catch(
                (err)=>{
                    this.regerror=err.response.data.message
                }
            )

        }
  },
};
</script>


<style lang="scss" scoped>
button{
    padding:10px;
    border-radius:5px;
    border:0;
    background-color:#6AAE55;
    color:white;
    
    font-size:16px;
}
.form-group{    
    display: flex;
    flex-direction: column;
}

.white {
  background-color: white;
  color: #5b4a58;
  font-weight: bold;
}
.blue {
  background-color: #f2f2f2;
}
.btnLogin,
.btnReg {
  // border: 1px solid;
  padding: 20px;
  text-align: center;
  // padding-bottom: 20px;
  // pad
}

.btnLogin {
  width: 35%;
  border-radius: 10px 0 0 0;
  font-size: 16px;
}

.btnReg {
  width: 65%;
  border-radius: 0 10px 0 0;
  font-size: 16px;
}
.login {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.lg,
.reg {
  padding: 30px;
  font-size: 16px;
}

.lg label,
.reg label {
  color: #5b4a58;
  font-weight: bold;
  padding-bottom: 7px;
}

.lg button,
.reg button {
  width: 100%;
  margin-top: 15px;
  background-color: #6aae55;
  border: 0px;
}

.form-group label {
  padding-top: 7px;
}

.logreg {
  background-color: white;
  // border: 1px solid;
  // width: 350px;
  border-radius: 10px;
  margin-left: 20px;
  box-shadow: 1px 2px 5px #f2f2f2;
}
.btns {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  // border: 1px solid;
}

.photo img{
  width:100%;
}

@media(max-width:1035px){
  .login{
    padding-left:20px;
    padding-right:20px;
  }  
}

@media(max-width:992px){
  .photo{
    display:none;
  }

  .logreg{
    margin-left:0;
    width:100%;
  }

}
</style>
