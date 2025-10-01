let infoObj = {};
        let weatherObj = {};
       async function getLocation(){
            try{
let response = await fetch("https://api.ipify.org?format=json")
let ipData = await response.json();
let ip = ipData.ip;
console.log(ipData,ip)
 try{
let responseSecond = await fetch(`https://ipwhois.app/json/${ip}`)
let data = await responseSecond.json();
console.log(data);
infoObj=data;
  try{
   let responseThird = await fetch(`https://api.api-ninjas.com/v1/weather?lat=${infoObj.latitude}&lon=${infoObj.longitude}`,{
    method:"GET",
    headers:{
       "X-Api-Key": "t8w79Kw0ak/m1iGQ8S5x/Q==cJujVWBG6P2RAemb" 
    }
   });
   let dataX = await responseThird.json();
   weatherObj = dataX;
   console.log(dataX);
   updateContainers()
            }
            catch(err){
console.log("no weather buddy",err)
            }
            }
            catch(err){
console.log(err,"failed")
            }
            }
            catch(err){
console.log(err,"failed")
            }
        }
        getLocation();
        function  timeStamp(x){ const date_object = new Date(x); const year = date_object.getFullYear(); const month = date_object.getMonth() + 1; const day = date_object.getDate(); console.log(`${year}-${month}-${day}`);} const daysArr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const weatherArray = [
  {
    type: "Sunny",
    icon: "https://lottie.host/8ae28157-c759-40b1-8a53-1d5b44566f32/R0HfCAznXG.lottie",
    tempRange: { min: 21, max: 35 },
  },
  {
    type: "Partly Cloudy",
    icon: "https://lottie.host/da497eea-8268-4611-afdf-75df9849b710/o1gT7LXbl3.lottie",
    tempRange: { min: 16, max: 20 },
  },
  {
    type: "Cloudy",
    icon: "https://lottie.host/401efee6-477d-410a-bd6b-a50092ec2785/AUEYaTiQl3.lottie",
    tempRange: { min: 11, max: 15 },
  },
  {
    type: "Chilly / Mist",
    icon: "https://lottie.host/9ec741d0-dcef-4e85-93b0-65f099f02e80/0dHEMTSjsj.lottie",
    tempRange: { min: 3, max: 10 },
  },
  {
    type: "Snowy",
    icon: "https://lottie.host/b6185de6-2932-4f0f-88bc-0fa4422d3640/pTv2xs50mm.lottie",
    tempRange: { min: -10, max: 2 },
  }
];
function tempType(temp){
  for(let i=0;i<weatherArray.length;i++){
    if(temp>=weatherArray[i].tempRange.min && temp<=weatherArray[i].tempRange.max){
      return `<span>${weatherArray[i].type}</span> <dotlottie-wc src="${weatherArray[i].icon}" style="width: 30px;height: 30px" speed="1" autoplay loop></dotlottie-wc>`
    }
  }
}
  function updateContainers(){
  document.getElementById("country").textContent=`${infoObj.city},${infoObj["country_code"]}`;
  document.getElementById("real-temp").textContent=`${weatherObj.temp}°C`;
  document.getElementById("type-icon").innerHTML=`${tempType(weatherObj.temp)}`;
  document.getElementById("humidity").textContent=`${weatherObj.humidity}%`;
  document.getElementById("cloud%age").textContent=`${weatherObj["cloud_pct"]}%`  ;
  document.getElementById("feelsliketemp").textContent=`${weatherObj["feels_like"]}°` ;
  document.getElementById("min-max").textContent=`${weatherObj["min_temp"]}°/${weatherObj["max_temp"]}°`;
     document.getElementById("wind-speed").textContent=`${weatherObj["wind_speed"]}`;
       document.getElementById("wind-degrees").textContent=`${weatherObj["wind_degrees"]}`;
        }