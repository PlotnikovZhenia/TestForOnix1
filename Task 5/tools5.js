let user_number=Number(prompt("Ваше число"));  
let fibonacci=function(number){
let arr=[0];
if(user_number<0){
    alert("Не можна вводити число менше 0 для ряду Фібоначчі!");
    arr.pop();
}else if(user_number>0) {
    arr.push(1);
    arr.push(1);
    for(let i=2; arr[i]<user_number; i++) {
        arr[i+1]=arr[i]+arr[i-1];
        if(arr[i+1]>user_number) {
            arr.pop();
        }
    }
    alert(arr);
} else if(user_number===0) {
    alert(arr);
} else {
    alert("Вводити треба число!")
}
};
fibonacci(user_number);