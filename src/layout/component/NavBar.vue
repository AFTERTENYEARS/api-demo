<template>
  <div class="nav-bar-container">
    <div class="nav-logo" @click="handleLogo">template name</div>
    <div class="nav-menu">
      <div v-for="menuItem in menus" :key="menuItem.item">
        <div class="nav-item" @click="handleMenuItem(menuItem.path)">
          <div class="text">{{ menuItem.item }}</div>
          <div
            v-show="`${menuItem === current ? 'mark' : ''}`"
            class="mark"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menus() {
      return this.$store.state.nav.menus.filter((menuItem) => {
        return menuItem.hidden !== true;
      });
    },
    current() {
      return this.$store.state.nav.current;
    },
  },
  methods: {
    handleLogo() {
      if (!(this.current && this.current.path === "/")) {
        this.$router.push("/");
      }
    },
    handleMenuItem(path) {
      if (!(this.current && this.current.path && this.current.path === path)) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar-container {
  height: 58px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  background-color: #ffffff;
  border-bottom: solid 1px #f0f0f0;

  .nav-logo {
    height: 54px;
    line-height: 54px;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }

  .nav-menu {
    height: 34px;
    display: flex;
    flex-direction: row;
  }

  .nav-item {
    margin-left: 18px;
    margin-top: 6px;
    cursor: pointer;
    .text {
      font-size: 14px;
      font-weight: 500;
    }
    .mark {
      background-color: #47bd87;
      width: 100%;
      height: 2px;
    }
  }
}
</style>