//Return a string format "longitude,latitude"

export default function getLatAndLong() {

  return new Promise((res, rej) =>{
    if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
        res(position.coords.latitude + ", " + position.coords.longitude);
      })
    }else {
      rej('Error: no geolocation available.')
    }
  })
}