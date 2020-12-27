<template>
  <div id="header" class="card">
    <h1 id="title" class="title is-1 has-text-grey">Beatriz e Mateus</h1>
    <small class="has-text-dark">12.06.2021</small>
    <div class="navlinks">
      <router-link class="navlink" to="/">Home</router-link>
      <router-link class="navlink" to="/message/send">Enviar Mensagem</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #title {
    font-weight: 200;
  }

  #header {
    display: fixed;
    padding: 23px;
  }

  .navlinks {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  .navlink {
    padding: 10px;
    transition: all .2s ease-in-out;
  }
</style>
