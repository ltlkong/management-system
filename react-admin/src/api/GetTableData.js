import Cookie from 'js-cookie';

export default function getTableData(dataName) {

  if(Cookie.getJSON("user")) {
    const options = {
      method:"POST",
      body: JSON.stringify(Cookie.getJSON("user")),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch("https://localhost:5001/api/"+dataName,options)
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}