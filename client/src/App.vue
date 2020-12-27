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
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #fff7f9;
}
</style>
