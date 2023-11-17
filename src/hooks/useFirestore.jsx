import { useReducer, useEffect, useState } from "react";
import { collection, addDoc, doc, updateDoc, arrayUnion} from "firebase/firestore"
// import { async } from "@firebase/util";
import { db } from "../config/firebase";

let initialState = {
    document: null,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'ADDED_DOCUMENT':  
            return {...state, document: action.payload, success: true, error: null}
        case 'EDITED_NOTES': 
            return {...state, notes: action.payload}
        case 'ERROR': 
            return {...state, error: action.payload}
        default:
            return state
    }
}

export const useFirestore = (collectionType) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    
    const ref = collection(db, collectionType)

    //add a document
    const addDocument = async (doc) => {

        try {
            const addedDocument = await addDoc(ref, doc)
            dispatch({type: 'ADDED_DOCUMENT', payload: addedDocument})
        }
        catch (error) {
            dispatch({ type: 'ERROR', payload: error.message})
        }
    }

    const editNotes = async(notes, id) => {
        const docRef = doc(db, 'transaction', id)

        try {
            await updateDoc(docRef, {
            notes: arrayUnion(notes)})
            
        }
        catch (error) {
            console.log(error.message)
        }
    }

    return { response, addDocument, editNotes}
}