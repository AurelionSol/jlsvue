<template>
  <div style="width: 50%;margin: auto">
    <div v-for="comment in comments">
      <comment :comment="comment">

      </comment>
    </div>
  </div>
</template>

<script>
  import Comment from "../blog/comment";

  export default {
    name: "usercomment",
    components: {Comment},
    data(){
      return{
        comments:[]
      }
    },
    created() {
      this.axios.get("/api/comment/list/sort/author/" + this.$store.getters.getToken).then(body => {
        this.comments = body.data;
      });
    }
  }
</script>

<style scoped>

</style>
