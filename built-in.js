console.log("Math.PI",Math.PI);
console.log("Math.random()",Math.random()); // 랜덤값 객체(Math)를 소속된 함수(ramdom)은 메소드라고 함
console.log("Math.floor(3.9)" , Math.floor(3.9)); //  내림


const MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val) {
        return Math.floor(val);
    }
}
console.log("MyMath.PI" , MyMath.PI);
console.log("MyMath.random()" , MyMath.random());
console.log("MyMath.floor(3.9)" , MyMath.floor(3.9));
// 객체란 무엇인가
// 서로 연관된 변수와 함수를 그룹핑해서 이름을 붙이는 것 


const mg = {
    name : "민경",
    age : "21",
    sayNickName: function() { 
        console.log("shiningok ! ");
    },
    favourite : {
        color : "green",
        actor : "전종서"
    } 
}
