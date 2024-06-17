import React from 'react';
import { Layout, Menu, Breadcrumb, Image, Button } from 'antd';
import {HomeOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const User: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="loading" icon={<HomeOutlined />}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="login" icon={<UserOutlined/>}>
            <Link to="/User/login">登录</Link>
          </Menu.Item>
          <Menu.Item key="enroll" icon={<LoginOutlined />}>
            <Link to="/User/Enroll">注册</Link>
          </Menu.Item>
        </Menu>
      </Header> 
          <Outlet />
      <Footer style={{ textAlign: 'center' }}>
        版权所有 ©2024 第一组有限公司
      </Footer>
     
    </Layout>
  );
};

export default User;