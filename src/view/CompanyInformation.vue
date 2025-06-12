<template>
  <div class="company-information">
    <!-- ヘッダーセクション -->
    <div class="company-info-header">
      <div class="overlay"></div>
      <div class="container">
        <div class="header-content">
          <h1 class="wow fadeIn">会社概要</h1>
        </div>
      </div>
    </div>
    <div class="container mx-auto p-6">
      <!-- 会社概要セクション -->
      <div class="section-wrapper">
        <div class="company-overview-card">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="company-details wow fadeInRight">
              <div class="info-group">
                <h3 class="info-title">社名</h3>
                <p class="info-content">株式会社寛宝</p>
              </div>
              <div class="info-group">
                <h3 class="info-title">所在地</h3>
                <p class="info-content">
                  〒252-0236<br />
                  神奈川県相模原市中央区富士見3-16-11<br />
                </p>
              </div>
              <div class="info-group">
                <h3 class="info-title">連絡先</h3>
                <p class="info-content">
                  Tel:
                  <a href="tel:0503159984" class="contact-link"
                    >050-3159-9984</a
                  >
                </p>
              </div>
              <div class="info-group">
                <h3 class="info-title">設立</h3>
                <p class="info-content">2020年7月</p>
              </div>
            </div>
            <div class="info-group">
              <h3 class="info-title">資本金</h3>
              <p class="info-content">200万円</p>
            </div>
            <div class="info-group">
              <h3 class="info-title">代表者</h3>
              <p class="info-content">代表取締役　管野文恵</p>
            </div>
            <div class="info-group">
              <h3 class="info-title">従業員</h3>
              <p class="info-content">6名（アルバイト含め）</p>
            </div>
            <div class="info-group">
              <h3 class="info-title">取引銀行</h3>
              <p class="info-content">三菱東京UFJ銀行</p>
              <p class="info-content">楽天銀行</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import WOW from "wowjs";

onMounted(() => {
  new WOW.WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 100,
    mobile: true,
    live: true,
  }).init();
});
</script>

<style scoped>
/* 基本スタイル */
.company-information {
  font-family: "Noto Sans JP", sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ヘッダーセクション */
.header-section {
  position: relative;
  height: 400px;
  background: url("/company-building.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(30, 115, 190, 0.7), rgba(30, 115, 190, 0.9));
}

.header-content {
  position: relative;
  z-index: 10;
  color: white;
  padding: 0 20px;
}

.header-content h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.header-content p {
  font-size: 22px;
  max-width: 700px;
  margin: 0 auto;
}

/* セクションスタイル */
.section-wrapper {
  margin-bottom: 80px;
}

.section-header {
  margin-bottom: 40px;
  text-align: center;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1e73be;
}

.section-divider {
  width: 60px;
  height: 3px;
  background-color: #1e73be;
  margin: 0 auto;
}

/* 会社概要カード */
.company-overview-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-bottom: 60px;
  overflow: hidden;
}

.company-image-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.company-image {
  width: 100%;
  max-width: 280px; /* 最大幅を設定 */
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.company-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-group {
  margin-bottom: 5px;
}

.info-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #1e73be;
}

.info-content {
  font-size: 16px;
  line-height: 1.6;
}

.contact-link {
  color: #1e73be;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #165c96;
  text-decoration: underline;
}

/* 手机端适配 */
@media screen and (max-width: 767px) {
  .header-section {
    height: 250px;
  }

  .header-content h1 {
    font-size: 32px;
  }

  .header-content p {
    font-size: 16px;
  }

  .company-overview-card {
    padding: 20px;
  }

  .info-title {
    font-size: 16px;
  }

  .info-content {
    font-size: 14px;
    line-height: 1.4;
  }

  .company-image {
    max-width: 200px;
    margin-bottom: 20px;
  }

  .info-group {
    margin-bottom: 15px;
  }
}

/* 会社概要 */
.company-info-header {
  position: relative;
  background: url("../assets/img/company_building.png") center/cover no-repeat;
  padding: 100px 0;
  color: #fff;
  text-align: center;
}

.company-info-header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.header-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.header-content h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
}

.header-content p {
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto;
}
</style>
