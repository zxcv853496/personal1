<template src="./template.html"> </template>

<script>
export default {
  data() {
    return {
      scroll: false,
      menuopen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // var scroll = scrollTop - this.i;
      // this.i = scrollTop;
      if (scrollTop > 0) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    },

    menuOpen() {
      this.menuopen =! this.menuopen
    }
  },
};
</script>

<style></style>
