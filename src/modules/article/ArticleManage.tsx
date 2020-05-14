import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Input, Form, DatePicker, Button, Table } from 'antd';

import BasePage from '@/components/BasePage';
import { Article } from '@/domains/article/interface';
import ArticleService from '@/domains/article/ArticleService';

import './ArticleManage.less';

const { Search } = Input;


interface Column {
  key: string;
  dataIndex: any;
  title: string;
  render?: (text: string, record: Article) => React.ReactNode;
}
interface ArticlePageProps extends RouteComponentProps {};

interface ArticlePageState {
  dataSource: Article[];
}

class ArticlePage extends React.Component<ArticlePageProps, ArticlePageState> {

  state: ArticlePageState = {
    dataSource: []
  }

  componentDidMount() {
    ArticleService.getArticles().then((res: Result<Article>) => {
      const { records = [] } = res;
      this.setState({ dataSource: records });
    });
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
      render: (cover: string, record: Article) => ( <span>1212</span>)
    }, {
      title: '发布日期',
      key: 'publishTime',
      dataIndex: 'publishTime'
    }, {
      title: '创建日期',
      key: 'createdTime',
      dataIndex: 'createdTime'
    }, {
      title: '操作',
      key: 'operate',
      dataIndex: 'operate',
      render: (cover: string, record: Article) => {
        return (
          <div className="operate">
            <span className="operate__item">编辑</span>
            <span className="divider">|</span>
            <span className="operate__item">删除</span>
          </div>
        )
      }
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
          >+ 新增文章</Button>
          <Button type="danger">删除全部</Button>
        </div>
        <div className="content-section">
          <Table
            rowKey={"_id"}
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