function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function() {
    return 'prototype : '+(this.first+this.second)
}

const woo = new Person('woo', 10,20,30);
woo.sum = function() {
    return 'this : '+(this.first+this.second)
}
const kim = new Person('kim', 10,10,10);
console.log("woo.sum()",woo.sum());
// woo라는 객체에 sum라는 메소드를 호출할 때 그 객체 자신이 sum이라는 속성을 가지고 있는지 
//찾는다. 그걸 실행시키고 끝ㄴ냄
console.log("kim.sum()",kim.sum());
//kim은 sum 이 정의가 안되어있으니까 객체생성자인 person에 sum이 정의되어있는지
//찾고 person에 정의가 되어있으니 그걸 실행한다 



