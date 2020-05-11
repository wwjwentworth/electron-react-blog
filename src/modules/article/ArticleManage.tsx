import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Input, Form, DatePicker, Button, Table } from 'antd';
import BasePage from '@/components/BasePage';

import './ArticleManage.less';

const { Search } = Input;

interface Record {
  title: string;
  description: string;
  cover: string;
  publishTime: Date,
  createdTime: Date
}

interface Column {
  key: string;
  dataIndex: any;
  title: string;
  render?: (text: string, record: Record) => React.ReactNode;
}
interface ArticlePageProps extends RouteComponentProps {};

interface ArticlePageState {
  dataSource: [];
}

class ArticlePage extends React.Component<ArticlePageProps, ArticlePageState> {

  state: ArticlePageState = {
    dataSource: []
  }

  getColumns = () => {
    const columns: Array<Column> = [{
      title: '文章标题',
      key: 'title',
      dataIndex: 'title'
    }, {
      title: '简介',
      key: 'description',
      dataIndex: 'description'
    }, {
      title: '封面',
      key: 'cover',
      dataIndex: 'cover',
      render: (cover: string, record: Record) => ( <span>1212</span>)
    }, {
      title: '发布日期',
      key: 'publishTime',
      dataIndex: 'publishTime'
    }, {
      title: '创建日期',
      key: 'createdTime',
      dataIndex: 'createdTime'
    }, {
      title: '创建日期',
      key: 'operate',
      dataIndex: 'operate',
      render: (cover: string, record: Record) => ( <span>1212</span>)
    }];
    return columns;
  }

  handleCreateArticle = () => {
    this.props.history.push(`/article/manage/create/add`);
  }

  render() {
    const { dataSource } = this.state;
    return (
      <BasePage
        firstRoute={{
          name: '文章中心',
          path: '/article/manage'
        }}
      >
        <div className="page article-page">
        <div className="filter-section">
          <Form layout="inline">
            <Form.Item
              label="搜索文章标题"
            >
              <Search
                placeholder="请输入文章标题"
                style={{width: '312px'}}
              />
            </Form.Item>
            <Form.Item
              label="创建时间"
            >
              <DatePicker
                placeholder="请选择创建时间"
                style={{width: '312px'}}
              />
            </Form.Item>

            <Button type="primary">重置</Button>
          </Form>
        </div>
        <div className="operate-section">
          <Button
            type="primary"
            onClick={this.handleCreateArticle}
          >+ Add New Article</Button>
          <Button> Delete All</Button>
        </div>
        <div className="content-section">
          <Table
            dataSource={dataSource}
            columns={this.getColumns()}
          />
        </div>
      </div>
      </BasePage>
    )
  }
}

export default withRouter(ArticlePage);