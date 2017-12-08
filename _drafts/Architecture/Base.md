
架构的问题并不在组件之内，而是在组件之间：与其他系统之间的接口，交互以及集成——包括底层的技术基础设施。

那些很多被架构师每天在使用着的思想：框架，代理，层次，接口，消息通知，连接器…这都是与间隙（gaps）相关的！

架构是一种用于连接软件设计师们一起工作的粘合剂，共同创造一个弹性的、灵活的、可扩展的以及最终可用的系统。

任何系统必有其自身的架构属性。
An architecture—a system’s attributes—and what an architect produces—a setof documents—definitely are not the same thing.
An architectural description (AD) is a set of artifacts that documents an architecture in a way its stakeholders can understand and demonstrates that thearchitecture has met their concerns.
石头记：选录这个观点并把它放在本文第一个，是想摧毁架构师的个人主义和英雄主义，以及提醒架构的ownership在团队。特别是在大型组织中，软件架构有时是不受控制的。

软件架构是软件组件及其属性，组件之间关系组成的系统结构。
The software architecture of a program or computing system is the structureor structures of the system, which comprise software elements, the externallyvisible properties of those elements, and the relationships among them.
An architectural element (or just element) is a fundamental piece fromwhich a system can be considered to be constructed.
石头记：这是教科书，也是最基础的思维方式。个人认为组成派更多是从空间维度考虑架构。

软件架构是软件一些重要方面决策的集合。这种说法的典型代表是RUP中对于软件架构的定义。
软件架构包含了关于以下问题的重要决策：
1.软件系统的组织；
2.选择组成系统的结构元素和它们之间的接口，以及当这些元素相互协作时所体现的行为；
3.如何组合这些元素，使它们逐渐组成更大的子系统；
4.用于指导这个系统组织的架构风格：这些元素以及他们的接口、协作和组合。  
5.软件架构并不仅仅注重软件本身的结构和行为，还注重其它特性：功能性、性能、可扩展性、可重用性、可理解性以及美学等等。
石头记：依然是教课书般定义，更有设计的感觉。

Software Architecture in Context is the crucial bridge between requirements and design.
The interplay is core to the architectural process.
石头记：架构是需求和设计之间的桥梁，并且特别强调和需求方，设计方的互动。这是瀑布研发的思维。

康威定律：组织结构决定软件架构。
Conway’s law: Organizations which design systems[...] are constrained toproduce designs which are copies of the communication structures of theseorganizations.
设计系统的组织，最终产生的设计等同于组织之内、之间的沟通结构。
石头记：意识到康威定律，是架构师成熟的标志。在微服务架构流行的今天，康威定律被一再的提及。微服务的本质是技术倒逼组织结构变革。“你建构了你所知，你所知又影响了建构的方式。”——这或许就是架构和架构师的关系吧。

公元前1世纪，古罗马御用工程师、建筑师MarcusVitruvius Pollio在其《建筑十书》中最早提出了建筑的三要素“坚固、实用、美观”。英文的表述为Firmitas,Utilitas, Venustas，通俗的说也就是Solid, Useful, Beautiful，用计算机的术语表述就是：
Firmness: Achieve a satisfactory level of freedom from damaging failure.
Commodity: Utility to accomplish the tasks it is purported to be for.
Delight: Pleasure in use.

逻辑视图主要强调面向对象设计；进程视图主要强调并发和同步；物理视图主要强调软件和硬件的映射；部署视图则强调软件在部署环境中的静态组织。场景则强调主需求或者用例。
石头记：经典的“4+1”架构视图，有很多衍生版本。架构师入门必备，是指导软件架构设计，开发实现的重要思想。

利益相关者是对架构感兴趣的任何人和组织。关切是利益相关者对架构的任何期许，需求，或目标。
视图是架构对利益相关者关切的结构化呈现。视点是构建视角的模式，模板。
使用视图和视点的第一个好处是关注点分离。单一视角和很难描述一个复杂系统的架构的。其次是便于和利益相关者沟通。
同时便于对系统复杂性进行管理和增加开发者的关注度。其缺点是分片视图，错误视角的选择和视角之间的不一致性。
架构透视是保证系统属性的一系列活动，策略，指导。
石头记：这是基础而且经典的架构方法。合格架构师拿证的license。掌握此法，可以闯荡架构江湖，还特别适合在大型组织混迹，玩技术。
推荐经典书籍：《软件架构设计》，《软件架构师12项修炼》，《软件系统架构:使用视点和视角与利益相关者合作》。

架构扩展原则
AKF采用的最普遍的架构原则：
1、N+1设计
2、回滚设计
3、禁用设计
4、监控设计
5、设计多活数据中心
6、使用成熟的技术
7、异步设计
8、无状态系统
9、水平扩展非垂直升级
10、设计至少要有两个步骤的前瞻性
11、非核心则购买
12、使用商品化硬件
13、小构建、小发布、快试错
14、隔离故障
15、自动化
石头记：推荐经典书籍《架构即未来》。