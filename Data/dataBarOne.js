/* Fetching Data*/
fetch("../superHero-api.json")
.then(function(resolve){
    return resolve.json();
})
.then(function(data){

   let dataSet = new Array(`Name: ${data.name} Speed: ${data.powerstats.speed}`)
   
   console.log(dataSet);
});

/* Section-One Data*/
const exampleData =[
   {id: 'd1', value:10, region: "USA"},
   {id: 'd2', value: 5, region: "India"},
   {id: 'd3', value:25, region: "China"},

];
let svg = d3.select(".section-One")
            .append("svg")
            .attr("id", "svg-container")
            .attr("width", 768)
            .attr("height", 500)
            .style("color", "white")

let xScale = d3.scaleBand().domain(exampleData.map((dataPoint => dataPoint.region))).rangeRound([0,485]).padding(0.1)
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
                .style('width', data => 200- yScale(data.value) )
                .style('height', 235- xScale.bandwidth() )
                .attr("x", data =>yScale(data.region))
                .attr("y", data =>xScale(data.region))

/* 
let group = svg.append("g")
let bar_One = group.append("rect")
                .attr("x", xScale(5))
                .attr("y", 120)
                .attr("width", 420)
                .attr("height", 20)
                .style("fill", "#f3cf89")
let bar_Two = group.append("rect")
                .attr("x", 85)
                .attr("y", 154)
                .attr("width", 320)
                .attr("height", 20)
                .style("fill", "#f3cf89")
let bar_Three = group.append("rect")
                .attr("x", 85)
                .attr("y", 192)
                .attr("width", 380)
                .attr("height", 20)
                .style("fill", "#f3cf89")
*/


