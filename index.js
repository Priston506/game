var b = 100;
var a = 100;

function moveUp(){
var x = document.getElementById("test");
a -=25;
x.style.top = a + 'px';
}

function moveLeft(){
var x = document.getElementById("test");
b -=25;
x.style.left = b + 'px';
}

function moveRight(){
var x = document.getElementById("test");
b +=25;
x.style.left = b + 'px';
}

function moveDown(){
var x = document.getElementById("test");
a +=25;
x.style.top = a + 'px';
}

function change(){
var s = document.getElementById("test");
s.style.background = "red";
s.style.borderRadius = "50%";
}
