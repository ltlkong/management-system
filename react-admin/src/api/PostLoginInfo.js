export default function PostLoginInfo(userName, password) {
  const loginInfo = {
    userName:userName,
    password:password
  }
  const options = {
    method:"POST",
    body: JSON.stringify(loginInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch("https://localhost:5001/api/login",options)
  .then(res => res.json())
  .catch(err => console.log(err))
}