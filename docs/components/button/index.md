# Button 按钮
常用操作按钮

## 基础用法
:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
```vue
<template>
 <div style="margin-bottom:20px;">
  <SButton color="blue">主要按钮</SButton>
  <SButton color="green">绿色按钮</SButton>
  <SButton color="gray">灰色按钮</SButton>
  <SButton color="yellow">黄色按钮</SButton>
  <SButton color="red">红色按钮</SButton>
 </div>
 <div style="margin-bottom:20px;">
  <SButton color="blue" round plain icon="search">搜索按钮</SButton>
  <SButton color="green" round plain icon="edit">编辑按钮</SButton>
  <SButton color="gray" round plain icon="check">成功按钮</SButton>
  <SButton color="yellow" round plain icon="message">提示按钮</SButton>
  <SButton color="red" round plain icon="delete">删除按钮</SButton>
 </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
 <div class="flex flex-row">
  <SButton icon="edit"></SButton>
  <SButton icon="delete"></SButton>
  <SButton icon="share"></SButton>
  <SButton icon="search">搜索</SButton>
 </div>
</template>
```
