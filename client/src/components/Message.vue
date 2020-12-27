<template>
  <div class="card has-background-dark">
    <div class="message-content title is-4 has-text-light">
      "{{ content }}"
    </div>
    <hr>
    <div class="message-author subtitle has-text-grey">
      <i>Enviada por <strong class="has-text-light">{{ username }}</strong></i>
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
  margin: 2%;
}

.message-content {
  text-align: center;
  margin: 25px;
}
</style>
