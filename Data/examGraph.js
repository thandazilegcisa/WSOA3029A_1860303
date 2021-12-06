let link = document.getElementById("link_dataSetOne")
let linkTwo = document.getElementById("link_dataSetTwo")

  /* Create Data Sets */

  let dataSet_One = []
  let dataSet_Two = []

async function getDataSet(){
    let munich_data = fetch("https://api.waqi.info/feed/Lagos/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response = await munich_data;
    let city = await response.json();

    let london_data = fetch("https://api.waqi.info/feed/Durban/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_london = await london_data;
    let city_london = await response_london.json();

    let amsterdam_data = fetch("https://api.waqi.info/feed/Johannesburg/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_amsterdam = await amsterdam_data;
    let city_amsterdam = await response_amsterdam.json();


    let losangeles_data = fetch("https://api.waqi.info/feed/Accra/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_losangeles = await losangeles_data;
    let city_losangeles = await response_losangeles.json();

    let chicago_data = fetch("https://api.waqi.info/feed/Cape Town/?token=d98adaa970b5047953d18bbd9ec9752024b93ae6");
    let response_chicago = await chicago_data;
    let city_chicago = await response_chicago.json();

    dataSet_One = [
        {
            id: 1, name: city.data.city.name ,Value: city.data.aqi 
        },
        {
            id: 2, name: city_london.data.city.name ,Value: city_london.data.aqi 
        },
        {
            id: 3, name: city_amsterdam.data.city.name ,Value: city_amsterdam.data.aqi 
        },
        {
            id: 4, name: city_losangeles.data.city.name ,Value: city_losangeles.data.aqi 
        },
        {
            id: 5, name: city_chicago.data.city.name ,Value: city_chicago.data.aqi 
        }
    ]

    dataSet_One[0].name = "Lagos"
    dataSet_One[1].name = "Durban"
    dataSet_One[2].name = "Johannesburg"
    dataSet_One[3].name = "Accra"
    dataSet_One[4].name = "Cape Town"

    let capeTown_Pop = fetch("../JSON Files/Cape Town.json")
    let response_capePop = await capeTown_Pop;
    let city_CapeTown = await response_capePop.json();

    let accra_Pop = fetch("../JSON Files/Accra.json")
    let response_accraPop = await accra_Pop;
    let city_Accra = await response_accraPop.json();

    let durban_Pop = fetch("../JSON Files/Durban.json")
    let response_durbanPop = await durban_Pop;
    let city_Durban = await response_durbanPop.json();

    let lagos_Pop = fetch("../JSON Files/Lagos.json")
    let response_lagosPop = await lagos_Pop;
    let city_Lagos = await response_lagosPop.json();

    let joburg_Pop = fetch("../JSON Files/Johannesburg.json")
    let response_joburgPop = await joburg_Pop;
    let city_joburg = await response_joburgPop.json();


    dataSet_Two = [
        {
            id: 1, name: "Lagos", Value: city_Lagos[14].Population
        },
        {
            id: 2, name: "Durban", Value: city_Durban[14].Population
        },
        {
            id: 3, name: "Johannesburg", Value: city_joburg[14].Population
        },
        {
            id: 4, name: "Accra", Value: city_Accra[14].Population
        },
        {
            id: 5, name: "Cape Town", Value: city_CapeTown[14].Population
        }
    ]

    let margins = {top: 30, right: 30, bottom: 70, left: 60};
    let graphWidth = 460 - margins.left - margins.right;
    let graphHeight = 400 - margins.top - margins.bottom;

    let svg = d3.select("#ExamGraph")
                .attr ("viewBox", `0 0 ${graphWidth + margins.left + margins.right} ${graphHeight + margins.top + margins.bottom}`)
                .append("g")
                .attr("transform", `translate(${85},${45})`)

    let x = d3.scaleBand()
              .range([0,graphWidth])
              .padding(0.2);
    let xAxis = svg.append("g")
                   .attr("transform", "translate(0," + graphHeight + ")")
    
    let y = d3.scaleLinear()
              .range([graphHeight,0]);
    let yAxis = svg.append("g")
                   .attr("class","myYaxis")

    function updateData(data){
        x.domain(data.map(function(d){
            return d.name
        }))
        xAxis.call(d3.axisBottom(x))
             .style("stroke-width",0.8) 
             .style("stroke", 'beige')

        y.domain([0, d3.max(data, function(d) {
            return d.Value
        }) + 5])
        yAxis.transition().duration(1000).call(d3.axisLeft(y)).style("stroke-width",0.8).style("stroke", 'beige');

        let u = svg.selectAll("rect")
                   .data(data)

        u.enter()
         .append("rect")
         .merge(u)
         .transition()
         .duration(1000)
         .attr("x", function(d){
             return x (d.name);
         })
         .attr("y", function(d){
             return y (d.Value);
         })
         .attr("width", x.bandwidth())
         .attr("height", function(d){
             return graphHeight - y (d.Value);
         })
         .attr("fill","#f3cf89")

        u.exit()
         .remove()
    }
    updateData(dataSet_One)
    link.onclick = function (){
        updateData(dataSet_One)
    }
    linkTwo.onclick = function (){
        updateData(dataSet_Two)
    }
    console.log(dataSet_Two)
  }

  getDataSet();