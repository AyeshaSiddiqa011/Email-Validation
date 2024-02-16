let result = {
  "tag": "",
  "free": false,
  "role": false,
  "user": "appa",
  "email": "appa@ayesha.com",
  "score": 0.64,
  "state": "unknown",
  "domain": "ayesha.com",
  "reason": "no_connect",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": false,
  "did_you_mean": "",
  "format_valid": true
}


submitBtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("clicked")
  resultCont.innerHTML = `<img width="123" src="imgs/loading.svg" alt="loading">
  `
  let key = "ema_live_NtYLjxM7mkf9PysYCRZJKDimuLklSCoIsTdK9yw6"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
for (key of Object.keys(result)){
  if(result[key] !== "" && result[key] !== " "){
    str = str + `<div>${key}: ${result[key]}</div>`
}
}
console.log(str)
resultCont.innerHTML = str
})

