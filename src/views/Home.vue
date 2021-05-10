<template>
  <div class="home">
    <div class="section">
      <div class="banner">
        <div class="copy">
          <p>&copy; 2021 8926ITL成員</p>
        </div>
        <h3 class="content">
          <p>2021.03.01 - 人才招募中</p>
          <i class="fas fa-caret-right"></i>
        </h3>
        <div class="gold">
          <div class="gold-title">
            <i class="far fa-thumbs-up"></i>金榜題名
          </div>
          <table>
            <tr>
              <td class="title">
                <i class="fas fa-trophy"></i>：
              </td>
              <td class="title">
                大手攜小手-物聯網程式設計競賽
              </td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-user-friends"></i>：
              </td>
              <td>
                陳峻暐 許惟元 徐偉程
              </td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-table"></i>：
              </td>
              <td>
                2021.03.01
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="hand-container">
        <button class="hand-arrow"></button>
      </div>
    </div>
    <Teacher />
    <Personal />
    <Introduction />
    <Showimg />
  </div>
</template>

<script>
import Teacher from '../compoents/teacher/index'
import Personal from '../compoents/personal/index'
import Introduction from '../compoents/introduction/index'
import Showimg from '../compoents/showimg/index'
export default {
  name: 'Home',
  components: {
    Teacher,
    Personal,
    Introduction,
    Showimg,
  },
  data() {
    return {
      color: 'red',
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      console.log(scrollTop)
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
  },

}
</script>
