<template>
    <main class="center container">
        <img src="../assets/img/404.png" alt="">
        <p class="container__p1">Упс... Что-то пошло не так.</p>
        <p class="container__p2">Перейдите на главную, а мы пока все починим.</p>
        <div class="container__b"><router-link class="container__btn" to="/">Главная</router-link></div>
        
    </main>
</template>

<script>
export default {
    name: 'NotFoundView',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #F9F8FB;
    flex-direction: column;
    text-align: center;

    &__p1{
        padding-top: 28px;
        font-size: 24px;
        color: #5B4A58;
        font-weight: 700;
    }

    &__p2{
        padding-top: 8px;
        font-size: 18px;
        color: #5B4A58;
        font-weight: 400;
    }

    &__btn{
        background-color: #6AAE55;
        color: white;
        padding-left: 60px;
        padding-right: 60px;
        border-radius: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;        
    }

    &__b{
        padding-top: 50px;
    }
}
</style>