<template>
  <div class="home">
    <h1>Welcome to Playing Together</h1>
    <p>This page will include the map where the game can be seen</p>
    <Sign/>
    <Map/>
  </div>
  
</template>

<script>

import Map from '../components/Map';
import Sign from '../components/Sign';

export default {
  name: 'Home',
  components: {
    Map,
    Sign
  }
}

</script>
