import React from "react"
import { Link } from "react-router-dom"
import "./index.css"
import menuConfig from "../../config/menuConfig.js"

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


export default class LeftNav extends React.Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    // 组件挂载前的时候的钩子函数，在这里面渲染好菜单
    const menuDoms = this.renderMenu(menuConfig)
    this.setState({
      menuDoms
    })
  }

  // 工具函数使用这种写法
  // 渲染菜单函数
  renderMenu=(data)=>{
    return data.map(item=>{
      if(item.children){
        // 有子节点说明当前是父节点
        return ( //这里返回的是一句话，所以说可以用括号
          <SubMenu
            key={item.key}
            title={item.title}
            >
              { this.renderMenu(item.children) }
           </SubMenu>
        )
      }else{
        // 没有子节点，说明当前就是儿子
        return <Menu.Item key={item.key}>
          <Link to={'/index'+item.key}>{item.title}</Link>
        </Menu.Item>
      }
    })
  }
  render(){
    return <div className="nav">
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>imooc MS</h1>
        </div>
        <Menu mode="vertical" theme='dark'>
          {/* 菜单，数组会自动展开 */}
          { this.state.menuDoms }
        </Menu>
    </div>
  }
}