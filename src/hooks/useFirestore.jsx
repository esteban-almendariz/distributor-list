import { useReducer, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { async } from "@firebase/util";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, success: false, error: null}
        case 'ADDED_DOCUMENT':  
            return {isPending:false, document: action.payload, success: true, error: null}
        case 'ERROR': 
            return {...state, isPending: false, error: action.payload}
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    
    const ref = auth.collection(collection)

    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING'})

        try {
            const addedDocument = await ref.add(doc)
            dispatch({type: 'ADDED_DOCUMENT', payload: addedDocument})
        }
        catch (error) {
            dispatch({ type: 'ERROR', payload: error.message})
        }
    }

    //delete document
    const deleteDocument = async(id) => {
         
    }

    return { response, addDocument, deleteDocument}
}