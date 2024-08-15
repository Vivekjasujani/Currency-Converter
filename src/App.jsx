import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
    
const [ammount,setAmount]=useState();
const[from,setfrom]=useState("usd")
const[to,setTo]=useState("inr")
const [convertedAmount,setconvertedAmount]=useState()
const currencyInfo=useCurrencyInfo(from)
const options = Object.keys(currencyInfo)

const swap= () => {
  setfrom(to)
  setTo(from)
  setconvertedAmount(ammount)
  setAmount(convertedAmount)
}
 const convert=()=>
{  
  setconvertedAmount(ammount*currencyInfo[to])
}
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://img.freepik.com/free-vector/rupee-symbol-frame-with-text-space_1017-36519.jpg?t=st=1720333234~exp=1720336834~hmac=5dbd2c446f1ec7f0a2386abd962d4263dc0b79594167923862f64cabfabea1b0&w=740')`,
          }}
          
      >
       <div className="text-5xl border-5  rounded-lg bg-teal-500 bg-opacity-100 text-black px-2 py-0.5">Currency Converter</div> 
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                             ammount={ammount} 
                             currencyOptions={options}
                             onCurrencychange={(currency)=>setfrom(currency)}
                             selectCurrency={from}
                             onAmmountchange={(ammount)=> setAmount(ammount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              ammount={convertedAmount} 
                              currencyOptions={options}
                              onCurrencychange={(currency)=> setTo(currency)}
                              selectCurrency={to}
                              ammountDisable
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                      >
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}
export default App
