<template class="has-background-primary">
  <div id="app" class="has-background-info-light">
    <custom-header />
    <router-view/>
  </div>
</template>

<script>
import CustomHeader from '@/components/Header';

export default {
  name: 'App',
  components: {
    CustomHeader
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  padding: 35px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
