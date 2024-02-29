<template>
    <div class="discount">
        <img class="discount__img" :src="require(`@/assets/img/discount/${dsc.img}`)" />
        <div>
        <p>Акция до {{ dsc.date }}</p>
        <p>{{ dsc.comment }}</p>        
    </div>
        <!-- <p>{{ dsc.discount }}</p> -->        
    </div>
</template>

<script>

export default {
    name: "DiscountComponent",
  components:{},
  data() {
    return {
        open:true,
    };
  },
  props: {
    dsc: Object,
  },
}
</script>

<style lang="scss" scoped>
.discount__img{
    width:100%!important;
}


.discount{
    background-color:white;
    border-radius:10px;
    div{
        padding-top:10px;
        padding-bottom:40px;
    padding-left:20px;
    padding-right:20px;
    p:first-child{
        font-size:16px;
        color:#828282;
       }
    p:last-child{
        font-size:18px;
        color:#5B4A58;
    }   
    }
    

}
</style>