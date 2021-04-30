//Fomate time to hh:mm:ss

export default function formatTime(time) {
  if(!time) return "";

  let date = new Date(time)

  return (date.getHours() + ":" + 
  (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":" + 
  (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()));
}