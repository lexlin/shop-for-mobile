<template>
<header class="me-header">
        <a href="#" class="setting"><i class="fa fa-gear"></i></a>
        <div class="unlogin animated lightSpeedIn">
        <h2 class="">欢迎来到我的杂货铺</h2>
        <div class="headbtn ">
          <a href="login.html">登录</a>
          <a href="register.html">注册</a>
        </div>
      </div>
      <div class="header-nav">
        <ul>
            <li><span class="bfs16 yellow">1</span><span class="fs14">优惠卷</span></li>
            <li><span class="bfs16 yellow">0.00</span><span class="fs14">钱包</span></li>
            <li><span class="bfs16 yellow">2000</span><span class="fs14">积分</span></li>
            
        </ul>
      </div>
        <ul class="nav-more-list animated" id="sub-title" >
        <li><a class="nav-more-icon" href="index.html"><i class="fa fa-home fa-2x"></i><span>首页</span></a></li>
        <li><a class="nav-more-icon" href="shopcart.html"><i class="fa fa-shopping-cart fa-2x"></i><span>购物车</span></a></li>
        <li><a class="nav-more-icon" href="me.html"><i class="fa fa-user fa-2x"></i><span>个人中心</span></a></li>
        <li><a class="nav-more-icon" href="#"><i class="fa fa-commenting-o fa-2x"></i><b id="msgFlag" class=""></b><span>我的消息</span></a></li>
    </ul>
    </header>
    <section class="content-main">
        <div class="main-nav">
            <div class="fl "><span class="ml10 pd-s"><i class="fa fa-book fa-lg animated lightSpeedIn"></i></span><span class="pl5">我的订单</span></div>
            <div class="fr"><span class="pr5">查看全部订单</span><span class="pr5"><i class="fa fa-angle-right fa-lg"></i></span></div>
        </div>
        <div class="me-list">
            <ul>
                <li><i class="fa fa-credit-card fa-2x"></i><span>待付款</span></li>
                <li><i class="fa fa-truck fa-2x" style=""></i><span>待收货</span></li>
                <li><i class="fa fa-commenting-o fa-2x"></i><span>待评价</span></li>
                <li><i class="fa fa-headphones fa-2x"></i><span>退货/售后</span></li>
            </ul>
        </div>
        <div class="contents">
            
            <ul>
                <li><i class="fa fa-briefcase fa-2x" style="color: #ea8f2e;"></i><span>我的钱包</span></li>
                <li><i class="fa fa-ticket fa-2x" style="color: #89bedf;"></i><span>我的优惠券</span></li>
                <li><i class="fa fa-bank fa-2x orange" ></i><span>积分商城</span></li>
                <li><i class="fa fa-heart fa-2x"  style="color: #ff9f4a;"></i><span>我的收藏</span></li>
                <li><i class="fa  fa-credit-card-alt fa-2x zise "></i><span>我的积分卡</span></li>
                <li><i class="fa fa-envelope-o fa-2x" style="color: #9ec74e;"></i><span>我的评价</span></li>
                <li><i class="fa fa fa-phone-square fa-2x " style="color: #72CA8D;"></i><span>客服热线</span></li>
                <li><i class="fa fa-pencil-square-o fa-2x" style="color: #ef9090;"></i><span>帮助中心</span></li>
            </ul>
        
        </div>
    </section>
</template>
<script>
    export default {


    }
