<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-nav {
  width: 150px;
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
.layout-header{
  top: 0px;
  width: 100%;
  position: fixed;
  z-index:10;
}
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">

    <div class="layout-header">
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
              <router-link to="BossAdd">
                <Icon type="ios-briefcase" style="color:white"/>
                <font face="DFKai-sb" size="3" style="color:white">
                  <b>新增職缺</b>
                </font>
              </router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      </div></br></br>
      <Layout>
        <Layout :style="{padding: '0 36px 36px'}">
          <br>
          <Content :style="{padding: '24px', minHeight: '450px', background: '#fff'}">
            <Row>
              <Col span="5">
                <Table height="200" :columns="BOSSSEND" :data="jobs">
                  <template slot-scope="{ row, index }" slot="cPos">
                    <strong>{{ row.cPos}}</strong>
                  </template>
                  <template slot-scope="{ row, index }" slot="see">
                    <Button type="primary" size="small" style="margin-right: 5px">修改</Button>
                  </template>
                </Table>
              </Col>
              <Col span="19">
                <Table  size="large" border :columns="HEAD" :data="jobseeker">
                  <template slot-scope="{ row, index }" slot="sName">
                    <strong>{{ row.sName}}</strong>
                  </template>
                  <template slot-scope="{ row, index }" slot="sName">
                    <strong>{{ row.sName }}</strong>
                  </template>
                  <template slot-scope="{ row, index }" slot="sEmail">
                    <strong>{{ row.sEmail }}</strong>
                  </template>
                  <template slot-scope="{ row, index }" slot="see">
                    <router-link :to="{name:'WORKERINFO',params:{id: row.id}}">
                      <Button type="primary" size="small" style="margin-right: 5px" @click="view(index)">檢視</Button>
                    </router-link>
                      <Button
                        type="error"
                        size="small"
                        style="margin-right: 5px"
                        @click="del(row.id)"
                      >刪除</Button>
                  </template>
                </Table>
              </Col>
            </Row>
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
      jobseeker: [],
      jobs: [],
      BOSSSEND: [
        {
          title: "職位",
          slot: "cPos"
        },
        {
          title: " ",
          slot: "see",
          align: "center"
        }
      ],
      HEAD: [
        {
          title: "求職工作",
          slot: "cPos"
        },
        {
          title: "姓名",
          slot: "sName"
        },
        {
          title: "Email",
          slot: "sEmail"
        },
        {
          title: " ",
          slot: "see",
          width: 150,
          align: "center"
        }
      ]
    };
  },
  mounted() {
    var self = this;
    const axios = require("axios");
    axios
      .get("http://163.13.226.86:23760/api/Jobseeker")
      .then(function(response) {
        if (response.data["status"] == "success") {
          self.jobseeker = response.data["results"];

          self.addjob();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    del(row) {
      alert(row)
      const axios = require("axios");
      axios
        .delete("http://163.13.226.86:23760/api/Jobseeker/" + row)
        .then(response => {
          this.jobseeker.splice(row, row + 1);
        });
      console.log(error);
    },
    addjob() {
      const Vue = require("Vue");
      const self = this;
      const axios = require("axios");
      axios
        .get("http://163.13.226.86:23760/api/Job")
        .then(function(response) {
          if (response.data["status"] == "success") {
            self.jobs = response.data["results"];
            for (var i = 0; i < self.jobs.length; i++) {
              for (var j = 0; j < self.jobseeker.length; j++) {
                if (self.jobseeker[j]["JobID"] == self.jobs[i]["id"]) {
                  self.jobseeker[j]["cPos"] = self.jobs[i]["cPos"];
                }
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  }
};
</script>
