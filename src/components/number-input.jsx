require('./number-input.less')

import React from "react";

class NumberInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	minus() {
		this.changeValue(-1);
	}

	changeValue(n, absN) {
		let v = parseInt(this.props.value,10);
		v += n;
		if (absN !== undefined) v = absN;
		let max = parseInt(this.props.maxValue,10), min = parseInt(this.props.minValue,10);
		if (v > max) v = max;
		if (v < min) v = min;
		this.props.onChange(v);
	}

	add() {
		this.changeValue(1);
	}

	domValueChanged(evt) {
		let v = parseInt(evt.target.value,10);
		if (isNaN(v)) v = this.props.value;
		this.changeValue(0,v);
	}

	render() {
		return (
			<div className="number-input">
				<a className="minus" href="javascript:;" {...z.tap(this.minus.bind(this))}>-</a>
				<div className="select-wrapper">
					<select onChange={this.domValueChanged.bind(this)} value={this.props.value}>
						{(()=>{
							let items = [];
							var __max = Math.min(this.props.maxValue*1, 999);
							for(let i=this.props.minValue*1;i<=__max;i++) {
								items.push(<option value={i} key={i}>{i}</option>);
							}
							return items;
						})()}
					</select>
					<span>{this.props.value}</span>
				</div>
				<a className="plus" href="javascript:;" {...z.tap(this.add.bind(this))}>+</a>
			</div>
		);

	}

}

NumberInput.propTypes = {
	onChange: React.PropTypes.func.isRequired
};

NumberInput.defaultProps = {
	value: 1,
	minValue: 1,
	maxValue: 1000
};

export default NumberInput;
