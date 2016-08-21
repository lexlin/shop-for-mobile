<template>
   
    <Carousel :Carousel="Carousel"></Carousel>
    <item :sorts="nav"></item>
    <list :productslist="item"></list>
</template>
<script>
    export default {
        data(){
            return {
                nav:[
                    {id:1,pic:'../src/assets/images/test/1.png',name:'分类'},
                    {id:2,pic:'../src/assets/images/test/2.png',name:'大聚惠'},
                    {id:3,pic:'../src/assets/images/test/3.png',name:'菜篮子'},
                    {id:4,pic:'../src/assets/images/test/4.png',name:'母婴'},
                    {id:5,pic:'../src/assets/images/test/5.png',name:'我的'},
                    {id:6,pic:'../src/assets/images/test/6.png',name:'必抢'},
                    {id:7,pic:'../src/assets/images/test/7.png',name:'钱包'},
                    {id:8,pic:'../src/assets/images/test/8.png',name:'身边'},
               

                ],
                item:[
                    {id:1,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:true,is_hot:false,status:'新品'},
                    {id:2,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:true,is_hot:false,status:'新品'},
                    {id:3,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:false,is_hot:false,status:'推荐'},
                    {id:4,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:false,is_hot:true,status:'热销'},
                    {id:5,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:true,is_hot:false,status:'新品'},
                    {id:6,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:true,is_hot:false,status:'热销'}
                ]
                ,
                Carousel:[
                    {id:1,pic:'../src/assets/images/sliderbanner/1.jpg',price:200,describe:'描述描述描述描述描述描述描述描述'},
                    {id:2,pic:'../src/assets/images/sliderbanner/2.jpg',price:998,describe:'描述描述描述描述描述描述描述描述'},
                    {id:3,pic:'../src/assets/images/sliderbanner/3.jpg',price:888,describe:'描述描述描述描述描述描述描述描述'},
                    {id:4,pic:'../src/assets/images/sliderbanner/4.jpg',price:555,describe:'描述描述描述描述描述描述描述描述'},

               
                ]

            }
        },
        components:{
            "Carousel":require('../components/Carousel.vue'),
            "Item":require('../components/sortitem.vue'),
            "List":require('../components/list.vue')
        }
    }
</script>
<style lang="sass">
    .top{
        width: 100%;
        height: 3rem;
    }
</style>

