<template>
   <!--  <div class="topic">
        <p>{{topic.name}}</p>
        <p>{{topic.id}}</p>
    </div> -->
     <Carousel :Carousel="Carousel"></Carousel>
    <header class="detail-header">
            <li class="fl l-li"><i class="fa fa-angle-left"></i></li>
            <li class="fr r-li"><i class="fa fa-ellipsis-h"></i></li>
    </header>
 
    <section class="goods-info ui-border-b goods-normal">
    <p class="detail-title">
        （我的杂货铺）果然来了 惊爆价￥998
      
    </p>
 
    <div class="detail-price">
        <div class="price-l">
            <span>￥998.00</span>
            <del>￥1998.00</del>
        </div>       
    </div>
    <div class="purchase-num">
         <div class="l-num">库存<span><span>799</span>件</span></div>
         <div class="r-num quantity-components">
            <div class="num-opt">
              <div class="decrease">-</div>
              <div class="num-display"><input type="text" id="quantity" class="amount-input" value="1" maxlength="8" name="" style="display:block;width:100%;height:100%;"></div>
              <div class="increase">+</div>
              <span class="unit">件</span>
             </div>
            
         </div>
     </div>
</section>
<section class="goods-shop list-pic">
        <div class="label-act ui-border-b" >
            <a href="index.html">
                <div class="ico"><i class="fa fa-bank"></i></div>
                <div class="title">
                    <div class="shop-title">
                        <span>我的杂货铺</span>
                        <p class="shop-rank">
                            <i class="fa fa-star"></i> 
                            <i class="fa fa-star"></i> 
                            <i class="fa fa-star"></i> 
                            <i class="fa fa-star"></i> 
                            <i class="fa fa-star"></i> 
                            <!-- <img src="images/icon/start.jpg"> -->
                        </p>
                    </div>
                    <h2>进入店铺<i class="fa fa-angle-right"></i></h2>
                </div>
                <div class="arrow"></div>
            </a>
        </div>
    </section>
        <section class="tap-main">
    <ul>
        <li class="tap-l  fs14 on">图文详情</li>
        <li class="tap-r  fs14">产品参数</li>
    </ul>
    <div class="fl-show">
        <p class="product-title">图文详情</p>
        <!-- <img :src="../src/assets/images/product/product.png" alt=""  width="100%" height="100%"/> -->
    </div>
    <div class="fr-show" style="display: none;">
            <div class="content"><div class="s-l">品牌</div><div class="s-r">葡萄</div></div>
            <div class="content"><div class="s-l">货号</div><div class="s-r">001</div></div>
            <div class="content"><div class="s-l">产地</div><div class="s-r">中国</div></div>
            <div class="content"><div class="s-l">价格</div><div class="s-r">998</div></div>  
    </div>
    </section>
 <footer class="footer">
        <div class="area-l ">
        <p class="ui-border-r" >
            <a href="shopcart.html">
          <i class="fa fa-shopping-cart"></i>
            <span class="block">购物车</span>
            <span id="goodsCartCount" class="ui-badge-num" style="right: 0px; display: none;">0</span>
            </a>
        </p>
        <p id="collectDiv" class="ui-border-l ui-border-r " > 
                   <i class="fa fa-star-o"></i>
            <span class="block">收藏</span>
            <input type="hidden" id="favorited_collect" value="">
        </p>
     
    </div>
    <div class="area-r ">   
          <div id="bugNow" class="buy-now ">立即购买</div>
           <div id="addCart" class="add-cart ">加入购物车</div>
    </div>
    </footer>

