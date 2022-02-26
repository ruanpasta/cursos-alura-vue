
<template>
  <div>
    <h1 class="centralizado" v-text="titulo" />

    <input
      type="search"
      class="filtro"
      v-on:input="filtro = $event.target.value"
      placeholder="Pesquisar por titulo"
    />
    {{ filtro }}

    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="(foto, index) in fotosComFiltro"
        :key="index"
      >
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :titulo="foto.titulo" :url="foto.url" />
          <meu-botao
            tipo="button"
            rotulo="Remover"
            estilo="perigo"
            :confirmacao="true"
            @botaoAtivado="remove(foto)"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import BotaoVue from "../shared/botao/Botao.vue";
import ImagemResponsivaVue from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import PainelVue from "../shared/painel/Painel.vue";

export default {
  components: {
    "meu-painel": PainelVue,
    "imagem-responsiva": ImagemResponsivaVue,
    "meu-botao": BotaoVue,
  },
  data: () => ({
    titulo: "Naruto",
    fotos: [],
    filtro: "",
  }),
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        const expression = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => expression.test(foto.titulo));
      }
      return this.fotos;
    },
  },
  methods: {
    remove(foto) {
      alert("Remover imagem" + foto.titulo);
    },
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then((fotos) => (this.fotos = fotos));
  },
};
</script>

<style lang="scss">
.titulo {
  text-align: center;
}

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
