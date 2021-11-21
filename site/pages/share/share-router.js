import Introduce from './introduce/index.vue'
import Ts from './ts/index.vue'
import Jest from './jest/index.vue'
import Sass from './sass/index.vue'
import Build from './build/index.vue'
import Deploy from './deploy/index.vue'
import Publish from './publish/index.vue'
import Loader from './loader/index.vue'

var shareRouter = [
  {
    path: '/share/introduce',
    name: 'share-introduce',
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
  },
  {
    path: '/share/sass',
    name: 'sass',
    title: 'sass 介绍',
    component: Sass
  },
  {
    path: '/share/build',
    name: 'build',
    title: 'build 介绍',
    component: Build
  },
  {
    path: '/share/deploy',
    name: 'deploy',
    title: 'deploy 介绍',
    component: Deploy
  },
  {
    path: '/share/publish',
    name: 'publish',
    title: 'publish 介绍',
    component: Publish
  },
  {
    path: '/share/loader',
    name: 'loader',
    title: 'loader 介绍',
    component: Loader
  },
]

export default shareRouter