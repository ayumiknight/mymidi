import React from 'react';
require('./red.less');

const Red = React.createClass({


	onTap() {
		let c = this.props.data;
		let url = '';
		if (c.brand_id > 0) {
			url = "/index.php?p=hotels&brand_id="+c.brand_id;
		} else {
			url = '/index.php?p=union';
		}
		location.href = url;
	},

	render() {
		let c = this.props.data;

		return (
			<div className="hongbao" {...z.tap(this.onTap)}>
				<div className="main">
					<div className="red-image">
						<SVG icon="hongbao" />
						<span>{'￥'+c.amount}</span>
					</div>
					<div className="red-name">{c.coupon_type_text}</div>
					<div className="red-desc">{c.brand_name}</div>
					<div className="red-desc">{c.from_desc+', '+c.coupon_limit}</div>
				</div>
				<div className="info clearfix">
					<div className="pull-left">
						可用<span className="red">{c.t}</span>张
					</div>
				<div className="pull-right">有效期至{c.expire_date}</div>
				</div>
			</div>
		);
	}
});

export default Red;