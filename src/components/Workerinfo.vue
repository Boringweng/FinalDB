<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <router-link to="/">
              <font face="DFKai-sb" size="6" style="color:yellow">
                <b>求職網</b>
              </font>
            </router-link>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
        <div id="title">
        <font face="DFKai-sb" size="8"><b>求職者資訊</b><br></font>
        <font face="DFKai-sb" size="5"><b>學歷:</b></font>
        <font face="DFKai-sb" size="5"><b>{{ workerinfo["Degree"] }}</b></font><br>
        <font face="DFKai-sb" size="5"><b>系所:</b></font>
        <font face="DFKai-sb" size="5"><b>{{ workerinfo["Department"] }}</b></font><br>
        <font face="DFKai-sb" size="5"><b>期望薪水:</b></font>
        <font face="DFKai-sb" size="5"><b>{{ workerinfo["SalaryExpection"] }}</b></font><br>
        <font face="DFKai-sb" size="5"><b>畢業學校:</b></font>
        <font face="DFKai-sb" size="5"><b>{{ workerinfo["School"] }}</b></font><br>
        <font face="DFKai-sb" size="5"><b>技能:</b></font>
        <strong v-for="(item, index) in workerinfo.Skill" :value="item.value" v-bind:key="index">
            <font face="DFKai-sb" size="5"><b>{{ item }}</b></font>
            <strong v-if="index != item.length-7">，</strong>
        </strong><br>
        <font face="DFKai-sb" size="5"><b>年資:</b></font>
        <strong v-for="(item, index) in workerinfo.WExp" :value="item.value" v-bind:key="index">
                <strong>    
                    <font face="DFKai-sb" size="5"><b>{{ item["Duration"] }}</b></font>
                </strong><br>
                <font face="DFKai-sb" size="5"><b>公司名稱:</b></font>
                <strong>
                    <font face="DFKai-sb" size="5"><b>{{ item.wPlace }}</b></font>
                </strong><br>
                <font face="DFKai-sb" size="5"><b>職位:</b></font>
                <strong>
                    <font face="DFKai-sb" size="5"><b>{{ item.wPos }}</b></font>
                </strong>
        </strong>
        </div>
        <div style="text-align: center;">
          <router-link to="/Boss">
                  <Button type="primary" class="button button1">返回</Button>
                </router-link>
        </div>
      </Content>
      <Footer class="layout-footer-center">工程師 &copy; 求職網</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CVID: this.$route.params.id,
      workerinfo: [],
      HEAD: [
        {
          title: "職位",
          slot: "cPos"
        },
        {
          title: " ",
          slot: "see",
          width: 150,
          align: "center"
        }
      ],
    };
  },
  mounted() {
    var self = this;
    const axios = require("axios");
    axios
      .get("http://163.13.226.86:23760/api/CV/" + self.CVID)
      .then(function(response) {
        if (response.data["status"] == "success") {
          self.workerinfo = response.data["results"];
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style>
#title{
    text-align: center;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
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