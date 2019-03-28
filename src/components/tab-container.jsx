require('./tab-container.less');

import React from "react";

/**
 * tab容器。自动根据数组创建tab头，自动显示对应的children
 */
export default class TabContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tabIndex: props.defaultTab !== undefined ? props.defaultTab : 0
		};
	}

	setIndex(i) {
		this.setState({
			tabIndex: i
		});
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(i);
		}
	}

	render() {
		let tabs = this.props.tabs || [];
		let classes = this.props.className ? [this.props.className] : [];
		classes.push('tabs-container');

		return (
			<div className={classes.join(' ')}>
				<div className="tabs-head">
					{tabs.map((tab,idx)=>{
						let classes = ['tab-head'];
						if (idx === this.state.tabIndex) classes.push('active');
						return <div key={idx} className={classes.join(' ')} {...z.tap(e=>{
							this.setIndex(idx);
						})}>{tab}</div>;
					})}
				</div>
				<div className="tabs-content">
					{this.props.children[this.state.tabIndex]}
				</div>
			</div>
		);
	}
};
