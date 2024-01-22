//배열
const babyMemberArray = ['콩나율','백다나','마쭈니'];
console.log("babyMemberArray[2]",babyMemberArray[2]); 


//객체
const babyMemberObject = {
    idol : "콩나율",
    actor : "백다나",
    model : "마쭈니"
}
babyMemberObject.model = "마이진"
console.log("babyMemberObject.model",babyMemberObject.model);
console.log("babyMemberObject['model']",babyMemberObject['model']);
delete babyMemberArray.idol
console.log('after delete babyMemberArray.idol',babyMemberArray.idol );


