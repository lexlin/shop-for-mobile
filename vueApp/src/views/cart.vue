<template>

<header id="cart">
	<i class="fa fa-shopping-cart" style="font-size:.2rem; padding-right:.05rem"></i>
		购物车
	</header>
		<section class="main">
		  <div class="null_shopping" style="display:none;">
                <div class="cart_pic"><i class="fa fa-cart-arrow-down" style="font-size:1rem;"></i></div>
                <h4>您还没有宝贝，赶快去逛逛吧！</h4>
                <p>
                    <a class="enter" href="index.html">马上去逛逛</a>
                </p>
            </div>
		<ul class="cartlist">
			   <li v-for="item in goods">
				<a href="" class="itemTitle">
					<img :src="item.pic" class="pl10 pr10"> 
					<span class="itemName bfs14">{{item.name}}</span> 
				</a>
				<div class="itemQty">
					<span class="qtyname fs14">
						数量
					</span>
					<div class="buynuminput"> 
						<span class="reduce">-</span>
						<span class="inp"><input type="text" name="" value="{{item.qty}}"></span>
						<span class="plus">+</span>
					</div>
				</div>
				<div style="clear: both;"></div>
				<div class="itemPrice">
					<span class="fs14 xiaoji">单价</span>
					<div class="buyxiaoji">
					<span class="total green bfs16">￥{{item.price}}</span>
					<span class="del"><i class="fa fa-trash-o"></i></span>
					</div>
				</div>
			</li>
		</ul>
	</section>
	<section class="onthebottom">
	    <div class="clearcart"><i class="fa fa-trash-o" style="font-size:.2rem; padding-right:.05rem"></i>清空</div>
	    <div class="totalprice">总价：<span class="green">￥{{total}}</span></div>
	    <div class="jiesuanbtn" >结算</div>
	</section>
</template>
<script>
    export default {
    	data(){
    		  return {
    		  	total:555,

                goods:[
                    {id:1,pic:'../src/assets/images/product/33.jpg',name:'分类',qty:1,price:100},
                    {id:2,pic:'../src/assets/images/product/33.jpg',name:'大聚惠',qty:2,price:100},
                    {id:3,pic:'../src/assets/images/product/33.jpg',name:'菜篮子',qty:3,price:100},
                    {id:4,pic:'../src/assets/images/product/33.jpg',name:'母婴',qty:1,price:100},
                    {id:5,pic:'../src/assets/images/product/33.jpg',name:'我的',qty:1,price:100},
                    {id:6,pic:'../src/assets/images/product/33.jpg',name:'必抢',qty:1,price:100},
                    {id:7,pic:'../src/assets/images/product/33.jpg',name:'钱包',qty:1,price:100},
                    {id:8,pic:'../src/assets/images/product/33.jpg',name:'身边',qty:1,price:100},
                    ]
                }
    	}

    }
</script>
<style>
	#cart{position: fixed; top: 0; left: 0; font-size: .16rem; color: #666; font-weight: 300; height: .5rem; width: 100%; line-height: .5rem; text-align: center; background-color: #fafafa;z-index: 999;border-bottom: solid .01rem #B3B3B3;box-shadow: 0 .01rem .01rem 0 #DFDFDF;}
header{padding: 0;margin: 0;}
.main{width: 99%;margin: .6rem auto 1.1rem auto;position: relative;  }
.main .cartlist{ width: 100%; }
.main .cartlist li{margin: .1rem;background-color: #fff;-webkit-box-shadow: 0 0 .05rem #ccc;-moz-box-shadow: 0 0 .05rem #ccc;box-shadow: 0 0 .05rem #ccc;
  border: .01 solid #f2f2f2;/*-moz-border-radius: .1rem;border-radius: .1rem;*/ min-height: 1rem;}
  .main .cartlist li .itemTitle {  display: block;overflow: hidden;border-bottom: .01rem dashed #e7e7e7;} 
.main .cartlist li a img{width: .5rem; float: left;}  
.itemTitle .itemName{line-height: .5rem; height: .5rem; display: inline-block; color: #666; }
.itemQty{ border-bottom: .01rem dashed #e7e7e7;padding-bottom: .05rem;}
.itemQty:after{	content:"";	clear: both;display: block;}
.itemQty .reduce,.itemQty .plus{width: .35rem;height: .25rem;line-height: .25rem; text-align:center; font-size:.18rem;display: block; float: left; border: .01rem solid #ccc; cursor: pointer;}
.itemQty .reduce{ border-right: none;}
.itemQty .plus{ border-left: none;}
.buynuminput{float: left; margin: .12rem 0 0 .15rem;}
.itemQty .qtyname{display: inline-block; margin: .15rem .1rem 0 .2rem;float: left;}
.itemQty .inp{width: .8rem;height: .25rem; float: left;} 
.itemQty .inp input{border:.01rem solid #ccc; text-align: center; width: .8rem;height: .25rem;font-weight: 800; border-radius: 0; box-shadow: none;} 
.itemPrice{margin-bottom: .1rem; padding-bottom: .1rem;padding-top: .1rem;   display: block; border-bottom: .01rem dashed #e7e7e7;}
.itemPrice:after{content:"";	clear: both;display: block;}
.buyxiaoji{    margin: .12rem 0 0 .15rem; float: left;}
.xiaoji{ float: left; margin:.15rem .1rem 0 .2rem;}
/*.total { margin:.15rem .1rem 0 .2rem;}*/
.del{width: .2rem;height: .24rem;float: left; text-align: center; font-size: .16rem; color: #999; margin-left: 30px; cursor: pointer; }
.total{float: left;}
.onthebottom {width: 100%;left: 0px;position: fixed;bottom: 51px;height: 50px;z-index: 10000;margin: 0 auto;display: block;background: #f4f4f4;
    border-top: 1px solid #B3B3B3;border-bottom: 1px solid #B3B3B3;}
.onthebottom .clearcart {width: .5rem;float: left; padding-left: 5px;font-size: .14rem;  line-height: .5rem; color: #999; height: 30px;cursor: pointer;font-weight: bold;margin-left: 5px;}
.onthebottom .totalprice {float: left;margin: 15px 0px 0px 5px;font-size: .14rem;}
.onthebottom .jiesuanbtn {float: right;font-size: 14px;width: 80px;height: 50px;line-height: 50px;background-color: #1fa67a;text-align: center;
color: #fff;font-size: .16rem;cursor: pointer;}
.main .null_shopping { text-align: center;  color: #ccc;}
.main .null_shopping .cart_pic {  height: 1rem;}
.main .null_shopping h4 {text-indent: .1rem;  font-size: .18rem;  margin: .1rem 0;}
.main .null_shopping p a.enter { line-height: .3rem;  width: auto; display: inline-block; background: none; color: #999;padding: .05rem; font-size: .15rem; height: .3rem; border: .01rem solid #999; border-radius: .05rem;}
</style>


