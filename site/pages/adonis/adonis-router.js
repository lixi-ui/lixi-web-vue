import Home from './home/index.vue'
import Introduction from './introduction/index.vue'
import Installation from './installation/index.vue'
import ReleaseProcess from './release-process/index.vue'

import fundamentalsRouter from './fundamentals/fundamentals-router'


var adonisRouter = [
  {
    path: '/adonis/home',
    name: 'adonis-home',
    title: 'adonis 首页',
    component: Home
  },
  {
    path: '/adonis/introduction',
    name: 'adonis-introduction',
    title: 'introduction 介绍',
    component: Introduction
  },
  {
    path: '/adonis/installation',
    name: 'adonis-installation',
    title: 'installation 安装',
    component: Installation
  },
  {
    path: '/adonis/release-process',
    name: 'adonis-release-process',
    title: 'release-process 发布过程',
    component: ReleaseProcess
  },
  
]

var adonisRouterAll = adonisRouter.concat(fundamentalsRouter)

export { adonisRouter, fundamentalsRouter};

export default adonisRouterAll;