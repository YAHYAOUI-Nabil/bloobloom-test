import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
      const [data, setData] = useState([]);
      useEffect(() => {
        axios.get(url).then(function (response) {
                                        setData(response.data.glasses)
                                    })
                                    .catch(
                                    (error) => console.log(error)
                                    )
                                    
        }, [url])
    return [data];
};
export default useFetch;