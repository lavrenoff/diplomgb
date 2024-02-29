<template>
  <main>
    <div class="center info">
      <h2>Вопросы и ответы</h2>
      <DetailComponent v-for="item in getQuestionList" :quest="item" />
        <form @submit.prevent="createQuestion">
            <div class="info__block">
                
                        <div class="info__block1">
                            <div>
                                <div><label for="name">Имя и фамилия</label>
                                    <InputText type="text" id="name" v-model.trim="name" placeholder="Василий Петров" />
                                </div>

                                <div><label for="email">Эл.почта</label>
                                    <InputText type="email" id="email" v-model.trim="email" placeholder="example@mail.com" />
                                </div>                                
                            </div>
                        </div>
                        <div class="info__block2">
                            <Textarea id="text" cols="30" rows="5" placeholder="Ваш комментарий"
                                v-model.trim="comment"></Textarea>
                        </div>
                
                        
                    </div>
                    <div style="display: flex;flex-direction: row-reverse;">
            <button class="btn">Отправить</button>
            </div>
                    </form>
    </div>
  </main>
</template>

<script>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import DetailComponent from "../components/DetailComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "InfoClientView",
  components:{DetailComponent,InputText,Textarea},

  data() {
    return {
            name:'',
            email:'',
            comment:''
        };
  },
  computed: {
    ...mapGetters(["getQuestionList"]),
  },

  mounted() {},

  methods: {
    createQuestion(){
        console.log('Отправлено');
    }

  },
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
.info{
    &__block{
        padding:20px;
        display:flex;
        background-color:white;
        border-radius:10px;

        label{
            font-size:14px;
            font-weight:bold;
            color:#5B4A58;
            margin-top:10px;
            margin-bottom:10px;
        }
        
        &1{
            padding-right:10px;
            width:30%;

            input{
                width:100%;
            }
        }
        &2{
            padding-left:10px;
            width:70%;
            textarea{
                width:100%;
            }
        }
    }

}
h2 {
    padding-top:20px;
    padding-bottom:20px;    
    font-family: 'KARTON';
            color: #5B4A58;
        }

.info{
    background-color:#E5E5E5;
    padding-top:20px;
    padding-bottom:20px;
}

details{
    
}
.detail{
    margin-bottom:20px;
    margin-top:20px;
    cursor:pointer;
}

@media(max-width:1035px){
    .info{
        padding-left:20px;
        padding-right:20px;
    }
}

@media(max-width:992px){
    .info__block{
        flex-direction:column;
    }

    .info__block1{
        width:100%;
    }

    .info__block2{
        width:100%;
        padding-left:0;
        padding-top:10px;

        textarea{
            width:98%;
        }
    }

    .btn{
        width:100%;
    }
}
</style>
