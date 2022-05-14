import { useEffect, useState } from "react";

const useItem = itemId =>{
    const [item, setItem] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/items/${itemId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data));

    }, [itemId]);
    return [item]
}

export default useItem;