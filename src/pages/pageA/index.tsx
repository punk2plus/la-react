import React from 'react';
import { connect } from 'dva';
import './index.css';

function IndexPage(props: any) {
  return (
    <div>
      <h1>{props.pageA.title}</h1>
      page1
    </div>
  );
}

IndexPage.propTypes = {};

// @ts-ignore
export default connect(({ pageA }) => ({
  pageA
}))(IndexPage);
