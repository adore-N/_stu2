<template>
    <div class="animate_box">
        <div ref="animate1" v-show="isShow" class="box">{{text1}}</div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        components:{
            
        },
        mounted() {
            this.animateListenerEnd(this.$refs.animate1,'animationend')
        },
        methods: {
            //监听动画结束，1s后消失 兼容性处理
            animateListenerEnd(element, type, callback){
                console.log(element,type,callback)
                var pfx = ["webkit", "moz", "MS", "o", ""];
                var that = this;       
                for (var p = 0; p < pfx.length; p++) {
                    if (!pfx[p]) type = type.toLowerCase();
                    element.addEventListener(pfx[p]+type, ()=>{that.isShow=false}, false);
                    }
                }
        },
        data(){
            return {
               text1: '您名下的理财产品到期资金已入账',
               isShow: true
        }
    }}
</script>

<style scoped>
.animate_box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ccc; 
}
.box {
    width: 300px;
    height: 80px;
    background: royalblue;
    margin: 0 auto;
    animation: animate1 2s;
    animation-fill-mode: forwards;
}
@keyframes animate1 {
    0%{
        transform:translateY(900px);;
    }
    100% {
        transform:translateY(400px);
    }
}
</style>