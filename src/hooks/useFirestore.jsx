import { useReducer, useEffect, useState } from "react";
import { collection, addDoc, deleteDoc, doc} from "firebase/firestore"
// import { async } from "@firebase/util";
import { db } from "../config/firebase";

let initialState = {
    document: null,
    notes: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return {...state, isPending: true, document: null, success: false, error: null}
        case 'ADDED_DOCUMENT':  
            return {...state, isPending:false, document: action.payload, success: true, error: null}
        case 'ERROR': 
            return {...state, isPending: false, error: action.payload}
        default:
            return state
    }
}

export const useFirestore = (collectionType) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    
    const ref = collection(db, collectionType)

    //add a document
    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING'})

        try {
            const addedDocument = await addDoc(ref, doc)
            dispatch({type: 'ADDED_DOCUMENT', payload: addedDocument})
        }
        catch (error) {
            dispatch({ type: 'ERROR', payload: error.message})
        }
    }

    
    // const deleteDocument = async(id) => {
         
    //      dispatch({type: 'IS_PENDING'})

    //      try{
    //         await deleteDoc(doc(db, collectionType, id))
    //         dispatch({type: 'DELETED_DOCUMENT' })
    //      }
    //      catch(error){
    //         dispatch({type: 'ERROR', payload: 'Could not delete document'})
    //      }
    // }

    return { response, addDocument}
}