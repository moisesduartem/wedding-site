<template>
  <div class="card">
    <div class="message-content title is-4">
      "{{ content }}"
    </div>
    <hr>
    <div class="message-author subtitle">
      <i>Enviada por <strong>{{ username }}</strong></i>
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
