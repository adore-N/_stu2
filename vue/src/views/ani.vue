<template>
    <div class="contain_box">
        <!-- <video class="margin" 
            controls="controls" 
            autoplay="autoplay" 
            webkit-playsinline='true' 
            playsinline='true' 
            x-webkit-airplay='true' 
            x5-video-player-type='h5' 
            x5-video-player-fullscreen='true'
            x5-video-ignore-metadata='true'  
            width='100%' 
            height='100%'> -->
<!--             <source src="@/assets/1591113577163346.mp4" type="video/mp4" />
        Your browser does not support the video tag. -->
        <!-- </video> -->
            <video preload='auto' id='my-video'  src="@/assets/1591113577163346.mp4"  loop 
            autoplay="autoplay" webkit-playsinline='true' playsinline='true'
            x-webkit-airplay='true' x5-video-player-type='h5' 
            x5-video-player-fullscreen='true'
            x5-video-ignore-metadata='true'  width='100%' height='100%'><p> 不支持video</p> </video>
       <div class="conten">
           <div class="top">
               吃的解开了
           </div>
           <div class="top2">
               闯荡江湖
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        components:{
        },
        data(){
            return {

            }
          
        }
    }
</script>

<style scoped>
    .contain_box{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .conten{
        position: absolute;
    }
    #my-video{object-fit: cover; object-position: center center;}
    .top{
        animation-name:Effect1, Effect2;
        animation-duration:1s, 2s;
        animation-timing-function:linear, linear;
        animation-delay:0, 2s;
        animation-iteration-count:1, infinite;
        animation-fill-mode:forwards, forwards;
        animation-direction:normal, alternate;
    }
    @keyframes Effect1{
        0%{ transform:translateY(-200px); opacity:0;}
        25%{ transform:translateY(0px); opacity:1; }
        50%{ transform:translateY(0px); opacity:1; }  
        75%{ transform:translateY(0px); opacity:1; }
        100%{ transform:translateX(-200px); opacity:1; }
    }
</style>