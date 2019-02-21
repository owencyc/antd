import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Button } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';

const Nav = ({ menus }) => {
    console.log('render nav...'); console.log(menus);
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menus.map(menu => {
                console.log(menu);
                if (menu.type === 'item') {
                    return (
                        <Menu.Item key={menu.id} >
                            {menu.route ? (<Link to={menu.route} ><Icon type={menu.icon} />
                                <span>{menu.text}</span></Link>) : (<div><Icon type={menu.icon} /> < span>{menu.text}</span></div>)}

                        </Menu.Item>)
                } else if (menu.type === 'sub') {
                    return (
                        <Menu.SubMenu key={menu.id} title={<span><Icon type={menu.icon} /><span>{menu.text}</span></span>}>
                            {menu.subs.map(sub => (<Menu.Item key={sub.id} >
                                {sub.route ? (<Link to={sub.route} >
                                    <span>{sub.text}</span></Link>) : (<div>{sub.text}</div>)}
                            </Menu.Item>))}
                        </Menu.SubMenu>)
                }
            })}
        </Menu>
    )
}

Nav.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        route: PropTypes.string,
        subs: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            route: PropTypes.string.isRequired
        }))
    }).isRequired).isRequired
}


export default Nav