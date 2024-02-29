<template>
    <div>
        <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
    <div class="profile__left_tabs">
         <router-link :class="{ active: this.$route.name === 'profileview' }" to="/profileview">Профиль</router-link>
         <router-link class="s" :class="{ active: this.$route.name === 'myordersview' }" to="/myordersview">Мои заказы</router-link>
         <router-link :class="{ active: this.$route.name === 'changepasswordview' }" to="/changepasswordview">Смена пароля</router-link>
         <a href="#!" @click="exit">Выход из профиля</a>         
    </div>        
    
    </div>
</template>

<script>
    export default {
        name: "ProfileMenuComponent",
        data() {
            return{      
                
            }
        },
        methods:{
            exit(){
                localStorage.removeItem('token');                      
                this.$router.push("/loginreg");
                this.$store.state.user=null;
                // window.location.reload("/loginreg");
            }
        }
    }    
</script>



<style lang="scss" scoped>
.s{
    border-bottom: 1px solid #E0E0E0;

}
.active{
    background-color: #F6FFF3;
}
h2 {
            font-family: 'KARTON';
            color: #5B4A58;
}

.profile__left_tabs {
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
                border-radius: 10px 10px 0 0;
            }

            a:last-child {
                border-top: 1px solid #E0E0E0;                
                border-radius: 0 0 10px 10px;
            }
        }

</style>