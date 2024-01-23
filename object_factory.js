function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second+this.third;
    }
}

const woo = new Person('woo', 10,20,30);
const kim = new Person('kim', 10,10,10);
console.log("woo.sum()",woo.sum());
console.log("kim.sum()",kim.sum());

const d1 = new Date('2023-1-23'); // new를 붙이면 객체를 만들어서 리턴해준다. 
console.log('d1.getFullYear()',d1.getFullYear());
console.log('d1.getMonth()',d1.getMonth());

console.log('Date',Date);


console.log('Person()',Person());
// new를 붙이면. 일반적인 함수가 아니라 객체를 생성하는 생성자가 된다 construct 생성자 함수
console.log('new Person()',new Person()); // new를 붙여줬더니 객체를 만들어줬다

//객체를 만들 때마다 중괄호로 다시 정의를 해줬는데 생성자를 쓰면서
// new를 사용하면서 실행할 때마다 객체가 양산됨 
// 생산자의 함수의 내용을 바꾸면 그 함수의 모든 객체의 내용을 한 번에 바꿀 수 있음 
