import { useEffect, useState } from "react";

const useCustomHook = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items/`)
            .then(res => res.json())
            .then(data => setItems(data))
    } , []);

    return [items,setItems];
}

export default useCustomHook;