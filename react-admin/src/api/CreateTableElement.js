import Cookie from 'js-cookie';

export default function createTableData(elementName, elementObject) {

  if(Cookie.getJSON("user")) {
    const options = {
      method:"POST",
      body: JSON.stringify({elementObject}),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`https://localhost:5001/api/${elementName}/create`,options)
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}