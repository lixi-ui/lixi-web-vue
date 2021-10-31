// import Button from '../../../src/components/button/doc/index.vue'
// import Tree from '../../../src/components/tree/doc/index.vue'
import Introduce from './introduce/index.vue'
import Web from './web/index.vue'
import Material from './material/index.vue'

var douRouter = [
  {
    path: '/doc/introduce',
    name: 'introduce',
    title: 'introduce 介绍',
    component: Introduce
  },
  {
    path: '/doc/web',
    name: 'web',
    title: 'web 项目',
    component: Web
  },
  {
    path: '/doc/material',
    name: 'material',
    title: 'material 项目',
    component: Material
  },
  // {
  //   path: '/doc/button',
  //   name: 'button',
  //   component: Button
  // },
  // {
  //   path: '/doc/tree',
  //   name: 'tree',
  //   component: Tree
  // }
]

export default douRouter