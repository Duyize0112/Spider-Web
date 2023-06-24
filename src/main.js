//创建根节点 绑定到dom上
import { createApp } from 'vue'
createApp(App).mount('#app')
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './routers/index.js';

// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./mocks/browser')
//     worker.start()
//   }

//   const worker =setupworker(...nock);
//   worker.start({});
const app = createApp(App);

app.use(Antd),
app.use(router),
app.mount('#app')
