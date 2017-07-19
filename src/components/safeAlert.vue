<template>
  <div v-bind:style='alertClass'>
        <div v-bind:style="alertHol">
            <div style="width:100%;height:35px;background:blue;line-height:35px;">
                    <span style="color:#fff;display:inline-block;float:left;margin-left:15px;">修改密码</span>
                    <img src="../../static/assets/images/x.png" style="display:inline-block;float:right; margin-right:15px;padding-top:10px" @click="AlertInputArr.btn[1].btn_click">
            </div>
            <ul>
                <li v-for="item in this.AlertInputArr.list" style="display:block;margin-top:10px;">
                    <span style="width:80px;display:inline-block;text-algin:right;">{{item.rowName}}</span>
                    <input type="text" width='item.width' @blur='item.defaultObj.bl'>
                                            <!--对应的数据仓库里面的事件-->
                </li>
                
            </ul>
            <div class="btnBox">
                <button class="btn" @click="AlertInputArr.btn[0].btn_click">确定</button>
                <button class="btn" @click="AlertInputArr.btn[1].btn_click">取消</button>
                <!--@blur -->
            </div>
        </div>
  </div>
</template>
<script>
// import safeAlert from '@/vuex/safeAlert';
    export default{
        name:'safeAlert',
        data(){
            return{
                msg:'',
                alertClass:{
                    width:window.innerWidth+'px',
                    height:window.innerHeight+'px',
                    background:'#fff',
                    zIndex:1050,
                    position:'absolute',
                    top:0,
                    left:0
                },
                alertHol:{},
                AlertInputArr:this.$safeAlert.state.AlertInputArr
            }
        },
        mounted:function(){
            var width=(function(arr){
                for(var i=1;i<arr.length;i++){
                    if(arr[i-1].width>arr[i].width){
                        var temp=arr[i-1].width;
                        arr[i-1].width=arr[i].width;
                        arr[i].width=temp;
                    }
                }
                return arr[arr.length-1].width;

            })(this.AlertInputArr.list)+110;
            var height=this.AlertInputArr.list.length*30+60+50;
            this.alertHol={
                paddingTop:0,
                position:'relative',
                background:'#fff',
                border:'1px solid blue',
                borderTop:'none',
                width:width+'px',
                height:height+'px',
                top:window.innerHeight/2-height/2+'px',
                left:window.innerWidth/2-width/2+'px'
            }
        },
        methods:{
            
        }


    }
</script>
<style scoped>

</style>
