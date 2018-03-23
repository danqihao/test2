<template>
  <div id="secondComponent">
    <h1>I am a student</h1>
    <a  href="/first"> Writeen by {{author}}</a>
    <p>感谢:CCTV</p>
    <router-link to="/first">Witten by {{author}}</router-link>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        author:"danqihao",
        articles:[]
      }
    }
  }
</script>
