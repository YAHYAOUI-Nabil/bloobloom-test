import { useEffect } from "react";
import { useStateContext } from '../contexts/ContextProvider'

const useCollection = (collection) => {
    const {setCollectionsName} = useStateContext()

    useEffect(() => {
        setCollectionsName(collection)
    }, [setCollectionsName, collection])
}

export default useCollection;