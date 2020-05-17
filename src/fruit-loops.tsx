import * as React from 'react'

type FruitLoopsProps ={
	fruit: Array<string>
};

function FruitLoops(props: FruitLoopsProps){
	return(
		<ul>
			{props.fruit.map((value, index)=> {

				return <li style={{color:value}} key={index}>{value}</li>
			})}
		</ul>
	)
}

FruitLoops.displayName="FruitLoops";

export {
	FruitLoops
}