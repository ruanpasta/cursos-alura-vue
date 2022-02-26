import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue'

export const routes = [
  { path: '', component: Home, titulo: 'Pagina inicial' },
  { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' },
];