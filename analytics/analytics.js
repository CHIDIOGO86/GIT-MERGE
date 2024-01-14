const analyse = (a, b) => {
    try {
        if (a <= b || a == b){
        return a + b;
    }
    else if (a > b && a === b) {
        return a - b;
    } else {
        return "no gree for anybody";
    }
    } catch (error) {
        return error;
    }
};

console.log(analyse(true, false));