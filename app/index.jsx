import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./template";


ReactDOM.render(
    (<HelloWorld title="Hello World" desc="Lorem Ipsum"></HelloWorld>),
    document.getElementById("container")
);
