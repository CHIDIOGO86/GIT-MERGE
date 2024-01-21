const customerSearch = (item,location) => {
    
    if (location.length > 6){
        return "wrong info"
    }
for ( i = 0 ; i <= location.length; i++){
    if (typeof(item) === "string"){

    if (location[i] === item){
        return `the item ${item} was found at index ${i}`;
    }
    }else {
        return "invalid parameter"
    }

}
return "not found"

}


console.log(customerSearch("maths", ["Lagos", "school", "law", "medicine", "chemistry", "maths"]))