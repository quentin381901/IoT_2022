import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import tome from '../props/2me.flac'
import allineed from '../props/allineed.flac'

class AudioPlayer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		function handleClick(e) {
			var mylink = "";
			mylink = e.target.getAttribute("mylink");
			document.getElementById("here").innerHTML = '<audio controls autoplay src="'+ mylink +'"> Your browser does not support the <code>audio</code> element. </audio>'
		}

		function handleStop(e) {
			document.getElementById("here").innerHTML = ''
		}


		return (
			<div>
				<div onClick={handleClick} class="me" id="pop" mylink={tome}>POP</div>
				<div onClick={handleClick} class="me" id="electro" mylink={allineed}>funk</div>
				<div class="me" id="rock" mylink="5GcPA3C0QeI">rock</div>
				<div onClick={handleStop} id="stop">stop</div>
				<div id="here"></div>
			</div>
		)
	}
}

export default AudioPlayer