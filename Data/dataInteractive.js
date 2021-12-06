
let exampleData = [];
let data2 = []

async function getData(){
    let munich_data = fetch("https://api.waqi.info/feed/Cape Town/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response = await munich_data;
    let city = await response.json();

    let london_data = fetch("https://api.waqi.info/feed/Durban/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_london = await london_data;
    let city_london = await response_london.json();

    let amsterdam_data = fetch("https://api.waqi.info/feed/Pretoria/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_amsterdam = await amsterdam_data;
    let city_amsterdam = await response_amsterdam.json();


    let losangeles_data = fetch("https://api.waqi.info/feed/Accra/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_losangeles = await losangeles_data;
    let city_losangeles = await response_losangeles.json();

    let chicago_data = fetch("https://api.waqi.info/feed/Lagos/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_chicago = await chicago_data;
    let city_chicago = await response_chicago.json();

    exampleData = [
        {
            id: 1, name: city.data.city.name ,aqi: city.data.aqi 
        },
        {
            id: 2, name: city_london.data.city.name ,aqi: city_london.data.aqi 
        },
        {
            id: 3, name: city_amsterdam.data.city.name ,aqi: city_amsterdam.data.aqi 
        },
        {
            id: 4, name: city_chicago.data.city.name ,aqi: city_chicago.data.aqi 
        },
        {
            id: 5, name: city_losangeles.data.city.name ,aqi: city_losangeles.data.aqi 
        }
    ]

    console.log(exampleData)

    exampleData[0].name = "Cape Town"
    exampleData[1].name = "Durban"
    exampleData[2].name = "Pretoria"
    exampleData[3].name = "Accra"
    exampleData[4].name = "Lagos"

    /*
    document.getElementById("link-AQI").onclick = function () {
        update(exampleData);
        console.log("var1-Clicked")
      };
    document.getElementById("link-Humidity").onclick = function () {
        update(data2);
        console.log("var2-Clicked")
      };

    */
     
   let selected = exampleData;

    let margins ={top: 20, bottom: 10, left: 60, right:30}
    let margin = 0;
    let topMargin =0;
    const graph_width = 480;
    const graph_height = 250 - margins.top - margins.bottom;
   
    const xScale = d3.scaleBand().rangeRound([0,graph_width]).padding(0.1);
    const yScale = d3.scaleLinear().range([graph_height,0])
   
    const chartContainer = d3.select('#interactiveGraph')
                             .attr ("viewBox", `0 0 480 ${255}`)
                             .classed('container',true)
                           
    xScale.domain(exampleData.map((d) => d.name ));
    yScale.domain([0, d3.max(exampleData, d => d.aqi) + 45 ]);
                       
    const chart = chartContainer.append('g').classed("chartGroup", true);
   
    chart.append('g')
         .attr("class", "xAxis-Group")
         .attr('transform', `translate(45, ${225})`)
         .call(d3.axisBottom(xScale))
         .style("stroke-width",0.8) 
         .style("stroke", 'beige')
   
    chart.append("g")
         .attr("class", "groupOne")
         .attr("transform",`translate(${45},${5})`)
         .call(d3.axisLeft(yScale))
         .style("stroke-width",0.8) 
         .style("stroke", 'beige')
         
function render(){
    chart.append("g")
         .selectAll(".bar") 
         .data(selected, data => data.id)
         .enter()
         .append('rect')
         .classed('bar', true)
         .attr('width', xScale.bandwidth())
         .attr('height', (data) => 215 - yScale(data.aqi))
         .attr('x', (data) => xScale(data.name))
         .attr('y', (data) => yScale(data.aqi))
         .attr("transform", `translate(${45},${8})`)
         .on("mouseover", function(){
            d3.select(this)
              .transition()
              .duration(800)
              .style("fill", "red");
         })
         .on("mouseleave", function(){
             d3.select(this)
               .transition()
               .duration(800)
               .style("fill","#f3cf89")
         })
    chart.selectAll(".label")
         .data(selected)
         .enter()
         .append("text")
         .text(data => data.aqi)
         .attr("y", data => yScale(data.aqi) - 5)
         .attr("x", data => xScale(data.name) + (xScale.bandwidth()/2))
         .attr("transform", `translate(${15},${30})`)
         .style("fill", "#f3cf89");
    chart.selectAll(".label")
         .data(selected)
         .exit()
         .remove()
    chart.selectAll(".bar")
         .data(selected , data => data.id)
         .exit()
         .remove(); 
}
render();

    let unselected = [];

    const countryList = d3.select("#data")
                          .select("ul")
                          .attr("class","unorderedList")
                          .selectAll("li")
                          .data(selected , data => data.id)
                          .enter()
                          .append("li")
                          .attr("class","list-ItemCheckbox")
               countryList.append("span")
                          .attr("class", "list-Name")
                          .text(data => data.name);
               countryList.append("input")
                          .attr("type","checkbox")
                          .attr("checked", false)
                          .on("change", (events, info) =>{
                              if(unselected.indexOf(events.id) === -1){
                                  unselected.push(events.id)
                              }
                              else{
                                  unselected = unselected.filter((id) => id !== events.id)
                              }
                              selected = exampleData.filter(
                                  (d) => unselected.indexOf(d.id) === -1
                              );
                              render();
                              console.log(unselected);
                          })
}
getData();
