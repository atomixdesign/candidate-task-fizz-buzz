import React from "react";
import { FizzBuzzResult } from "../../types/types";


const ListItem: React.FC<FizzBuzzResult> = ({ input, output }) => {
    return (
            <p>{input}. {output? output : "-" }</p>
    )
}

export default ListItem