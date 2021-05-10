<template src='./template.html'>
  
</template>

<script>
export default {
    data() {
        return{
            active1:false,
            active2:false,
            data:[
                {
                    year: '2019.02',
                    content: '僑光科技大學設計與資訊學院院長',
                },
                {
                    year: '2018.08',
                    content: '僑光科技大學資訊科技系教授兼主任',
                },
                {
                    year: '2017.08',
                    content: '崑山科技大學電腦與通訊系教授 (教字第142393號)',
                },
                {
                    year: '2015.02 - 2018.07',
                    content: '創新創業育成中心副主任',
                },
                {
                    year: '2011.12 - 2017.07',
                    content: '崑山科技大學電腦與通訊系副教授 (副字第042540號)',
                },
                {
                    year: '2008.08 - 2011.11.',
                    content: '崑山科技大學電腦與通訊系助理教授 (助理字第024475號)',
                },
                {
                    year: '2008 - 2015',
                    content: 'IEEE member',
                },
                {
                    year: '2002.06 - 2002.11',
                    content: '國家高速電腦中心(財團法人成大發展基金會)助理研究員',
                },
                {
                    year: '2001.08 - 2002.04',
                    content: '麟瑞科技股份有限公司網路工程師',
                },
                {
                    year: '1999.09 - 2001.06',
                    content: '成功大學資訊工程所網路助教',
                },
            ],
            data2:[
                {
                    year: '2020',
                    content: '僑光科技大學校內畢業專題競賽 106 級 第一名 <AI 視覺輔助室內設計',
                },
                {
                    year: '2020',
                    content: '僑光科技大學校內畢業專題競賽 106 級 佳作 <人臉識別相簿自動分類管理系統>',
                },
                {
                    year: '2020',
                    content: '僑光科技大學校內畢業專題競賽 106 級 佳作<以類神經網路對手寫漢字及書法字進行風格轉換 ',
                },
                {
                    year: '2019',
                    content: '全國第一屆技職院校大手攜小手物聯網創新應用競賽：佳作',
                },
                {
                    year: '2019',
                    content: '全國金腦獎專題競賽 : 優良獎   <AI智慧收銀機 >',
                },
                {
                    year: '2019',
                    content: 'IETAC 專題競賽 : 佳作   <以 VR 模式製作商場店家資訊系統>',
                },
                {
                    year: '2018',
                    content: '高雄 KIDE 國際發明展：銀牌獎 <天氣盒子>',
                },
                {
                    year: '2018',
                    content: '明日之星創新創業競賽：銀牌獎 <智慧椅墊>',
                },

            ]
        }
    },
    props: [
        'scroll',
        'scroll2'
    ],

    methods:{
      ExperiencesOpen(){
          this.active1 = !this.active1
      },
        ExperiencesOpen2(){
          this.active2 = !this.active2
      },
    }
}
</script>

<style>

</style>