<template>
  <div class="doc-project">
    <div class="home-gist-content">
      <a className="home-gist-item home-gist-web" href="http://121.5.123.5:8024" target="_blank">
        <div className="home-gist-wrap">
          <div className="home-gist-img home-gist-img-1"></div>
          <div className="home-gist-title">web</div>
          <div className="home-gist-describe">
            了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。
          </div>
        </div>
        <div className="home-gist-bottom">
          查看详情
        </div>
      </a>
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
  }
}
</style>
