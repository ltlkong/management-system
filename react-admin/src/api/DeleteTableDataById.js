import Cookie from 'js-cookie';

export default function deleteTableDataBy(dataName, id) {
  const removeInfo = {
    user: Cookie.getJSON("user"),
    content: id
  }

  if(Cookie.getJSON("user")) {
    const options = {
      method:"DELETE",
      body: JSON.stringify(removeInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch("https://localhost:5001/api/"+dataName+"/delete",options)
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}