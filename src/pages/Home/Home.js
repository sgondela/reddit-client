import React from 'react';
import { Layout } from 'antd';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Subreddits from '../../components/Subreddits';

import './Home.css';

const Home = () => {
  const { Footer, Sider, Content } = Layout;
  
  const getCopyrightYear = () => {
    const currentYear = document.write(new Date().getFullYear().toString());
    if (currentYear === '2022') {
      return currentYear;
    } else {
      return `2022-${currentYear}`;
    }
  };

  return (
    <Layout>
      <Header />
      <Layout className='body'>
        <Content className='content'>
          <Main />
        </Content>
        <Sider className='sider'>
          <Subreddits />
        </Sider>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Copyright © 2022 Sarah Gondela. All Rights Reserved.</Footer> 
    </Layout>
  )
};

export default Home;