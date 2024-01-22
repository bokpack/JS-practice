const woo = {
    name : "woo",
    first : 10,
    second : 20,
    sum : function(f,s) {
        //return f+s; // 매개변수 받아서 이렇게 계산하면 다른 값 받기 가능
        return this.first + this.second; // 객체의 속성값 사용 
    }
}
// this란 this가 속해있는 메소드가 속해있는 객체를 가르키도록 약속된 특수한 예약어

//console.log("woo.sum(woo.first, woo.second)",woo.sum(woo.first, woo.second));
console.log("woo.sum(woo.first, woo.second)",woo.sum());

