// import Button from '../../../src/components/button/doc/index.vue'
// import Tree from '../../../src/components/tree/doc/index.vue'
import Introduce from './introduce/index.vue'
import Project from './project/index.vue'

var douRouter = [
  {
    path: '/doc/introduce',
    name: 'introduce',
    title: 'introduce 介绍',
    component: Introduce
  },
  {
    path: '/doc/project',
    name: 'project',
    title: 'project 项目',
    component: Project
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