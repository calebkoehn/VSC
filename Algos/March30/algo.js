//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

const clockAngles = (hour, minutes) => {
    let minuteAngle = minutes * 6;
    let hourAngle = (hour * 30) + (minutes * 0.5);
    let angle = Math.abs(hourAngle - minuteAngle);

    return Math.min(angle, 360 - angle);
}

// console.log(clockAngles(360));
// console.log(clockAngles(180));
// console.log(clockAngles(210));
// console.log(clockAngles(588));
// console.log(clockAngles(980));
// console.log(clockAngles(361));
console.log(clockAngles(3, 30));