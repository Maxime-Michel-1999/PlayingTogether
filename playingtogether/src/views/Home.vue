<template>
  <div class="home">
    <h1>Welcome to Playing Together</h1>
    <p>This page will include the map where the game can be seen</p>
    <Map/>
  </div>
</template>

<script>

import Map from '../components/Map';

export default {
  name: 'Home',
  components: {
    Map
  }
}

</script>
