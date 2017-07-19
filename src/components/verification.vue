<template>
        <canvas  v-on:click.stop="changVer()" class="verCanvas" width="100%" height="35px"></canvas>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      canvas: "",
      width:"",
      height:"",
      ctx:""
    }
  },
  mounted:function(){
        this.canvas=document.getElementsByClassName('verCanvas')[0];
        this.width=this.canvas.width;
        this.height=this.canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.textBaseline = 'bottom';
        this.getVer( this.drawPic);
        // this.getVer( this.drawPic);  验证码真正挂载在上面的时候，   getVer 获取验证码  drawpic 画验证码
  },
  computed: {
    /**
     * 1 使用axios -->$reqs(名字自定义) 直接用axios
     * 2 url -->请求地址，储存在了store.js 文件里面，使用字符串拼接
     * 3 如果请求成功.then(function(){
     *                 调用一个函数，-->做成参数传入},function(){})
     * */ 
  },
  methods:{
          getVer:function(fn){
            /**this.$reqs  在入口文件命名的， 将他赋给了VUE原型
             * $el $route  $reqs-->交互
             * 
            */
            this.$reqs({
              method:'get',
              url:this.$store.state.url.BASEURL+this.$store.state.url.GETVERICOD
            }).then(function(response){
                // alert('请求成功');//把从后台得到的数据（生成的验证码）-->用canvas画出来
                fn(response.data.data);
            },function(response){
              console.log(response);
            }).catch(function(err){
              console.log(err);
            })

                // this.$reqs({//180.76.156.148
                //   method: 'get',
                //   url: this.$store.state.url.BASEURL+this.$store.state.url.GETVERICOD
                // }).then(function (response) {
                //             fn( response.data.data);
                //     });
          },
          randomNum:function (min,max){//生成随机数
            return Math.floor( Math.random()*(max-min)+min);
          },
          randomColor:function (min,max){//生成随机色
            var r = this.randomNum(min,max);
            var g = this.randomNum(min,max);
            var b = this.randomNum(min,max);
            return "rgb("+r+","+g+","+b+")";
          },
          drawPic:function (returnTxt){ /**绘制验证码图片**/
          /**绘制背景色**/
          this.ctx.fillStyle = this.randomColor(180,240); //颜色若太深可能导致看不清
          this.ctx.fillRect(0,0,this.width,this.height);
          /**绘制文字**/

          for(var i=0; i<4; i++){
            var txt = returnTxt[i];
            this.ctx.fillStyle = this.randomColor(50,160);  //随机生成字体颜色
            this.ctx.font = this.randomNum(25,30)+'px SimHei'; //随机生成字体大小
            var x = 10+i*20;
            var y = this.randomNum(25,45);
            var deg = this.randomNum(-15, 15);
            //修改坐标原点和旋转角度
            this.ctx.translate(x,y);
            this.ctx.rotate(deg*Math.PI/180);
            this.ctx.fillText(txt, 10,0);
            //恢复坐标原点和旋转角度
            this.ctx.rotate(-deg*Math.PI/180);
            this.ctx.translate(-x,-y);
          }
          /**绘制干扰线**/
          for(var i=0; i<8; i++){
            this.ctx.strokeStyle = this.randomColor(40,180);
            this.ctx.beginPath();
            this.ctx.moveTo( this.randomNum(0,this.width), this.randomNum(0,this.height) );
            this.ctx.lineTo( this.randomNum(0,this.width), this.randomNum(0,this.height) );
            this.ctx.stroke();
          }
          /**绘制干扰点**/
          for(var i=0; i<100; i++){
            this.ctx.fillStyle = this.randomColor(0,255);
            this.ctx.beginPath();
            this.ctx.arc(this.randomNum(0,this.width),this.randomNum(0,this.height), 1, 0, 2*Math.PI);
            this.ctx.fill();
          }
          return;
        },
        changVer:function(){
            this.getVer( this.drawPic);
            // 对获取/生成验证码的方法的调用
        }

  },
   components: {}
};



</script>

<style>
    .verCanvas{
        margin-left:5px;
        position:relative !important;

    }
    .verCanvas:hover{
         cursor:pointer;
    }

</style>
