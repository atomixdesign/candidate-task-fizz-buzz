import React from "react";
import { FizzBuzzType } from '../types/types'

const FizzBuzzContext = React.createContext<FizzBuzzType>({
    arrayState: [],
    setArray: () => {},
  });


export default FizzBuzzContext;