
<template>
  <div>
    <!-- <img src="/static/download.jfif" /> -->
    <h1 class="centralizado" v-text="titulo" />

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

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
          <imagem-responsiva
            :titulo="foto.titulo"
            :url="foto.url"
            v-meu-transform:rotate.animate="15"
          />
          <router-link
            :to="{ name: 'altera-cadastro', params: { id: foto._id } }"
          >
            <meu-botao tipo="button" rotulo="Alterar" />
          </router-link>

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
import FotoService from "../../domain/foto/FotoService";

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
    mensagem: "",
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
      this.service.apaga(foto._id).then(
        () => {
          const index = this.fotos.indexOf(foto);
          this.fotos.splice(index, 1);

          this.mensagem = "Foto removida com sucesso!";
        },
        (err) => (this.mensagem = err.message)
      );
    },
  },
  created() {
    this.service = new FotoService(this.$resource);

    this.service.lista().then(
      (fotos) => (this.fotos = fotos),
      (err) => (this.mensagem = err.message)
    );
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
