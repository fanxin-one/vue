<template>
  <div>
       <div class="modal_box" ref="modalList">
           <div  class="title">安全中心</div>
            <input type="text" placeholder="账号" autofocus>
            <input type="emial" placeholder="邮箱">
            <input type="password" placeholder="密码">
            <input type="password" placeholder="请再次输入"><br>
            <button class="btn btnSure" @click="submit()">提交</button>
            <button class="btn btnCansel" @click="submitCancel()">取消</button>
        </div>
            <!--<div class="modal_wrap" v-if="showWrap"> 
                v-if="showWrap" v-if="show"
                    <h5>{{msg}}</h5>
                    <button class="btn btnSureWrap" @click="submitSure()">确定</button>
                    <button class="btn btnCansel" @click="submitCancelWrap()">取消</button>
            </div>-->
       
        
  </div>
</template>
<script>
    export default{
        name:'modal',
        data(){
            return{
                msg:'请再次确认密码输入争取！',
            }
        },
        methods:{
            submit(){
                alert(this.showWrap)

                if(this.showWrap){
                    this.showWrap=true;
                    alert(this.showWrap)
                }else{
                    this.showWrap=false;
                }
            },
            submitCancel(){
                this.show=false;
            },
            // submitSure(){
            //     alert('修改成功')
            // },
            // submitCancelWrap(){
            //     this.showWrap=false;
            //     this.show=false;
            // }

        }
    }
</script>
<style scoped>
    h5{
        padding-top:10px;
        color:#000;
    }
    .btn{
        width:100px;
        height:35px;
        color:25px;
        border:none;
        outline: none;
        cursor: pointer;
        border-radius: 10px;
        margin-top:15px;
        font-size: 16px;
    }
    .btn:active{
        background: blue;
        color:#fff;
    }
    .modal_box{
        width:500px;
        height:343px;
        border:1px solid blue;
        position: absolute;
        top:25%;
        left:25%;
    }
    .modal_box .title{
        width:100%;
        height:50px;
        background:rgba(8, 247, 17, 0.48);
        color:#000;
        line-height: 50px;
    }
    .modal_box input{
        width:350px;
        height:35px;
        margin-top:15px;
        border:1px solid rgba(8, 247, 17, 0.48);
        border-radius: 10px;
        text-indent: 10px;
        outline: none;
        font-size: 16px;
    }
    .modal_wrap{
        width:300px;
        height:100px;
        border:1px solid green;
    }
</style>

