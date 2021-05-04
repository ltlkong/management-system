import Cookie from 'js-cookie';

export default function getTableDataBy(dataName, searchContent) {
  const searchInfo = {
    user: Cookie.getJSON("user"),
    content: searchContent
  }

  if(Cookie.getJSON("user")) {
    const options = {
      method:"POST",
      body: JSON.stringify(searchInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch("https://localhost:5001/api/"+dataName+"/filter",options)
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}