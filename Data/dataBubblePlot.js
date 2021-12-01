
/* Fetching Data*/
var knysna , capeTown, durban, lagos, accra, newyork

// Section-One Data
let exampleData =[];

fetch("https://api.waqi.info/feed/Munich/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
.then(function(response){
    return response.json();
})
.then(function(data){
    knysna= data;
    let newData = exampleData.push(knysna);
    return fetch("https://api.waqi.info/feed/London/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
   return response.json() 
})
.then(function(data){
   lagos = data
   let newData = exampleData.push(lagos)
   return fetch("https://api.waqi.info/feed/Amsterdam/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
   return response.json();
})
.then(function(data){
   accra = data;
   let newData = exampleData.push(accra)
   return fetch("https://api.waqi.info/feed/Beijing/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
    return response.json();
})
.then(function(data){
    capeTown = data;
    let newData = exampleData.push(capeTown);
    return fetch("https://api.waqi.info/feed/Los Angeles/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
    return response.json();
})
.then(function(data){
    newyork = data;
    let newData = exampleData.push(newyork)
    return fetch("https://api.waqi.info/feed/New York/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
    return response.json();
})
.then(function(data){
    durban = data;
    let newData = exampleData.push(durban);
    console.log(exampleData);

    exampleData[0].data.city.name = "Munich"
    exampleData[1].data.city.name = "London"
    exampleData[2].data.city.name = "Amsterdam"
    exampleData[3].data.city.name = "Beijing"
    exampleData[4].data.city.name = "Los Angeles"

    let margins ={top: 20, bottom: 10, left: 60, right:30}
    let margin = 0;
    let topMargin =0;
    const graph_width = 400;
    const graph_height = 250 - margins.top - margins.bottom;
   
    const xScale = d3.scaleBand().rangeRound([0,graph_width]).padding(0.1);
    const yScale = d3.scaleLinear().range([graph_height,0])
   
    const chartContainer = d3.select('#scatterPlot')
                             .attr('width', graph_width)
                             .attr('height',180)
                             .classed('container',true)
                           
    xScale.domain(exampleData.map((d) => d.data.city.name ));
    yScale.domain([0, d3.max(exampleData, d => d.data.aqi) + 45 ]);
                       
    const chart = chartContainer.append('g');
   
    chart.append('g')
         .attr('transform', `translate(45, ${225})`)
         .call(d3.axisBottom(xScale))
         .style("color", 'white')
   
    chart.append("g")
         .attr("class", "groupOne")
         .attr("transform",`translate(${45},${5})`)
         .call(d3.axisLeft(yScale))
         .style("color", "white")

    chart.append("g")
         .selectAll("dot")
         .data(exampleData)
         .enter()
         .append("svg:circle")
         .attr("class","dotThing")
         .attr("cx", function (d) {return xScale(d.data.city.name)})
         .attr("cy", function (d) {return yScale(d.data.aqi)})
         .attr("r" , 0)
         .attr("transform",`translate(${75},${0})`)
         .style("fill", "#232c35") 
         .attr("r", 8)
         .on("mouseover", function(event){
            d3.select(this)
              .transition()
              .duration(800)
              .attr("r", 45 );
         })
         .on("mouseleave", function(event){
           d3.select(this)
             .transition()
             .duration(800)
             .attr("r", 8);
         })             
})
.catch(function(error){
    console.log(error);
});


            