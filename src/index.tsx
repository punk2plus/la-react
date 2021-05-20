import dva from 'dva';
import createLoading from 'dva-loading';
import Router from './router/Index';
import './index.css';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { createBrowserHistory } from 'history';

import pageA from './models/pageA';
import pageB from './models/pageB';
import pageC from './models/pageC';

moment.locale('zh-cn');
const createHistory = createBrowserHistory();

// 1. Initialize
const app = dva({
  history: createHistory
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(pageA);
app.model(pageB);
app.model(pageC);

// 4. Router
app.router(Router);

// 5. Start
app.start('#root');

serviceWorker.unregister();
