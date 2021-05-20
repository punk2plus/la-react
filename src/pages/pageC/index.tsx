import React from 'react';
import { connect } from 'dva';
import './index.css';

function IndexPage(props: any) {
  return (
    <div>
      <h1>{props.pageC.title}</h1>
      page3
    </div>
  );
}

IndexPage.propTypes = {};

// @ts-ignore
export default connect(({ pageC }) => ({
  pageC
}))(IndexPage);
