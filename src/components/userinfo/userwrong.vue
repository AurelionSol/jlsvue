<template>
  <div>
    <practiceCard :questions="questions">

    </practiceCard>
  </div>
</template>

<script>
  import practiceCard from '../question/practice_card'

  export default {
    name: "userwrong",
    components: {practiceCard},
    data(){
     return{
       questions:[]
     }
    },
    created() {
      this.axios.get("/api/question/list/wrong/" + this.$store.getters.getToken).then(body => {
        this.questions = body.data;
      });
    }
  }
</script>

<style scoped>

</style>
