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
.layout-logo {
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
    <Layout :style="{minHeight: '100vh'}">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <router-link to="/">
              <font face="DFKai-sb" size="6" style="color:yellow">
                <b>求職網</b>
              </font>
            </router-link>
          </div>
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
            <Table border :columns="HEAD" :data="workdata">
              <template slot-scope="{ row }" slot="pos">
                <strong>{{ row.pos }}</strong>
              </template>
              <template slot-scope="{ row, index }" slot="see">
                <router-link to="Worker">
                <Button
                  type="primary"
                  size="small"
                  style="margin-right: 5px"
                  @click="show(index)"
                >選擇</Button>
                </router-link>
              </template>
            </Table>
          </Content>
          <Footer class="layout-footer-center">工程師 &copy; 求職網</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      HEAD: [
        {
          title: "職位名稱",
          slot: "pos"
        },
        {
          title: "薪水待遇",
          key: "salary"
        },
        {
          title: "所需技能",
          key: "ability"
        },
        {
          title: " ",
          slot: "see",
          width: 150,
          align: 'center'
        }
      ],
      workdata: [
        {
          pos: "前端工程師",
          salary: "20000~30000",
          ability: "無能"
        },
        {
          pos: "資訊安全",
          salary: "20000~30000",
          ability: "無能"
        },
        {
          pos: "後端工程師",
          salary:  "20000~30000",
          ability: "以上皆是"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
  }
};
</script>