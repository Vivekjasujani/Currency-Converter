// if we return jsx then we end the file with .jsx
// if we return js then we end the file with .js
import { useEffect,useState } from "react";
// custom hook design
const useCurrencyInfo =(currency)=>{
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setdata(res[currency]))
    },[currency])

    return data
}
export default useCurrencyInfo;
