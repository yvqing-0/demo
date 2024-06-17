import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message,Space } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './index.css';

interface FormValues {
  username: string;
  password: string;
  remember?: boolean;
}
interface CheckboxChangeEvent {
  target: {
    checked: boolean;
  };
}


const Login = () => {
  let navigate = useNavigate(); // 使用 useNavigate 钩子
  const [autoLogin, setAutoLogin] = useState(false);

  const onFinish = (values: FormValues) => {
    // 这里可以添加登录逻辑，例如调用API
    console.log('Received values from form: ', values);
    message.success('登录成功！');
    navigate('/Admin');
  };

  const onAutoLoginChange = (e: CheckboxChangeEvent) => {
    setAutoLogin(e.target.checked);
  };

  return (
    <div style={{width: '300px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>数字马力</h2>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入手机号!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
          </Form.Item>

         <a className="login-form-forgot"  href="">
          忘记密码
          </a>
      </Form.Item>

      <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
          登录
          </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Login;