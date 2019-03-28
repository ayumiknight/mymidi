/**
 * a react date picker component
 */

'use strict';

require('./date-picker.less');

const HotelDatePicker2 = React.createClass(
	{
		
		getInitialState() {
			return {
				hasSetEnterDay:false,
				hasSetLeaveDay:false,
				selectTip:"请选择入住日期"
			};
		},
		
		propTypes: {
			//visible: React.PropTypes.bool.isRequired,
			dateFrom: React.PropTypes.string,
			dateTo: React.PropTypes.string,
			validator: React.PropTypes.func.isRequired,
			onClose: React.PropTypes.func.isRequired,
		//	onChoose: React.PropTypes.func.isRequired
		},
		
		setEnterDay(day){
			this.props.setEnterDay(day);
			this.setState({
				selectTip:"请选择退房日期",
				hasSetEnterDay:true
			              })
		},
		setLeaveDay(day){
			this.props.setLeaveDay(day);
			this.setState({
				              selectTip:"请选择入住日期",
				              hasSetLeaveDay:true
			              })
		},
		
		render() {
			this.state.dateFrom = this.props.dateFrom ? Helper.str2date(this.props.dateFrom) : new Date();
			this.state.dateTo = this.props.dateTo ? Helper.str2date(this.props.dateTo) : Helper.nextMonth(new Date());
			
			var monthFrom = this.state.dateFrom.getFullYear() * 12 + this.state.dateFrom.getMonth();
			var monthTo = this.state.dateTo.getFullYear() * 12 + this.state.dateTo.getMonth();
			var months = monthTo - monthFrom + 1;
			//console.log(this.state);
			
			return (<div className="date-picker">
				<div className="topbar">
					<a href="javascript:;" className="close" {...z.tap(this.props.onClose)}>
						<svg className="icon icon-21" viewBox="0 0 1050 1050">
							<path className="path1 fill-color3"
							      d="M1050.041 43.017l-43.037-43.017-469.004 468.983-468.983-468.983-43.017 43.017 468.983 468.983-468.983 468.983 43.017 43.017 468.983-468.983 469.004 468.983 43.037-43.017-468.983-468.983z"/>
						</svg>
					</a>
					<div className="inner">
						<h2>{this.state.selectTip}</h2>
					</div>
				</div>
				<div className="scroll-wrapper">
					<IF test={this.props.children}>
						<div className="date-picker-inject-area">
							{this.props.children}
						</div>
					</IF>
					<div className="month-wrapper">
						{(() => {
							var doms = [];
							for (let i = 0; i < months; i++) {
								doms.push(this.createMonth(i));
							}
							return doms;
						})()}
					</div>
				</div>
			</div>);
		},
		
		createMonth(index) {
			var d = Helper.getHotelTime(this.state.dateFrom);
			for (var i = 0; i < index; i++) {
				d = Helper.nextMonth(d);
			}
			
			return (
				<table className="month" key={index}>
					<thead>
					<tr className="caption">
						<th colSpan="7"
						    className="month-name">{d.getFullYear() + '年 ' + Helper.nameMonth(d.getMonth())}</th>
					</tr>
					<tr className="week-name">
						<th className="weekend">周日</th>
						<th>周一</th>
						<th>周二</th>
						<th>周三</th>
						<th>周四</th>
						<th>周五</th>
						<th className="weekend">周六</th>
					</tr>
					</thead>
					<tbody>
					{this.createDays(d)}
					</tbody>
				</table>
			);
		},
		
		createDays(d) {
			d = Helper.cloneDate(d);
			d.setDate(1);
			
			var now = new Date();
			var thisMonth = d.getMonth();
			
			var weekOffset = d.getDay();
			var weeks = {};
			
			for (var i = 0; i < 31; i++) {
				var _week = Math.floor((i + weekOffset) / 7);
				if (!weeks[_week]) weeks[_week] = {};
				weeks[_week][d.getDay()] = d;
				d = Helper.nextDay(d);
				if (d.getMonth() != thisMonth) break;
			}
			
			let lines = [];
			for (let week = 0; week < 6; week++) {
				var tds = [];
				
				var trValid = false;
				for (let day = 0; day < 7; day++) {
					if (weeks[week] && weeks[week][day]) {
						let today = Helper.cloneDate(weeks[week][day]);
						tds.push(this.getDayDom(today, day));
						trValid = true;
					} else {
						tds.push(<td key={'day' + day}/>);
					}
				}
				
				if (trValid) {
					lines.push(<tr key={'week' + week}>
						{tds}
					</tr>);
				}
			}
			return lines;
		},
		
		
		getDayDom(today, idx) {
			//let highlightToday = Helper.date2str(today) == Helper.date2str(new Date());
			let classes = ['day'];
			//if (highlightToday) classes.push('real-today');
			if (today.getDay() == 0 || today.getDay() == 6) classes.push('weekend');
			
			let valid = true;
			
			if (Helper.compare_date(this.state.dateFrom, today) > 0) valid = false;
			if (Helper.compare_date(this.props.enterDay, today) > 0) valid = false;
			
			let info = this.props.validator(today);
			if (!info.available) valid = false;
			
			classes.push(valid ? 'valid' : 'invalid');
			//classes.push(info.text ? 'has-extra' : 'no-extra');
			
			/*new add*/
			if(Helper.date2str(today)===this.props.enterDay) classes.push("enterDay");
			if(Helper.date2str(today)===this.props.leaveDay) classes.push("leaveDay");
			
			return (
				
				<td className="day-cell clickable" key={today.toString()} {...z.tap(() => {
				if (valid){
				   if(!this.state.hasSetEnterDay){
					   this.setEnterDay(Helper.date2str(today));
				   }
				   else {
				   	this.props.setLeaveDay(Helper.date2str(today));
					   this.setState({hasSetLeaveDay:true})
					
				   }
				}
			})}>
				<div className={classes.join(' ')}>
					<span className="date">{today.getDate().toString()}</span>
				</div>
					
				
				
				
			</td>);
		}
		
	});

