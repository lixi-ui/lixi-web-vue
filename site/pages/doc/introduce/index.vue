<template>
  <div>
    <Md/>
  </div>
</template>

<script>
  import Md from './index.md'

  export default {
    name : 'ButtonMd',
    components: {
      Md
    },
    data () {
      return {
        lang: 'zh'
      }
    },
    created() {
      var lang = window.localStorage.getItem('lv_lang')
      if (lang) {
        this.lang = lang
      } else {
        this.lang = 'zh'
      }
    }
  }
</script>

<style>
 .lv-button{
   margin-right: 5px;
 }
 .block{
   margin: 10px;
 }
</style>