</script>
<style>
    .me-header {position: relative;width: 100%; text-align: center; color: #fff;; height: 2.5rem; box-sizing: border-box;/* background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#1fa67a), to(#fafafa)); */ background-color: #1fa67a; /*  background: url(/src/assets/images/bg1.jpg) no-repeat; */   padding-top: .25rem; background-size: cover;}
.me-header .setting{width: .25rem; height: .25rem; line-height: .25rem; color: rgba(0,0,0,.4); font-size: .25rem;display: block; position: absolute; right: .1rem; top: .1rem;}
.unlogin h2{font-weight: normal;}
.me-header .header-nav{position: absolute; bottom: 0; width: 100%; box-sizing: border-box;height: .5rem;background-color: rgba(0,0,0,.1); }
.me-header .header-nav  ul{width: 100%; box-sizing: border-box;height: .5rem; display: flex;}
.me-header .header-nav li{border-right: 1px solid #ffa4ad; width: 33.3%; flex: 1;margin: .05rem; text-align: center;color: #fff;}
.me-header .header-nav li:last-child{border-right:none;}
.me-header .header-nav li span{width: 100%; display: block;height: .2rem;opacity: 1;}
.headbtn a{ display: inline-block;    width: 1.2rem;    height: .4rem;    line-height: .4rem;    text-align: center;    margin: .04rem;    color: #fff;    overflow: hidden;
    border-radius: 4px;    -webkit-border-radius: 4px;    background-color: rgba(0,0,0,.2);    box-sizing: border-box;    }
.content-main{width: 100%; position: relative;}
.content-main .main-nav{height: .5rem; line-height: .5rem; font-size: .14rem;}
.pd-s{width: .3rem;height: .3rem; line-height: .3rem; background-color: #ED7046;text-align: center;border-radius: 50%; display: inline-block; color: #FFFFFF;}
.content-main .me-list {height: .7rem;  width: 100%;box-sizing: border-box;display: flex;display: -webkit-box;}
.content-main .me-list ul{  height: .7rem;  width: 100%;box-sizing: border-box;display: flex;display: -webkit-box;border-top: 1px solid #dfdfdf;}
.content-main .me-list ul li{  flex: 1;width:24.5%;height: .7rem; text-align: center;color: #999999;border-right: 1px solid #dfdfdf;}
.content-main .me-list ul li:last-child{border-right: none;}
.content-main .me-list ul li i{margin-top: .2rem; animation: scales 1.2s forwards;}
.me-list ul li span{width: 100%;height: .25rem;display: block;color: #444;padding-top: .02rem ;}
.contents{width: 100%; border-top: .1rem solid #efeff4; box-sizing: border-box;box-sizing:border-box;
-moz-box-sizing:border-box; /* Firefox */
-webkit-box-sizing:border-box; /* Safari */ display: block; margin-bottom: .7rem;position: relative;}
.contents:after{content: ' ';display: block;clear: both;}
.contents ul{width: 100%;box-sizing: border-box; box-sizing:border-box;margin-bottom: .7rem;
-moz-box-sizing:border-box; /* Firefox */
-webkit-box-sizing:border-box; /* Safari */display: block;}
.contents ul li{width:33%;height: 1rem; float: left; text-align: center;color: #999999;border-right: 1px solid #dfdfdf;border-bottom: 1px solid #dfdfdf;}
/*.contents ul li:last-child{border-right: none;}*/
.contents ul li i{margin-top: .3rem; animation: scales 1.2s forwards;transform: rotate(180deg);}
.contents ul li span{width: 100%;height: .25rem;display: block;color: #444;padding-top: .02rem ;}
@keyframes scales{0{transform:scale(1.5)}25%{transform:scale(1)}50%{transform:scale(.6)}85%{transform:scale(1.5)}100%{transform:scale(1)}}
@-webkit-keyframes scales{0{transform:scale(1.5)}25%{transform:scale(1)}50%{transform:scale(.6)}85%{transform:scale(1.5)}100%{transform:scale(1)}}
.nav-more-list{display: none; position: absolute; top: .54rem; right: .1rem; background: #484F55; z-index: 999; border: 1px solid transparent; border-radius: 2px;}
.nav-more-list li{border-bottom: 1px solid #5B6166; width: 1.2rem; height: .4rem; line-height: .4rem; text-align: left; text-indent: .27em; background: #484F55; opacity: .9;}
.on-block{display: block; transition: all .2s;}
.nav-more-list li a{position: relative; display: block; width: 100%; color: #fff; z-index: 112;}
.nav-more-list li a.nav-more-icon span{margin-left: 5px; font-size: .14rem;}
.nav-more-list:after{z-index: 999; content: ""; position: absolute; top: -.24rem; right: .06rem; display: inline-block; width: 0; height: 0; border-style: solid; border-color: transparent transparent #484F55; border-width: .12rem;}

</style>


