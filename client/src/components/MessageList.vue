<template>
  <div id="message-list">
    <h2 class="title is-3">Felicitações</h2>
    <hr>
    <div v-for="(message, i) in messages" :key="i">
      <div class="card">
        <div class="message-content">
          {{ message.content }}
        </div>
        <hr>
        <div class="message-author">
          <i>Enviada por <strong>{{ message.username }}</strong></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      messages: []
    }
  },
  async created() {
    const response = await axios.get('http://localhost:3000/messages');
    this.messages = response.data;
  }
}
</script>

<style scoped>
#message-list {
  margin: 25px;
  margin-top: 3%;
}

.title {
  font-weight: 300;
}
</style>
