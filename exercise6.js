import axios from "axios";

axios.get('https://www.google.com/')
.then((res)=>{console.log(res.data)})
.catch((err)=>{console.log(err)})