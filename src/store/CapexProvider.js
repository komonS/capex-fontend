import React, { createContext, useReducer } from "react"

export const CapexContext = createContext({})

const initialState = {
    capex: []
}


const capexReducer = (state, action) => {
    switch (action.type) {
        case "SET_CAPEX":
            return {
                ...state, // copy state 
                capex: [...state.capex, action.payload]  // set state counter
            }
    }
}

export const CapexProvider = ({ children }) => {
    const [capexState, capexDispatch] = useReducer(
        capexReducer,
        initialState
    )

    const { capex } = capexState

    const setCapex = payload =>
        capexDispatch({ type: "SET_CAPEX", payload }) // ส่ง type ADD_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

    return (
        <CapexContext.Provider value={{ capex, setCapex }}>
            {children}
        </CapexContext.Provider>
    )
}