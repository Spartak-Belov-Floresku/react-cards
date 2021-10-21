import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const deckCards = (res) => {
    const data = {
        id: uuid(), 
        image: res.cards[0].image
    };
    return data;
}

const pokeDex = (res) => {
    const data = {
        id: uuid(), 
        front: res.sprites.front_default, 
        back: res.sprites.back_default, 
        name: res.name, 
        stats: res.stats
    };
    return data;
}

const useAxios = (url) => {
    const [cards, setCards] = useState([]);

    const addCard = async name => {
        const response = await axios.get(url+name);
        const temp = !name?deckCards(response.data): pokeDex(response.data);
        setCards(cards => [...cards, temp]);
    };

    const removeCards = () =>{
        setCards([]);
    }
    return [cards, addCard, removeCards];
}

export default useAxios;