import { Link } from 'react-router-dom';
import dva from 'dva';
import antd from 'antd';

function BasicLayout(props) {
  const { Menu, Icon } = antd;
  const { SubMenu } = Menu;

  return (
    <div className="App" key="App">
      <Menu mode="horizontal">
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="appstore" />
              Menu
            </span>
          }
        >
          <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="allPosts"><Link to="/allPosts">All Posts</Link></Menu.Item>
        </SubMenu>
      </Menu>
      {props.children}
    </div>
  );
}

export default BasicLayout;

const app = dva();
app.model(require('../models/posts').default);