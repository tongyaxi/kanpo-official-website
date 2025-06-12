<template>
  <div id="BusinessDescription">
    <div class="banner container-fuild text-center"></div>
    <div class="container">
      <div class="row BusinessDescription-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive center-block"
            src="@/assets/img/business_description.png"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <p class=".text-justify">
            私たちは、生活雑貨・ペット用品を中心に、毎日の暮らしを豊かにする商品を日本全国のお客様へお届けするEC（電子商取引）専門企業です。<br />
            現在、以下のオンラインプラットフォームを通じて販売を行っております：<br />
            楽天市場<br />
            Amazon.co.jp<br />
            Yahoo!ショッピング（近日予定）
          </p>
          <p class=".text-justify">
            商品の仕入れから販売・カスタマーサポートまで一貫して自社で対応しており、高品質かつリーズナブルな商品ラインナップと、迅速・丁寧な対応により、多くのお客様から高い評価をいただいております。<br />
            今後は自社ブランドの開発や海外市場への展開も視野に入れ、より多様なニーズに応えるサービスを提供してまいります。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "BusinessDescription",
  data() {
    return {};
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.BusinessDescription-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.BusinessDescription-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}

/* 手机端适配 */
@media screen and (max-width: 767px) {
  .banner {
    font-size: 24px;
    height: 100px;
    line-height: 100px;
  }

  .BusinessDescription-container {
    padding: 20px 0;
  }

  .BusinessDescription-container > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .BusinessDescription-container > div > p {
    font-size: 12px;
    line-height: 1.8rem;
    margin-bottom: 20px;
  }

  .BusinessDescription-container img {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }
}
</style>
