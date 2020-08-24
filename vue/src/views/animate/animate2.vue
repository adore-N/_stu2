<template>
    <div class="animate_box">
        <div class="box1">
            <p>{{con1.content}}</p>
            <p>本金{{con1.money}}</p>
        </div>
        <div class="box2">
            <p>{{con2.content}}</p>
            <p>{{con2.shouyi}}</p>
        </div>
        <div class="box3">
            <p>{{con3.content}}</p>
            <p>{{con3.shouyilv}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        components:{
            
        },
        mounted() {

        },
        data(){
            return {
                con1:{
                    content: '您持有该产品共100天',
                    money:1000
                },
                con2:{
                    content: '您的收益为：',
                    shouyi: 9444
                },
                con3:{
                    content: '实际收益折合收益达',
                    shouyilv: 100,
                }
              
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
.box1 {
    width: 300px;
    height: 80px;
    background: royalblue;
    margin: 0 auto;
    animation: animate1 2s;
    animation-fill-mode: forwards;
    /* animation-delay: 2s; */
    opacity: 0;
}
@keyframes animate1 {
    0%{
        transform:translateY(900px);;
    }
    100% {
        transform:translateY(200px);
        opacity: 1;
    }
}
.box2 {
    width: 300px;
    height: 80px;
    background: royalblue;
    margin: 0 auto;
    animation: animate2 2s;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    opacity: 0;
}
@keyframes animate2 {
    0%{
        transform:translateY(900px);
    }
    100% {
        transform:translateY(210px);
        opacity: 1;
    }
}

.box3 {
    width: 300px;
    height: 80px;
    background: royalblue;
    margin: 0 auto;
    animation: animate3 2s;
    animation-fill-mode: forwards;
    animation-delay: 4s;
    opacity: 0;
}
@keyframes animate3 {
    0%{
        transform:translateY(900px);;
    }
    100% {
        transform:translateY(220px);
        opacity: 1;
    }
}
</style>