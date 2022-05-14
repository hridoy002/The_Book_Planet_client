import { useEffect, useState } from "react";

const useCustomHook = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://morning-chamber-68565.herokuapp.com/items/`)
            .then(res => res.json())
            .then(data => setItems(data))
    } , []);

    return [items,setItems];
}

export default useCustomHook;