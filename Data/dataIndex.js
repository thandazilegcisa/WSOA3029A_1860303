const exampleData = [
    {id: "d1", value: 8, region: "South Africa"},
    {id: "d2", value: 12, region: "Ghana"},
    {id: "d3", value: 13, region: "Nigeria"},
    {id: "d4", value: 10, region: "Egypt"},
];

const xScale = d3.scaleBand()
                 .domain(exampleData.map(function(dataPoint){ return dataPoint.region}))
                 .range([0,250])
                 .padding(0.5);
const yScale = d3.scaleLinear().domain([0,15]).range([200,0]);

let container = d3.select(".data")
  .classed("container",true)

const bars =container
  .selectAll(".bar")
  .data(exampleData)
  .enter()
  .append("rect")
  .classed(".bar",true)
  .attr("width", xScale.bandwidth())
  .attr("height", (data) => 200 - yScale(data.value))
  .attr("x", data => xScale(data.region))  // coordinate positions
  .attr("y", data => yScale(data.value)); // y pos in relation to other positions being rendered 
  

console.log("Hello");