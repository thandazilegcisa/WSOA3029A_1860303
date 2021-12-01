
let exampleData = [];

async function getData(){
    let munich_data = fetch("https://api.waqi.info/feed/Munich/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response = await munich_data;
    let city = await response.json();

    let london_data = fetch("https://api.waqi.info/feed/London/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_london = await london_data;
    let city_london = await response_london.json();

    let amsterdam_data = fetch("https://api.waqi.info/feed/Amsterdam/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_amsterdam = await amsterdam_data;
    let city_amsterdam = await response_amsterdam.json();

    let beijing_data = fetch("https://api.waqi.info/feed/Beijing/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_beijing = await beijing_data;
    let city_beijing = await response_beijing.json();

    let losangeles_data = fetch("https://api.waqi.info/feed/Los Angeles/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_losangeles = await losangeles_data;
    let city_losangeles = await response_losangeles.json();

    exampleData.push(city,city_london,city_amsterdam,city_beijing,city_losangeles);

    exampleData[0].data.city.name = "Munich"
    exampleData[1].data.city.name = "London"
    exampleData[2].data.city.name = "Amsterdam"
    exampleData[3].data.city.name = "Beijing"
    exampleData[4].data.city.name = "Los Angeles"

    let margins ={top: 20, bottom: 10, left: 60, right:30}
    let margin = 0;
    let topMargin =0;
    const graph_width = 480;
    const graph_height = 250 - margins.top - margins.bottom;
   
    const xScale = d3.scaleBand().rangeRound([0,graph_width]).padding(0.1);
    const yScale = d3.scaleLinear().range([graph_height,0])
   
    const chartContainer = d3.select('#interactiveGraph')
                             .attr('width', graph_width)
                             .attr('height',200)
                             .classed('container',true)
                           
    xScale.domain(exampleData.map((d) => d.data.city.name ));
    yScale.domain([0, d3.max(exampleData, d => d.data.aqi) + 45 ]);
                       
    const chart = chartContainer.append('g');
   
    chart.append('g')
         .attr('transform', `translate(45, ${225})`)
         .call(d3.axisBottom(xScale))
   
    chart.append("g")
         .attr("class", "groupOne")
         .attr("transform",`translate(${45},${5})`)
         .call(d3.axisLeft(yScale))

  function update(data){
var u = chart.append("g")
             .selectAll(".bar")
             .data(data);

            u.enter()
             .append('rect')
             .classed('bar', true)
             .attr('width', xScale.bandwidth())
             .attr('height', (data) => 215 - yScale(data.data.aqi))
             .attr('x', (data) => xScale(data.data.city.name))
             .attr('y', (data) => yScale(data.data.aqi))
             .attr("transform", `translate(${45},${8})`)
             .on("mouseover", function(event){
             d3.select(this)
               .transition()
               .duration(800)
               .style("fill","red")
   
             d3.select(this)
          chart.selectAll(".label")
               .data(exampleData)
               .enter()
               .append("text")
               .text(data => data.data.aqi)
               .attr("y", data => yScale(data.data.aqi) - 5)
               .attr("x", data => xScale(data.data.city.name) + (xScale.bandwidth()/2))
               .attr("transform", `translate(${15},${0})`)
               .style("fill", "white")

           console.log(d3.event);
             })
             .on("mouseleave", function(event){
           d3.select(this)
             .transition()
             .duration(450)
             .style("fill","#f3cf89")

           d3.select(this)
        chart.selectAll(".label")
             .data(exampleData)
             .exit()
             .remove()
             .append("text")
             .text(data => data.data.aqi)
             .attr("y", data => yScale(data.data.aqi) - 5)
             .attr("x", data => xScale(data.data.city.name) + (xScale.bandwidth()/2))
             .attr("transform", `translate(${15},${0})`)
             .style("fill", "red")

          console.log(d3.event);
             })  
   }  
   update(exampleData)           
    console.log(exampleData);
}
getData();