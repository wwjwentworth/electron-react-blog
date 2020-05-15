/*
 * @Author: 吴文洁
 * @Date: 2020-05-13 11:05:36
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-15 14:23:12
 * @Description: 
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RcFile } from 'antd/lib/upload/interface';
import { Form, Input, Button, message, Upload } from 'antd';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it'

import BasePage from '@/components/BasePage';

import ArticleService from '@/domains/article/ArticleService';

import './CreateArticle.less';
import { HOST } from '@/domains/basic/constants';

const { TextArea } = Input;
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

interface CreateArticleProps extends RouteComponentProps {};
interface CreateArticleState {
  mode: 'preview' | 'write',     // 模式：预览还是编辑
  title: string;
  cover?: string;
  markdown: string;
  description?: string;
};

class CreateArticle extends React.Component<CreateArticleProps, CreateArticleState> {
  state: CreateArticleState = {
    mode: 'preview',
    title: '作业标题',
    markdown: 'hello',
  }

  mdParser: MarkdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  handleFinish = () => {
    const { title, description, markdown, cover } = this.state;
    console.log(cover, 22)
    ArticleService.createArticle({
      title,
      cover,
      markdown,
      description,
    }).then(() => {
      message.success('创建成功');
      this.props.history.push('/article/manage');
    })
  }

  handleChangeMarkdown = ({html, text}: { html: string, text: string}) => {
    this.setState({ markdown: html });
  }

  handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: event.target.value})
  }

  handleChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ description: event.target.value})
  }

  renderHTML = (text: string) => {
    return this.mdParser.render(text);
  }

  handleUpload = (Blob: RcFile, FileList: RcFile[]) => {
    const { name } = Blob;
    var formData = new FormData();
    formData.append('file', Blob);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${HOST}/article/upload`);
    xhr.onload = () => {
      console.log(222)
      this.setState({
        cover: `${HOST}/public/${name}`
      });
    }
    xhr.send(formData);
    
    return false;
  }

  render() {
    const { mode, markdown, cover } = this.state;
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
              <Input
                autoComplete="off"
                placeholder="请输入文章标题"
                onChange={this.handleChangeTitle}
              />
            </Form.Item>
            <Form.Item
              label="文章简介"
              {...formItemLayout}
            >
              <TextArea
                placeholder="请输入文章简介"
                onChange={this.handleChangeDesc}
              ></TextArea>
            </Form.Item>
            <Form.Item
              label="文章封面"
              {...formItemLayout}
            >
              <Upload
                // action={`${HOST}/article/upload`}
                className="article-cover-upload"
                beforeUpload={this.handleUpload}
              >
                <Choose>
                  <When condition={!!cover}>
                    <img src={cover} alt="cover"/>
                  </When>
                  <Otherwise>
                    <span>+</span>
                  </Otherwise>
                </Choose>
              </Upload>
            </Form.Item>
            <Form.Item
              label="文章内容"
              {...formItemLayout}
            >
              <Choose>
                <When condition={mode==='preview'}>
                  <MdEditor
                    renderHTML={this.renderHTML} 
                    config={mdEditorConfig}
                    onChange={this.handleChangeMarkdown}
                  />
                </When>
                <Otherwise>
                  <div
                    className="preview-section"
                    dangerouslySetInnerHTML={{__html: this.mdParser.render(markdown)}}
                  />
                </Otherwise>
              </Choose>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
          </Form>
        </div>
      </BasePage>
    )
  }
}

export default CreateArticle;
