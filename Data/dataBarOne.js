/* Fetching Data*/
var knysna , capeTown, durban, lagos, accra

/* Section-One Data*/
let exampleData =[];

fetch("http://api.airvisual.com/v2/city?city=Johannesburg&state=Gauteng&country=South Africa&key=530af7e9-7e96-4dfa-a5e6-86f55c2415be")
.then(function(response){
    return response.json();
})
.then(function(data){
    knysna= data
    let newData = exampleData.push(knysna)
    return fetch("http://api.airvisual.com/v2/city?city=Cape Town&state=Western Cape&country=South Africa&key=530af7e9-7e96-4dfa-a5e6-86f55c2415be")
})
.then(function(response){
    return response.json();
})
.then(function(data){
    capeTown = data;
    let newData = exampleData.push(capeTown)
    return fetch("http://api.airvisual.com/v2/city?city=Durban&state=KwaZulu-Natal&country=South Africa&key=530af7e9-7e96-4dfa-a5e6-86f55c2415be")
})
.then(function(response){
    return response.json();
})
.then(function(data){
    durban = data;
    let newData = exampleData.push(durban);
    console.log(exampleData);
})
.catch(function(error){
    console.log(error);
})

/* D3 Stuff*/ 

let svg = d3.select(".section-One")
            .append("svg")
            .attr("id", "svg-container")
            .attr("width", 768)
            .attr("height", 500)
            .style("color", "white")

let xScale = d3.scaleBand().domain(exampleData.map((dataPoint => dataPoint.data.city))).rangeRound([0,485]).padding(0.1)
let yScale = d3.scaleLinear().domain([0,100]).range([0,500])

console.log(`${xScale(5)}px`)

let margin = 55;
let topMargin =25;

svg.append("g")
   .attr("class","groupOne")
   .attr("transform",`translate(${margin},${topMargin})`)
   .call(d3.axisTop(yScale))
   
svg.append("g")
   .attr("class", "groupTwo")
   .attr("transform", `translate(${margin},${topMargin})`)
   .call(d3.axisLeft(xScale));

const bars = svg.select(".groupTwo")
                .selectAll(".bar")
                .data(exampleData)
                .enter()
                .append('rect')
                .classed('bar',true)
                .style('width', data => 200- yScale(data.data.current.current.pollution) )
                .style('height', 235- xScale.bandwidth() )
                .attr("x", data =>yScale(data.region))
                .attr("y", data =>xScale(data.region))