</template>
<script>
    export default {
        data (){
        return {
            topic:{},
                 Carousel:[
                    {id:1,pic:'../src/assets/images/sliderbanner/1.jpg',price:200,describe:'描述描述描述描述描述描述描述描述'},
                    {id:2,pic:'../src/assets/images/sliderbanner/2.jpg',price:998,describe:'描述描述描述描述描述描述描述描述'},
                    {id:3,pic:'../src/assets/images/sliderbanner/3.jpg',price:888,describe:'描述描述描述描述描述描述描述描述'},
                    {id:4,pic:'../src/assets/images/sliderbanner/4.jpg',price:555,describe:'描述描述描述描述描述描述描述描述'},

               
                ]
        }
    },
    route:{
        data(transition){
            let _self = this;
            //获取url传的tab参数
         
            _self.topicId=transition.to.params.id;
         
            _self.topic = {
                name:'items',
                id:_self.topicId
            }
        }
    },
    components:{
     "Carousel":require('../components/Carousel.vue')
    }
    }
</script>
<style>


  .detail-header{width: 100%;height: .5rem; color: #FFFFFF; line-height: .5rem; font-size: .2rem;z-index: 999; position: fixed;top: 0; box-sizing: border-box;padding-left: .15rem;
padding-right: .15rem;}
.detail-header .r-li,.detail-header .l-li{ margin-top:.1rem;width: .35rem; text-align:center;height: .35rem;line-height: .35rem; border-radius: 50%; background-color: rgba(0,0,0,.4);}



