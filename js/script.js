var num=1243;
var temp=0;
while(num>0){
    var rem =num%10;
    num=num-rem/10
    if(rem%2!==0){
        overall+=rem;
    }
}
console.log(overall)