import {HashRouter,Route,Switch} from 'react-router-dom'
import React from "react"
import App from "./App.js"

import Main from "./pages/Main"
import Login from "./pages/Login"
import Detail from "./pages/Detail"

import Home from "./components/Home"
import None from "./components/404.js"
import Buttons from "./components/UI/Buttons"

class RouterApp extends React.Component {

  render(){
    return <HashRouter>
      <App>
        {/* 注册子路由 */}
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/order/detail" component={Detail}/>
          <Route path="/index" render={()=>
              // 子路由要显示在那个组件内，也是访问上面大路径的时候，显示的组件
              // 对应的Main组件中应该有{this.props.children}
              <Main>
                <Switch>
                  <Route path="/index/home" component={Home}/>
                  <Route path="/index/ui/buttons" component={Buttons}/>
                  <Route path="/index/"  exact={true} component={Home}/>
                  <Route component={None}/>
                </Switch>
              </Main>
          }/>

          <Route path="/" exact={true} component={Main}/>
          <Route component={None}/>
        </Switch>
      </App>
    </HashRouter>
  }
}
export default RouterApp