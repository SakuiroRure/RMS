import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './router/page';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store/store'
import 'antd/dist/antd.less';
import './style/animate.css';
import './utils/font-awesome-4.7.0/css/font-awesome.min.css';
import './style/base.less';


FastClick.attach(document.body);
const render = Component => {
    ReactDOM.render(    //绑定redux、热加载
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}

render(Pages);
if (module.hot) {
    module.hot.accept('./router/page', () => {
        render(Pages);
    })
}
registerServiceWorker();
