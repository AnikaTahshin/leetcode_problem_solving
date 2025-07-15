var isPalindrome = function(x) {
   if (x<0) {
      return false
    }
let y = x.toString();
let rev = ""

for(let i=y.length-1;i>=0;i--){
      rev += y[i]
    }
    
    let newRev = parseInt(rev)
    
    
      return x === newRev
};

let x = -121

let res = isPalindrome(x)

console.log(res)