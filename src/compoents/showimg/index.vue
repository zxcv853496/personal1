<template src='./template.html'>
  
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
    data(){
        return{
            slides:[
                {
                    title:'123',
                    desc:'456',
                    img:'/img/introduction-banner.jpg'
                },
                {
                    title:'123',
                    desc:'456',
                    img:'/img/introduction-banner.jpg'
                },
                {
                    title:'123',
                    desc:'456',
                    img:'/img/introduction-banner.jpg'
                },
                {
                    title:'123',
                    desc:'456',
                    img:'/img/introduction-banner.jpg'
                },
                {
                    title:'123',
                    desc:'456',
                    img:'/img/introduction-banner.jpg'
                },
                {
                    title:'123',
                    desc:'456',
                    img:'/img/introduction-banner.jpg'
                },
                {
                    title:'123',
                    desc:'456',
                    img:'/img/introduction-banner.jpg'
                },
                
            ]      
        }
    },
    compoents: {
        Carousel3d,
        Slide   
    }

}
</script>

<style>

</style>