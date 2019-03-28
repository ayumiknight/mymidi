import React from 'react';
const IF = React.createClass(
{
	render() {
		if (!this.props.test) {
			return null;
		} else if (typeof this.props.children === 'function') {
			return this.props.children();
		} else if (Array.isArray(this.props.children)) {
			return React.createElement(this.props.wrapper || 'div', null, this.props.children);
		} else if (typeof this.props.children === 'string') {
			return (<span>{this.props.children}</span>);
		} else {
			return this.props.children || null;
		}
	}
});

export default IF;