<template>
  <div class = "doc div page-container">
    <div class = "doc-left lx-scroll-doc" >
      <div class = "logo" >
      </div> 
      <ul>
        <li class="doc-li" v-for="(item, index) in shareRouter" :key="index">
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
import shareRouter from './share-router'
import "./index.scss";
export default {
  data() {
    return {
      shareRouter
    }
  }
}
</script>