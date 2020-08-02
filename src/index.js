
function findPalindrom(num, count = 0) {
    
    if(num === Number(num.toString().split("").reverse().join(""))) {
        return {
            number: num,
            status: "Is palindrom",
            iterations: count,
        };
    };
return findPalindrom (num + Number(num.toString().split("").reverse().join("")), count +=1);     
};

console.log(findPalindrom(84));
