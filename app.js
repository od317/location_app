const b = document.querySelector('.button')
const form = document.querySelector('.form')
let ip = document.querySelector('.ip')

var myIcon 
var mapOptions 
var map 


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const ip = document.querySelector('.ip')
    fetch_data(ip.value)
})

async function fetch_data(ip){
    
    const resp = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_u6otmyoOgRXHL3z2NYHOr5cooftZ9&ipAddress=${ip}`)
    const data = await resp.json()
    console.log(data)
    let lat = data.location.lat
    let lng = data.location.lng
    map.panTo(new L.LatLng(lat,lng));

    L.marker([lat,lng], {icon: myIcon}).addTo(map);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    document.querySelector('#ip_address').innerHTML = data.ip
    document.querySelector('#isp').innerHTML = data.isp
    document.querySelector('#location').innerHTML = data.location.city
    document.querySelector('#timezone').innerHTML = data.location.timezone
}










async function s_fetch_data(ip){
    
    const resp = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_u6otmyoOgRXHL3z2NYHOr5cooftZ9&ipAddress=${ip}`)
    const data = await resp.json()
    let lat = data.location.lat
    let lng = data.location.lng
  

     myIcon = L.icon({
        iconUrl: './public/icon-location.svg',
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
        
     mapOptions = {
        center: [lat,lng],
        zoom: 13,
        zoomControl: false
     }
    
     map = new L.map('map', mapOptions);
    
    L.marker([lat,lng], {icon: myIcon}).addTo(map);
    
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    document.querySelector('#ip_address').innerHTML = data.ip
    document.querySelector('#isp').innerHTML = data.isp
    document.querySelector('#location').innerHTML = data.location.city
    document.querySelector('#timezone').innerHTML = data.location.timezone


}

s_fetch_data('')