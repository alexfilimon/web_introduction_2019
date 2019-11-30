// $(".wrap .digit").addClass("one");

let currentDigit = 0

let digits = ["zero", "one", "two", "three", 
    "four", "five", "six", "seven", "eight", "nine"]

setInterval(function() {
    currentDigit = (currentDigit + 1) % 10;
    $(".wrap .digit")
        .removeClass(digits)
        .addClass(digits[currentDigit])
}, 1000);