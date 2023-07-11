import React from "react";
import ReactDom from "react-dom";


const name = 'mansheen'; 
const lastname = 'kaur';
ReactDom.render(

    // for multiple element rendering
  //   [
  //     <h1>hello world!</h1>,
  //     <p>My name is mansheen kaur</p>
  //   ],

//   <React.Fragment>
//     <h1>hello world!</h1>
//     <p>My name is mansheen kaur</p>
//   </React.Fragment>,

<>
    <h1>hello world!</h1>
    <p>My name is {name}</p>
    <p> {3*4}</p>
  </>,

  document.getElementById("root")
);
