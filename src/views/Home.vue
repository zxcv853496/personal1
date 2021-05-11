<template>
  <div class="home">
    <div class="section">
      <div class="banner">
        <div class="copy">
          <p>&copy; 2021 8926ITL成員</p>
        </div>
        <h3 class="content animate__animated animate__fadeInUp">
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
                TANet 2020-論文
              </td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-user-friends"></i>：
              </td>
              <td>
                許惟元
              </td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-table"></i>：
              </td>
              <td>
                2020.09.10
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="hand-container">
        <button class="hand-arrow"></button>
      </div>
    </div>
    <Teacher :scroll="scroll" :scroll2='scroll2'/>
    <Personal :scroll="personal_scroll" :scroll2="personal_scroll2"
    :scroll3='personal_scroll3'/>
    <Introduction :scroll='introduction_scroll' :scroll2='
      introduction_scroll2'/>
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
      scroll: false,
      scroll2:false,
      personal_scroll:false,
      personal_scroll2:false,
      personal_scroll3:false,
      introduction_scroll:false,
      introduction_scroll2:false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods:{
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // var scroll = scrollTop - this.i;
      // this.i = scrollTop;
      if (scrollTop > 100) {
        this.scroll = true
      } else {
        this.scroll = false
      }
      if (scrollTop > 900) {
        this.scroll2 = true
      } else {
        this.scroll2 = false
      }

      if (scrollTop > 1865) {
        this.personal_scroll = true
      } else {
        this.personal_scroll = false
      }
      if (scrollTop > 2000) {
        this.personal_scroll2 = true
      } else {
        this.personal_scroll2 = false
      }
      if (scrollTop > 2374) {
        this.personal_scroll3 = true
      } else {
        this.personal_scroll3 = false
      }
      if (scrollTop > 2850) {
        this.introduction_scroll = true
      } else {
        this.introduction_scroll = false
      }
      if (scrollTop > 3950) {
        this.introduction_scroll2 = true
      } else {
        this.introduction_scroll2 = false
      }
      console.log(scrollTop)
    },
  }
}
</script>
