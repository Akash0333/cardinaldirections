//given "0-360" returns the nearest cardinal direction "N/NE/E/SE/S/SW/W/NW/N"

function getCardinal(angle) {
    //easy to customize by changing the number of directions you have
    var directions = 4;

    var degree = 360 / directions;
    angle = angle + degree/2;
    if (angle >= 0 * degree && angle < 1 * degree)
        return "N"; // SN
    if (angle >= 1 * degree && angle < 2 * degree)
        return "E"; // WE
    if (angle >= 2 * degree && angle < 3 * degree)
        return "S"; // NS
    if (angle >= 3 * degree && angle < 4 * degree)
        return "W"; // EW
    //Should never happen:
    return "N";
}

console.log(getCardinal(89.8))
