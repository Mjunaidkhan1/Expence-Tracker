import { createContext, useReducer } from "react"
import tranReducer from "./TranReducer"

const Data = [

    
]

export const TranCont = createContext(Data)

export const TranProvider =({children})=>{
    // console.log(children,'chh')
    
    let [state,dispatch] = useReducer(tranReducer,Data)
    
    function AddTransection(props){
        dispatch({
            type: 'ADD',
            payload:{
                des:props.dec,
                amount:props.amoun
            }
        })
    }
    return(

        <TranCont.Provider value={{
            transec:state,
            addTransection:AddTransection
        }}>
        {children}

    </TranCont.Provider>
        )
}