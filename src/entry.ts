import type { App } from "vue";

import NormalButton from "./buttons";
import SFCButton from "./buttons/SFCButton.vue";
import JSXButton from "./buttons/JSXButton";

// 单独导出
export { NormalButton, SFCButton, JSXButton };

// 全部导出
export default {
  install(app: App): void {
    app.component(NormalButton.name, NormalButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
