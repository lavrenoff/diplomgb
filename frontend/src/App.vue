<template>
  <HeaderComponent />
  <router-view></router-view>
  <FooterComponent />
</template>

<script>
import axios from 'axios'
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"


export default {
  name: 'App',
  components: {
    HeaderComponent,FooterComponent
  },
  async mounted(){
    // console.log('sssssssssssssssss');
    // this.$store.state.user = null; 
    // try
    // {
    // const response = await axios.get('auth/user', {
    //    headers: {
    //      Authorization: localStorage.getItem('token')
    //    }
    //  });

    //  this.$store.state.user.id = response.data.id
    //  this.$store.state.user.name = response.data.name
    //  this.$store.state.user.tel = response.data.tel
    //  this.$store.state.user.city = response.data.city
    //  this.$store.state.user.adress = response.data.adress
    //  this.$store.state.user.email = response.data.email


    //  console.log(this.$store.state.user);
     
    // } catch(err) {
    //   this.$store.state.user = null       
    // }
  },
  async created() {    
    this.$store.state.user = null; 
    try
    {
    const local=localStorage.getItem('token');
    
    if(local){
      const response = await axios.get('auth/user', {
       headers: {
         Authorization: local
       }
     });

     this.$store.state.user = response.data;          
    }    
     
    } catch(err) {
      this.$store.state.user = null       
    }        
  }
}
</script>

<style lang="scss">
@import url("assets/scss/global.scss");

</style>
