import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Header from "./components/Header"
import Footer from "./components/Footer"
import LeftNav from "./components/LeftNav"
class App extends Component {
  render() {
    return (
      <div className="App">
           <Row className="mainContainer">
            <Col span={4} className="leftNav">
              <LeftNav/>
            </Col>
            <Col span={20} className="rightContent">
                <Header/>
                <Row>
                  content
                </Row>
                <Footer/>
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;
