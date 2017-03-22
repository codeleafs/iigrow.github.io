
Browser进程：浏览器的主进程，负责浏览器页面的展示，各个页面的管理，负责其他进程的创建和销毁工作，有且仅有一个。

在android webview上 GPU是Browser进程的一个线程。

Render进程：渲染进程，可能有多个。
Chromium允许配置Render进程被创建的方式：
    Process-per-site-instance: 为每个页面都创建一个独立的render进程。
    Process-per-site: 属于同一域的页面共享一个进程。
    Process-per-tab: 为每个tab页创建一个独立的进程，也是chromium的默认方式。
    Single-process: 所有渲染工作都在Browser进程中进行。（android webview 默认）

GPU进程：最多只有一个，当且仅当GPU硬件加速打开的时候才会创建，主要用于对3D图形加速调用的实现。

NPAPI插件进程： 每种类型的插件只会被创建一次，而且仅当使用时才会被创建。

src/content
├── app // 各个进程的公共实现部分
├── browser // browser进程所需的代码
├── child 
├── common   // 被进程共享的代码
├── gpu // GPU进程共享的代码
├── ppapi_plugin // 插件进程的代码
├── public // 提供Content接口的目录
├── renderer // render进程的代码
├── shell // Content Shell 的代码
├── test
├── utility
└── zygote

FrameLoader -> ImageLoader -> CachedResourceRequest -> CachedResourceLoader |-> MemoryCache
                                                                            |-> ResourceRequest -> ResourceLoader -> ResourceHandle -> ResourceHandleInternal

当前的主线程被阻碍时，WebKit会启动另外一个线程去遍历后面的HTML网页，收集需要的资源URL，然后发送请求。

Webkit使用预扫描和预加载机制来实现资源的并发下载而不被JavaScript的执行所阻碍。
当遇到要执行JavaScript时，WebKit先暂停当前JavaScript代码的执行，使用预先扫描器 HTMLPreloadScanner类来扫描后面的词语。


Webkit判断资源是否在缓存池中，如果是，那么发送一个HTTP请求给服务器，服务器根据请求信息作判断，如果没有更新返回403状态码，直接使用资源池中的资源。

HTTP1.1增加了Pipelining技术，是同时将多个HTTP请求一次性提交给服务器的技术，可能将多个HTTP请求填充在一个TCP数据包内。

SPDY 协议的核心是多路复用，仅使用一个连接来传输一个网页中的众多资源。
    利用一个TCP连接来传输不限个数的资源请求的读写数据流。
    根据资源的请求的特性和优先级，SPDY可以调整这些资源请求的优先级。
    可以预先发送给服务器后面可能需要哪些资源，浏览器可以提前知道并决定是否需要下载。

事件的捕获是自顶向下，先是document节点，然后一路到达目标节点。可以通过 addEventListener的第三个参数来监听捕获阶段的事件，然后用stopPropagation函数来阻止事件向下传递。

事件的冒泡是从下向上的顺序，默认行为是不冒泡的。

当渲染引擎接受到一个事件后，首先做HitTest 检测事件发生在哪个区域，然后查找事件发生处的元素，检测该元素有无监听者，如果有监听则派发事件。

CSS选择器：
    ID: 0,1,0,0
    类属性值、属性、伪类: 0,0,1,0
    各个元素和造元素: 0,0,0,1

webkit 调用CSSParser对象来设置CSSGrammer对象，最后将创建好的结果直接设置到 StyleSheetContents对象中。
    document.styleSheets 是样式表的集合。document.styleSheets[0].cssRules[0].style (selectorText选择器对应的样式 )

使用StyleResolver类来为DOM的元素节点匹配样式，根据节点信息丛样式规则中查找最匹配的规则，然后将样式保存在RenderStyle对象中，最后被RenderObject类所管理和使用。
规则的匹配是由ElementRuleCollector类来计算并获得，它根据元素的属性等信息，从DocumentRuleSets类中获取规则集合，依次按照ID、类别、标签等选择器信息逐次匹配获得元素的样式。

当webkit创建RenderObject对象后，会根据Box模型来计算它们的位置、大小等信息的过程称为布局计算

布局计算是一个递归的过程，这是因为一个节点的大小通常需要先计算它的子节点位置大小等信息。

