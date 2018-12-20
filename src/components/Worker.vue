<template>
     <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <router-link to="/">
                                <Icon type="ios-bookmarks-outline" style="color:white"></Icon>
                                <font face="DFKai-sb" size="3" style="color:white"><b>取消</b></font>
                            </router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <div id="exp">
                    <font face="DFKai-sb" size="5">基本資料</font><br><br>
                    <font face="DFKai-sb" size="3"><b>身分證字號:</b></font> <input type="text" placeholder="請輸入身分證ID..."><br><br>
                    <font face="DFKai-sb" size="3"><b>期望薪水:</b></font> <input type="text" placeholder="請輸入期望薪水..."><br><br>
                    <font face="DFKai-sb" size="3"><b>申請部門:</b></font> <input type="text" placeholder="請輸入所申請部門..."><br><br>
                    <font face="DFKai-sb" size="3"><b>技能:</b></font> <input type="text" placeholder="請輸入技能..."><br><br>
                    <hr>
                    <font face="DFKai-sb" size="5">學歷</font><br><br>
                    <font face="DFKai-sb" size="3"><b>學位:</b></font> <input type="text" placeholder="請輸入最高學位..."><br><br>
                    <font face="DFKai-sb" size="3"><b>學校:</b></font> <input type="text" placeholder="請輸入其學校..."><br><br>
                    <font face="DFKai-sb" size="3"><b>系所:</b></font> <input type="text" placeholder="請輸入其系所..."><br><br>
                    <hr>
                    <font face="DFKai-sb" size="5">工作經驗</font><br><br>
                    <input type="button" value="新增" v-on:click="addbox" id="add"><br><br>
                    <template id="expinput">
                        <div v-for="(line, index) in lines" v-bind:key="index">
                            <font face="DFKai-sb" size="3"><b>公司位址:</b></font> <input v-model="line.a" type="text" placeholder="請輸入你公司位址..."><br><br>
                            <font face="DFKai-sb" size="3"><b>公司職位:</b></font> <input v-model="line.b" type="text" placeholder="請輸入職位..."><br><br>
                            <font face="DFKai-sb" size="3"><b>在職時間:</b></font> <input v-model="line.c" type="text" placeholder="請輸入在職時間..."><br><br>
                        </div>
                    </template>
                    <div id="button_check">
                        <router-link to="/">
                            <button class="button button1"><font face="DFKai-sb" size="4">完成</font></button>
                        </router-link>
                    </div>
                </div>
            </Content>
            <Footer class="layout-footer-center">工程師 &copy; 求職網</Footer>
        </Layout>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue.common.dev.js"></script>

<script>
// var MyPartial = Vue.extend({});
// window.expinput = new MyPartial({
//   template: '#expinput'
// });
window.expinput = Vue.component('modal', {
  template: '#expinput'
})
export default{
    data () {
      return {
        lines: []
      }
    },
    methods: {
        addbox(){
            this.lines.push({
                a: null,
                b: null,
                c: null
            })
        }
    },
    mounted () {
      this.addbox()
    }
}

</script>

<style>
input {padding:8px 15px; background:#ccc; border:0 none;
-webkit-border-radius: 5px;
border-radius: 5px; }
#data{
    text-align: justify;
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    padding: 5px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 3px 3px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
.button1 {
    background-color: #4CAF50;
    color: black;
    border: 2px solid #4CAF50;
}
.button1:hover {
    background-color: gray;
    color: rgb(0, 0, 0);
}
.button2 {
    background-color: #4CAF50;
    color: black;
    border: 2px solid #4CAF50;
}
.button2:hover {
    background-color: gray;
    color: rgb(0, 0, 0);
}
#exp{
    text-align: center;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-nav{
    width: 100px;
    margin: 0 auto;
    margin-right: 0px;
}
.layout-footer-center{
    text-align: center;
}
</style>
