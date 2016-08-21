'use strict';

export default function(router){
    router.map({
        '/':{				//首页
            name:'home',
            component: function(resolve){
                require(['./views/index.vue'],resolve);
            }
        },
        '/sort':{				//分类
            name:'sort',
            component: function(resolve){
                require(['./views/sort.vue'],resolve);
            }
        },
        '/items/:id':{               //专题
            name:'items',
            component: function(resolve){
                require(['./views/item.vue'],resolve);
            }
        },
    
        '/cart':{				//购物车
            name:'cart',
            component: function(resolve){
                require(['./views/cart.vue'],resolve);
            }
        },
        '/me':{				//我的
            name:'me',
            component: function(resolve){
                require(['./views/me.vue'],resolve);
            }
        }
    })

    
}