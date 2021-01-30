(function (){
    "use strict";
    //声明命名空间
    if(!window.Yaoyao){
        window.Yaoyao = {};
    }
    //获取dom元素
    function $(id){
        if(typeof id != 'string'){throw new Error("入参类型不为String");}
        const dom = document.getElementById(id);
        if(!dom){throw new Error("dom为空");}
        return dom;
    }
    window.Yaoyao.$ = $;

    //通过className获取Dom元素
    function getClassName(className){
        //return document.getElementsByClassName(className);
        return document.querySelector(className);
    }
    window.Yaoyao.getClassName = getClassName;

    //创建dom元素
    function createEl(name) {
        return document.createElement(name);
    }
    window.Yaoyao.createEl = createEl;

    //设置属性(通过json对象设置属性)
    function setAttr(node,styles){
        for(let key in styles){
            node.setAttribute(key,styles[key]);
        }
    }
    window.Yaoyao.setAttr = setAttr;

    //获取属性
    function getAttr(node,key){
        return node.getAttribute(key);
    }
    window.Yaoyao.getAttr = getAttr;

    //添加事件
    function addEvent(node,event,handleFunction){
        if(window.addEventListener){
            node.addEventListener(event,handleFunction);
        }else {
            node.attachEvent(`on${event}`,handleFunction);
        }
    }
    window.Yaoyao.addEvent = addEvent;

    //清除事件
    function removeEvent(node,event,handleFunction){
        if(window.removeEventListener){
            node.removeEventListener(event,handleFunction);
        }else {
            node.detachEvent(`on${event}`,handleFunction);
        }
    }
    window.Yaoyao.removeEvent = removeEvent;
})();