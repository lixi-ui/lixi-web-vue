<template>
  <!-- <div class="doc">
    <div class="side">
      
    </div>
    <div class="content">
    </div>
  </div> -->
  <div class = "doc div page-container">
    <div class = "doc-left lx-scroll-doc">
      <div class = "logo" >
      </div> 
      <ul>
        <!-- <li class="doc-li"> -->
          <!-- <router-link to="/doc/introduce" activeClass='active-menu'>introduce 介绍</router-link> -->
        <!-- </li> -->
        <li class="doc-li" v-for="(item, index) in docRouter" :key="index">
          <router-link :to="item.path" activeClass='active-menu'>{{ item.title }}</router-link>
        </li>
      </ul>
    </div> 
    <div class = "doc-right div content lx-scroll-doc">
      <router-view></router-view>
    </div> 
  </div>
</template>

<script>
import Md from './index.md';
import docRouter from './doc-router'
import "./index.scss";
export default {
  components:{
    Md
  },
  data() {
    return {
      docRouter
    }
  }
}
</script>