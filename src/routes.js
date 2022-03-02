const Cadastro = () => System.import('./components/cadastro/Cadastro.vue').then(m => m.default);
import Home from './components/home/Home.vue'

export const routes = [
  { path: '', name: 'home', component: Home, titulo: 'Pagina inicial', menu: true },
  { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
  { path: '/cadastro/:id', name: 'altera-cadastro', component: Cadastro, titulo: 'Altera cadastro', menu: false },
  { path: '*', component: Home, menu: false }
];