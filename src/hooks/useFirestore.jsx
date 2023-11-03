import { useReducer, useEffect, useState } from "react";
import { auth } from "../config/firebase";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    
    const ref = auth.collection(collection)

    const addDocument = () => {

    }

    //delete document
    const deleteDocument = (id) => {
         
    }

    return { response, addDocument, deleteDocument}
}