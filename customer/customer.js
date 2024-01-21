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

//step 1: make sure you are on the project folder
//stap 2, make sure you are on the master branch (git checkout master if its not on master branch )
//update the local master with the one on git hub (git pull origin master)
//create the local folder of the new feautre you want to work on
//create the new branch on git bash (git checkout -b "new branch")
//open a fresh vscode app (code .), if you want to open the whole project folder or 
//move into the new folder then open the vscode app, if you want to open only the new folder (cd into the new folder), then type code .