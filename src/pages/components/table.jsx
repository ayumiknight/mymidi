import React from 'react';
import constants1 from './constants.js'

let {
	notes,
	noteColor,
	noteNextColor
} = constants1;
require('./table.less');
export default class Table extends React.Component {

	componentDidMount() {

	}

	onScroll(e) {
		console.log(e.target ,' on scroll=============')
	}

	render() {
		let { data, timebeat } = this.props;
		return <div className="note-table" onScroll={this.onScroll.bind(this)}>
			{data.map( (block, i) => {
				return <NotesBlock data={block} key={i} blockIndex={i} />
			})}
		</div>
	}
}



class NotesBlock extends React.Component {
	render() {
		let { data, blockIndex } = this.props;
		return <div className="notes-block">
			{data.map( (column, i) => {
				return <NoteColumn data={column} key={i} columnIndex={i} blockIndex={blockIndex}/>
			})}
		</div>
	}
}


class NoteColumn extends React.Component {
	render() {
		let { data, columnIndex, blockIndex } = this.props;
		return <div className="note-column">
			{notes.map( (note, i) => {
				return <NoteCell note={note} nextNote={notes[i + 1]} data={data[i]} key={i} noteIndex={i} columnIndex={columnIndex} blockIndex={blockIndex}/>
			})}
		</div>
	}
}


class NoteCell extends React.Component {
	constructor() {
		super();
		this.state = {
			ticked: 0
		};
	}
	tapped () {
		let newValue = !this.state.ticked * 1;
		this.setState({
			ticked: newValue
		})
		console.log(this.props,noteColor[this.props.note.replace(/\d/,'')], '==========')
		window.setNote({
			...this.props,
			value: newValue
		});
	}
	render() {
		let style = {},
			{note, nextNote, data, noteIndex, columnIndex, blockIndex} = this.props;
		if (data || this.state.ticked) {
			let current = noteColor[note.replace(/\d/,'')],
				next = nextNote ? noteColor[nextNote.replace(/\d/,'')] : '';
			style.background = nextNote ?  `linear-gradient(to bottom, ${current}, ${next})` : current;
		}

		return <div className='note-cell' style={style} onClick={this.tapped.bind(this)}>
			0
		</div>
	}
}
