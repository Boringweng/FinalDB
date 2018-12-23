<template>
     <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <router-link to="/">
                            <font face="DFKai-sb" size="6" style="color:yellow"><b>求職網</b></font>
                        </router-link>
                    </div>
                    <div class="layout-nav">
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <div id="exp">
                    <font face="DFKai-sb" size="5">基本資料</font><br><br>
                    <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <font face="DFKai-sb" size="3"><b>姓名:</b></font> <input v-model="sName" type="text" placeholder="請輸入姓名..."><br><br>
                    <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <font face="DFKai-sb" size="3"><b>E-mail:</b></font> <input type="text" v-model="sEmail" placeholder="請輸入E-mail..."><br><br>
                    <font face="DFKai-sb" size="3"><b>身分證ID:</b></font> <input v-model="sID" type="text" placeholder="請輸入身分證ID..."><br><br>
                    <font face="DFKai-sb" size="3"><b>期望薪水:</b></font> <input v-model="SalaryExpection" type="text" placeholder="請輸入期望薪水..."><br><br>
                    <template>
                    <div v-for="(sk, index) in Skill" v-bind:key="index">
                        <font v-if="index==0" face="DFKai-sb" size="3">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>技能:</b>
                        </font>
                        <font v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>
                        <Select v-model="Skill[index]" style="width:173px">
                            <Option v-for="item in ability" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <input type="button" value="刪除技能" v-on:click="delbox(index)" id="del"><br><br>
                        <br>
                    </div>
                    <br><br>
                    <input type="button" value="新增技能" v-on:click="addboxs" id="add"><br><br>
                    </template>
                    <hr>
                    <font face="DFKai-sb" size="5">學歷</font><br><br>
                    <font face="DFKai-sb" size="3"><b>學位:</b></font> <input type="text" v-model="Degree" placeholder="請輸入最高學位..."><br><br>
                    <font face="DFKai-sb" size="3"><b>學校:</b></font> <input type="text" v-model="School" placeholder="請輸入其學校..."><br><br>
                    <font face="DFKai-sb" size="3"><b>系所:</b></font> <input type="text" v-model="Department" placeholder="請輸入其系所..."><br><br>
                    <hr>
                    <font face="DFKai-sb" size="5">工作經驗</font><br><br>
                    <Icon type="md-add" />
                    <input type="button" value="新增" v-on:click="addbox" id="add"><br><br>
                    <template id="expinput">
                        <div v-for="(line, index) in WExp" v-bind:key="index">
                            <font face="DFKai-sb" size="3"><b>公司名稱:</b></font> <input v-model="line.wPlace" type="text" placeholder="請輸入你公司名稱..."><br><br>
                            <font face="DFKai-sb" size="3"><b>公司職位:</b></font> <input v-model="line.wPosition" type="text" placeholder="請輸入職位..."><br><br>
                            <font face="DFKai-sb" size="3"><b>工作年資:</b></font> <input v-model="line.Duration" type="number" placeholder="請輸入工作年資..."><br><br>
                        </div>
                    </template>
                    <div id="button_check">
                        <router-link to="/">
                            <Button type="primary" class="button button1" @click="putinfo()">完成</Button>
                        </router-link>
                    </div>
                    </br>
                </div>
            </Content>
            <Footer class="layout-footer-center">工程師 &copy; 求職網</Footer>
        </Layout>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue.common.dev.js"></script>

<script>
export default{
    data () {
      return {
        WExp: [],
        sID:null,
        sName:null,
        sEmail:null,
        JobID:this.$route.params.id,
        SalaryExpection:null,
        Department:null,
        School:null,
        Degree:null,
        Skill:[],
        ability: [
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
      ]
    
      }
    },
    methods: {
        addboxs(){
            this.Skill.push(null)
        },
        delbox(index){
           this.Skill.splice(index, index + 1) 
        },
        addbox(){
            this.WExp.push({
                wPlace: null,
                wPosition: null,
                Duration: null
            })
        },
        putinfo() {
      const axios = require('axios');
      axios.post(
        "http://163.13.226.86:23760/api/Jobseeker",
        {
          "sID" : this.sID,
          "sName" : this.sName,
          "sEmail" : this.sEmail,
          "JobID": this.JobID
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
           axios.post(
        "http://163.13.226.86:23760/api/CV",
        {
          "SalaryExpection" : parseInt(this.SalaryExpection),
          "Department" : this.Department,
          "School" : this.School,
          "Degree" : this.Degree,
          "Skill" : this.Skill,
          "WExp": this.WExp
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
    
    },
     mounted () {
    //  alert(this.$route.params.id)
      this.addboxs()
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
