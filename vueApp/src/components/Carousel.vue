<template>
    <div class="weike_nav">
        <ul class="clearfix">
            <li v-for="item in sorts">
                <a v-link="{name:'topic',params:{id:item.id}}">
                    <img :src="item.pic" alt="">
                    <p>{{item.sName}}</p>
                </a>
            </li>
        </ul>
    </div>

        <section class="indexslider">
        <div class="swiper-container">
          <div class="swiper-wrapper">

            <div class="swiper-slide" v-for="item in Carousel">
                <img :src="item.pic">
                    <div class="topzhezhao">
                        <div class="leftslidecontent">
                            <p>惊爆价<span>{{item.price}}</span></p>
                            <p>{{item.describe}}</p>
                        </div>
                        <a href="#">立即购买</a>
                    </div>
                </div>
          
        

          </div>
          <!-- <div class="swiper-pagination"></div> -->
        </div>
    </section>
</template>
<script>
    export default {
        replace:true,
        props: ['Carousel']
    }
</script>
<style>
.indexslider{width: 100%;height: 2rem;position: relative;}
.indexslider .swiper-slide,.swiper-wrapper{ height: 2rem; }
.swiper-slide img{width: 100%;height: 2rem;}
.topzhezhao {height: .45rem;width: 100%;position: absolute;bottom: 0;left: 0;opacity: 0.7;background-color: #000;z-index: 999;}
.topzhezhao .leftslidecontent{width: 2rem; height: .45rem; float: left; background-color: #000;} 
.leftslidecontent p{line-height: .2rem; display: block; width: 2rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #fff; text-indent: .1rem; background-color: #000;} 
.topzhezhao a{width: 1rem; height: .3rem; line-height: .3rem; background-color: #1fa67a;opacity: 0.9; color: #fff; border-radius: .1rem; display: block; text-align: center; font-size: .18rem; margin-top: .07rem; margin-right: .05rem; float: right;}
</style>
