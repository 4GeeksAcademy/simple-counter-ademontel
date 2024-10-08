import React from "react";

const Card = ({digito}) => {
	return (
		<div className="card-body bg-black">
		  <h5 className="card-title">{digito}</h5>
		</div>
	);
  };

  const SecondsCounter = (props) => {
    return (
        <div className="d-flex" >
            <div className="card-body bg-black">
              <i className="far fa-clock"></i>
            </div>
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