
function findPalindrome(num, count = 0) {
    
    if(num === Number(num.toString().split("").reverse().join(""))) {
        return {
            number: num,
            status: "Is palindrome",
            iterations: count,
        };
    };
return findPalindrome (num + Number(num.toString().split("").reverse().join("")), count +=1);     
};

console.log(findPalindrome(84));
