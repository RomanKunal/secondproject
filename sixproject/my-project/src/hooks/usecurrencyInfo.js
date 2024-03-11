import { useEffect,useState } from "react";

function usecurrencyInfo(currency){
    const[data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/91f18cacb0f9bcb9d2ec76ec/latest/${currency}`).then((res)=>
            res.json())
            .then((res)=>setdata(res[currency]))
            console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default usecurrencyInfo;