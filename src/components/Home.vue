<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-nav {
  width: 500px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="account">
              <Input v-model="value1" placeholder="請輸入帳號..."/>
            </MenuItem>
            <MenuItem name="password">
              <Input v-model="value1" placeholder="請輸入密碼..."/>
            </MenuItem>
            <router-link to="Boss">
              <MenuItem name="button">
                <Button type="info">登入</Button>
              </MenuItem>
            </router-link>
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
<script>
export default {
}
</script>
