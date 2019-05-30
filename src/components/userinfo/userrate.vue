<template>
  <div style="background: #fbfbfb;width: 60%;margin: auto; box-shadow: 0 4px 4px rgba(.12, .12, .12, .12);">
  <div v-for="item of types">
    <learnprogress :type="item">
    </learnprogress>
  </div>
  </div>
</template>

<script>
  import learnprogress from './userlearnprogree'
    export default {
        name: "userrate",
        components: {learnprogress},
      data(){
          return{
            types:['Java基础',
              'Java初级',
              'Java中级',
              'Java高级',
              'Java应用',
              '前端部分',
              'J2EE',
              'Java框架',
              '工具及中间件',
              '数据库',
            ],
          }

        }
    }
</script>

<style scoped>

</style>
