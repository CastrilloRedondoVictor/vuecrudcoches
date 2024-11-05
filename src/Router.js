import { createRouter, createWebHistory } from 'vue-router';

import CochesView from './components/CochesView.vue';
import CochesPost from './components/CochesPost.vue';
import CochesUpdate from './components/CochesUpdate.vue';
import CochesDelete from './components/CochesDelete.vue';
import CochesGet from './components/CochesGet.vue';

const routes = [
    {path: '/', component: CochesView},
    {path: '/post', component: CochesPost},
    {path: '/update/:id', component: CochesUpdate},
    {path: '/delete/:id', component: CochesDelete},
    {path: '/get/:id', component: CochesGet},
]

const router = createRouter({history: createWebHistory(), routes})

export default router;