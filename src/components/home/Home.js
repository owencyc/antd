import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Button, Layout } from 'antd';
import { Link ,Route,Switch} from 'react-router-dom';
import Nav from '../../containers/NavContainer'
import CommentApp from '../comment/CommentApp'
const {
    Header, Content, Footer, Sider,
} = Layout;

const haha=()=>(<div>我是haha</div>);


class Home extends Component {
    

    render() {
        return (
            <Layout>
                
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => { console.log(broken); }}
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                        <Nav />
                        
                    </Sider>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Switch>
                                <Route exact path='/home/comment' component={CommentApp}/>
                                <Route exact path='/home/haha' component={haha}/>
                            </Switch>
                            
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
        );
    }
}



export default Home