.goods-info { padding: .047rem;  background-color: #fff;}
.goods-info .detail-title{color: #000; font-size: .12rem; word-break: break-all;}
.goods-info .detail-price{display: -webkit-box; display: flex; color: #b3b3b3;}
.goods-info .detail-price .price-l{text-align: left; display: block; width: 100%; -webkit-box-flex: 1; flex: 1;}
.goods-info .detail-price .price-l span{color: #1fa67a; font-size: .14rem; margin-right: 5px;}
.goods-info .detail-price .price-l del{font-size: .052rem;}
del{text-decoration: line-through;}
.goods-normal .purchase-num{height: .248rem; position: relative; display: -webkit-box; display: flex;}
.goods-normal .purchase-num .l-num{-webkit-box-flex: 2; flex: 2; line-height: .248rem; font-size: .056rem; color: #999; display: block;}
.goods-normal .purchase-num .r-num{-webkit-box-flex: 2; flex: 2;
position: relative; display: block; text-align: right; margin-right: 1.5rem;}
.quantity-components .num-opt{display: inline-block;}
.quantity-components .num-opt>div{float: left; text-align: center;}
.quantity-components .increase, .quantity-components .decrease{width: .2rem; height: .2rem; line-height: .2rem; border: 1px solid #ccc; font-size: 0.1rem; text-align: center; display: block; overflow: hidden;}
.quantity-components .num-display input{border: none; text-align: center; height: .2rem; width: .2rem;}
.quantity-components .num-display{width: .3rem; height: .2rem; line-height: .2rem; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; display: block;}
.quantity-components .unit{position: absolute; top: 50%; right: -.2rem; -webkit-transform: translate(0,-50%); transform: translate(0,-50%); margin-left: .025rem; font-size: .07rem;}
.goods-shop{background-color: #fff; margin-top: .165rem;}
.list-pic .label-act{height: .6586rem; padding-left: .11rem; display: -webkit-box; display: -moz-box; display: -ms-box; display: -o-box; display: box; box-sizing: border-box; border-bottom: 1px solid #dfdfdf;}
.list-pic .label-act>a{width: 100%; height: .281rem; line-height: .206rem; display: -webkit-box; display: -moz-box; display: -ms-box; display: -o-box; display: box;}
.shop-rank .fa-star{font-size: .12rem;}
.list-pic .label-act .ico{border-radius: 50%; border: 1px solid #1fa67a; width: .4rem; height: .4rem; margin: .1rem .2rem 0 0;}
.list-pic .label-act>a>div{-webkit-box-pack: center; -moz-box-pack: center; -ms-box-pack: center; -o-box-pack: center; box-pack: center; -webkit-box-align: center; -moz-box-align: center; -ms-box-align: center; -o-box-align: center; box-align: center; display: -webkit-box; display: -moz-box; display: -ms-box; display: -o-box; display: box;}
.list-pic .label-act .ico img{width: 100%; height: 100%; -webkit-border-radius: 50%; border-radius: 50%; overflow: hidden;}
.list-pic .label-act .title{box-sizing:border-box; -webkit-box-flex: 1; -moz-box-flex: 1; -ms-box-flex: 1; -o-box-flex: 1; box-flex: 1; text-align: right;}
.list-pic .label-act .shop-title{position: relative; display: -webkit-box; display: flex; width: 70%; height: .5rem; color: #333;}
.list-pic .label-act .shop-title span{position: absolute; width: 95%; height: .24rem; line-height: .24rem; overflow: hidden; text-align: left; top: 0; color: #b3b3b3; font-size: .12rem; text-overflow: ellipsis;}
.list-pic .label-act .shop-title .shop-rank{position: absolute; height: .24rem; line-height: .24rem; bottom: 0;}
.list-pic .label-act .title h2{font-size: .14rem; color: #b3b3b3; font-weight: 400; line-height: .6586rem; padding-right: .05rem; margin: 0;}
.list-pic .label-act .title h2 i{font-size: .2rem; color: #b3b3b3; font-weight: 400; line-height: .6586rem; padding-left: .05rem; margin: 0;}
.tap-main{display: block;background-color: #FFFFFF;width: 100%;height: .5rem;margin-bottom: .5rem;position: relative;}
.tap-main:after{content: ' '; display: block; clear: both;}
.tap-main ul{position: relative;width: 100%;height: 100%;display: -webkit-flex;display: flex;}
.tap-main ul li{flex: 1;cursor: pointer;position: relative;-webkit-flex: 1;text-align: center;line-height: .5rem;}
.tap-main ul li:after{content: ' '; display: block; clear: both;}
.tap-main ul li.on{color: #1fa67a;}
.tap-main ul li.on:after{display: block; content: ''; height: 0.03rem; position: absolute; z-index: 9; left: 5%; bottom: -0.05em; width: 90%; overflow: hidden; clear: both; background: #1fa67a;}
.tap-main .fr-show,.tap-main .fl-show{width: 100%;margin-bottom: .7rem;margin-top: .1rem;box-sizing: border-box;background-color: #fff;}
.fl-show .product-title{box-sizing: border-box;width: 100%;height: .3rem;font-size: .12rem;padding-left: .02rem;line-height: .3rem;border-left: .05rem solid #1fa67a;}
.fr-show .content{width: 100%;display: flex;display: -webkit-flex;font-size: .14rem;border-bottom: .01rem dashed #e7e7e7;}
.fr-show .s-l{flex: 1;padding-left: .05rem;display: block;height: .4rem;line-height: .4rem;}
.fr-show .s-r{display: block;flex: 2;height: .4rem;line-height: .4rem;}
.footer{background-color: #fff;z-index: 999;width: 100%;bottom: .52rem;position: fixed;display: flex;display: -webkit-flex;}
.footer .area-l{display: flex;display: -webkit-flex;flex: 1;}
.footer .area-r{flex: 1; color: #7a7a7a;display: flex;display: -webkit-flex;}
.ui-border-r,#collectDiv{flex: 1;}
.footer-btn .area-l p{position: relative; -webkit-box-flex: 1; flex: 1; padding-top: 13px; text-align: center; color: #7a7a7a; line-height: .08rem;}
.fa-shopping-cart,.fa-star-o,.fa-star{padding-top: .05rem;font-size: .2rem;color: #757575;}
.fa-bank{font-size: .2rem;}
.fa-bank,.fa-star{color: #1fa67a;}
.ui-border-r{border-right: 1px solid #dfdfdf; text-align: center;}
.ui-border-r a{color:#757575 ;}
.ui-border-r .block{display: block;line-height: .18rem;width: 100%;}
.buy-now,.add-cart{flex: 1;height: .5rem;color:#FFFFFF;line-height: .5rem;text-align: center;}
.buy-now{background-color: #1fa67a;}
.add-cart{background-color: #3d916c;} 


</style>