哪些情况下需要重新计算布局：
    当网页的可视区域发生变化时，调用计算布局的方法，这是因为网页的包含块的大小发生了变化。
    网页动画会触发布局计算。
    JavaScript代码通过CSSOM等接口直接修改样式信息，也会触发重新计算布局。
    用户的交互也会触发布局计算，例如翻滚网页。

RenderObject对象保存了绘制DOM节点需要的各种信息，RenderObject树是基于DOM树建立起来的一棵新树，是为了布局计算和渲染机制而构建的一种新的内部表示。

为DOM树节点创建一个RenderObject对象。
    document节点。
    可视节点例如div等，不会为非可视节点创建RenderObject对象。
    匿名RenderObject节点，如RenderBlock节点。

RenderObject是基类，RenderBox 用来表示块元素。

Webkit会为网页的层次创建相应的RenderLayer对象，当某些类型RenderObject的节点或者具有某些CSS样式的RenderObject节点出现的时候，WebKit就会这些节点创建RenderLayer对象。
RenderLayer树是基于RenderObject树建立起来的一棵新树，每个RenderLayer节点包含的RenderObject节点其实是一棵RenderObject子树。

RenderObject节点需要建立新的RenderLayer节点：
    Document节点对应的RenderView节点。
    HTML节点对应的RenderBlock节点。
    显式的指定CSS位置的RenderObject节点。
    有透明的RenderObject节点。
    有Overflow、alpha或者反射等效果的RenderObject节点。
    Canvas 2D/3D节点
    Video节点。

软件渲染没有为每一层提供后端存储，因此当更新某个层的一个区域时，需要将和这个区域有重叠部分的所有层次的相关区域依次从后向前重新绘制一遍，而硬件加速渲染只需要重新绘制更新发生的层。

对于每个RenderObject对象，需要三个阶段绘制自己，第一阶段是绘制该层中所有块的背景和边框，第二阶段是绘制浮动内容，第三阶段是前景，也就是内容部分、轮廓等部分。
注意：内嵌元素的背景、边框、前景等都是在第三阶段中被绘制。

绘制RenderLayer：

paint()
    paintLayer()
        paintLayerContentsAndReflection()
            refectionLayer()->paintLayer()
            paintLayerContents()
                paintBackgroundForFragments()
                paintList(z坐标为负数的子女层)
                paintForegroundForFragments() // 首先绘制RenderLayer节点对应的RenderObject节点的所有后代节点的背景，如果某个被选中，则绘制选中区域背景，其次绘制浮动元素，再次，绘制RenderObject节点的内容和后代节点的内容，最后绘制所有后代节点的轮廓。
                paintOutlineForFragments()
                paintList(子女有overflow属性)
                paintList(z坐标为正数的子女层)
                paintMaskForFragments()

RenderBlock的绘制(绘制顺序由paintLayer来控制)：

paint()
    paintObject()
        paintBoxDecorations() // paintPhaseBlockBackground阶段
        paintContents()
            paintChildren()
                paintChild()
        paintSelection()
        paintFloats()
        paintOutline()
        paintCaret() // paintPhaseForeground阶段

Webkit第一次绘制网页的时候，绘制区域等同于可视区域大小，而在这之后只首先计算需要更新的区域，然后绘制同这些区域有交集的RenderObject节点。
如果更新区域跟某个RenderLayer节点有交集，会继续查找RenderLayer树中包含的RenderObject子树中的特定一个或一些节点，而不是绘制整个RenderLayer对应的RenderObject子树。

RenderWidget类不仅负责调度页面渲染和页面更新到实际的WebViewImpl类等操作，而且负责同Browser进程的通信。
RenderWidgetHost类的作用是传递Browser进程中网页操作的请求给Render进程的RenderWidget类，并接收来自对方的请求。
BackingStore类，是跟网页可视区域大小一致的后端存储空间，存储的数据就是页面的显示结果。
    BackingStore 保存当前的可视结果，所以Render进程的绘制工作不会影响该网页结果的显示。
    Webkit只需要绘制网页的变动部分，然后Chromium将网页的变动更新到该后端存储中即可。

