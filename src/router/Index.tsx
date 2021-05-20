import React from 'react';
import { Router } from 'dva/router';
import SideBar from '../Layouts/SideBar';
import Content from '../Layouts/Content';
import './index.css';

function RouterConfig({ history }: any) {
  return (
    <div className="App">
      <Router history={history}>
        <>
          <SideBar />
          <Content />
        </>
      </Router>
    </div>
  );
}

export default RouterConfig;
