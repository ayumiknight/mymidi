import React from 'react';
import {DateHelper} from './date-picker.jsx';

export default React.createClass(
{
	getInitialState() {
		return {
			timeleft:'...',
			status:'waiting',
			timer: 0
		}
	},

	componentDidMount() {
	    this.state.timer = setInterval(()=>{
	    	this.updateTimeLeft();
	    },200);
	    this.updateTimeLeft();
	},

	componentWillUnmount() {
	    try{
	    	clearInterval(this.state.timer);
	    } catch(e) {}
	},



	updateTimeLeft() {
		if (this.props.start && this.props.end) {
			if (DateHelper.compare_time(this.props.start, new Date()) > 0) {
				var time = DateHelper.fromNow(this.props.start);
				var text = DateHelper.translateTimeRange(time);	
				this.setState({timeleft:'距离开抢还有'+text, status:'waiting'});
			} else if (DateHelper.compare_time(this.props.end, new Date()) > 0) {
				var time = DateHelper.fromNow(this.props.end);
				var text = DateHelper.translateTimeRange(time);	
				this.setState({timeleft:'立即抢购', status:'ok'});
			} else {
				this.setState({timeleft:'抢购已经结束',status: 'expired'});
			}
		} else {
			this.setState({timeleft:'...', status: 'waiting'});
		}
	},


	render() {
		if (this.state.status == 'ok') {
			return  <a href="javascript:;" {...z.tap(this.props.onTap)}  className="order-btn">{this.state.timeleft}</a>;
		} else if (this.state.status == 'expired') {
			return <a href="javascript:;" className="order-btn disabled">{this.state.timeleft}</a>;
		} else {
			return <a href="javascript:;" className="order-btn waiting">{this.state.timeleft}</a>;
		}
		
	}
});

