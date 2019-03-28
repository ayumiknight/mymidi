export default React.createClass(
{
	getInitialState() {
		let checked = this.props.checked ? true : false;
		let labels = this.props.labels || ['',''];
		let disabled = this.props.disabled ? true : false;
		return {
			checked,
			label: labels[checked?1:0],
			disabled: disabled
		}
	},

	propTypes: {
		onChange: React.PropTypes.func.isRequired,
		labels: React.PropTypes.array.isRequired
	},

	onTap(evt) {
		evt.preventDefault();
		if (this.state.disabled) return;
		let labels = this.props.labels || ['',''];
		let checked = !this.state.checked;
		this.setState({disabled:true});

		this.props.onChange(checked, result => {
			if (result) {
				this.setState({label: labels[ checked?1:0 ], checked:checked,disabled:false });
			} else {
				this.setState({ disabled:false });
			}
		});
		
	},

	render() {
		return (
			<div className={ this.state.checked ? 'switcher checked' : 'switcher'}>
				<label>{this.state.label}</label>
				<input disabled={this.state.disabled} checked={this.state.checked} onChange={function(){}} ref="checkbox" onTouchStart={this.onTap} type="checkbox" />
			</div>
		)
	}
});

