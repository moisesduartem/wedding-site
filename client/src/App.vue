<template>
  <div id="app">
    <custom-header />
    <div id="content">
      <router-view/>
    </div>
    <small id="credits"><a href="http://github.com/moisesduartem">Moisés Mariano</a></small>
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
}

#credits {
  font-size: 17px;
  margin: 10px;
  padding: 10px;
}

#credits a {
  transition: all .2s ease-in-out;
}

</style>
