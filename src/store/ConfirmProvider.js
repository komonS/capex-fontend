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
    }
}

export const ConfirmProvider = ({ children }) => {
    const [confirmState, confirmDispatch] = useReducer(
        confirmReducer,
        initialState
    )

    const { confirm } = confirmState

    const setConfirm = payload =>
        confirmDispatch({ type: "SET_CONFIRM", payload }) // ส่ง type ADD_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

    return (
        <ConfirmContext.Provider value={{ confirm, setConfirm }}>
            {children}
        </ConfirmContext.Provider>
    )
}