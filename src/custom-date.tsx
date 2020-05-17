import * as React from 'react';

function CustomDate(){
	let [time, setTime] = React.useState("")

	let getTime = ( ) =>{
		setTime(new Date().toTimeString());
	}

	return (
		<div>
			{time}
			<button onClick={getTime}>Show Time</button>
		</div>
	)
}

CustomDate.displayName="CustomDate";

export {
	CustomDate
}