const Helper = {
	
	nextMonth(d) {
		var toMonth = d.getMonth();
		while (d.getMonth() == toMonth) d = this.nextDay(d);
		return d;
	},
	
	nextDay(d) {
		d = this.cloneDate(d);
		d.setTime(d.getTime() + 86400000);
		return d;
	},
	
	nameMonth(m) {
		var arr = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
		return arr[m];
	},
	
	cloneDate(d) {
		var a = new Date();
		a.setTime(d.getTime());
		return a;
	},
	
	compare_date(m1, m2) {
		m1 = this.date2str(this.str2date(m1)).replace(/\-/g, '');
		m2 = this.date2str(this.str2date(m2)).replace(/\-/g, '');
		var p = parseInt(m1) - parseInt(m2);
		if (p > 0) return 1;
		if (p == 0) return 0;
		return -1;
	},
	
	compare_time(m1, m2) {
		return this.str2time(m1).getTime() - this.str2time(m2).getTime();
	},
	
	getHotelTime(t) {
		if (!t) t = new Date();
		t = this.cloneDate(t);
		t.setTime(t.getTime() - 6 * 60 * 60000);
		return t;
	},
	
	
	getHotelToday(){
		return this.date2str(this.getHotelTime());
	},
	
	
	fromNow(d) {
		if (typeof d == 'string') d = this.str2time(d);
		return new Date().getTime() - d.getTime();
	},
	
	translateTimeRange(t) {
		if (t < 0) t *= -1;
		t = Math.floor(t / 1000);
		var text = [];
		var days = Math.floor(t / 86400);
		if (days > 0) text.push(days + '天');
		t %= 86400;
		var hours = Math.floor(t / 3600);
		if (hours > 0 || text.length > 0) text.push(hours + '小时');
		t %= 3600;
		var minutes = Math.floor(t / 60);
		if (minutes > 0 || text.length > 0) text.push(minutes + '分');
		t %= 60;
		text.push(t + '秒');
		return text.join('');
	},
	
	
	str2date(s) {
		if (!s) return new Date();
		if (typeof s === 'object') return s;
		if (typeof s === 'number') {
			var t = new Date();
			t.setTime(s);
			return t;
		}
		var ms = s.match(/^(\d{4})\-(\d{1,2})\-(\d{1,2})$/);
		if (!ms) return new Date();
		var t = new Date();
		t.setMonth(0);
		t.setDate(1);
		t.setFullYear(parseInt(ms[1], 10));
		t.setMonth(parseInt(ms[2], 10) - 1);
		t.setDate(parseInt(ms[3], 10));
		return t;
	},
	
	str2time(s) {
		if (!s) return new Date();
		if (typeof s == 'object') return s;
		if (typeof s == 'number') {
			var t = new Date();
			t.setTime(s);
			return t;
		}
		var ms = s.match(/^(\d{4})\-(\d{1,2})\-(\d{1,2})\s+(\d{1,2})\:(\d{1,2})\:?(\d{1,2})?$/);
		if (!ms) return new Date();
		var t = new Date();
		t.setTime(0);
		t.setFullYear(parseInt(ms[1], 10));
		t.setMonth(parseInt(ms[2], 10) - 1);
		t.setDate(parseInt(ms[3], 10));
		t.setHours(parseInt(ms[4], 10));
		t.setMinutes(parseInt(ms[5], 10));
		if (ms[6]) t.setSeconds(parseInt(ms[6], 10));
		return t;
	},
	
	time2str(d) {
		return this.date2str(d) + ' ' + this._toFixed(d.getHours(), 2) + ':' + this._toFixed(d.getMinutes(), 2) + ':' + this._toFixed(d.getSeconds(), 2);
	},
	
	date2str(d) {
		return d.getFullYear() + '-' + this._toFixed(d.getMonth() + 1, 2) + '-' + this._toFixed(d.getDate(), 2);
	},
	
	_toFixed(n, w) {
		while ((n + '').length < w) n = '0' + n;
		return n;
	}
};

export const DateHelper = Helper;

export default HotelDatePicker2;