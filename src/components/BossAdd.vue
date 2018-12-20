<style scoped>
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
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1">
                        <router-link to="Worker">
                            <Icon type="md-close" style="color:white"></Icon>
                            <font face="DFKai-sb" size="3" style="color:white"><b>取消</b></font>
                        </router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Layout :style="{padding: '0 36px 36px'}">
                    <Content :style="{margin: '50px 80px ', background: '#fff', minHeight: '600px'}">
                        <div id="exp">
                            <font face="DFKai-sb" size="5">職缺</font><br><br>
                            <font face="DFKai-sb" size="3"><b>薪水待遇:</b></font> <input type="text" placeholder="請輸入身分證ID..."><br><br>
                            <font face="DFKai-sb" size="3"><b>所需職位:</b></font> <input type="text" placeholder="請輸入期望薪水..."><br><br>
                            <font face="DFKai-sb" size="3"><b>所需技能:</b></font> <input type="text" placeholder="請輸入所申請部門..."><br><br>
                            <font face="DFKai-sb" size="3"><b>技能:</b></font> <input type="text" placeholder="請輸入技能..."><br><br>
                            <div id="button_check">
                                <router-link to="/">
                                    <button class="button button1"><font face="DFKai-sb" size="4">完成</font></button>
                                </router-link>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
</script>
