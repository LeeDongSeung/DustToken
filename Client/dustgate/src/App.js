import React from 'react';
import {
  Layout, Menu, Icon,
} from 'antd'; 
import Login from './Components/Login';
import "antd/dist/antd.css";
import './App.css';
import logo from './logo_white.png';
import logo_black from './logo_black.png';

const {
  Header, Content, Footer, Sider,
} = Layout;

class App extends React.Component {
  state = {
    collapsed: false, 
    menuKey: "Intro.",
    visible: false
  };

  /* Menu collapse callback */
  onCollapse = (collapsed) => {
    this.setState({collapsed});
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  /* Menu handling callback */
  onMenuClick = (e) => {
    /* Debug purpose */
    var t_visible = false;
    console.log('click', e);
    if (e.key === "login"){
      t_visible = true;
    }
    this.setState({
      menuKey: e.key,
      visible: t_visible
    })
  };

  handleCancel = (e) => {
    this.setState({
        visible: false,
    })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div>
          {
            this.state.collapsed === false
              ? (
              <div className="logo"> 
              <img src={logo} width="168px" height="32px" alt="Logo" />
              </div>
              )
              : (
              <div className="logo"> 
              </div>
              )
          }
          </div>
          <Menu theme="dark" defaultSelectedKeys={['Intro.']} mode="inline" onClick = {this.onMenuClick}>
            <Menu.Item key="Intro.">
              <Icon type="pie-chart" />
              <span> Intro. </span>
            </Menu.Item>
            <Menu.Item key="login">
              <Icon type="desktop" />
              <span> login / signin </span>
            </Menu.Item>
            <Menu.Item key="Device">
              <Icon type="desktop" />
              <span> Device </span>
            </Menu.Item>
            <Menu.Item key="API">
              <Icon type="desktop" />
              <span> API </span>
            </Menu.Item>
            <Menu.Item key="Block chain">
              <Icon type="desktop" />
              <span> Block chain </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Login visible={this.state.visible} onCancel={this.handleCancel} /> 
        <Layout>
          <Header style={{ background: 'rgba(0, 0, 0, 0)', padding: 0 }} >
            <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} style={{fontSize: '32px'}}/>
            <img src={logo_black}  alt="Logo" className="logo_in" />
          </Header>
          <Content style={{ margin: '16px 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            { this.state.menuKey === "login" 
            /*getContent() 구현 */
            ? <div> this is page two </div>
            : <div> this is not page two </div>
            }
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Copyright © Since 2019 3월29일, Inc. Created by omnipede
          </Footer>
        </Layout>
      </Layout>

    );
  }
}

export default App;