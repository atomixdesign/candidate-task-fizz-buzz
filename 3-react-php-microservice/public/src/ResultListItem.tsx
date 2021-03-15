// imports
import React from 'react';

// component definition
function ResultListItem(count: Number, result: String) {
  return (
    <li>
        {count}. {result}
    </li>
  );
}

//export component
export default ResultListItem;