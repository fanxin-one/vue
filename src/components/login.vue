<template>
    <div class="containner">
        <!--<h1>{{msg}}</h1>-->
        <BgCanvas></BgCanvas> 
        <div class="login_wrap">
            <div class="logo">
                <img src="../../static/assets/back_logo.png" >
            </div>
            
           <form>
                <div class="oneinput_box">
                   <i class="icon-user"></i>
                   <input type="text" placeholder="用户名" class="input" ref='loginId_input'><!--autofocus 自动获取焦点 this.$refs.loginId_input.focus() -->
               </div>
               <div class="oneinput_box">
                   <i class="icon-lock"></i>
                   <input type="password" placeholder="密码" class="input" ref='userPwd_pwd'>
               </div>
               <!--<div class="oneinput_box">
                   <i class="icon-info-sign"></i>
                   <input type="email" placeholder="邮箱" class="input">
               </div>-->
               <div class="oneinput_box">
                    <i class="icon-lock" style="float:left;margin-left:23px;"></i>
                   <input type="text" placeholder="请输入验证码" class="codeInout" ref="validCode_vali">
                   <!--<div class="code"></div>  验证码所在的div-->
                   <VeriCanvas ref="veriCode"></VeriCanvas><!--验证码组件-->
               </div>
               </br>
               <div class="oneinput_box">
                   <button type="button" class="btn" @click="login()">登录</button>
                   <button type='button' class='btn' @click="ad()">忘记密码</button>
               </div>
            </form> 
            
        </div>  
    </div>
</template>

<script>
    import BgCanvas from './bgCanvas';
    import VeriCanvas from './verification';
    import store from '@/vuex/store';
    export default{
        name:'login',
        data(){
            return{
                msg:'登录界面'
            }
        },
        mounted:function(){//页面加载就会执行的需求
            // alert('我是开始！');
            /***
            this.$refs.loginId_input  获得对应的标签
            setAttribute  设置属性
            */ 
            this.$refs.loginId_input.focus();// 使input获取焦点  autofocus h5自动获取焦点
            // console.log(this.$refs.loginId_input);
            var _this=this;
            document.onkeypress=function(e){
                if(e.keyCode==13){
                    // alert('你按了回车！')
                    _this.login();
                }
            };
            document.body.setAttribute('style','background:red;')
        },
        destroyed:function(){//销毁
            document.body.setAttribute('style','background:;')
        },
        store,
        methods:{
            ad(){
                alert('此功能暂未开通！');
            },
            login(){
                // alert('登录中，请稍等...');
                var _this=this;
                this.$reqs({
                    // 检验验证码输入是否正确
                    method:'get',
                    url:this.$store.state.url.BASEURL+this.$store.state.url.CHECKVERICODE+'&veri='+this.$refs.validCode_vali.value
                    //                                                                     &veri  根据后台自定义    在验证码input框输入的值
                }).then(function(response){
                    // console.log(response.data);
                    if(response.data.success){
                        
                        // alert('验证码输入正确');//发送前段输入的用户名，验证码
                        var loginId = _this.$refs.loginId_input.value.trim(),  //trim()去除空白
                            userPwd = _this.$refs.userPwd_pwd.value.trim(),
                            validCode =  _this.$refs.validCode_vali.value.trim()
                            // console.log(loginId)
                            // if(loginId&&userPwd&&vaildCode){
                                console.log(userPwd)
                                if(loginId && userPwd && validCode){
                                
                                _this.$reqs({
                                    method:'POST',
                                    url:_this.$store.state.url.BASEURL+_this.$store.state.url.ADMINLOGIN,
                                    data:{
                                        userName:loginId,
                                        password:userPwd
                                    }
                                }).then(function(response){
                                    if(response.data.success){
                                        alert('登录成功');
                                        window.location.href="/home"
                                        // 如果登录成功，跳转到哪一个页面
                                    }else{
                                        alert('账号或密码错误');
                                    }
                                })
                            }else{
                                alert('请重新填写...');
                            }

                    }else{
                        console.log(_this.$refs.veriCode);//_this.$refs.veriCode  取得了验证码组件里面的所有属性和方法，调用里面的方法
                        // changVer() 调用里面的方法，重新获取验证码
                        var VERICode=_this.$refs.veriCode.changVer();
                        alert('验证码错误，请重新输入...');
                      
                    }
                })
            }
        },
        components:{BgCanvas,VeriCanvas}
        
    }
</script>
<style scoped>
   .containner{
        width:100%;
        height:100%;
        background: #fff;
        color:#fff;
        position: relative;
        font-size: 20px;
    }
    .containner canvas{
        margin:0;
        padding:0;
        z-index:2;
        background: #000;
    }
    .login_wrap{
        width:560px;
        height:320px;
        position: absolute;
        left:30%;
        top:30%;
        z-index:5;
        color:#fff;
    }
    .logo{
        width:270px;
        height:41px;
        margin:0 auto;
        padding-bottom:50px;
    }
    .oneinput_box {
      position:relative;
      margin-bottom: 25px;
      overflow: hidden;
      width: 457px;
      padding-left: 10px;
    }
    .login_wrap  form .oneinput_box .input{
        width:380px;
        height:35px;
        background: transparent;
        border:1px solid gray;
        margin-left:15px;
        text-indent: 15px;
        color:#fff;
    }
    .codeInout{
        width:250px;
        height:35px;
        float: left;
        margin-left:22px;
        background: transparent;
        border:1px solid gray;
        text-indent: 15px;
        color:#fff;
    }
    .code{
        width:130px;
        height:40px;
        float: right;
        background: red;
    }
    .btn{
        width:100px;
        height:35px;
        border:none;
        border-radius: 10px;
        background: gray;
        color:#fff;

    }
    a{
        margin-left:160px;
    }
    
</style>
