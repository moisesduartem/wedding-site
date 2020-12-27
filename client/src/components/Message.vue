<template>
  <div class="card has-background-white">
    <div @click="deleteMessage" class="delete-message title is-5 has-text-danger">X</div>
    <div class="message-content title is-4 has-text-grey">
      "{{ content }}"
    </div>
    <hr>
    <div class="subtitle has-text-grey">
      <i>Enviada por <strong class="has-text-grey">{{ username }}</strong></i>
      <span class="has-text-grey">{{ (new Date(createdAt)).toLocaleString() }}  </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    id: Number,
    username: String,
    content: String,
    imagePath: String,
    createdAt: String,
  },
  methods: {
    async deleteMessage() {
      axios.delete(`http://localhost:3000/messages/${this.id}`);
      return document.location.reload(true);
    }
  }
}
</script>

<style scoped>
.card {
  padding: 25px;
  width: calc(20% + 350px);
  margin: 3% auto;
}

.message-content {
  text-align: center;
  margin: 25px;
}

.subtitle {
  display: flex;
  justify-content: space-between;
}

.delete-message {
  font-weight: 300;
  text-align: right;
  padding:auto;
  opacity: 0.4;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.delete-message:hover {
  opacity: 0.9;
}

</style>
