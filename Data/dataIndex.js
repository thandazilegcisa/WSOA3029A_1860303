/*
d3.select(".sectionArticle").style("color", "white")
  .selectAll("strong").style("color", "red");

d3.select(".sectionArticle").append("p").text("This is a new set of text").attr("class","broken");
*/

//console.log("correct",d3);

/*
let dataArray = [120,200,250];

d3.select(".section-One")
  .selectAll("p")  // This returns data to this element
  .data(dataArray)
  .style("color", function(d,i){
    let textColor = this.innerText;
    if(textColor.indexOf("Dolo") >=0)
    return "red";
  })
  */

  /*
 d3.select("div")
   .on("mouseover",function(){
     d3.select(this)
        .style("background-color","orange");
     
        console.log("Mouse Over");
   })
   .on("mouseout",function(){
     d3.select(this)
       .style("background-color","cornflowerblue ");
     
    console.log("Mouse Out");
   })
   */
/*
  let anim = d3.transition().duration(12000)
   d3.select("div")
     .transition(anim)
     .ease(d3.easeLinear)
     .style("background-color", "orange");
*/
console.log(d3);

/*
let svg = d3.select(".article-One")
            .append("svg")
            .attr("width", 500)
let bar_One = svg.append("rect")
                 .attr("x", 10)
                 .attr("y", 50)
                 .attr("width" , 250)
                 .attr("height", 20)
                 .style("fill", "blue")
let bar_Two = svg.append("rect")
                 .attr("x", 10)
                 .attr("y", 90)
                 .attr("width" , 0)
                 .attr("height", 20)
                 .style("fill", "blue")      
let bar_Three = svg.append("rect")
                 .attr("x", 10)
                 .attr("y", 120)
                 .attr("width" , 420)
                 .attr("height", 20)
                 .style("fill", "blue")



function update(){
  bar_Two.transition()
         .ease(d3.easeLinear)
         .duration(2000)
         .attr("width", 250)
}
update();
*/
/*
let mydataArray = ["me","i","you"]

d3.select(".article-One")
  .selectAll("p")
  .data(mydataArray)
  .enter()
  .append("p")
  .text(function(data,index){
    return data + ""
  })
*/
/*
let promise = d3.json("https://ghibliapi.herokuapp.com/people")
promise.then(function(data){
  console.log(data);
  const names = data.map(function(person){
    console.log(`Name: ${person.name} Age: ${person.age}`)
  })

})
promise.then.d3.select(".article-One")
        .selectAll("p")
        .data(promise)
        .enter()
        .append("p")
        .text(function(data,index){
         return data + ""
        })
*/
