import React, { Component } from 'react';
import { Link ,Route,Switch} from 'react-router-dom';
import { Menu, Icon, Button, Layout } from 'antd';
import CommentApp from '../comment/CommentApp'
const SubMenu = Menu.SubMenu;
const {
    Header, Content, Footer, Sider,
} = Layout;
const haha=()=>(<div>我是haha</div>);
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: 'none',
        }
    }

    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => { console.log(broken); }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            { <Link to="/home/comment" ><Icon type="user" />
                            <span className="nav-text">nav 1</span></Link> }
                            
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Link to="/home/haha" >
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span></Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="user" />
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
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