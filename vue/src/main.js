import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router/index'
import 'animate.css'

// elementUI 按需引入
import {Button,Menu,Submenu,MenuItem,Row,Col,Icon,MenuItemGroup,Form,FormItem,Input,Radio,Checkbox,Select,Option,RadioGroup,DatePicker,CheckboxGroup,TimePicker,Switch} from 'element-ui';
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(MenuItemGroup);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(RadioGroup);
Vue.use(DatePicker);
Vue.use(CheckboxGroup);
Vue.use(TimePicker);
Vue.use(Switch);


// echarts 引入
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// import VueDND from 'awe-dnd'

// Vue.use(VueDND)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
