const concept = (c,d) => {
    if (c < d || c == d){
        return "answer"
    }
    else{
        return " its a new year"
    }
}

console.log(concept(6,6))

const Map = (africa) =>{

    if (typeof(africa) === "string"){
        return "Nigeria"
    }
}
console.log(Map(4))