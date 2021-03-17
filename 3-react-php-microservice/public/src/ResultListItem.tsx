// imports
import React from 'react';

// component definition
function ResultListItem(props: any) {
  return (
    <li>
        {props.count}. {props.result}
    </li>
  );
}

//export component
export default ResultListItem;