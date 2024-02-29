<template>
    <footer class="footer">
        <div class="footer__top center">
            <router-link to="/">Каталог</router-link>
            <router-link to="/discounts">Скидки</router-link>
            <router-link to="/reviews">Отзывы</router-link>
            <router-link to="/contacts">Контакты</router-link>
            <router-link to="/offer">Оферта</router-link>
            
            <div class="footer__top_client">
                <router-link to="/infoclient">Информация для клиента</router-link>

                
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.18848 1.09863L4.09034 4.00012L6.99182 1.09863" stroke="white" />
                </svg>

            </div>
        </div>
        
        <div class="footer__center center">
            <div class="footer1">
            <div class="footer__center_left">
                <p>Контактная информация</p>
                <div class="footer__center_txt">
                    <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.375 15.6875C5.65625 16.125 6.3125 16.125 6.59375 15.6875C11.1562 9.125 12 8.4375 12 6C12 2.6875 9.3125 0 6 0C2.65625 0 0 2.6875 0 6C0 8.4375 0.8125 9.125 5.375 15.6875ZM6 8.5C4.59375 8.5 3.5 7.40625 3.5 6C3.5 4.625 4.59375 3.5 6 3.5C7.375 3.5 8.5 4.625 8.5 6C8.5 7.40625 7.375 8.5 6 8.5Z"
                            fill="white" />
                    </svg>
                    <span>г. Владивосток, ул. Пушкинская, 17</span>
                </div>

                <div class="footer__center_txt">
                    <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.48804 14.3642L10.6989 12.0865C10.8377 11.8484 10.7727 11.5308 10.5472 11.3452L8.2328 9.52407C8.02437 9.36814 7.74881 9.36937 7.53535 9.51234L5.98653 10.6236C4.4375 9.3078 3.33751 7.43673 2.96165 5.38438L4.69846 4.5987C4.92901 4.48533 5.06785 4.2473 5.03702 3.98883L4.61705 1.07394C4.56914 0.785866 4.32027 0.594078 4.05097 0.57196L1.47296 0.481692C1.1974 0.482919 0.977691 0.649237 0.902628 0.929377C-0.698721 6.90569 2.83259 13.0563 8.83225 14.6639C9.08905 14.7327 9.3492 14.6022 9.48804 14.3642Z"
                            fill="white" />
                    </svg>
                    <span>+ 7 808 353 53 35</span>
                </div>

                <div class="footer__center_txt">
                    <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.48804 14.3642L10.6989 12.0865C10.8377 11.8484 10.7727 11.5308 10.5472 11.3452L8.2328 9.52407C8.02437 9.36814 7.74881 9.36937 7.53535 9.51234L5.98653 10.6236C4.4375 9.3078 3.33751 7.43673 2.96165 5.38438L4.69846 4.5987C4.92901 4.48533 5.06785 4.2473 5.03702 3.98883L4.61705 1.07394C4.56914 0.785866 4.32027 0.594078 4.05097 0.57196L1.47296 0.481692C1.1974 0.482919 0.977691 0.649237 0.902628 0.929377C-0.698721 6.90569 2.83259 13.0563 8.83225 14.6639C9.08905 14.7327 9.3492 14.6022 9.48804 14.3642Z"
                            fill="white" />
                    </svg>
                    <span>+ 7 888 888 88 88</span>
                </div>

                <div class="footer__center_txt">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM8 14.25C4.53125 14.25 1.75 11.4688 1.75 8C1.75 4.5625 4.53125 1.75 8 1.75C11.4375 1.75 14.25 4.5625 14.25 8C14.25 11.4688 11.4375 14.25 8 14.25ZM9.90625 11C10.0938 11.125 10.3125 11.0938 10.4375 10.9062L11.0312 10.125C11.1562 9.9375 11.125 9.71875 10.9375 9.59375L8.875 8.0625V3.625C8.875 3.4375 8.6875 3.25 8.5 3.25H7.5C7.28125 3.25 7.125 3.4375 7.125 3.625V8.78125C7.125 8.875 7.15625 9 7.25 9.0625L9.90625 11Z"
                            fill="white" />
                    </svg>

                    <span>Режим работы:<br>
                        Пн-Сб с 8:00 до 22:00</span>
                </div>

            </div>
            <div class="footer__center_center">
                <p>Для посетителей</p>
                <a href="#">Оформление заказа</a>
                <a href="#">Вопросы и ответы</a>
                <a href="#">Изменение или отмена заказа</a>
                <a href="#">Способы доставки и оплаты</a>
            </div>
            </div>
            <div class="footer__center_right">
                <p>Возникли вопросы? Свяжитесь с нами</p>
                <form @submit.prevent="handleSubmit()">
                    <div class="footer__forms">
                    <div class="footer__form" style="width: 50%;">
                        <label for="name">Ваше имя</label>
                        <input type="text" id="name" required v-model="name">
                    </div>
                    
                    <div class="footer__form" style="width: 50%;">
                    <label for="tel">Моб. номер</label>  
                    <input type="tel" id="tel" required v-model="tel">
                    </div>
                </div>
                <textarea rows="3" style="width: 100%;margin-top: 10px;" required v-model="txt"></textarea>
                
                <div style="display: flex;
    justify-content: flex-end;">
                <button class="footer__btnsubmit" type="submit">Отправить</button>
            </div>
                </form>
            </div>

        </div>
        
        <div class="footer__bottom center">
            <div class="footer__bottom_txt">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.796 4.406C6.282 4.406 6.516 4.568 6.714 4.964H8.28C7.866 3.704 7.164 2.984 5.796 2.984C4.122 2.984 3.132 4.226 3.132 5.864C3.132 7.466 4.104 8.726 5.796 8.726C7.236 8.726 7.956 8.042 8.28 6.674H6.75C6.606 7.142 6.39 7.304 5.796 7.304C5.076 7.304 4.698 6.926 4.698 5.864C4.698 4.838 5.022 4.406 5.796 4.406ZM5.778 0.805999C2.736 0.805999 0.72 2.804 0.72 5.864C0.72 8.906 2.79 10.922 5.778 10.922C8.82 10.922 10.836 8.888 10.836 5.864C10.836 2.822 8.82 0.805999 5.778 0.805999ZM5.778 9.914C3.258 9.914 1.764 8.384 1.764 5.864C1.764 3.326 3.258 1.796 5.778 1.796C8.298 1.796 9.81 3.326 9.81 5.864C9.81 8.384 8.298 9.914 5.778 9.914Z"
                        fill="#A69BA4" />
                </svg>
                <p>2024 Цветочная лавка.</p>
            </div>
            <Dialog v-model:visible="dialogvisible" modal :style="{ width: '25rem' }" header="Сообщение отправлено!" >            
        </Dialog>
        </div>
    </footer>
