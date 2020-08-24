<template>
    <div class="contain_box">
       <audio ref="music" @oncanplay="myFunction" src="../assets/1.mp3" controls autoplay></audio>
       <h1>1</h1>
       <h1>1</h1>
       <h1>1</h1>
       <input type="text" v-model="musicData">
    </div>
</template>

<script>
    export default {
        name: "Home",
        components:{
        },
        data(){
            return {
musicData:''
            }
        },
        mounted(){
            this.start()
            // this.musicData = window.AudioContext
            // console.log(this.$refs.music);
            //     this.$refs.music.addEventListener('canplay', ()=> {
            //         console.log(1)
            //         this.$refs.music.play()
            //     })
            // this.$nextTick(() => {
            //     this.$refs.music.play();
            //     this.$refs.music.pause();
            //     this.$refs.music.play()
            //     // console.log(this.$refs.music.paused)
            //     // if(this.$refs.music.paused){
            //     //     this.$refs.music.play()
            //     // }
            // })
            // setTimeout(()=>{
            //     this.$refs.music.play();
            // },2000)
            // console.log(1)
        },
        methods: {
            myFunction(){
                console.log(1)
            },
            start(){
                window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
            try {
                var that =this;
                var context = new window.AudioContext();
                console.log(context)
                var source = null;
                var audioBuffer = null;

                function stopSound() {
                    if (source) {
                        source.stop(0); //立即停止
                    }
                }

                function playSound() {
                    source = context.createBufferSource();
                    source.buffer = audioBuffer;
                    source.loop = true; //循环播放
                    source.connect(context.destination);
                    source.start(0); //立即播放
                }

                function initSound(arrayBuffer) {
                    console.log(arrayBuffer)
                    context.decodeAudioData(arrayBuffer, function(buffer) { //解码成功时的回调函数
                        console.log(buffer,11)
                        audioBuffer = buffer;
                        playSound();
                    }, function(e) { //解码出错时的回调函数
                        console.log('Error decoding file', e);
                        that.musicData = e
                    });
                }

                function loadAudioFile(url) {
                    console.log(url)
                    var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
                    xhr.open('GET', url, true);
                    xhr.responseType = 'arraybuffer';
                    xhr.onload = function(e) { //下载完成
                        initSound(this.response);
                    };
                    xhr.send();
                }
                loadAudioFile('../assets/1.mp3');
                $("#stop").click(function() {
                    stopSound();
                });
            } catch (e) {
                console.log('!Your browser does not support AudioContext');
            }
            }
        }
    }
</script>

<style scoped>

</style>