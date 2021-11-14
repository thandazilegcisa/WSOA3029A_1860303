
var parseData , capeTown, durban, lagos, accra
let dataArray = []

fetch("https://api.airvisual.com/v2/city?city=Johannesburg&state=Gauteng&country=South Africa&key=530af7e9-7e96-4dfa-a5e6-86f55c2415be")
.then(function(response){
    return response.json();
})
.then(function(data){
    parseData= parsedData(data)
    console.log(dataArray)

})
.catch(function(error){
    console.log(error);
})

function parsedData(data){
    var arr = []
    for (var i in data){
        arr.push
    }
}

/*
async function getdata(){
    const api_url = "http://api.airvisual.com/v2/countries?key=270ec66a-00ae-483c-937b-c145c86ecc65"
    const api_data = await fetch(api_url);
    const api_json = await api_data.json();
    console.log(api_json);
}
getdata();
*/