import React from "react"

import "./index.css"

export default class LeftNav extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className="nav">
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>imooc MS</h1>
        </div>
    </div>
  }
}