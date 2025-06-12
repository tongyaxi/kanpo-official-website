<template>
  <div id="HomePage">
    <!-- 事業内容・企業情報セクション -->
    <div class="section-wrapper service-section">
      <div class="container">
        <div class="CompanyInformation-container row">
          <div
            class="CompanyInformation-item col-xs-12 col-sm-6 col-md-6 wow slideInUp"
            v-for="(item, index) in serviceList"
            :key="index"
            @click="ServiceClick(item.id)"
          >
            <div class="CompanyInformation-item-wrapper">
              <div class="CompanyInformation-item-img">
                <img :src="item.img" :alt="item.title" />
                <div class="overlay"></div>
              </div>
              <div class="CompanyInformation-item-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.eng_title }}</p>
                <div class="btn-more">詳細を見る</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 新着情報セクション -->
    <div class="section-wrapper news-section">
      <div class="container">
        <div class="section-header text-center">
          <h2>新着情報</h2>
          <p>Company News</p>
        </div>

        <div class="news-list">
          <div
            v-for="(item, index) in newsList.slice(
              0,
              showAllNews ? newsList.length : 4
            )"
            :key="index"
            class="news-item wow fadeIn"
            data-wow-delay="0.2s"
          >
            <div class="news-date">
              <span class="day">{{ item.date }}</span>
              <span class="year">{{ item.year }}</span>
            </div>
            <div class="news-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.introduce }}</p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button class="btn-view-all" @click="toggleNewsView">
            {{ showAllNews ? "表示を減らす" : "ニュース一覧を見る" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "HomePage",
  data() {
    return {
      showAllNews: false,
      serviceList: [
        {
          id: "section-1",
          title: "事業内容",
          eng_title: "Business Services",
          img: require("@/assets/img/businessServices.png"),
        },
        {
          id: "section-2",
          title: "企業情報",
          eng_title: "Company Information",
          img: require("@/assets/img/companyInformation.png"),
        },
      ],
      newsList: [
        {
          id: "001",
          title: "商標登録申請",
          introduce:
            "ブランドの信頼性向上と知的財産保護のため、商標登録の申請を行いました。",
          date: "03",
          year: "2025",
        },
        {
          id: "002",
          title: "Amazon店舗オーブン",
          introduce:
            "より多くのお客様に商品をお届けするため、Amazonに公式店舗をオープンいたしました。",
          date: "11",
          year: "2024",
        },
        {
          id: "003",
          title: "管野文惠が代表取締役に就任",
          introduce:
            "2024年4月、管野文惠が新たに代表取締役に就任いたしました。今後とも変わらぬご支援を賜りますようお願い申し上げます。",
          date: "04",
          year: "2024",
        },
        {
          id: "004",
          title: "本社を神奈川県相模原市中央区へ移転",
          introduce:
            "業務拡大に伴い、本社を神奈川県相模原市中央区へ移転いたしました。",
          date: "04",
          year: "2024",
        },
        {
          id: "005",
          title: "楽天店舗オープン",
          introduce:
            "国内最大級のオンラインモール「楽天市場」にて、当社の公式ショップを開設しました。",
          date: "08",
          year: "2022",
        },
        {
          id: "006",
          title: "会社設立",
          introduce:
            "「株式会社寛宝」は、2020年に設立されました。お客様の暮らしに寄り添う商品とサービスを提供してまいります。",
          date: "07",
          year: "2020",
        },
      ],
    };
  },
  mounted() {
    this.initWow();
  },
  methods: {
    initWow() {
      new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 100,
        mobile: true,
        live: true,
      }).init();
    },
    ServiceClick(id) {
      this.$router.push({
        name: "companyinfodetail",
        params: {
          id: id,
        },
      });
    },
    toggleNewsView() {
      this.showAllNews = !this.showAllNews;

      // スムーズなスクロールを追加（オプション）
      if (this.showAllNews) {
        this.$nextTick(() => {
          const el = document.querySelector(".news-list");
          if (el) {
            window.scrollTo({
              top: el.offsetTop + el.clientHeight - window.innerHeight / 2,
              behavior: "smooth",
            });
          }
        });
      }
    },
  },
};
</script>
<style scoped>
/* 共通スタイル */
#HomePage {
  width: 100%;
  color: #333;
  font-family: "Noto Sans JP", sans-serif;
}

.section-wrapper {
  padding: 80px 0;
}

.section-header {
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-header p {
  font-size: 16px;
  color: #707070;
}

/* サービスセクション */
.service-section {
  background-color: #f9f9f9;
}

.CompanyInformation-container {
  margin-bottom: 30px;
}

.CompanyInformation-item {
  margin-bottom: 30px;
}

.CompanyInformation-item-wrapper {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  height: 300px;
}

.CompanyInformation-item-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.CompanyInformation-item-img {
  width: 100%;
  height: 300px;
  position: relative;
}

.CompanyInformation-item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.CompanyInformation-item-img .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
}

.CompanyInformation-item-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  color: white;
  z-index: 2;
}

.CompanyInformation-item-content h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.CompanyInformation-item-content p {
  font-size: 14px;
  margin-bottom: 15px;
  opacity: 0.9;
}

.btn-more {
  display: inline-block;
  border: 2px solid white;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;
}

.CompanyInformation-item-wrapper:hover .btn-more {
  opacity: 1;
  transform: translateY(0);
}

/* 新着情報セクション */
.news-section {
  background-color: white;
}

.news-list {
  margin-bottom: 40px;
}

.news-item {
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  transition: all 0.3s;
}

.news-item:hover {
  color: #1e73be;
}

.news-date {
  flex: 0 0 100px;
  text-align: center;
  border-right: 2px solid #1e73be;
  padding-right: 20px;
  margin-right: 20px;
}

.news-date .day {
  display: block;
  font-size: 24px;
  font-weight: 700;
}

.news-date .year {
  display: block;
  font-size: 14px;
  color: #707070;
}

.news-content {
  flex: 1;
}

.news-content h4 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
}

.news-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.btn-view-all {
  background: transparent;
  border: 2px solid #1e73be;
  color: #1e73be;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-view-all:hover {
  background: #1e73be;
  color: white;
}

/* モバイル対応のスタイル */
@media (max-width: 767px) {
  .section-wrapper {
    padding: 40px 0;
  }

  .section-header h2 {
    font-size: 24px;
  }

  .section-header p {
    font-size: 14px;
  }

  .CompanyInformation-item-content h3 {
    font-size: 20px;
  }

  .CompanyInformation-item-content p {
    font-size: 12px;
  }

  .news-item {
    flex-direction: column;
  }

  .news-date {
    flex: none;
    border-right: none;
    border-bottom: 1px solid #1e73be;
    padding-right: 0;
    margin-right: 0;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .news-date .day {
    font-size: 20px;
    margin-right: 8px;
  }

  .news-content h4 {
    font-size: 16px;
  }

  .btn-view-all {
    padding: 8px 20px;
    font-size: 14px;
  }

  .CompanyInformation-item-wrapper {
    height: 220px;
  }

  .CompanyInformation-item-img {
    height: 220px;
  }

  .CompanyInformation-item-content {
    padding: 20px;
  }

  .btn-more {
    opacity: 1;
    transform: translateY(0);
    font-size: 12px;
    padding: 5px 15px;
  }
}

@media (hover: none) {
  .btn-more {
    opacity: 1;
    transform: translateY(0);
  }

  .CompanyInformation-item-wrapper:hover {
    transform: none;
  }
}
</style>
