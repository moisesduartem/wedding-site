<template>
  <div class="card">
    <form @submit="checkForm">
    <div class="field">
    <h3 class="title is-5">Envie uma mensagem para nós!</h3>
      <div class="control">
        <input class="input" type="text" v-model="username" name="username" placeholder="Qual seu nome?">
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea" name="content" v-model="content" placeholder="O que você tem a dizer?"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-info is-fullwidth">Enviar</button>
          <transition name="fade">
            <p v-if="errors.length" id="error" class="has-text-danger">
              {{errors[0]}}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      username: '',
      content: '',
    }
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.username || !this.content) {
        this.errors.push('Preencha todos os campos corretamente.');
      }



      e.preventDefault();
    }
  }
}
</script>

<style scoped>
#error {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid red;
}

.title {
  font-weight: 300;
}

.card {
  padding: 25px 3%;
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
