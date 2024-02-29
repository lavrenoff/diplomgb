<template>
  <main>
    <div class="center main">
      <h1>Контактная информация</h1>
      <div class="info">
        <div class="adress">
          <div>
            <span>Моб. номер:</span><br />
            <span>+ 7 808 353 53 35<br />+ 7 888 888 88 88</span>
          </div>
          <div>
            <span>Эл. почта</span><br />
            <span>flawka_vl@gmail.com</span>
          </div>
          <div>
            <span>Адрес:</span><br />
            <span
              >г. Владивосток,<br />
              ул. Пушкинская, 17 А</span
            >
          </div>
          <div>
            <span>Режим работы:</span><br />
            <span
              >Пн-Сб с 8:00 до 22:00<br />
              Вс — выходной</span
            >
          </div>
        </div>
        <div class="maps"><img src="../assets/img/maps.png" alt="Карта" /></div>
      </div>

      <form @submit.prevent="handleSubmit()">
        <div class="message">
          <h3>Остались вопросы? Свяжитесь с нами.</h3>
          <div v-if="error" class="alert alert-danger" role="alert">
              {{ error }}
            </div>
          <div class="message1">
            <div class="inputs">
              <input type="text" v-model="name" placeholder="Имя фамилия" />
              <input type="email" v-model="email" placeholder="Эл. почта" />
              <input type="tel" v-model="tel" placeholder="Моб. номер" />
            </div>

            <div class="txtarea">
              <textarea v-model="txt" placeholder="Возникший вопрос"></textarea>
            </div>
          </div>
          <div class="divbtn">
            <!-- <Button label="Отправить"/> -->
            <button class="btn">Отправить</button>
          </div>
          <Dialog v-model:visible="dialogvisible" modal :style="{ width: '25rem' }" header="Сообщение отправлено!" >            
        </Dialog>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import Button from 'primevue/button';
import axios from "axios";
import Dialog from 'primevue/dialog';
export default {
  name: "ContactView",
  components:{
    Button,Dialog
  },

  data() {
    return {
      name: "",
      email: "",
      tel: "",
      txt: "",
      error: "",
      dialogvisible:false,
    };
  },

  mounted() {},

  methods: {
    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        tel: this.tel,
        comment: this.txt,
      };

      await axios
        .post(`message`, data)
        .then((res) => {})
        .catch((err) => {
          this.error = err;
        });

      this.dialogvisible=true;
    },
  },
};
</script>

<style lang="scss" scoped>
.divbtn {
  display: flex;
  justify-content: flex-end;
}
.main {
  padding-bottom: 30px;
}
.btn {
  background-color: #6aae55;
  color: white;
  border: 0;
  width: 222px;
  margin-top: 15px;
  padding:10px;
  border-radius:5px;
}
h3 {
  color: #5b4a58;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 25px;
}

textarea {
  border: 1px solid #999999;
  width: 98%;

  margin-left: 10px;
  height: 100%;

  background-color: #e0e0e0;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 10px;
}

textarea::placeholder {
  color: #bdbdbd;
}
.message1 {
  display: flex;
  flex-direction: row;
}
.message {
  padding: 30px;
  background-color: white;
  border-radius: 5px;
}

// .message div:first-child{
.inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;

  input {
    background-color: #e0e0e0;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    padding: 10px;
  }

  input::placeholder {
    color: #bdbdbd;
  }
}

// .message div:last-child{
.txtarea {
  width: 70%;
}

.adress {
  background-color: white;
  border-radius: 5px;
  width: 23%;
}

.adress div {
  // padding-left: 20px;
  // padding-right: 20px;
  padding: 20px;
}
.adress div:not(:last-child) {
  border-bottom: 1px solid #e0e0e0;
  // padding-bottom: 20px;
}
.adress span:first-child {
  color: #828282;
  font-size: 14px;
}

.adress div:not(:first-child) {
  // padding-top: 20px;
}

.adress span:last-child {
  color: #5b4a58;
  font-size: 16px;
  font-weight: bold;
}
.main {
  background-color: #e5e5e5;
}
h1 {
  text-align: center;
  font-family: "KARTON";
  color: #5b4a58;
  padding-top: 50px;
  padding-bottom: 30px;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  gap:20px;
}

.maps img{
  width:100%;
}

@media(max-width:1035px){
  .info{
    padding-left:20px;
    padding-right:20px;
  }

  .message{
    margin-left:20px;
    margin-right:20px;
  }

  
}

@media(max-width:992px){
  .info{
    flex-direction:column;
  }

  .adress{
    width:100%;
  }

  .message1{
    flex-direction:column;
  }

  .inputs{
    width:100%;
  }

  .txtarea{
    width:100%;

    textarea{
      margin-left:0;
      margin-top:10px;
      width:100%;
    }
  }

}
</style>
