import React from 'react';
require('./loading.less');

class Loading extends React.Component {

	// render() {
	// 	var classes = ['page-loading'];
	// 	if (this.props.test) 
	// 		classes.push('loading');
	// 	else 
	// 		classes.push('loaded');
		
	// 	return (<div ref="dom" className={classes.join(' ')}>
	// 				<div className="pacman">
	// 					<div></div>
	// 					<div></div>
	// 					<div></div>
	// 					<div></div>
	// 					<div></div>
	// 				</div>
	// 			</div>);
	// }
	

	render() {

		if (!this.props.test) return null;

		return (<div id="sys-loading" className="">
			<div className="spinner">
				<div className="rect1"></div> 
				<div className="rect2"></div> 
				<div className="rect3"></div> 
				<div className="rect4"></div> 
				<div className="rect5"></div> 
			</div>
		</div>);
	}
}

export default Loading;