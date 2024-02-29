<template>
    <main>
        <div class="review center">
            <div class="review__left">
                <h2>ОТЗЫВЫ</h2>
                <div class="review__left_tabs">
                    <router-link to="/reviews">Текстовые отзывы</router-link>
                    <router-link to="/reviewsphoto">Фотоотзывы</router-link>
                </div>
            </div>
            <div class="review__right">
                <div class="review__messages">
                    <!-- <ReviewListComponent :review="review" /> -->
                </div>
                <div class="review__add">
                    <!-- <form @submit.prevent="createReview">
                        <div class="form-control">
                            <div class="formname">
                                <div><label for="name">Введите имя</label>
                                    <input type="text" id="name" v-model.trim="name" placeholder="Василий Петров">
                                </div>

                                <div><label for="email">Эл.почта</label>
                                    <input type="email" id="email" v-model.trim="email" placeholder="example@mail.com">
                                </div>

                                <div><label for="city">Город</label>
                                    <input type="text" id="city" v-model.trim="city" placeholder="Владивосток">
                                </div>

                            </div>



                            <textarea id="text" cols="30" rows="5" placeholder="Ваш комментарий"
                                v-model.trim="text"></textarea>

                            <div class="review__btns">
                                <div class="review__rating">
                                    <p class="rating_title">Оцените нашу работу</p>
                                    <star-rating v-bind:increment="1" v-bind:max-rating="5" inactive-color="#E0E0E0"
                                        :show-rating="false" active-color="#F2C94C" v-bind:star-size="20"
                                        @update:rating="setRating" :read-only="false" :rating="points">
                                    </star-rating>
                                </div>
                                <button class="btn" :disabled="name.length === 0">Отправить</button>
                            </div>



                        </div>
                    </form> -->

                </div>
            </div>


        </div>
    </main>
</template>

<script>
// import ReviewListComponent from "../components/ReviewListComponent.vue"
// import StarRating from 'vue-star-rating'

export default {
    name: 'ReviewViewPhoto',

    components: {
        // ReviewListComponent,
        // StarRating


    },
    data() {
        return {
            name: '',
            email: '',
            dt: '',
            city: '',
            text: '',
            points: 5,
            review: []
        };
    },

    computed() {

    },

    mounted() {
        // this.loadReview();
    },

    methods: {
        // setRating(rating) {
        //     this.points = rating;
        // },
        // async createReview() {
        //     const currentdate = new Date();
        //     const datetime = currentdate.getDate() + "."
        //         + (currentdate.getMonth() + 1) + "."
        //         + currentdate.getFullYear() + " "
        //         + currentdate.getHours() + ":"
        //         + currentdate.getMinutes();


        //     this.date = datetime;


        //     const response = await fetch('https://lavr-vue-default-rtdb.firebaseio.com/review.json', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             firstName: this.name,
        //             email: this.email,
        //             date: this.date,
        //             city: this.city,
        //             text: this.text,
        //             points: this.points,
        //         })

        //     })

        //     if (response.ok) {
        //         // const firebaseData = await response.json();
        //         // console.log(firebaseData);
        //         this.review.push({
        //             id: response.id,
        //             firstName: this.name,
        //             email: this.email,
        //             date: this.date,
        //             city: this.city,
        //             text: this.text,
        //             points: this.points,
        //         });

        //         this.name = '';
        //         this.email = '';
        //         this.points = 5;
        //         this.city = '';
        //         this.text = '';
        //         this.date = '';

        //         // this.loadReview();    
        //     } else {
        //         throw Error("Ошибка отправки");
        //     }



        // },
        // async loadReview() {
        //     const response = await fetch("https://lavr-vue-default-rtdb.firebaseio.com/review.json");
        //     if (response.ok) {
        //         const firebaseData = await response.json();

        //         if (firebaseData !== null) {
        //             this.review = Object.keys(firebaseData).map(key => {
        //                 return {
        //                     id: key,
        //                     //firstname :firebaseData[key].firstName,
        //                     ...firebaseData[key]
        //                 }
        //             })
        //         }
        //     } else {
        //         throw new Error("Ошибка при загрузке данных");
        //     }

        // }
    },
};
</script>

<style lang="scss" scoped>
.btn {
    background-color: #6AAE55;
    font-size: 16px;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 60px;
    padding-right: 60px;
    border-radius: 5px;
    color: white;
    border: none;
}


.review {
    display: flex;
    background-color: #F9F8FB;

    &__left {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 35px;
        padding-bottom: 35px;

        h2 {
            font-family: 'KARTON';
            color: #5B4A58;
        }

        &_tabs {                
            margin-top: 22px;    
            background-color: white;
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                font-size: 16px;
                
                font-weight: 700;
                
                a{
                    color: #5B4A58;
                    padding-top: 15px;
                    text-decoration: none;
                    padding-bottom: 15px;
                    padding-left: 20px;
                    padding-right: 20px;
                }

                a:last-child{
                    border-top: 1px solid #E0E0E0;
                    background-color: #F6FFF3;
                    border-radius:0 0 10px 10px ;
                }                
            }


    }



    &__btns {
        display: flex;
        justify-content: space-between;
        padding-top: 22px;
    }

    &__rating {
        display: flex;
        gap: 18px;
        align-items: center;

    }

    &__add {
        background-color: white;
        padding-left: 35px;
        padding-right: 35px;
        padding-top: 28px;
        padding-bottom: 35px;
        margin-top: 20px;
        margin-bottom: 60px;
        border-radius: 10px;
    }

    &__right {
        padding-left: 20px;
        width: 75%;
    }

    &__left {
        width: 25%;
        background-color: #F2F2F2;
    }
}

.form-control {
    display: flex;
    flex-direction: column;
}

.formname {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 20px;

}

.formname div {
    display: flex;
    flex-direction: column;

    width: 100%;

}

.formname div label {
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 700;
}

#city,
#email,
#name,
#text,
{
background-color: #FAFAFA;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 15px;
padding-right: 15px;
font-size: 16px;
border: 1px solid #E0E0E0;
border-radius: 5px;
}

.rating_title {
    font-size: 14px;
    font-weight: 700;
}</style>