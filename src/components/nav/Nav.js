import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Button } from 'antd';

const Nav = ({ menus, menu_collapsed }) => (
    <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
        >
            {menus.map(menu => {
                if (menu.type == 'item') {
                    return (
                        <Menu.Item key={item.id}>
                            <Icon type={item.icon} />
                            <span>{item.text}}</span>
                        </Menu.Item>)
                } else if (menu.type == 'sub') {
                    return (
                    <SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.text}</span></span>}>
                        {item.subs.map(sub=>(<Menu.Item key={sub.id}>{sub.text}</Menu.Item>))}
                    </SubMenu>)
                }
            })}


        </Menu>
    </div>
)

Nav.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        subs: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }).isRequired)
    }).isRequired).isRequired,
    menu_collapsed: PropTypes.bool.isRequired
}


export default Nav