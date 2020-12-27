<template>
  <div class="card has-background-white">
    <div class="message-content title is-4 has-text-grey">
      "{{ content }}"
    </div>
    <hr>
    <div class="message-author subtitle has-text-grey">
      <i>Enviada por <strong class="has-text-grey">{{ username }}</strong></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    content: String,
    imagePath: String,
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
</style>
