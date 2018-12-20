<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-nav{
    width: 500px;
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
    <Layout :style="{minHeight: '100vh'}">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
              <router-link to="/">
                <font face="DFKai-sb" size="6" style="color:yellow"><b>求職網</b></font>
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

              <div>
                    <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>

                    <br>

                      <Button to="/Worker">選擇</Button>
              </div>

          </Content>

          <Footer class="layout-footer-center">工程師 &copy; 求職網</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {


 data () {
            return {
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '職缺',
                        key: 'name'
                    },
                    {
                        title: '薪資',
                        key: 'salary'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],

                data1: [

                
                ],
                
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
       


        }

        
}
</script>
