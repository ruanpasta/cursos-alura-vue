<template>
  <nav>
    <ul>
      <li v-for="(rota, index) in rotas" :key="index">
        <router-link :to="rota.path || '/'">{{ rota.titulo }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>