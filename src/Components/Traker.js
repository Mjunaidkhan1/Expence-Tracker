import React, { useContext, useState } from 'react'
import { TranCont } from './TranCntext'

export default function Traker() {
    const { transec, addTransection } = useContext(TranCont)

    const [data, setData] = useState('')
    const [amount, setAmount] = useState('')


    const saveData = (e) => {
        e.preventDefault()

        if (Number(amount) === 0) {
            alert('CORRECT VALUE')
            return false
        }
        addTransection({
            amoun: Number(amount),
            dec: data
        })
        setData('')
        setAmount('')
    }

    const getIncom = () => {
        let Incom = 0
        for (var i = 0; i < transec.length; i++) {
            if (transec[i].amount > 0)
                Incom = Incom + transec[i].amount


        }
        return Incom
    }

    const getExpence = () => {
        let Expence = 0
        for (var i = 0; i < transec.length; i++) {
            if (transec[i].amount < 0)
                Expence = Expence + transec[i].amount


        }
        return Expence
    }

    return (
        <div>
            <div className='Contaner'>
                <h1>expence tracker</h1>

                <h3>your balance <br /> <span>{getIncom() + getExpence()}</span> </h3>

                <div className='Expen'>

                    <h3>INCOME <br /> <span>{getIncom()}</span> </h3>
                    <h3>expence <br /> <span>{getExpence()}</span> </h3>
                </div>
                <h2>history</h2>
                <hr />

                <ul className='ul'>
                    {transec.map((data, ind) => {


                        return (
                            <li key={ind}>
                                <span>{data.des}</span>
                                <span>{data.amount}</span>
                            </li>
                        )

                    })}


                </ul>

                <h2>add transection</h2>
                <hr />
                <form className='form' onSubmit={saveData}>
                    <label>
                        text
                    <br />
                        <input value={data} placeholder='write text' type='text' required onChange={(e) => setData(e.target.value)} />
                    </label>

                    <br />
                    <label>
                        amount
                    <br />
                        <input value={amount} placeholder='write amount' type='number' required onChange={(e) => setAmount(e.target.value)} />
                    </label>
                    <br />
                    <button className='button'>add</button>
                </form>
            </div>
            
        </div>
    )
}
