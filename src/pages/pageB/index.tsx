import React from 'react';
import { connect } from 'dva';
import './index.css';

function IndexPage(props: any) {
  return (
    <div>
      <h1>{props.pageB.title}</h1>
      page2
    </div>
  );
}

IndexPage.propTypes = {};

// @ts-ignore
export default connect(({ pageB }) => ({
  pageB
}))(IndexPage);

// ({ pageB }) => ({
//   pageB,
// })
