import { useState } from "react";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(!isFacingUp);
    }
    return [isFacingUp, flipCard];
}

export default useFlip;