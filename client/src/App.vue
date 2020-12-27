<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header
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
