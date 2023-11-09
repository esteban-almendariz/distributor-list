import { useEffect, useState } from "react"
import { collection, doc, onSnapshot } from "firebase/firestore"
import { db } from "../config/firebase"

export const useCollection = (collectionType) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ref = collection(db, collectionType)

        const unsubscribe = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })
            setDocuments(results)
            setError(null)
        })
    }, [collectionType])
    return { documents, error}
}