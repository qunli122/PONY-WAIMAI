import axios from 'axios'
export default function ajax(url,data={},type="get"){
return new Promise(function(resolve,reject){
    let promise
    if(type=="get"){
        let datastr=""
        Object.keys(data).forEach(key=>{
            datastr+=key+'='+data[key]+'&'
        })
        if(datastr!==''){
            datastr=datastr.substring(0,datastr.lastIndexOf('&'))
            url=url+'?'+datastr
        }
        promise.axios.get(url)
        }
        else{
            promise=axios.post(url,data)
        }
        promise.then(function(response){resolve( response.data)})
        .catch(function(err){reject(err)})
})
}