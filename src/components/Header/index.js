import React from "react"
import "./index.css"
import { Row, Col } from 'antd';
import {dataFromat} from "../../utils"
import Api from '../../api'
export default class Header extends React.Component{
  constructor(props){
    super(props)
  }
  state = {
    username:"李雪峰",
    data:''
  }
  componentWillMount(){
    this.getTimes()
    // 将天气请求过来
    Api.water()
        .then((data)=>{
          console.log(data)
          this.setState({
            cloud: data.weather,
            wind:'风向 '+data.winddirection,
            winNum:data.windpower + '级'
          })
        })
  }
  getTimes(){
    setInterval(()=>{
      this.setState({
        data:dataFromat(new Date())
      })
    },1000)
  }
  render(){
    return <div>
       <Row className='headerTopNav'>
        <Col span={19}></Col>
        <Col span={3}>欢迎，{ this.state.username }</Col>
        <Col span={1}></Col>
        <Col span={1}><a href="javascript:;" className="tui">退出</a></Col>
      </Row>
      <Row className="bardCard">
        <Col span={18} className='indexPage'>首页</Col>
        <Col span={3}>{this.state.data}</Col>
        <Col span={3}>{this.state.cloud+' '+this.state.wind+' '+this.state.winNum}</Col>
      </Row>
    </div>
  }
}



