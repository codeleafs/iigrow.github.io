W3C 规范从启动到成熟要经过的阶段：

1. 编辑草案（ED）
2. 首个公开工作草案（FPWD）
3. 工作草案（WD）
4. 候选推荐规范（CR）
5. 提名推荐规范（PR）
6. 正式推荐规范（REC）

行高用字体的倍数表示，较易修改

    font-size: 10px;
    line-heght: 1.5; // 行高为字体的1.5倍

色调的 亮色 和 暗色变体，可以通过把 半透明的黑色和白色叠加在主色调上 去产生。

currentColor 当前的标签所继承的文字颜色

inherit 总是绑定到父元素的计算值 包括字体 颜色等等

background-size: conver; 使得背景图片铺满容器

合理使用简写是一种良好的防卫性编码方式。

background-clip 属性值为border-box时，元素的背景会被元素的border box裁剪掉（边框透明时，背景是从父元素透上来的），值为 padding-box 时，浏览器就会使用内边距的外沿来把背景裁剪掉（边框透明时，背景是当前元素的背景）

box-shadow 可以生成投影 而且支持逗号分隔语法 可以创建任意数量的投影 注：投影是层层叠加的  可以通过 inset 控制投影在内圈还是外圈

outline 描边 产生直角的框线 永远是直角不管主体是否为圆角

box-shadow 是整个块的阴影，偏移距离是相对于原点的偏移

background-origin: padding-box/content-box/border-box  来决定background相对于偏移的定位区域