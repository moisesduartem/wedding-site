<template>
  <div>
    <h1 class="title is-3 has-text-grey">Mensagens Recebidas</h1>
    <!-- <div class="card"> -->
      <p v-if="!messages.length">
          Ainda não existem mensagens. Seja o(a) primeiro(a)!
      </p>
    <!-- </div> -->
      <div v-for="(message, i) in messages" :key="i">
        <message
          :id="message.id"
          :content="message.content"
          :username="message.username"
          :imagePath="message.image_path"
          :createdAt="message.created_at"
        />
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Message from './Message';
export default {
  data() {
    return {
      messages: []
    }
  },
  async created() {
    const response = await axios.get('http://localhost:3000/messages');
    this.messages = (response.data).reverse();
  },
  components: {
    Message,
  },
}
</script>

<style scoped>
#message-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.panel {
  margin: calc(1.5% + 15px) auto;
}

.panel-block {
    padding: 2.5%;
}

.title {
  font-weight: 300;
  margin: 15px;
}
</style>
