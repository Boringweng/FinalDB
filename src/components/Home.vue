<style scoped>
.layout {
  style="{minHeight: '100vh'}"
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
    <Layout :style="{minHeight: '100vh'}">
        <Header>
            <div class="layout-nav">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <router-link to="Boss">
                        <FormItem name="button">
                            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                        </FormItem>
                    </router-link>
                </Form>
            </div> 
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
