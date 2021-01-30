 "use strict";
 //获取div
 const divDom = window.Yaoyao.$("container-wrap");
 //获取table
 const tableDom =  window.Yaoyao.createEl('table');// 创建Dom元素
 //获取添加信息按钮
 const buttonDom = window.Yaoyao.getClassName(".add-info-button");
 //获取form表单
 const infoDom = window.Yaoyao.$("info-dialog")
 //获取关闭按钮
 const infoCloseDom = window.Yaoyao.getClassName(".close-dialog")
 //获取头像区域
 const faceViewDom = window.Yaoyao.getClassName(".face-view")
 //设置属性
 const styles = {"width":"100%","border":"0","cellpadding":"0","cellspacing":"0","id":"table-data-wrap"};

 window.Yaoyao.setAttr(tableDom,styles);

 tableDom.innerHTML = `${createThead(tableTheadData)}` + `${createTable(tableTbodyData)}`;

 divDom.appendChild(tableDom);

 /*
 ***********************添加信息层显示/隐藏 ***********************
  */
 //打开
 window.Yaoyao.addEvent(buttonDom,'click',function (){
    infoDom.classList.add("dialog-show");
 })
//关闭
 window.Yaoyao.addEvent(infoCloseDom,'click',function (){
  infoDom.classList.remove("dialog-show");
 })
 /*
 ***********************添加信息层显示/隐藏 ***********************
  */

 /*
 ***********************设置头像***********************
  */
 window.Yaoyao.addEvent(faceViewDom,'click',function (){
   handlerFaceList();
 })

 function handlerFaceCallback(data){
   console.log(data);
   console.log(faceViewList);
 }
 /*
 ***********************设置头像***********************
  */


 /*
 第一种方式
 行间事件，方便，但是不好维护
 第二种方式
 js中绑定，不可重复写两个一样的事件，会被覆盖
 buttonDom.onclick = function (){
   alert("111")
 }
 buttonDom.onclick = function (){
  alert("222")
 }*/
 /*
 第三种方式
 addEventListener注册
 buttonDom.addEventListener('click',function (){
  alert("111");
 });
 buttonDom.addEventListener('click',function (){
  alert("222");
 });
 */
