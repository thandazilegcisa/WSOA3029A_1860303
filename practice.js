
let dataArray = []

fetch("http://api.airvisual.com/v2/city?city=Knysna&state=Western Cape&country=South Africa&key=270ec66a-00ae-483c-937b-c145c86ecc65" , "http://api.airvisual.com/v2/city?city=Cape Town&state=Western Cape&country=South Africa&key=270ec66a-00ae-483c-937b-c145c86ecc65" )
.then(function(response){
    return response.json();
})
.then(function(data){
   let newData = dataArray.push(data)
   console.log(dataArray)
})
.catch(function(error){
    console.log(error);
})

/*
async function getdata(){
    const api_url = "http://api.airvisual.com/v2/countries?key=270ec66a-00ae-483c-937b-c145c86ecc65"
    const api_data = await fetch(api_url);
    const api_json = await api_data.json();
    console.log(api_json);
}
getdata();
*/