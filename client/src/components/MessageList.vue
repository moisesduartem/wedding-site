<template>
<nav class="panel is-dark">
  <p class="panel-heading">
    Mensagens Recebidas
  </p>
  <div class="panel-block has-background-dark">
     <div id="message-list">
    <div class="has-text-black">
    </div>
    <div v-for="(message, i) in messages" :key="i">
      <message :content="message.content" :username="message.username" :imagePath="message.image_path" />
    </div>
  </div>
  </div>
</nav>
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
    this.messages = response.data;
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
