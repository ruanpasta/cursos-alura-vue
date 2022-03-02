<template>
  <button
    class="botao"
    :class="estiloDoBotao"
    @click="dispararAcao()"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
</template>
["tipo", "rotulo", "confirmacao", "estilo"]
<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String,
    },
    rotulo: {
      required: true,
      type: String,
    },
    confirmacao: {
      required: false,
      type: Boolean,
    },
    estilo: {
      required: false,
      type: String,
    },
  },
  methods: {
    dispararAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operacao ?")) {
          return this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },
  computed: {
    estiloDoBotao() {
      if (this.estilo === "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo === "perigo") return "botao-perigo";
    },
  },
};
</script>

<style lang="sass" scoped>
@import './Botao.scss'
</style>