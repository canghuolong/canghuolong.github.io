
// myHeading.innerHTML = 'Hello world!';
// var image = document.querySelector('img');
// image.onclick = function(){
//    var imageName = image.getAttribute('src');
// //    alert(imageName);
//    if(imageName == 'images/xuanzhuanbingdu.png'){
//         image.setAttribute('src','images/result.png');
//    }else{
//         image.setAttribute('src','images/xuanzhuanbingdu.png');
//    }
// }
var button = document.querySelector('button');
var myHeading = document.querySelector('h2');
button.onclick = function(){
    setUserName();
}
function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = '细胞战争之王:' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
    alert('no name');
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML='细胞战争之王'+storedName;
}