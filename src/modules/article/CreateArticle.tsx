import React from 'react';

import BasePage from '@/components/BasePage';

interface CreateArticleProps {};
interface CreateArticleState {};

class CreateArticle extends React.Component<CreateArticleProps, CreateArticleState> {
  render() {
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
        <div className="page create-article-page">111</div>
      </BasePage>
    )
  }
}

export default CreateArticle;