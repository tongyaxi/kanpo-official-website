<template>
  <div id="ContactUs">
    <!-- ヘッダーセクション -->
    <div class="contact-header">
      <div class="overlay"></div>
      <div class="container">
        <div class="header-content">
          <h1 class="wow fadeIn">お問い合わせ</h1>
          <p class="wow fadeIn" data-wow-delay="0.2s">
            お客様のご質問やご要望をお聞かせください
          </p>
        </div>
      </div>
    </div>

    <!-- 問い合わせ方法セクション -->
    <div class="contact-methods section-padding">
      <div class="container">
        <div class="row">
          <div
            v-for="(item, index) in contactMethods"
            :key="index"
            class="col-xs-12 col-sm-6 col-lg-4 mb-4"
          >
            <div
              class="contact-card wow fadeInUp"
              :data-wow-delay="`${index * 0.2}s`"
            >
              <div class="card-icon">
                <img :src="item.logo" :alt="item.title" />
              </div>
              <h3>{{ item.title }}</h3>
              <div class="card-content" v-html="item.content"></div>
              <a v-if="item.action" :href="item.actionLink" class="btn-contact">
                {{ item.action }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- お問い合わせフォームセクション -->
    <div id="contact-form" class="contact-form-section section-padding">
      <div class="container">
        <div class="section-header text-center wow fadeIn">
          <h2>お問い合わせフォーム</h2>
          <div class="section-divider"></div>
          <p>下記フォームに必要事項をご記入の上、送信してください</p>
        </div>

        <div class="contact-form-wrapper wow fadeIn" data-wow-delay="0.3s">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">お名前 <span class="required">*</span></label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <label for="email"
                >メールアドレス <span class="required">*</span></label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject">件名</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label for="message"
                >お問い合わせ内容 <span class="required">*</span></label
              >
              <textarea
                id="message"
                v-model="form.message"
                class="form-control"
                rows="6"
                required
              ></textarea>
            </div>

            <div class="form-group privacy-policy">
              <div class="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="privacy"
                  v-model="form.privacyAgreed"
                  required
                />
                <label for="privacy">
                  <a href="#" @click.prevent="showPrivacyPolicy"
                    >プライバシーポリシー</a
                  >に同意します
                </label>
              </div>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="btn-submit"
                :disabled="!form.privacyAgreed"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "ContactUs",
  data() {
    return {
      contactMethods: [
        {
          logo: require("@/assets/img/tel.png"),
          title: "電話によるお問い合わせ",
          content:
            "<p>お急ぎの場合は、お電話でお問い合わせください。</p>" +
            "<div class='contact-detail'><i class='fas fa-clock'></i> 営業時間：平日 10:00〜17:00（土日祝を除く）</div>" +
            "<div class='contact-detail'><i class='fas fa-phone-alt'></i> Tel：<a href='tel:0503159984'>050-3159-9984</a></div>",
          action: "電話をかける",
          actionLink: "tel:05031599984",
        },
        {
          logo: require("@/assets/img/computer.png"),
          title: "Eメールによるお問い合わせ",
          content:
            "<p>商品やご注文に関するご質問、取引に関するご相談など、下記メールアドレスまでご連絡ください。</p>" +
            "<div class='contact-detail'><i class='fas fa-envelope'></i> <a href='mailto:hirotakainteriama@gmail.com'>hirotakainteriama@gmail.com</a></div>" +
            "<div class='contact-note'>（24時間受付／内容確認後、順次ご返信いたします）</div>",
          action: "メールを送る",
          actionLink: "mailto:hirotakainteriama@gmail.com",
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "お問い合わせフォーム",
          content:
            "<p>下記のフォームからお問い合わせいただくと、担当者より折り返しご連絡いたします。</p>" +
            "<div class='contact-note'>必要事項をご記入の上、送信してください。</div>",
          action: "フォームに移動",
          actionLink: "#contact-form",
        },
      ],
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyAgreed: false,
      },
    };
  },
  mounted() {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: true,
    }).init();
  },
  methods: {
    submitForm() {
      // フォーム送信処理をここに実装
      alert(
        "お問い合わせありがとうございます。担当者より折り返しご連絡いたします。"
      );
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyAgreed: false,
      };
    },
    showPrivacyPolicy() {
      // プライバシーポリシーを表示する処理
      alert("プライバシーポリシーページに遷移します");
      // this.$router.push('/privacy-policy');
    },
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>

<style scoped>
/* 基本スタイル */
#ContactUs {
  font-family: "Noto Sans JP", sans-serif;
  color: #333;
}

.section-padding {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.section-header {
  margin-bottom: 50px;
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
  margin: 15px auto;
}

.section-header p {
  font-size: 18px;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.mb-4 {
  margin-bottom: 30px;
}

/* ヘッダースタイル */
.contact-header {
  position: relative;
  background: url("../assets/img/banner_2.jpg") center/cover no-repeat;
  padding: 100px 0;
  color: #fff;
  text-align: center;
}

.contact-header .overlay {
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

/* 問い合わせ方法カード */
.contact-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 70px;
  height: 70px;
  background-color: rgba(30, 115, 190, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
}

.card-icon img {
  width: 35px;
  height: 35px;
}

.contact-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1e73be;
  margin-bottom: 20px;
  text-align: center;
}

.card-content {
  flex-grow: 1;
  margin-bottom: 25px;
}

.card-content p {
  margin-bottom: 15px;
  line-height: 1.6;
}

.contact-detail {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
}

.contact-detail i {
  margin-right: 10px;
  color: #1e73be;
  width: 20px;
  text-align: center;
}

.contact-detail a {
  color: #1e73be;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-detail a:hover {
  text-decoration: underline;
}

.contact-note {
  font-size: 14px;
  color: #777;
  margin-top: 10px;
  font-style: italic;
}

.btn-contact {
  display: inline-block;
  background-color: #1e73be;
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
  text-align: center;
}

.btn-contact:hover {
  background-color: #165c96;
}

/* お問い合わせフォーム */
.contact-form-section {
  background-color: #f9f9f9;
}

.contact-form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.required {
  color: #e74c3c;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #1e73be;
  outline: none;
}

textarea.form-control {
  resize: vertical;
}

.privacy-policy {
  margin-bottom: 25px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.checkbox-wrapper input[type="checkbox"] {
  margin-right: 10px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.checkbox-wrapper label {
  cursor: pointer;
  user-select: none;
  font-weight: normal;
  margin-top: 3px;
  margin-bottom: 0;
}

.checkbox-wrapper a {
  color: #1e73be;
  text-decoration: none;
}

.checkbox-wrapper a:hover {
  text-decoration: underline;
}

.privacy-policy a:hover {
  text-decoration: underline;
}

.btn-submit {
  background-color: #1e73be;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #165c96;
}

.btn-submit:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}

/* 手机端适配 */
@media screen and (max-width: 767px) {
  .section-padding {
    padding: 50px 0;
  }

  .contact-header {
    padding: 60px 0;
  }

  .header-content h1 {
    font-size: 32px;
  }

  .header-content p {
    font-size: 16px;
  }

  .contact-form-wrapper {
    padding: 30px 20px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .btn-submit {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
