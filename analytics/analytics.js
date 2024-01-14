const analyse = (a, b) => {
    try {
        if (a <= b || a == b){
        return a + b;
    }
    else {
        return "No gree for anybody";
    }
    } catch (error) {
        return error;
    }
};

console.log(analyse(true, false));