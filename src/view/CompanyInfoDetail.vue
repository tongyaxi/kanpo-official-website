<template>
  <div id="CompanyInfoDetail">
    <div class="banner container-fuild text-center"></div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>About US</p>
            <li
              :class="item.id == id ? 'active' : ''"
              v-for="(item, index) in serviceNavList"
              :key="index"
            >
              <a :href="'#' + item.id">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content wow zoomIn">
          <div
            class="content-block"
            v-for="(item, index) in serviceContentList"
            :key="index"
          >
            <h2 :id="item.id">
              {{ item.title }}
              <small>/ {{ item.eng_title }}</small>
            </h2>
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "CompanyInfoDetail",
  data() {
    return {
      id: "section-1",
      serviceNavList: [
        {
          id: "section-1",
          title: "事業内容",
        },
        {
          id: "section-2",
          title: "企業情報",
        },
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "事業内容",
          eng_title: "Business Description",
          content:
            "<h3>暮らしを彩る、生活雑貨とペット用品の専門EC</h3>" +
            "<p>私たち株式会社寛宝は、生活雑貨やペット用品を中心に、日々の暮らしに彩りと快適さをもたらす商品をお届けするEC（電子商取引）専門企業です。<br>全国のお客様一人ひとりのライフスタイルに寄り添い、毎日の生活がより豊かになるよう、厳選されたアイテムを取り揃えております。</p>" +
            "<h3>主要オンラインプラットフォームで展開中</h3>" +
            "<p>現在は、以下の主要オンラインプラットフォームを通じて商品を販売しております：<br><li>楽天市場</li><li>Amazon.co.jp</li><li>Yahoo!ショッピング（近日オープン予定）</li></p>" +
            "<h3>高品質と信頼を支える自社一貫体制</h3>" +
            "<p>商品の仕入れから、商品ページの制作、販売、出荷、カスタマーサポートに至るまで、すべての工程を自社で一貫して対応しております。" +
            "高品質でありながら価格にも配慮したラインナップ、そしてスピーディーかつ丁寧な対応により、多くのお客様から高いご評価をいただいております。<br>" +
            "今後は、自社ブランドの開発や海外市場への展開も積極的に視野に入れ、より多様化するニーズに柔軟に応えるサービス体制を構築してまいります。" +
            "暮らしをもっと快適に、もっと楽しく——私たちはそんな想いをカタチにして、お客様のもとへお届けします。</p>",
        },
        {
          id: "section-2",
          title: "企業情報",
          eng_title: "Company Information",
          content:
            "<h3>会社名</h3>" +
            "<p>株式会社寛宝（Kampo Co., Ltd.）</p>" +
            "<h3>設立</h3>" +
            "<p>2020年7月</p>" +
            "<h3>資本金</h3>" +
            "<p>200万円</p>" +
            "<h3>代表者</h3>" +
            "<p>代表取締役　管野文恵</p>" +
            "<h3>従業員数</h3>" +
            "<p>6名（アルバイト含む）</p>" +
            "<h3>取引銀行</h3>" +
            "<p>三菱東京UFJ銀行<br>楽天銀行</p>" +
            "<h3>所在地</h3>" +
            "<p>〒123-4567<br>東京都新宿区西新宿1-1-1</p>" +
            "<h3>連絡先</h3>" +
            "<p>電話：050-3159-9984<br>メール：hirotakainteriama@gmail.com",
        },
      ],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 300);
    $("#myNav").affix({
      offset: {
        top: 300,
      },
    });
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
  background-image: url("../assets/img/banner2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: #474747;
  border: 1px solid #474747;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}

/* 手机端适配 */
@media screen and (max-width: 767px) {
  .banner {
    font-size: 24px;
    height: 100px;
    line-height: 100px;
  }

  ul.nav-tabs {
    width: 100%;
    margin-top: 20px;
    border-radius: 0;
    box-shadow: none;
    border: none;
  }

  ul.nav-tabs li {
    border-top: none;
  }

  ul.nav-tabs p {
    font-size: 16px;
    padding: 8px 0;
  }

  ul.nav-tabs li a {
    padding: 6px 12px;
    font-size: 14px;
  }

  .content-block {
    margin: 30px 0;
  }

  .content-block > h2 {
    font-size: 20px;
    padding: 15px 0;
  }

  .content-block > h2 small {
    font-size: 14px;
  }
}
</style>
