import React, { createContext, useReducer } from "react"

export const ConfirmContext = createContext({})

const initialState = {
    confirm: []
}


const confirmReducer = (state, action) => {
    switch (action.type) {
        case "SET_CONFIRM":
            return {
                ...state, // copy state 
                confirm: [...state.confirm, action.payload]  // set state counter
            }
        case "SET_UNCONFIRM":
            const newList = state.confirm.filter((item) => item.capexID !== action.payload);

            return {
                ...state, // copy state 
                confirm: newList
            }
        case "CLEAR_CONFIRM":

            return {
                ...state, // copy state 
                confirm: []
            }
    }
}

export const ConfirmProvider = ({ children }) => {
    const [confirmState, confirmDispatch] = useReducer(
        confirmReducer,
        initialState
    )

    const { confirm } = confirmState

    const setConfirm = payload =>
        confirmDispatch({ type: "SET_CONFIRM", payload })
    const setUnConfirm = payload =>
        confirmDispatch({ type: "SET_UNCONFIRM", payload })
    const clearConfirm = payload =>
        confirmDispatch({ type: "CLEAR_CONFIRM", payload })

    return (
        <ConfirmContext.Provider value={{ confirm, setConfirm, setUnConfirm, clearConfirm }}>
            {children}
        </ConfirmContext.Provider>
    )
}