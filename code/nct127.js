/* this javascript file is to calculate the distance between the user's current location
and Seoul, Korea */

function calculateDistance() {
    // get the user's location using the Geolocation API
    navigator.geolocation.getCurrentPosition(function(position) {
        // get the latitude and longitude of the user's location
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        // calculate the distance between the user's location and Seoul, Korea
        const seoulLat = 37.532600;
        const seoulLng = 127.024612;
        const distance = calculateDistanceBetweenCoords(userLat, userLng, seoulLat, seoulLng);

        // display the distance
        const distanceElement = document.getElementById("distance");
        distanceElement.innerHTML = `You are ${distance} kilometers away from NCT 127!`;
    });
  }

  // function to calculate the distance between two coordinates
  function calculateDistanceBetweenCoords(lat1, lng1, lat2, lng2) {
    const earthRadius = 6371; // in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance.toFixed(2);
  }

  // function to convert degrees to radians
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }