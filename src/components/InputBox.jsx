import React,{useId} from 'react'


function InputBox({
    label,
    ammount,
    onAmmountchange,
    onCurrencychange,
    currencyOptions=[],
    selectCurrency="usd",
    ammountDisable=false,
    currencyDisable=false,
    
    className = "",
}) {
   const ammountInputId=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={ammountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={ammountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={ammountDisable}
                    value={ammount}
                    onChange={(e)=> onAmmountchange && onAmmountchange(Number(e.target.value))}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* // agar loops use krna hai to key jarur use krna hoga */}
                          {currencyOptions.map((currency)=>(
                        <option key={currency}  value={currency}>
                            {currency}
                        </option>
                ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
