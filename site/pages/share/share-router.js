// import Button from '../../../src/components/button/doc/index.vue'
// import Tree from '../../../src/components/tree/doc/index.vue'
import Introduce from './introduce/index.vue'
import Ts from './ts/index.vue'
import Jest from './jest/index.vue'

var douRouter = [
  {
    path: '/share/introduce',
    name: 'introduce',
    title: 'introduce 介绍',
    component: Introduce
  },
  {
    path: '/share/web',
    name: 'ts',
    title: 'ts 介绍',
    component: Ts
  },
  {
    path: '/share/jest',
    name: 'jest',
    title: 'jest 介绍',
    component: Jest
  }
]

export default douRouter