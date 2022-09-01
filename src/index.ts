import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from "./entry";

// import Mybutton from './buttons'
// import Mybutton from './buttons/SFCButton.vue'
// import Mybutton from './buttons/JSXButton'

createApp({
  template: `
    <div>
      <SButton color="blue" icon="search">蓝色按钮</SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="gray">灰色按钮</SButton>
      <SButton color="yellow">黄色按钮</SButton>
      <SButton color="red">红色按钮</SButton>
    </div>
  `,
})
  .use(SmartyUI)
  .mount("#app");
