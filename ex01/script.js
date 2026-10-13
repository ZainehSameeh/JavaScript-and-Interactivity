function calculateGrade(score) {
    if (score === null || score < 0 || score > 100) {
        return "invalid";
    }
    if (score >= 90)
        return 'A';
    else if (score >= 80 && score < 90)
        return 'B';
    else if (score >= 70 && score < 80)
        return 'C';
    else if (score >= 60 && score < 70)
        return 'D';
    else if (score < 60)
        return 'F';
}

function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true;
    }
    else 
        return false;
}

console.log("grade test:");
console.log(calculateGrade(90)); //A
console.log(calculateGrade(89)); //B
console.log(calculateGrade(60)); //D
console.log(calculateGrade(0)); //F
console.log(calculateGrade(100)); //A
console.log(calculateGrade(200)); //Invalid
console.log(calculateGrade(-1)); //Invalid 

console.log(checkAccess(18, true)); //true
console.log(checkAccess(50, true)); //true
console.log(checkAccess(17, true)); //false
console.log(checkAccess(20, false)); //false