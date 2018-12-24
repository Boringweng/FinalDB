<style scoped>
input {
  padding: 8px 15px;
  background: white;
  border: 1px;
  border-style: solid;
  border-color:rgb(221, 209, 209) ;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.button {
  background-color: #4caf50; /* Green */
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
#exp {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <Layout style="{minHeight: '100vh'}">
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
             
          </div>
        </Menu>
      </Header>
      </div>
      <Layout>
        <Layout :style="{padding: '0 36px 36px'}">
          <Content :style="{margin: '50px 80px ', background: '#fff', minHeight: '600px'}">
            <div id="exp">
              <br>
              <font face="DFKai-sb" size="8">
                <b>職缺</b>
              </font>
              <br>
              <br>
              <br>
              <br>
              <br>
              <font face="DFKai-sb" size="3">
                <b>所需職位:</b>
              </font>
              <Select v-model="cPos" style="width:173px">
                <Option v-for="item in pos" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <br>
              <br>
              <br>
              <font face="DFKai-sb" size="3">
                <b>每月薪水:</b>
              </font>
              <input type="text"  v-model="Salary" placeholder="請輸入薪水待遇...">
              <br>
              <br>
              <br>
              <template id="expinput"> 
                <div v-for="(sk, index) in cNeededSkill" v-bind:key="index">
                    
                    <font v-if="index==0" face="DFKai-sb" size="3">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>技能:</b>
                    </font>
                    <font v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>
                    <Select v-model="cNeededSkill[index]" style="width:173px">
                      <Option v-for="item in Skill" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <input type="button" value="刪除技能" v-on:click="delbox(index)" id="del"><br><br>
                    <br>
                </div>
                <br><br>
                <input type="button" value="新增技能" v-on:click="addbox" id="add"><br><br>
              </template>
              <br>
              <br>
              <br>
              <br>
              <br>
              <div id="button_check">
                <router-link to="Boss">
                  <Button type="primary" class="button button1">取消</Button>
                </router-link>
                <router-link to="/Boss">
                  <Button type="primary" class="button button1" @click="putwork()">完成</Button>
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
export default {
  data() {
    return {
      lines: [],
      Salary: null,
      cPos: null,
      cNeededSkill: [],
      pos: [
        {
          value: "前端工程師",
          label: "前端工程師"
        },
        {
          value: "後端工程師",
          label: "後端工程師"
        },
        {
          value: "資訊安全",
          label: "資訊安全"
        },
        {
          value: "資料庫管理",
          label: "資料庫管理"
        }
      ],
      Skill: [
        {
          value: "C++",
          label: "C++"
        },
        {
          value: "Javascript",
          label: "Javascript"
        },
        {
          value: "Html",
          label: "Html"
        },
        {
          value: "Python",
          label: "Python"
        },
        {
          value:"Nodejs",
          label:"Nodejs"
        },
        {
          value:"C#",
          label:"C#"
        }
      ],
      cPos: ""
    };
  },
  methods: {
    putwork() {
      const axios = require('axios');
      axios.post(
        "http://163.13.226.86:23760/api/Job",
        {
          "Salary" : this.Salary,
          "cPos" : this.cPos,
          "cNeededSkill" : this.cNeededSkill
        },
        {
          headers: {
            "Content-Type": "application/json"
            

          }
        }
      )
      .then(function(response) {
        console.log(success);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    addbox(){
            this.cNeededSkill.push(null)
            
    },
    delbox(index){
           this.cNeededSkill.splice(index, index + 1) 
        }
    },

  mounted () {
      this.addbox()
  }
};
</script>
