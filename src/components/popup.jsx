import React from 'react';
export default React.createClass(
{
	propTypes: {
		onClose: React.PropTypes.func
	},

	render() {
		if (!this.props.visible) return null;
		return (
			<div className="popup">
				<div className="container">
					<IF test={!this.props.hideClose}>
						<div {...z.tap(this.props.onClose)} className="cancel"/>
					</IF>
					<div className="inner">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
});

