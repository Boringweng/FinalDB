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
            <Table border :columns="HEAD" :data="jobs">
              <template slot-scope="{ row, index }" slot="cPos">
                <strong>{{ row.cPos }}</strong>
              </template>
              <template slot-scope="{ row, index }" slot="Salary">
                <strong>{{ row.Salary }}</strong>
              </template>
              <template slot-scope="{ row, index }" slot="cNeededSkill">
                <strong v-for="(item, index) in row.cNeededSkill" :value="item.value" v-bind:key="index">
                  {{ item }} 
                  <strong v-if="index != row.cNeededSkill.length-1">,</strong>
                </strong>
                <!-- <strong>{{ row.cNeededSkill }}</strong> -->
              </template>
              <template slot-scope="{ row, index }" slot="see">
                <router-link to="/Worker">
                <Button
                  type="primary"
                  size="small"
                  style="margin-right: 5px"
                  @click="submit(index)"
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
      test: 123,
      jobs: [],
      HEAD: [
        {
          title: "職位名稱",
          slot: "cPos"
        },
        {
          title: "薪水待遇",
          slot: "Salary"
        },
        {
          title: "所需技能",
          slot: "cNeededSkill"
        },
        {
          title: " ",
          slot: "see",
          width: 150,
          align: 'center'
        }
      ],
    };
  },
  created(){
    var self = this;
    const axios = require('axios');
    axios.get(
      'http://163.13.226.86:23760/api/Job'
    )
    .then(function (response) {
        if (response.data["status"] == "success"){
          self.jobs = response.data["results"];
        }
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods: {
    submit(index) {
      alert('確定嗎?')
    }
  }
};
</script>
