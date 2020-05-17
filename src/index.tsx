import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';
import {CustomDate} from './custom-date';
import {FruitLoops} from './fruit-loops';

let fruit: Array<string> =[
		'red',
		'green',
		'blue',
		'yellow',
		'pink',
		'brown'
	]

ReactDOM.render(
  <div>
    <Header text="Howzit man"/>
    <Header text="ok React"/>
    <CustomDate />
    <FruitLoops fruit={fruit}/>
    <p>A paragraph goes here</p>
  <a href="#">Click me</a>
  </div>,
  document.querySelector('#root')
)
