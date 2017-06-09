<template>
  <h1>
  </h1>
</template>

<script>
export default {
    computed: {
         i18n (){
             return this.$store.getters.i18n
         }
    },
    mounted () {
        window.console.log(this.i18n.message.hello)
    }
}
</script>

<style>

</style>
