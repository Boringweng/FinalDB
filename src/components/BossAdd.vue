<style scoped>
input {padding:8px 15px; background:#ccc; border:0 none;
-webkit-border-radius: 5px;
border-radius: 5px; }
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
    background-color: rgb(108, 197, 218);
    color: black;
    border: 2px solid rgb(108, 197, 218);
}
.button1:hover {
    background-color: gray;
    color: rgb(0, 0, 0);
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-nav{
    width: 150px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 5px;
    left: 20px;
}
#exp{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout style="{minHeight: '100vh'}">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <font face="DFKai-sb" size="6" style="color:yellow"><b>求職網</b></font>
                    </div>
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
                            <br>
                            <font face="DFKai-sb" size="8"><b>職缺</b></font><br><br><br><br><br><br>
                            <font face="DFKai-sb" size="3"><b>薪水待遇:</b></font> <input type="text" placeholder="請輸入薪水待遇..."><br><br>
                            <font face="DFKai-sb" size="3"><b>所需職位:</b></font> <input type="text" placeholder="請輸入所需職位..."><br><br>
                            <font face="DFKai-sb" size="3"><b>所需技能:</b></font> <input type="text" placeholder="請輸入所需技能..."><br><br><br><br><br>
                            <div id="button_check">
                                <router-link to="/">
                                    <Button type="primary" class="button button1">完成</Button>
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
