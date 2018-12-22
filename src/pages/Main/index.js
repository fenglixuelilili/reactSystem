import React, { Component } from 'react';
import './index.css';
import { Row, Col } from 'antd';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import LeftNav from "../../components/LeftNav"
class Main extends Component {
  render() {
    return (
      <div className="Main">
           <Row className="mainContainer">
            <Col span={4} className="leftNav">
              <LeftNav/>
            </Col>
            <Col span={20} className="rightContent">
                <Header/>
                <Row>
                  {this.props.children}
                </Row>
                <Footer/>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Main;
