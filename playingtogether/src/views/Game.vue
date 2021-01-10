<template>
  <div class="Host">
    <h1>This is a Game page</h1>
    <UGame/>
  </div>
</template>


<script>

import UGame from '../components/UserGame.vue';

export default {
  components:{
    UGame,
  },

  created(){
    sessionStorage.setItem('page',this.$route.name)
  }
}
</script>
