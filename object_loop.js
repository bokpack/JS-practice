// 객체는 반복문과 사용할 때 개이득임 

//배열
const babyMemberArray = ['콩나율','백다나','마쭈니'];
console.group("array loop"); // 이거랑 groupEnd를 쓰면 들여쓰기가 되어서 출력됨(보기가 편하다)
let i = 0;
while(i< babyMemberArray.length) {
    console.log(i,babyMemberArray[i])
    i = i + 1;
}
console.groupEnd('array loop');


//객체
const babyMemberObject = {
    idol : "콩나율",
    actor : "백다나",
    model : "마쭈니"
}
console.group('object loop')
for( let name in babyMemberObject ) {
    console.log(name, babyMemberObject[name]);

}
console.groupEnd('object loop')


