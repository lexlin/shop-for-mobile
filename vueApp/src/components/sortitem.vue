<template>
    <nav class="nav-category ">
        <a href="#" v-for="item in sorts"><img width="45" height="45" :src="item.pic"><span>{{item.name}}</span></a>
    </nav>
</template>
<script>
    export default {
        replace:true,
        props: ['sorts']
    }
</script>
<style>
.nav-category{padding-top: .11rem; position: relative; background-color: #FFFFFF;}
.nav-category:after{ content: ''; clear: both;display: block;}
.nav-category a{width: 25%; float: left; font-size: 12px; text-decoration: none; color: #666; text-align: center; display: block; padding-bottom: 10px;}
.nav-category img{display: block; width: 40px; height: 40px; margin: 0 auto 6px auto;}
   
</style>
