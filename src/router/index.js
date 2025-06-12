import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/",
      name: "PageView",
      component: (resolve) => require(["@/view/PageView"], resolve),
      children: [
        {
          path: "/",
          redirect: "/home",
        },
        {
          path: "/home",
          name: "home",
          component: (resolve) => require(["@/view/HomePage"], resolve),
          meta: {
            title: "株式会社寛宝",
          },
        },
        {
          path: "/businessdescription",
          name: "businessdescription",
          component: (resolve) =>
            require(["@/view/BusinessDescription"], resolve),
          meta: {
            title: "事業内容 | 株式会社寛宝",
          },
        },
        {
          path: "/companyinformation",
          name: "companyinformation",
          component: (resolve) =>
            require(["@/view/CompanyInformation"], resolve),
          meta: {
            title: "企業情報 | 株式会社寛宝",
          },
        },
        {
          path: "/contactus",
          name: "contactus",
          component: (resolve) => require(["@/view/ContactUs"], resolve),
          meta: {
            title: "お問い合わせ | 株式会社寛宝",
          },
        },
        {
          path: "/companyinfodetail",
          name: "companyinfodetail",
          component: (resolve) =>
            require(["@/view/CompanyInfoDetail"], resolve),
          meta: {
            title: "企業情報詳細",
          },
        },
      ],
    },
  ],
});
