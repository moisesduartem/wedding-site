<template>
  <div class="card">
    <form>
    <div class="field">
    <h3 class="title is-5">Envie uma mensagem para nós!</h3>
      <div class="control">
        <input class="input" type="text" name="username" placeholder="Qual seu nome?">
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="O que você tem a dizer?"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-info is-fullwidth">Enviar</button>
        </div>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
  font-weight: 300;
}

.card {
  padding: 35px 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  width: 90%;
}

@media (min-width: 768px) {
  .card {
    width: 768px;
  }
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.control {
  margin: 15px;
}
</style>
