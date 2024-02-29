<template>
    <main>
        <div class="review center">
            <!-- <div class="review__left">
                <h2>ОТЗЫВЫ</h2>
                <div class="review__left_tabs">
                    <router-link to="/reviews">Текстовые отзывы</router-link>
                    <router-link to="/reviewsphoto">Фотоотзывы</router-link>
                </div>
            </div> -->
            <div class="review__right">
                <div class="review__messages">
                    <ReviewListComponent :review="review" />
                </div>
                <div class="review__add">
                    <form @submit.prevent="createReview">
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



                            <textarea id="text" rows="5" placeholder="Ваш комментарий"
                                v-model.trim="comment"></textarea>

                            <div class="review__btns">
                                <div class="review__rating">
                                    <p class="rating_title">Оцените нашу работу</p>
                                    <star-rating v-bind:increment="1" v-bind:max-rating="5" inactive-color="#E0E0E0"
                                        :show-rating="false" active-color="#F2C94C" v-bind:star-size="20"
                                        @update:rating="setRating" :read-only="false" :rating="grade">
                                    </star-rating>
                                </div>
                                <button class="btn" :disabled="name.length === 0">Отправить</button>
                            </div>



                        </div>
                    </form>

                </div>
            </div>


        </div>
    </main>
</template>

<script>
import ReviewListComponent from "../components/ReviewListComponent.vue"
import StarRating from 'vue-star-rating'
import axios from 'axios';
import '../axios'

export default {
    name: 'ReviewView',

    components: {
        ReviewListComponent,
        StarRating


    },
    data() {
        return {
            name: '',
            email: '',
            date: '',
            city: '',
            comment: '',
            type_review: 0,
            grade: 5,
            review: []
        };
    },

    computed() {

    },

    mounted() {
        this.loadReview();
    },

    methods: {
        setRating(rating) {
            this.grade = rating;
        },
        async createReview() {
            const currentdate = new Date();
            const datetime = currentdate.getDate() + "."
                + (currentdate.getMonth() + 1) + "."
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();


            this.date = datetime;

            const data = {
                name: this.name,
                email: this.email,
                dt: this.date,
                city: this.city,
                comment: this.comment,
                type_review: 0,
                grade: this.grade

            }

            await axios.post(`review`, data);
            this.loadReview();
        },
        async loadReview() {            
            try {
                const response = await axios.get('review');
                this.review = response.data;
            } catch (err) {
                console.log(err);
            }

        }
    },
};
</script>

<style lang="scss" scoped>
@media(max-width:1035px){
    .review__right{padding-left:20px;
    padding-right:20px;}
    
}

@media(max-width:992px){
    .formname{
        flex-direction: column!important;
    }

    .review__btns{
        flex-direction:column;
        gap:20px;
    }
}


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

            a {
                color: #5B4A58;
                padding-top: 15px;
                text-decoration: none;
                padding-bottom: 15px;
                padding-left: 20px;
                padding-right: 20px;
            }

            a:first-child {
                border-bottom: 1px solid #E0E0E0;
                background-color: #F6FFF3;
                border-radius: 10px 10px 0 0;
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
        // padding-left: 20px;

        // width: 75%;
    }

    &__left {
        // width: 25%;
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
}

@media(max-width:480px){
    .review__rating{
        flex-direction:column;
        align-items: flex-start
    }
}

</style>