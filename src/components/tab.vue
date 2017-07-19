<template>
  <div>
        <div class="tabs">
           
            <ul class="tab_nav">
                <li><a><i class="icon icon-home"></i>仓库</a></li>
                <li @mouseover="oveC()" @mouseout="outC()"><a>草本类植物</a></li>
                <li @mouseover="oveS()" @mouseout="outS()"><a>水生生物</a></li>
                <li @mouseover="oveL()" @mouseout="outL()"><a>陆生动物</a></li>
                <li @mouseover="oveM()" @mouseout="outM()"><a>木本植物</a></li>
            </ul>
            <div class="tabBoxs" >
                <div class="tabBox" ref="tabBoxFirst">
                    <ul class="tabBox_content">
                        <li><a>媚丝黛</a></li>
                        <li><a>柔紫千红</a></li>
                        <li><a>月宴</a></li>
                        <li><a>洁杏玉</a></li>
                    </ul>
                </div>
                <div class="tabBox" ref="tabBoxSecond">
                    <ul class="tabBox_content">
                        <li><a>埃及神仙</a></li>
                        <li><a>金花鲈</a></li>
                        <li><a>花罗汉</a></li>
                        <li><a>宝莲灯</a></li>
                    </ul>
                </div>
                <div class="tabBox" ref="tabBoxThird">
                    <ul class="tabBox_content">
                        <li><a>树濑</a></li>
                        <li><a>斑马</a></li>
                        <li><a>金丝猴</a></li>
                        <li><a>饕餮</a></li>
                    </ul>
                </div>
                <div class="tabBox" ref="tabBoxFour">
                    <ul class="tabBox_content">
                        <li><a>猴面包树</a></li>
                        <li><a>三七</a></li>
                        <li><a>黄金果</a></li>
                        <li><a>莲雾</a></li>
                    </ul>
                </div>
            </div>
            <div style="margin-top:500px;"><Modal></Modal></div>
        </div>
        
  </div>
</template>
<script>
    import Modal from './modal.vue';
    export default{
        data(){
            return{
                msg:''
            }
        },
        components:{Modal},
        methods:{
            oveC(){
                this.$refs.tabBoxFirst.style='display:block;'
                this.$refs.tabBoxSecond.style='display:none;'
                this.$refs.tabBoxThird.style='display:none;'
                this.$refs.tabBoxFour.style='display:none;'
            },
            outC(){
                var ev=ev||window.event;
                // if(!this.isMouseLeaveOrEnter(ev,this.$refs.tabBoxFirst)){
                //     return false;
                // }
                
            },
            oveS(){
                this.$refs.tabBoxFirst.style='display:none;'
                this.$refs.tabBoxSecond.style='display:block;'
                this.$refs.tabBoxThird.style='display:none;'
                this.$refs.tabBoxFour.style='display:none;'
            },
            outS(){},
            oveL(){
                this.$refs.tabBoxFirst.style='display:none;'
                this.$refs.tabBoxSecond.style='display:none;'
                this.$refs.tabBoxThird.style='display:block;'
                this.$refs.tabBoxFour.style='display:none;'
            },
            outL(){},
            oveM(){
                this.$refs.tabBoxFirst.style='display:none;'
                this.$refs.tabBoxSecond.style='display:none;'
                this.$refs.tabBoxThird.style='display:none;'
                this.$refs.tabBoxFour.style='display:block;'
            },
            outM(){},
        }
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding:0;
        text-align: center;
    }
    ul,li,a,div{
        margin:0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        font-size: 20px;
        color:#fff;
    }
    .tabs{
        width:100%;
        height:100%;
        position: relative;
    }
    .tab_nav{
        width:800px;
        height:90px;
        margin:0 auto;
    }
    .tab_nav li{
        float: left;
    }
    .tab_nav li a{
        clear: both;
        padding:35px 30px;
        line-height: 90px;
        background:blanchedalmond;
        color:#000;
    }
    .tab_nav li a:hover{
        background:rgba(173, 117, 34, 0.48); 
    }
    .tab_nav li a:active{
        background:rgba(173, 117, 34, 0.48); 
    }
    .tabBoxs{
        width:800px;
        height:500px;
        position: absolute;
        top:125px;
        left:27%;
    }
    .tabBox{
        width:800px;
        height:100px;
        margin:0 auto;
    }
    .tabBox_content{
        width:800px;
        height:auto;
        margin:0 auto;
    }
    .tabBox_content li{
        float: left;
    }
     .tabBox_content li a{
         clear: both;
         padding:35px 50px;
         background: red;
     }
     .tabBox_content li a:hover{
         background: blue;
     }
</style>

