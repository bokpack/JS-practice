// 객체가 생성될때 자동으로 생성되기 이전에 실행되도록 약속되어있는 생성자함수를 클래스로 구현
class Person {
    constructor(name, first, second) { 
        this.name=name;
        this.first=first;
        this.second=second;
        console.log('constructor' )
    } 
    sum(){
        return 'prototype : '+(this.first+this.second)
    }
    
}


// 객체에 들어가는 함수는 메소드(내가 자주 까먹는 부분 ! )

const woo = new Person('woo',10,10);
woo.sum = function() {
    return 'this : '+(this.first+this.second)
}
const kim = new Person('kim', 10,10);
    kim.sum = function() {
        return 'that : '+(this.first+this.second)
    }
console.log("woo.sum()",woo.sum());
console.log("kim.sum()",kim.sum());

//<-> 생성자 constuct function 
//1. 객체를 만든다 2. 객체의 초기상태를 세팅한다 
