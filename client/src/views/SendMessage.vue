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
            <p v-if="errors.length" class="form-status error-status has-text-danger">
              {{errors[0]}}
            </p>
            <p v-if="success" class="form-status success-status has-text-success">
              Mensagem enviada com sucesso!
            </p>

        </div>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      success: false,
      errors: [],
      username: '',
      content: '',
    }
  },
  methods: {
    checkForm(e) {

      e.preventDefault();

      this.errors = [];
      this.success = false;

      if (!this.username || !this.content) {
        return this.errors.push('Preencha todos os campos corretamente.');
      }

      if (this.sendMessageData(this.username, this.content)) {
        this.success = true;
        this.username = '', this.content = '';
        return ;
      }

    },

    async sendMessageData(username, content) {
      const response = await axios.post('http://localhost:3000/messages', { username, content });
      return response;
    }
  }
}
</script>

<style scoped>
.form-status {
  margin-top: 10px;
  padding: 10px;
}

.error-status {
    border: 1px solid red;
}

.success-status {
    border: 1px solid #16bb16;
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
