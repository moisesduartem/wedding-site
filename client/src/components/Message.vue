<template>
  <div class="card has-background-white">
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
export default {
  props: {
    username: String,
    content: String,
    imagePath: String,
    createdAt: String,
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
</style>
