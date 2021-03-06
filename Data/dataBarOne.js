
/* Fetching Data*/
var knysna , capeTown, durban, lagos, accra

// Section-One Data
let exampleData =[];

fetch("https://api.waqi.info/feed/Cape Town/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
.then(function(response){
    return response.json();
})
.then(function(data){
    knysna= data;
    let newData = exampleData.push(knysna);
    return fetch("https://api.waqi.info/feed/Pretoria/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
   return response.json() 
})
.then(function(data){
   lagos = data
   let newData = exampleData.push(lagos)
   return fetch("https://api.waqi.info/feed/Durban/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
   return response.json();
})
.then(function(data){
   accra = data;
   let newData = exampleData.push(accra)
   return fetch("https://api.waqi.info/feed/Accra/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
    return response.json();
})
.then(function(data){
    capeTown = data;
    let newData = exampleData.push(capeTown);
    return fetch("https://api.waqi.info/feed/Lagos/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
})
.then(function(response){
    return response.json();
})
.then(function(data){
    durban = data;
    let newData = exampleData.push(durban);
    console.log(exampleData);

    exampleData[0].data.city.name = "Cape Town"
    exampleData[1].data.city.name = "Pretoria"
    exampleData[2].data.city.name = "Durban"
    exampleData[3].data.city.name = "Accra"
    exampleData[4].data.city.name = "Lagos"

 let margins ={top: 20, bottom: 10}
 let margin = 0;
 let topMargin =0;
 const graph_width = 400;
 const graph_height = 250 - margins.top - margins.bottom;

 const xScale = d3.scaleBand().rangeRound([0,graph_width]).padding(0.1);
 const yScale = d3.scaleLinear().range([graph_height,0])

 const chartContainer = d3.select('svg')
                          .attr ("viewBox", `0 0 550 ${255}`)
                          .classed('container',true)
                        
 xScale.domain(exampleData.map((d) => d.data.city.name ));
 yScale.domain([0, d3.max(exampleData, d => d.data.aqi) + 100]);
                    
 const chart = chartContainer.append('g');

 chart.append('g')
      .attr('transform', `translate(25, ${205})`)
      .call(d3.axisBottom(xScale))
      .style("stroke-width",0.8) 
      .style("stroke", 'beige')
      .classed("axis",true);

 chart.append("g")
      .attr("transform",`translate(${25},${-15})`)
      .call(d3.axisLeft(yScale))
      .style("stroke-width",0.8)
      .style("stroke", "beige")
      .style("fill", "none")
      .classed("axis",true);

 chart.selectAll(".bar")
      .data(exampleData)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', xScale.bandwidth())
      .attr('height', 0 )
      .attr('x', (data) => xScale(data.data.city.name))
      .attr('y', (data) => yScale(data.data.aqi))
      .attr("transform", `translate(${25},${-12})`)
      .transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attr('height', (data) => 215 - yScale(data.data.aqi))
            
})
.catch(function(error){
    console.log(error);
});





