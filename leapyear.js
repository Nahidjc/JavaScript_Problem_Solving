function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 == 0) {
                return ("Leap year.");
            } else {
                return ("Not leap year.");
            }

        } else {
            return ("Not Leap Year");
        }

    }
}
const isleapYear = isLeapYear(2016);
console.log(isleapYear);