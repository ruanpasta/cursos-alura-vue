
<template>
  <div class="corpo">
    <meu-menu :rotas="routes" />

    <transition name="pagina"> <router-view></router-view> </transition>
  </div>
</template>

<script>
import MenuVue from "./components/shared/menu/Menu.vue";
import { routes } from "./routes";

export default {
  components: {
    "meu-menu": MenuVue,
  },
  data() {
    return {
      routes: routes.filter((route) => route.menu),
    };
  },
};
</script>

<style lang="scss">
.corpo {
  font-family: Arial, Helvetica, sans-serif;
  width: 96%;
  margin: auto;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.5s;
}
</style>
