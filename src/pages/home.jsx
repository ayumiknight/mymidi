import React from 'react';
import Tone from 'tone';

export default class Loading extends React.Component {

	componentDidMount() {
		var osc = new Tone.Oscillator({
			"type" : "square",
			"frequency" : 440,
			"volume" : -16
		}).toMaster();
	}
	render() {

		return (<div id="sys-loading" className="">
			hello world
		</div>);
	}
}

