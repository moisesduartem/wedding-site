<template>
  <div id="app">
    <custom-header />
    <div id="content">
      <router-view/>
    </div>
    <div class="box has-background-dark has-text-light" id="credits">
      <div class="has-text-grey">
        Credits:
      </div>
      <div>Moisés Mariano</div>
      <a class="has-text-info" href="http://github.com/moisesduartem/wedding-site">Github</a>
      <br>
      <a href="https://www.linkedin.com/in/moisesduartem/" class="has-text-info">Linkedin</a>
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
}

#credits {
  font-size: 17px;
  width: 200px;
  margin: 10px;
  padding: 10px;
}

#credits a {
  transition: all .2s ease-in-out;
}

</style>
