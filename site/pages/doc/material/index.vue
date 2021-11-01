<template>
  <div class="doc-project">
    <div class="home-gist-content">
      <a className="home-gist-item home-gist-web" href="http://121.5.123.5:8022" target="_blank">
        <div className="home-gist-wrap">
          <div className="home-gist-img home-gist-img-1"></div>
          <div className="home-gist-title">material</div>
          <div className="home-gist-describe">
            基于业务代码,形成公共组件以及通用代码,提高复用率。
          </div>
        </div>
        <div className="home-gist-bottom">
          查看详情
        </div>
      </a>
      <span className="home-gist-item home-gist-web home-gist-web-disable">
        <div className="home-gist-wrap">
          <div className="home-gist-img home-gist-img-3"></div>
          <div className="home-gist-title">v-echart</div>
          <div className="home-gist-describe">
            封装精致图标组件
          </div>
        </div>
        <div className="home-gist-bottom">
          暂未完成...
        </div>
      </span>
      <span className="home-gist-item home-gist-web home-gist-web-disable">
        <div className="home-gist-wrap">
          <div className="home-gist-img home-gist-img-3"></div>
          <div className="home-gist-title">v-map</div>
          <div className="home-gist-describe">
            实用地图组件
          </div>
        </div>
        <div className="home-gist-bottom">
          暂未完成...
        </div>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'ButtonMd',
    components: {
    },
    data () {
      return {
        lang: 'zh'
      }
    },
    created() {
      var lang = window.localStorage.getItem('lv_lang')
      if (lang) {
        this.lang = lang
      } else {
        this.lang = 'zh'
      }
    }
  }
</script>

<style lang="scss">
.doc-project{
  .home-gist-content{
    display: flex;
    .home-gist-item{
      width: 25%;
      text-align: center;
      border: 1px solid #fb663866;
      margin: 10px 20px;
      min-height: 40px;
      line-height: 40px;
      border-radius: 8px;
      cursor: pointer;
      &:hover{
        border: 1px solid #fb6638aa;
        box-shadow: 1px 2px 5px #888888;
      }
      .home-gist-wrap{
        padding: 20px;
        height: 274px;
        .home-gist-img{
          display: inline-block;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .home-gist-img-1{
          background: url(./images/img4.jpg) no-repeat;
          background-size: 100% 100%;
        }
        .home-gist-img-2{
          background: url(./images/img2.jpg) no-repeat;
          background-size: 100% 100%;
        }
        .home-gist-img-3{
          background: url(./images/img3.jpg) no-repeat;
          background-size: 100% 100%;
        }
        .home-gist-title{
          font-size: 32px;
          color: #fb6638;
          padding: 10px 0px;
        }
        .home-gist-describe{
          color: #999;
          font-size: 14px;
          line-height: 20px;
        }
      }
      .home-gist-bottom{
        border-top: 1px solid #fb663866;
        color: #666;
      }
    }
    .home-gist-web-disable{
      background: #eee;
      cursor: not-allowed;
    }
  }
}
</style>
