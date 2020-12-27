<template>
  <div id="app">
    <custom-header />
    <div id="content">
      <router-view/>
    </div>
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

#content {
  padding: 35px;
}

body {
  height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  background: #fff7f9;
}
</style>
