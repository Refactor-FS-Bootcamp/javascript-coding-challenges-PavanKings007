// 1. Sum of the odd numbers from >10 and <30................
function sumOddNums(){
    let arr = [];
    let nums=document.getElementById("oddInput").value;
    for(let i=nums;i>10 && i<30;i++){
        arr.push(i);
    }
    // Using filter() function....................
    let arr2 = arr.filter((num)=>num%2==0);
    // ...........................................
    let sum=0;
    for(let i=0;i<arr2.length;i++){
        sum +=Number(arr2[i]);
    }
    if(sum == 0){
        document.getElementById("solution").innerHTML="Enter a valed number between 11 to 29"
    }
    else{
        document.getElementById("solution").innerHTML="'"+sum+"' is the sum of the odd numbers from >10 and <30 ."
    }
}
// 2. Avg of the elements of the Array.....................
let arr=[];
let count=1;
function add(){
    let enterElements = document.getElementById("enterEle2Q");
    let enteredValue = enterElements.value;
    arr.push(parseInt(enteredValue));
    count++;
    let arrLen = document.getElementById("arrLength2Q").value;
    if (arrLen < count) {
        document.getElementById("enterNum2Q").disabled = true;
    }
    enterElements.value = "";
    }
    
function avgNum(){
    let avrg=0;
    for(let i=0;i<arr.length;i++){
        avrg +=arr[i];
    }
    avrg /=arr.length;
    document.getElementById("solution").innerHTML=avrg;
}
// 3. Only positive Array...............................
let arr3=[];
let count3=1;
function add3(){
    let enterElements = document.getElementById("enterEle3Q");
    let enteredValue = enterElements.value;
    arr3.push(parseInt(enteredValue));
    count3++;
    let arrLen = document.getElementById("arrLength3Q").value;
    if (arrLen < count3) {
        document.getElementById("enterNum3Q").disabled = true;
    }
    enterElements.value = "";
    }
    
    function postiveArray(){
        let arr3Res = arr3.filter((n)=> n>=0);
        document.getElementById("solution").innerHTML=arr3Res;
        return arr3Res;
    }
    // function con(){
    // console.log("This is positive Array : ",postiveArray());
    // }
// 4. Rotate the Array to the left 1 position ?...............................
let arr4=[];
let count4=1;
function add4(){
    let enterElements = document.getElementById("enterEle4Q");
    let enteredValue = enterElements.value;
    arr4.push(parseInt(enteredValue));
    count4++;
    let arrLen = document.getElementById("arrLength4Q").value;
    if (arrLen < count4) {
        document.getElementById("enterNum4Q").disabled = true;
    }
    enterElements.value = "";
    }
    function shift1Left(){
        const firstEle=arr4.shift();
        arr4.push(firstEle);
        document.getElementById("solution").innerHTML=arr4;
    }
// 5. Reverse an Array ?.......................................................
let arr5=[];
let count5=1;
function add5(){
    let enterElements = document.getElementById("enterEle5Q");
    let enteredValue = enterElements.value;
    arr5.push(enteredValue);
    count5++;
    let arrLen = document.getElementById("arrLength5Q").value;
    if (arrLen < count5) {
        document.getElementById("enterNum5Q").disabled = true;
    }
    enterElements.value = "";
    }
   function reverseArray(){
    let arr5A = [...arr5];
    document.getElementById("solution").innerHTML=arr5A.reverse();
   }
//6. Reverse a String ? ............................................................

function reverseString(){
let str=document.getElementById("enterAstring").value;
let resStr="";
for(let i=str.length;i>=0;i--){
    resStr +=str.charAt(i);
}
document.getElementById("solution").innerHTML=resStr;
}   
// 7. Unique Elements in Array1 ?...................................................

let arr7$1=[];
let count7$1=1;
function add7$1(){
    let enterElements = document.getElementById("enterEle7.1Q");
    let enteredValue = enterElements.value;
    arr7$1.push(enteredValue);
    count7$1++;
    let arrLen = document.getElementById("arrLength7.1Q").value;
    if (arrLen < count7$1) {
        document.getElementById("enterNum7.1Q").disabled = true;
    }
    enterElements.value = "";
    }

    let arr7$2=[];
let count7$2=1;
function add7$2(){
    let enterElements = document.getElementById("enterEle7.2Q");
    let enteredValue = enterElements.value;
    arr7$2.push(enteredValue);
    count7$2++;
    let arrLen = document.getElementById("arrLength7.2Q").value;
    if (arrLen < count7$2) {
        document.getElementById("enterNum7.2Q").disabled = true;
    }
    enterElements.value = "";
    }

    function getArrayDifference(arr1, arr2) {
        let differenceArr = arr1.filter((element) => !arr2.includes(element));
        return differenceArr;
    }
    
    function unique() {
        let resArr = getArrayDifference(arr7$1, arr7$2);
        document.getElementById("solution").innerHTML = resArr;
    }