import React,{useState,createContext,useReducer} from 'react'

export const ModalLayoutContext = createContext();
export const ModalLayoutDispatchContext = createContext();

export default function ModalLayoutProvider() {

  const [state, dispatch] = useReducer(modalLayoutReducer, initialState);

  return (
    <ModalLayoutContext.Provider >
        <ModalLayoutDispatchContext.Provider >
            {children}
        </ModalLayoutDispatchContext.Provider>
    </ModalLayoutContext.Provider>
  )
}

export function modalLayoutReducer(state, action){
    switch(action.type){
        case 'SHOW_MODAL':
            return {
               
            }
        case 'HIDE_MODAL':
            return {
              
            }
        default:
            throw new Error('Unhandled action type: ', action.type)
    }
}


const initialState = {
    hidden: true
}