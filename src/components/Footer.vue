<template>
  <div id="footer" class="container-fluid">
    <p class="copy">
      Copyright &copy; 2020 - {{ new Date().getFullYear() }} 株式会社寛宝
    </p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
</style>
