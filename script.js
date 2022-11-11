var cont=document.createElement("div");
cont.setAttribute("class","container");
var row =document.createElement("div");
row.setAttribute("class","row");
var res=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=>{


  for(var i=0;i<data1.length;i++){
   var lat=data1[i].latlng[0];
   var lng=data1[i].latlng[1];
   var city=data1[i].capital;
   
    var div=document.createElement("div");
   div.innerHTML= `
  
                    <div class="col-lg-4">
                      <div class="card" style="width:21rem ";>
                      <div class="card-header">${data1[i].name}</div>
                        <img src="${data1[i].flag}" class="card-img-top" alt="..." height="140px" style="border-bottom:1px dotted black">
                        <div class="card-body">
                           <h6 class="card-title">Capital-${data1[i].capital}</h6>
                           <h6 class="card-title">Region-${data1[i].region}</h6>
                           <h6 class="card-title">Country code-${data1[i].alpha3Code}</h6>
                          

                           <a href="#" class="btn btn-primary" onclick="opendata(${lat},${lng})">Click for weather</a>
                      
                        </div>
                        </div>
                        </div>
                      
                      </div>`
  cont.append(row) 
  row.append(div)                   
  document.body.append(cont)
    
  }
})
.catch((error)=>console.log(error))

opendata();
async function opendata(lat,lng){
  try {
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4bb429bd9c08835324cecac310ed2b50`);
    let res2= await res.json();
    alert(`Temperature:${res2.main.temp}
Humidity:${res2.main.humidity} `)

}
catch(error){
  console.log(error)
}
}
