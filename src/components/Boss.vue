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
        <Layout :style="{minHeight: '100vh'}">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <font face="DFKai-sb" size="6" style="color:yellow"><b>求職網</b></font>
                    </div>
                    <div class="layout-nav">
                            <MenuItem name="account">
                                <router-link to="BossAdd">
                                    <Icon type="ios-briefcase" style="color:white"/>
                                    <font face="DFKai-sb" size="3" style="color:white"><b>新增職缺</b></font>
                                </router-link>
                            </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Layout :style="{padding: '0 36px 36px'}">
                    <br>
                    <Content :style="{padding: '24px', minHeight: '450px', background: '#fff'}">
                        <Row>
                            <Col span="5">
                                 <Table height="200" :columns="jobcolumns" :data="job"></Table>
                            </Col>
                            <Col span="19">
                                <Table border :columns="workercolumns" :data="wocker"></Table>
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
    data(){
        return{
            jobcolumns: [
                {
                    title:'職缺',
                    key:'job',
                    render: (h, jobparams) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', jobparams.row.job)
                            ]);
                        }
                },
                {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, jobparams) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(jobparams.jobmethod)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.removejob(jobparams.jobmethod)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                }
            ],
            workercolumns: [
                    {
                       title: '求職工作',
                        key: 'job' 
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '學歷',
                        key: 'education'
                    },
                    {
                        title: '電話',
                        key: 'phone'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                
        
        job:[
            {
                job:'前端工程師'
            },
             {
                job:'後端工程師'
            },
        ],
         wocker: [
                    {
                        job:'前端工程師',
                        name: 'John Brown',
                        education: '大學',
                        phone: 'X'
                    },
                    {
                        job:'前端工程師',
                        name: 'Jim Green',
                        education: '博士',
                        phone: 'X'
                    },
                    {
                        job:'前端工程師',
                        name: 'Joe Black',
                        education: '碩士',
                        phone: 'X'
                    },
                    {
                        job:'後端工程師',
                        name: 'Jon Snow',
                        education: '大學',
                        phone: 'X'
                    }
                ]
            }
    },
    methods: {
            // show (jobmethod) {
            //     this.$Modal.info({
            //         title: 'User Info',
            //         content: 
            //     })
            // },
            removejob (jobmethod) {
                this.job.splice(jobmethod, 1);
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.wocker[index].name}<br>Age：${this.wocker[index].age}<br>Address：${this.wocker[index].address}`
                })
            },
            remove (index) {
                this.wocker.splice(index, 1);
            }
        }
}
</script>
