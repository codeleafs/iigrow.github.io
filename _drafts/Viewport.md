移动设备上的viewport就是屏幕上能用来显示我们的网页的那一块区域。
css的1px 实际可能对应设备上的多个物理像素

ppk认为移动设备有三个viewport：
  layout viewport： 是浏览器的可视区域大小（包括屏幕范围外，包括隐藏可滚动区域）， 可以用document.documentElement.clientWidth
  visual viewport： 是浏览器实际可视区域（屏幕范围内，不包括隐藏可滚动区域，retina屏幕的ipone是640px），可以用window.innerWidth
  ideal viewport: 是屏幕宽度（屏幕宽度相同的设备，物理像素大小可能不同），不同设备有不同的viewport（所有的iphone viewport宽度都是320px）

meta标签设置

width: 设置 layout viewport 宽度 设置为 device-width 
height: 设置 layout viewport 高度
initial-scale: 页面初始缩放值 小数 （相对于ideal viewport缩放）
minimum-scale: 允许用户最小缩放值 小数
maximum-scale: 允许用户最大缩放值 小数
user-scalable: no/yes 是否允许用户进行缩放

> width和initial-scale冲突的时候 取最大值 (iphone/ipad/ie会横竖屏不分，以垂直方向的ideal viewport为准)