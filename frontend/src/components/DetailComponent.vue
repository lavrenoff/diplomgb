<template>
  <div class="detail">
    
    <details>
      <summary>
        <div class="detail__question">
          <div class="detail__p1">
            <p>{{ quest.question }}</p>            
          </div>
          <div class="detail__svg">
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.86603 9.5C6.48112 10.1667 5.51887 10.1667 5.13397 9.5L0.803847 2C0.418947 1.33333 0.900073 0.5 1.66987 0.5L10.3301 0.500001C11.0999 0.500001 11.5811 1.33333 11.1962 2L6.86603 9.5Z"
                fill="#6AAE55"
              />
            </svg>
          </div>
        </div>
      </summary>
      <div class="detail__answer">
        <div class="detail__p2">
            <p>{{ quest.answer }}</p>
        </div>        
      </div>
      
    </details>
  </div>
</template>
<script>

export default {
    name: "DetailComponent",
  components:{},
  data() {
    return {
        open:true,
    };
  },
  props: {
    quest: Object,
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
summary {
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

.detail{
    background-color:white;
    border-radius:10px;
    
    &__svg{
        // background-color:#BDBDBD;
        
    }
    &__question{
        display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px;        
    // border-bottom:1px solid;
    }


    &__answer{
        border-top:1px solid #E0E0E0;
        padding:20px;
    }

    &__p1{
        font-size:16px;
        color:#5B4A58;
        font-weight:bold;
    }

    &__p1:hover{
        color:#6AAE55;
    }

    &__p2{
        font-size:16px;
        color:#5B4A58;        
    }


}
</style>
