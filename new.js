fetch("superHero-api.json")
.then(function(resolve){
    return resolve.json();
})
.then(function(data){
    console.log(data);
})

 console.log("hELLO");