import React from 'react';
import Tone from 'tone';
import Midi from '@tonejs/midi';
import Table from './components/table.jsx';

import constants1 from './components/constants.js'

let  {
	notes,
	noteColor,
	noteNextColor
} = constants1;
require('./home.less')
export default class Loading extends React.Component {

	constructor() {
		super();
		this.state = {
			initData: this.getInitData()
		};
		this.initData = this.getInitData();
	}
	componentDidMount() {
		
		window.setNote = this.setNote.bind(this);

		
		// Midi.fromUrl("../bach_846.mid").then(midi => {

		// 	//synth playback
		// 	const synths = []
		// 	document.querySelector('#sys-loading').addEventListener('play', (e) => {
		// 		const playing = e.detail
		// 		if (playing) {
		// 			const now = Tone.now() + 0.5
		// 			midi.tracks.forEach(track => {
		// 				//create a synth for each track
		// 				const synth = new Tone.PolySynth(10, Tone.Synth, {
		// 					envelope: {
		// 						attack: 0.02,
		// 						decay: 0.1,
		// 						sustain: 0.3,
		// 						release: 1
		// 					}
		// 				}).toMaster()
		// 				synths.push(synth)
		// 				//schedule all of the events
		// 				track.notes.forEach(note => {
		// 					synth.triggerAttackRelease(note.name, note.duration, note.time + now, note.velocity)
		// 				})
		// 			})
		// 		} else {
		// 			//dispose the synth and make a new one
		// 			while (synths.length) {
		// 				const synth = synths.shift()
		// 				synth.dispose()
		// 			}
		// 		}
		// 	})
		// })
	}

	synth() {
		var synth = new Tone.Synth().toMaster();
		return synth;
	}

	setNote({
		noteIndex,
		columnIndex,
		blockIndex,
		value
	}) {
		console.log(this.initData[blockIndex][columnIndex][noteIndex], '===============')
		this.initData[blockIndex][columnIndex][noteIndex] = value;

			console.log({
			noteIndex,
			columnIndex,
			blockIndex,
			value
		}, '===========+++++++++++++=', this.initData)
	}

	getInitData () {
		let emptyColumn = Array(30).fill(0),
			block = Array(4).fill(emptyColumn);

		return Array(24).fill(block);
	}

	play() {
		let currentBlock = 0,
			currentColumn = 0,
			synth = this.synth();

		let timer = setInterval(() => {
				if (currentBlock == 24) {

					clearInterval(timer);
					return;
				}
				
				let column = this.initData[currentBlock][currentColumn];
				console.log(column,'===========column=========')
				let notesToPlay = column.map( (elem,i) => elem ? notes[i].toUpperCase(): "" ).filter( elem => elem);
				console.log(notesToPlay, '========current this =================');
				if (notesToPlay.length) {
					synth.triggerAttackRelease(notesToPlay, "8n");
				}
				
				if (currentColumn == 3) {
					currentBlock++;
					currentColumn = 0;
				} else {
					currentColumn++;
				}
			
			
		}, 500)
	}

	render() {

		return (<div id="compose-block" className="home">
			<Table 
				data={this.state.initData}
			/>
			<button onClick={this.play.bind(this)}>button</button>
		</div>);
	}
}

