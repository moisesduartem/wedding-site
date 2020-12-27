<template>
  <div id="app">
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

body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
