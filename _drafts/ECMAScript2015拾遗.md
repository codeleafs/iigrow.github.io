1. [arrow function](#arrows)
2. [classes]
3. [enhanced object literals]
4. [template strings]
5. [destructuring]
6. [default+rest+spread]
7. [let+const]
8. [iterators+for..of]
9. [generators]
10. [unicode]
11. [modules]
12. [module loaders]
13. [map+set+weakmap+weakset]
14. [proxies]
15. [symbols]
16. [subclassable built-ins]
17. [promises]
18. [math+number+spring+array+object APIs]
19. [binary and octal literals]
20. [reflect api]
21. [tail calls]

#arrows

arrows与surrounding code共享一个this

    var friends=[1,2,3];
    var goodFriends=friends.map(f=>f+1);
    
#class

Classes支持基于prototype的继承，super调用，instance，static方法，constructors。

    class Father{
        _name='';
        constructor(name){
            this._name=name;
        }
    }
    class Child extends Father{
        _age='';
        constructor(fatherName,age){
            super(fatherName);
        }
        static getInstance(){
            return new Child('jack',28);
        }
        get Age(){
            return this._age;
        }
        set Age(age){
            this._age=age;
        }
    }
    
#Enhanced Object Literals 增强对象字面量

1. Setting the prototype at construction
2. Shorthand for `foo:foo` assignments
3. defining methods
4. making super calls


    var obj={
        __proto__:new Object(),
        'key':'ddd', // 不设置到prototype上
        handler, // 等价于 handler:handler
        toString(){
            return 'd'+super.toString();
        }
    };
    
#Template Strings

    `hello world`
    `hello
    world` // hello\nworld
    var target="world";
    `hello ${target}`; // hello world
    GET`${param1}${param2}`;
    //GET(param1,param2);

#Destructuring

binding using pattern matching,支持arrays和objects
未匹配到的字段为undefine

    var [a,,b]=[1,23,3]; //a=1,b=3
    var {a,lhs:{op:b}} = Value;
    function fun({key:value}){
        console.log(value);
    }
    fun({key:100});
    var [a=1]=[]; // 可以给元素数组设置默认值，当Destructuring为undefine时，使用默认值
    
#Default\Rest\Spread

    function fun(x,y=1){
        return x+y;
    }
    fun(1)==2
    
    //bind trailing parameters to an array
    function fun(x,...y){  // y是arguments从1开始
        return x*y.length;
    }
    fun(3,'abc',3)==6 // arguments=[3,'abc',3]
    
    function fun(x,y,z){
        return x+y+z;
    }
    fun(...[1,2,3])==6 //fun.apply(undefined,[1,2,3]);
    
#let\const

let是块级作用域
const 是块级作用域和常量

#iterators\for of

for...of...遍历数据时，会自动去寻找Iterator接口
    
    let personal={
        [Symbol.iterator](){
            let pre =0 ,cur =1;
            return {
                next(){
                    [pre,cur] = [cur,pre+cur];
                    return ={done:fasle,value:cur}
                }
            }
        }
    }
    
    for (let n of personal){
        console.log(n);
    }
    
    // 可以使用fucntion*和yield方便的生成Generator，
    //  function＊返回一个Generator实例
    let personal={
        [Symbol.iterator]:function*(){
            var pre=0,cur=1;
            for(;;){
                var tmp=pre;
                pre=cur;
                cur+=tmp;
                yield cur;
            }
        }
    }

#modules

implicitly async model 隐式异步模型
请求模块的时候代码才会被执行

    // lib/math.js
    export function sum(x,y){}
    export var pi=3.1415;
    
    import * as math from "lib/math"; // as是重命名
    import {sum,pi} from "lib/math";
    
    // lib/mathplusplus.js
    export * from "lib/math";
    export default function(){}
    
    import lb,{pi} from "lib/mathplusplus"  
    
module loaders

#map+set+weakmap+weakset

    let setA= new Set();
    setA.add();
    setA.clear();
    setA.delete();
    
    let mapA=new Map();
    mapA.set();
    mapA.get();
    
    var wm=new WeakMap();
    
    var ws=new WeakSet();
    
#proxies

    
    