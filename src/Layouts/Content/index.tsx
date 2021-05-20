// import AppRouter from "router";
import './index.css';
import { Switch } from 'dva/router';
import { renderRoutes } from 'react-router-config';
import routes from '../../router/routes';

const Content = () => {
  return (
    <div className="Content">
      <Switch>{renderRoutes(routes)}</Switch>
    </div>
  );
};

export default Content;
