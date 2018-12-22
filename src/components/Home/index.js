import React from "react"
import "./index.css"
export default class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className="home">
        <div className="welcome">
          欢迎进入 快买酒 后台管理系统!
        </div>
    </div>
  }
}