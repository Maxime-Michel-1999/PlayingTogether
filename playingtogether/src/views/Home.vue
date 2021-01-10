<template>
  <div class="home">
    <h1>Welcome to Playing Together</h1>
    <Sign/>
    <SignOut/>
  </div>
  
</template>

<script>

import Sign from '../components/Sign';
import SignOut from '../components/SignOut';

export default {
  name: 'Home',
  components: {
    Sign,
    SignOut
  }
}

</script>
