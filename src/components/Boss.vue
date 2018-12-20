<style scoped>
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
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <font face="DFKai-sb" size="3" style="color:white"><b>求職網</b></font>
                    </div>
                    <div class="layout-nav">
                            <MenuItem name="account">
                                <router-link to="BossAdd">
                                    <Icon type="ios-briefcase" />
                                    <font face="DFKai-sb" size="3"><b>新增職缺</b></font>
                                </router-link>
                            </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Layout :style="{padding: '0 36px 36px'}">
                    <br>
                    <Content :style="{padding: '24px', minHeight: '450px', background: '#fff'}">
                    </Content>
                    <Footer class="layout-footer-center">工程師 &copy; 求職網</Footer>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
