function isPrime(num){
    let flag = true;
    for (let i = 2; i < num; i++) {
        if(num % i == 0){
            flag = false;
            break;
        }
    }
    return flag;
}

function random(start,end){
    return parseInt(Math.random() * (end-start+1)) + start;
}
/**
 * 获取某个样式的最终样式
 * @param {*} element 元素节点
 * @param {*} name 样式名称
 */
function getStyle(element,name){
    if(element.currentStyle){
        return element.currentStyle[name];
    }else{
        return getComputedStyle(element,false)[name];
    }
}
//localStorage存取
function getStorageArr(itemKey){
    let items = localStorage.getItem(itemKey);//"
    if(items){
        if(items == "[object Object]"){
            items = []; 
        }else{
            items = JSON.parse(items);
        }
    }else{
        items = [];
    }
    return items;
}
function addItemToStorageArr(item,keyName){
    let items = getStorageArr(keyName);
    items.push(item);
    localStorage.setItem(keyName,JSON.stringify(items));
}
//ajax
/**
 * 
 * @param {function} success ajax成功返回的处理结果
 */
function  ajax({type="GET",url,async=true,data="",success/*回调函数*/}) {
    let xhr;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XHLHTTP");
    }
    xhr.open(type,type.toUpperCase()=="GET"?`${url}?${data}`:url,async);
    xhr.send(type.toUpperCase()=="GET"?null:data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(xhr.responseText);
        }
    }
}