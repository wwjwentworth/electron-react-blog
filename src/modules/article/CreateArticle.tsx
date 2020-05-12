import React from 'react';
import { Form, Input, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';

import BasePage from '@/components/BasePage';

import ArticleService from '@/domains/article/ArticleService';
import { ArticleResponse } from '@/domains/article/interface'
const { TextArea } = Input;
interface CreateArticleProps {
};
interface CreateArticleState {
  mode: 'preview' | 'write',     // 模式：预览还是编辑
  html: string;
};
const formItemLayout = {
  labelCol: {
    xs: { span: 2 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 2 },
    sm: { span: 16 },
  },
};
const mdEditorConfig = {
  view: {
    menu: true,           // 是否显示顶部菜单栏
    md: true,             // 是否显示编辑区
    html: true,           // 是否显示预览区
    fullScreen: true,     // 全屏功能
  },
  table: {                // 表格默认是几行几列
    maxRow: 5,
    maxCol: 6,
  }
};

class CreateArticle extends React.Component<CreateArticleProps, CreateArticleState> {
  state: CreateArticleState = {
    mode: 'preview',
    html: 'hello'
  }

  mdParser: MarkdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  handleFinish = (values: Store) => {
    console.log(values)
    ArticleService.createArticle(values).then((res: ArticleResponse) => {

    })
  }

  handleChangeEditor = ({html, text}: { html: string, text: string}) => {
    this.setState({ html });
  }

  renderHTML = (text: string) => {
    return this.mdParser.render(text);
  }

  render() {
    const { mode, html } = this.state;
    return (
      <BasePage
        firstRoute={{
          name: '文章管理',
          path: '/article/manage'
        }}
        secondRoute={{
          name: '新增文章',
        }}
      >
        <div className="page create-article-page">
          <Form
            onFinish={this.handleFinish}
          >
            <Form.Item
              name="title"
              label="文章标题"
              rules={[
                {
                  required: true,
                  message: '请输入文章标题',
                },
              ]}
              {...formItemLayout}
            >
              <Input placeholder="请输入文章标题" />
            </Form.Item>
            <Form.Item
              name="description"
              label="文章简介"
              {...formItemLayout}
            >
              <TextArea placeholder="请输入文章简介"></TextArea>
            </Form.Item>
            <Form.Item
              name="markdown"
              label="文章内容"
              rules={[
                {
                  required: true,
                  message: '请输入文章内容'
                }
              ]}
              {...formItemLayout}
            >
              <Choose>
                <When condition={mode==='preview'}>
                  <MdEditor
                    renderHTML={this.renderHTML}
                    config={mdEditorConfig}
                    onChange={this.handleChangeEditor}
                  />
                </When>
                <Otherwise>
                  <div
                    className="preview-section"
                    dangerouslySetInnerHTML={{__html: this.mdParser.render(html)}}
                  />
                </Otherwise>
              </Choose>
            </Form.Item>
            <Form.Item
              
            >
              <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
          </Form>
        </div>
      </BasePage>
    )
  }
}

export default CreateArticle;