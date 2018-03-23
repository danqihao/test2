<template>
  <div id="firstComponent">
    <h1>I am a student</h1>
    <div>  
        <router-link to="/first">主页</router-link>  
        <router-link to="/second/123">用户</router-link>  
    </div>  
   
  </div>
</template>

<script>
  export default {
    data(){
      return {
        author:"danqihao"
      }
    },
    mounted(){
     // console.log($route.params)
    }
  }
</script>
<style>

</style>
