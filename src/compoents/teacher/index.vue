<template src='./template.html'>
  
</template>

<script>
export default {
    data() {
        return{
            active:false,
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
            ]
        }
    },

    methods:{
      ExperiencesOpen(){
          this.active = !this.active
      }  
    }
}
</script>

<style>

</style>