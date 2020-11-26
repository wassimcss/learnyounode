const sum = (array) => {
    var s=0;
for (var i = 2;i<array.length;i++){

    s+=Number(array[i]);  
}
return s;
}
var l = sum(process.argv)
console.log(l)