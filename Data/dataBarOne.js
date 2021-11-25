
/* Fetching Data*/
var knysna , capeTown, durban, lagos, accra

// Section-One Data
let exampleData =[];

fetch("https://api.waqi.info/feed/Johannesburg/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6")
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

    exampleData[0].data.city.name = "Joburg"
    exampleData[1].data.city.name = "Pretoria"
    exampleData[2].data.city.name = "Durban"
    exampleData[3].data.city.name = "Accra"
    exampleData[4].data.city.name = "Lagos"

 let selected = exampleData;
 let margins ={top: 20, bottom: 10}
 let margin = 0;
 let topMargin =0;
 const graph_width = 400;
 const graph_height = 250 - margins.top - margins.bottom;

 const xScale = d3.scaleBand().rangeRound([0,graph_width]).padding(0.1);
 const yScale = d3.scaleLinear().range([graph_height,0])

 const chartContainer = d3.select('svg')
                          .attr('width', graph_width)
                          .attr('height',150)
                          .classed('container',true)
                        
 xScale.domain(exampleData.map((d) => d.data.city.name ));
 yScale.domain([0, d3.max(exampleData, d => d.data.aqi) + 70]);
                    
 const chart = chartContainer.append('g');

 chart.append('g')
      .attr('transform', `translate(25, ${265})`)
      .call(d3.axisBottom(xScale))
      .style("stroke-width",0.8) 
      .style("stroke", 'beige')
      .classed("axis",true)

 chart.append("g")
      .attr("transform",`translate(${25},${45})`)
      .call(d3.axisLeft(yScale))
      .style("stroke-width",0.8)
      .style("stroke", "beige")
      .style("fill", "none")
      .classed("axis",true)

function render(){

   chart.selectAll(".bar")
        .data(selected)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', xScale.bandwidth())
        .attr('height', (data) => 215 - yScale(data.data.aqi))
        .attr('x', (data) => xScale(data.data.city.name))
        .attr('y', (data) => yScale(data.data.aqi))
        .attr("transform", `translate(${25},${45})`)
        .on("mouseover", function(event){
            d3.select(this)
              .transition()
              .duration(800)
              .style("fill","red")
  
            d3.select(this)
         chart.selectAll(".label")
              .data(selected)
              .enter()
              .append("text")
              .text(data => data.data.aqi)
              .attr("y", data => yScale(data.data.aqi) - 5)
              .attr("x", data => xScale(data.data.city.name) + (xScale.bandwidth()/2))
              .attr("transform", `translate(${15},${0})`)
              .style("fill", "red")
  
          console.log(d3.event)
        })
        .on("mouseleave", function(event){
          d3.select(this)
            .transition()
            .duration(800)
            .style("fill","#f3cf89")
        
        console.log(d3.event)
        })

   chart.selectAll(".bar")
        .data(selected)
        .exit()
        .remove();

}

 render()
 let unselected = []

 const countryList = d3.select("#data")
                       .select("ul")
                       .selectAll("li")
                       .data(exampleData)
                       .enter()
                       .append('li');

 countryList.append("span")
            .text(data => data.data.city.name);

 countryList.append("input")
            .attr("type","checkbox")
            .attr("checked", true)
            .on("change", function(events, info){
                
                console.log(events)
                console.log(info)

                if(unselected.indexOf(events) === -1){
                    unselected.push(events)
                }
                else{
                    unselected = unselected.filter(
                      (event) => event !== events  
                    );
                }
                selected = exampleData.filter(
                    (d) => unselected.indexOf(d.events) === -1
                );

                render();
                console.log(unselected)
                console.log(selected)
            })
            
})
.catch(function(error){
    console.log(error);
});





