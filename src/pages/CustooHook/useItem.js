import { useEffect, useState } from "react";

const useItem = itemId =>{
    const [item, setItem] = useState({});

    useEffect( () =>{
        const url = `https://morning-chamber-68565.herokuapp.com/items/${itemId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data));

    }, [itemId]);
    return [item]
}

export default useItem;