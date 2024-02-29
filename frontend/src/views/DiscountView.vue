<template>
    <main>
    <div class="center discount1">
        <h2>Акции</h2>        
        <div class="discount1__block"><DiscountComponent v-for="item in getDiscountList" :dsc="item"/></div>
        
    </div>
</main>
</template>

<script>
import { mapGetters } from "vuex";
import DiscountComponent from '../components/DiscountComponent.vue'
export default {
    name: 'DiscountView',
    components:{
        DiscountComponent
    },

    data() {
        return {
            
        };
    },
    computed: {
    ...mapGetters(["getDiscountList"]),
  },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
@media(max-width:1035px){
    .discount1{
        padding-left:20px;
    padding-right:20px;
    }

    
    
}

@media(max-width:998px){
.discount1__block{
        justify-content: center!important;
    }
}

.discount{
    width:350px;    
}

        h2 {
            font-family: 'KARTON';
            color: #5B4A58;
            padding-bottom:40px;
        }

        .discount1{                    
            padding-top:35px;
            padding-bottom:60px;
            background-color:#E5E5E5;
            &__block{
                display:flex;
                gap:20px;
                
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;            }
        }


</style>