RenderWidget类接收到更新请求时，Chromium创建一个共享内存区域（TransportDIB）。然后Chromium创建SkCanvas对象，并且RenderWidget会把实际的工作派发给RenderObject树。
Webkit负责遍历RenderObject树，每个RenderObject节点根据需要来绘制自己和子女的内容并存储到目标存储空间（共享内存），最后RenderWidgetHost类把位图复制到BackingStore对象的相应区域，并调用paint把结果绘制到窗口。

触发重绘：
    前端请求：从Browser发起的请求，例如用户操作网页引起的变化。
    后端请求：由于页面自身的逻辑而引发更新部分区域的请求，例如动画。

Chromium和Webkit如何处理请求：
    Renderer进程的消息循环调用 界面失效的回调函数，该函数主要调用RenderWidget::DoDeferredUpdate来完成绘制请求。
    RenderWidget::DodeferredUpdate 函数首先调用Layout函数来触发检查是否有需要重新计算的布局和更新请求。
    RenderWidget类调用TransportDIB类来创建共享内存，内存大小为绘制区域的4倍大小，同时调用Skia图形库来创建一个SkCanvas对象，SkCanvas对象的绘制目标是一个使用共享内存存储的位图。
    当渲染该页面的全部或者部分时，ScrollView类请求按照从前到后的顺序遍历并绘制所有RenderLayer对象的内容到目标的位图中。绘制RenderLayer时，首先Webkit计算重绘的区域是否和RenderLayer有重叠，如果有Webkit要求绘制该层中的所有RenderObject对象。
    绘制完成后，Render进程发送UpdateRect的消息给Browser进程，Renderer进程同时返回以完成渲染的过程，Browser进程接收到消息后首先由BackingStoreManager类来获取或者创建BackingStoreX对象，BackingStoreX对象的大小与可视化区域相同，包含整个网页的坐标信息，根据UpdateRect的更新区域的位置信息将共享内存的内容复制到自己的对应存储区域中。
    最后Browser进程将UpdateRect的回复消息发送到Renderer进程，这是因为Renderer进程知道Browser进程已经使用完该共享内存，可以进行回收利用等操作。

GPU绘图不能像软件渲染那样只是计算其中更新的区域，一旦有更新请求，如果没有分层，引擎可能需要重新绘制所有的区域，因为计算更新部分对GPU来说可能耗费更多的时间。

Webkit决定将哪些RenderLayer对象组合在一起，形成一个有后端存储的新层，这一新层不久后会用于之后的合成，这里称之为合成层，每个新层都有一个或者多个后端存储，这里的后端存储可能是GPU的内存，对于一个RenderLayer对象，如果它没有后端存储的新层，那么就使用父亲所使用的合成层。
将每个合成层的这些RenderLayer内容绘制在合成层的后端存储中。
由合成器将多个合成层合成起来，形成网页的最终可视化结果，实际就是一张图片。

一个RenderLayer对象如果需要后端存储，它会创建一个RenderLayerBacking对象，该对象负责Renderlayer对象所需要的各种存储。

合成层：Webkit对RenderLayer对象创建了后端存储。

RenderLayer具有CSS3D属性，或者CSS透视效果。
RenderLayer包含的RenderObject节点表示的是使用硬件加速的视频解码技术的HTML5 video元素。
RenderLayer包含的RenderObject节点表示的是使用硬件加速的Canvas 2D元素或者WebGL技术。
RenderLayer使用了CSS透明效果的动画或者CSS变换的动画。
RenderLayer使用了硬件加速的CSS Filters技术。
RenderLayer使用了Clip或者Reflection属性，并且它的后代中包括一个合成层。
RenderLayer有一个Z坐标比自己小的兄弟节点，且该节点是一个合成层。

使用合适的网页分层技术以减少需要重新计算的布局和绘图；第二种是使用CSS 3D 变形和动画技术。

使用CSS3D变形技术，能够让浏览器仅仅使用合成器来合成所有的层就可以达到动画效果，而不是通过重新设置其他CSS属性并触发计算布局、重新绘制图形、重新合成所有层这一非常复杂的过程。
当合成器需要合成的时候，每个合成层都可以设置自己的3D变形属性，这些属性仅仅改变合成层的变换参数，而不需要布局计算和绘图操作。
