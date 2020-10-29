<template>
    <div class="animate_box">
        <div class="box1">
            <p>{{financeArr[0].name}}</p>
            <p>{{financeArr[0].name}}}</p>
        </div>
        <div class="box_three">
          <div :class="'box'+(index+2)" v-for="(item,index) in financeArr.length - 1" :key="index">
              <p>{{item.name}}</p>
              <p>{{item.name}}</p>
              <p>{{item.name}}</p>
              <p>{{item.name}}</p>
          </div>
        </div>
        <h1>{{aaa}}</h1>
    </div>
</template>

<script>
import {aaa} from './utils'
    export default {
        name: "Home",
        components:{
            
        },
        mounted() {
            console.log(111)
        },
        data(){
            return {
                financeArr: [
                    {
                        name: '添加对方很健康',
                        lilv: 23,
                        qigou: 1000
                    },
                    {
                        name: '添加对方很健康',
                        lilv: 23,
                        qigou: 1000
                    },
                    {
                        name: '添加对方很健康',
                        lilv: 23,
                        qigou: 1000
                    },
                    {
                        name: '添加对方很健康',
                        lilv: 23,
                        qigou: 1000
                    }
                ]
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
.box_three{
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 0 auto;
}
.box2 {
    width: 80px;
    height: 80px;
    background: royalblue;
    /* margin: 0 auto; */
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
    width: 80px;
    height: 80px;
    background: royalblue;
    /* margin: 0 auto; */
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
        transform:translateY(210px);
        opacity: 1;
    }
}
.box4 {
    width: 80px;
    height: 80px;
    background: royalblue;
    /* margin: 0 auto; */
    animation: animate4 2s;
    animation-fill-mode: forwards;
    animation-delay: 6s;
    opacity: 0;
}
@keyframes animate4 {
    0%{
        transform:translateY(900px);;
    }
    100% {
        transform:translateY(210px);
        opacity: 1;
    }
}
</style>