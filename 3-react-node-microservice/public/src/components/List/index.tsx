import React, { useContext } from "react";
import FizzBuzzContext from "../../context/FizzBuzzContext";
import ListItem from "../ListItem";

const List: React.FC = () => {
  const { arrayState } = useContext(FizzBuzzContext);
  return (
    <div className="row">
      <hr />
      <div className="col-md-12">
        {arrayState.map((object) => {
          return <ListItem input={object.input} output={object.output} />;
        })}
      </div>
    </div>
  );
};

export default List;