</template>

<script>
import Dialog from 'primevue/dialog';
import axios from "axios";
export default {
    name: 'FooterComponent',
    components:{Dialog},

    data() {
        return {
            dialogvisible:false,
            name:'',
            tel:'',
            txt:'',
        };
    },

    mounted() {

    },

    methods: {
        async handleSubmit() {
      const data = {
        name: this.name,
        email: '',
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
@media(max-width:1035px){
    .footer{
        &__top, &__center, &__bottom{
            padding-left:20px;
        padding-right:20px;
        }
            
    }
    
    .footer__center{
            flex-direction:column !important;
        }

    .footer1{width:100%!important;}

    .footer__center_right{
        padding-top:20px!important;
        width:100%!important;
    }

}

@media(max-width:480px){
    .footer1{
        flex-direction: column;
        // width:100%;
        // flex-direction:row !important;
            
        }
     .footer__top{
        flex-direction:column;
     }   

     .footer__forms{
        flex-direction:column!important;
     }

     .footer__form{
        width:100%!important;
     }
        
}

.footer1{
    display: flex;width: 60%;justify-content: space-between;
    gap:20px;
    padding-right:20px;
}
.footer {
    &__btnsubmit{
        background-color: #6AAE55;
        color: white;
        border: none;
        font-size: 16px;
        font-weight: 700;
        border-radius: 5px;
        width: 222px;
        padding-top: 9px;
        padding-bottom: 9px;
    }
    &__forms{
        padding-top: 10px;
        display: flex;
        gap: 10px;
    }
    &__form{
        display: flex;
    flex-direction: column;
    }

    &__top {
        background-color: #746471;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 33px;
        padding-bottom: 33px;
        gap:10px;

        &_client {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 5px;

        }
    }

    &__top a,&__center_center a {
        text-decoration: none;
        color: white;
        font-size: 16px;
    }

    &__center,
    &__bottom {
        background-color: #5B4A58;
    }

    &__center {
        padding-top: 30px;
        padding-bottom: 45px;        
        border-top: 1px solid #A29BB4;
        color: white;
        display: flex;

        &_left {
            
            padding-right: 70px;
            display: flex;
    flex-direction: column;
    gap: 15px;
        }

        &_center {
            
            display: flex;
    flex-direction: column;
    gap: 15px;
        }

        &_right {
            width: 40%;
        }

        &_left p,
        &_center p,
        &_right p {
            color: #6AAE55;
            font-size: 18px;
            font-weight: 700;
        }

        

        &_txt{
            display: flex;
            align-items: center;
            gap: 14px;
            
        }
    }

    &__bottom {
        border-top: 1px solid #A29BB4;
        color: #A69BA4;
        display: flex;
        justify-content: center;
        padding-top: 22px;
        padding-bottom: 22px;

        &_txt {
            display: flex;
            align-items: center;
            gap: 7px;
        }
    }

}</style>