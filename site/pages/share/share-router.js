import Introduce from './introduce/index.vue'
import Typescript from './typescript/index.vue'
import Jest from './jest/index.vue'
import Sass from './sass/index.vue'
import Build from './build/index.vue'
import Deploy from './deploy/index.vue'
import Publish from './publish/index.vue'
import Services from './services/index.vue'
import Nginx from './nginx/index.vue'
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
    title: 'typescript 引入',
    component: Typescript
  },
  {
    path: '/share/jest',
    name: 'jest',
    title: 'jest 测试',
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
    title: 'build 打包',
    component: Build
  },
  {
    path: '/share/deploy',
    name: 'deploy',
    title: 'deploy 部署',
    component: Deploy
  },
  {
    path: '/share/publish',
    name: 'publish',
    title: 'publish 发布包',
    component: Publish
  },
  {
    path: '/share/services',
    name: 'services',
    title: 'services 云服务',
    component: Services
  },
  {
    path: '/share/nginx',
    name: 'nginx',
    title: 'nginx 服务',
    component: Nginx
  },
  // {
  //   path: '/share/loader',
  //   name: 'loader',
  //   title: 'loader 介绍',
  //   component: Loader
  // },
]

export default shareRouter