// const e = require("connect-flash");

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: listing.geometry.coordinates,
    zoom: 9,
});

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`))
    .addTo(map);





    // mapboxgl.accessToken = mapToken;

    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    //     zoom: 9 // starting zoom
    // });


    // const marker = new mapboxgl.Marker()
    // .setLngLat([coordinates])
    // .addTo(map);
