import React, { useState } from 'react';
import { Table, Button, DatePicker, Select, Input, Space } from 'antd';
import moment from 'moment';

interface Record {
  权益ID: string;
  商品名称: string;
  库存: number;
  开始时间: moment.Moment;
  结束时间: moment.Moment;
  商品状态: '运行中' | '已下线';
  管理人: string;
  // 根据你的数据结构添加更多的字段
}

const { Option } = Select;
const { RangePicker } = DatePicker;


const Admin: React.FC = () => {
  const [form] = useState({
    权益ID: '',
    商品名称: '',
    // 开始时间和结束时间可以是 moment.Moment 类型、null 或 undefined
    开始时间: undefined as (moment.Moment | null | undefined),
    结束时间: undefined as (moment.Moment | null | undefined),
    商品状态: undefined,
    管理人: '',
  });
  const [tableData, setTableData] = useState([]);

  // 处理表单重置
  const handleReset = () => {
    form.权益ID = '';
    form.商品名称 = '';
    form.开始时间 = undefined;
    form.结束时间 = undefined;
    form.商品状态 = undefined;
    form.管理人 = '';
    // 更新状态以重置输入框
  };

  // 处理查询
  const handleSearch = () => {
    // 这里可以添加查询逻辑，使用form中的数据作为查询条件
    console.log('Search:', form);
  };

  // 构建商品列表的列
  const columns = [
    {
      title: '权益ID',
      dataIndex: '权益ID',
      key: '权益ID',
    },
    {
      title: '商品名称',
      dataIndex: '商品名称',
      key: '商品名称',
    },
    // ... 其他列的定义
    {
      title: '操作',
      key: 'operation',
      render: (_:any, record: Record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button danger onClick={() => handleDelete(record)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  // 模拟编辑和删除函数
  const handleEdit = (record: Record) => {
    console.log('Edit record:', record);
  };

  const handleDelete = (record: Record) => {
    console.log('Delete record:', record);
  };

  return (
    <div className="admin-container">
      <h1>反卷先锋队 - 商品管理</h1>
      <div className="search-form">
        <Input placeholder="请输入权益ID" value={form.权益ID} onChange={(e) => { form.权益ID = e.target.value; }} />
        <Input placeholder="请输入商品名称" value={form.商品名称} onChange={(e) => { form.商品名称 = e.target.value; }} />
        
        <Select placeholder="请选择商品状态" value={form.商品状态} onChange={(e) => { form.商品状态 = e; }}>
          <Option value="all">全部</Option>
          <Option value="online">已上线</Option>
          <Option value="offline">已下线</Option>
        </Select>
        <Input placeholder="请输入管理人" value={form.管理人} onChange={(e) => { form.管理人 = e.target.value; }} />
        <Button onClick={handleReset}>重置</Button>
        <Button onClick={handleSearch}>查询</Button>
      </div>
      <Table dataSource={tableData} columns={columns} rowKey="权益ID" />
    </div>
  );
};

export default Admin;