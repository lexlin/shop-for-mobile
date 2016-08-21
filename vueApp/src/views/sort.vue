<template>
<div class="mt50"></div>
<list :productslist="sorts"></list>   
</template>
<script>
    export default {
        data(){
            return {
                 sorts:[
                    {id:1,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:true,is_hot:false,status:'新品'},
                    {id:2,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:true,is_hot:false,status:'新品'},
                    {id:3,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:false,is_hot:false,status:'推荐'},
                    {id:4,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:false,is_hot:true,status:'热销'},
                    {id:5,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:true,is_hot:false,status:'新品'},
                    {id:6,pic:'../src/assets/images/product/33.jpg',name:'标题标题',content:'内容内容内容内容内容内容内容',price:700,is_new:true,is_hot:false,status:'热销'}
                ]
            }
        },
        components:{
            "list":require('../components/list.vue'),

        }
    }
</script>
<style>
.mt50{
    margin-top: .6rem;
}
 
</style>

