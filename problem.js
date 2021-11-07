function isPalindrome(x) {
    let reverseX = x.toLowerCase().split('').reverse();
    if(x.toLowerCase()==reverseX.join('')){
      return true;
    } else {