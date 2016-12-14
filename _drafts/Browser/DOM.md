
由于 JavaScript可能会修改 DOM树的结构，所以需要暂停DOM的创建直到JavaScript的资源加载并执行。（JavaScript被标记为异步时，不会卡DOM）

DOM树构建完成之后 emit DOMContentLoaded event ，网页所依赖的资源都加载完成后 emit onload event