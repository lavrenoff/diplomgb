<!-- https://swiperjs.com/vue#installation -->
<template>    
    <swiper :pagination="{ clickable: true, }" :modules="modules" :slides-per-view="1" class="mySwiper">
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner1.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner2.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner3.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner4.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner5.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';


import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],

        };
    },
};
</script>

<style lang="scss" scoped>
.banner {
    &_slider {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 806px;
        margin-top: -100px;
        z-index: -1;
    }

    &_slider img {
        position: absolute;
        // top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        // width: 50px;
        // height: 100px;
        // width: 100%;        
        object-fit: cover;
    }

    &_txt1 {
        font-family: 'KARTON';
        font-size: 31px;
        color: #5B4A58;
        font-family: 400;
    }

    &_txt1 span {
        font-family: 'KARTON';
        color: #6AAE55;
        font-size: 31px;
    }



    &_txt2 {
        font-family: 'KARTON';
        font-size: 66px;
        color: #5B4A58;
        font-family: 400;
        padding-top: 15px;
    }

    &_txts {
        position: absolute;
        // background-size:100% 100%;
        // left: 50%;
        top: 50%;
        // margin-left: -10%;
        // margin-top: -5%;
        text-align: center;
    }

    &_btn {
        background-color: #6AAE55;
        border-radius: 10px;
        border: none;
        color: white;
        font-size: 18px;
        padding-top: 13px;
        padding-bottom: 13px;
        padding-right: 60px;
        padding-left: 60px;
        margin-top: 33px;
    }


}

.mySwiper {
    margin-top: -110px;
    
}

@media(max-width: 480px){
    .banner{
        &_txt1{
            font-size:21px;            
        }
        &_txt2{
            font-size:40px;            
        }
    }
    

}

</style>