const mobileApp = (limit,settings) =>{
    if (settings.length > 5){
        return "limit exceeded"
    }  
    if (typeof(limit) !== "string"){
        for (i=0; i < settings.length; i++){
            if (settings[i] === limit){
             return ` limit ${limit} is at index ${i}`;
} 
}
return "not found"
}
return "limit increased"

}
//console.log(mobileApp(10000 , ["500,000", "200,000", "100,000", "50,000", "10000"]))



const iApp = (item,location) =>{
    if (location.length >= 4){
        return "value 1"
    }  
    if (typeof(item) === "number"){
        for (i=0; i <= location.length; i++){
            if (location[i] === item){
             return ` item ${item} is at index ${i}`;
} 
}
return "found";
}
return "limit reduced";

}
//console.log(iApp("7",[6,5,4]))


//console.log(concept(4,6))


//ASSIGNMENT 21/1/2024
//Make changes to concept.js, commit, push and do a pull request

const newAdd = (a,b)=>{
if ( a <= b) {
    return "true"
}

}
console.log(newAdd(3,4))

