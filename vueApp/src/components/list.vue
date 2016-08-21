<template>
    <section class="product">
        <ul>
            <li class="new" v-for="item in productslist">
                <a v-link="{name:'items',params:{id:item.id}}">
                <div class="top" :class="{'new_p':item.is_new,'hot_p':item.is_hot}"></div>
                <span class="shuxing">{{item.status}}</span>
                    <div class="fl primg"><img :src="item.pic" class="lazy" data-original="images/product/33.jpg" style="display: inline;"></div>
                    <div class="fr prcontent">
                    <p class="title pl10">{{item.name}}</p>
                    <p class="content pl10">{{item.content}}</p>
                    <p class="price pl10">价格：<span class="money">{{item.price}}</span></p>
                    </div> 
                </a>
            </li>
           
        </ul>
    </section>
</template>
<script>
    export default {
        replace:true,
        props: ['productslist']
    }
</script>
<style>
.product{width: 100%;position: relative;margin-bottom: .58rem;}
.product ul li{min-height: 1.25rem;overflow: hidden;margin: .1rem;background-color: #fff;box-shadow: 0 0 .05rem #ccc;border: 1px solid #f2f2f2;}
.top{width: 0; height: 0; border-top: .6rem solid #1fa67a; border-right: .6rem solid transparent; position: relative; z-index: 990; cursor: pointer;}
.pl10{padding-left: .1rem;}
.shuxing{color: #fff;padding-top: .05rem;    padding-left: .1rem; width: .4rem;display: block; height: .4rem; position: relative;z-index: 999;margin-top: -.6rem;font-size: .14rem;transform:rotate(-45deg);   cursor: pointer;}
.primg,.primg img{width: 1rem; margin-top: -.24rem;}
.prcontent{width: calc(100% - 1rem); margin-top: -.4rem;}
.prcontent .title{font-size: .16rem; color:#4a534e; font-weight: bold;}
.prcontent .content{font-size: .13rem;color: #999;margin-top: .05rem;}
.prcontent .price{font-size: .14rem;color: #999;margin-top: .1rem;}
.money{color: #1fa67a;font-weight: bold;}
.hot_p{border-top-color: #eb6100;}
.new_p{border-top-color: #f39800;}
</style>