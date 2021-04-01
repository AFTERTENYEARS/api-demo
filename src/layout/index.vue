<template>
  <div class="layout">
    <nav-bar class="nav"></nav-bar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { NavBar } from "./component";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: burlywood;

  .nav {
    height: 58px;
    width: 100vw;
    position: absolute;
  }

  .main {
    position: absolute;
    top: 58px;
    height: calc(100vh - 58px);
    width: 100vw;
    background-color: #f4f4f4;
    overflow: auto;
  }
}
</style>