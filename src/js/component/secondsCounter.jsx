import React from "react";

const Card = () => {
	return (

		<div className="card-body bg-black">
		  <h5 className="card-title">Primary card title</h5>
		</div>
	);
  };

  const SecondsCounter = (props) => {
    return (

        <div className="d-flex" >
            <h1>{props.counter}</h1>
            <Card digito={Math.floor(props.counter/100000 %10)} />
            <Card digito={Math.floor(props.counter/10000 %10)} />
            <Card digito={Math.floor(props.counter/1000 %10)} />
            <Card digito={Math.floor(props.counter/100 %10)} />
            <Card digito={Math.floor(props.counter/10 %10)} />
            <Card digito={props.counter %10} />
        </div>
    )
  }

  export {Card, SecondsCounter};