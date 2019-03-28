import React from 'react';
const QR = React.createClass({

	touchStart(evt) {
		if (!this.isIOS()) return;

		setTimeout(function(){
			try {
				evt.preventDefault();
			}catch(e){}
		},1000);
	},

	isIOS() {
		var a = navigator.userAgent;
		var b = a.match(/iPhone/i);
		var c = a.match(/iPad/i);
		var h = a.match(/iPod/i);
		return (b||c||h);
	},

	render() {
		if (!this.props.qr) return null;
		let qrimg = 'http://m.zhiketong.cn/?p=qrcode&level=H&size=6&data='+encodeURIComponent(this.props.qr);
		return ( <div className="qr-content">
					<div className="qr-area">
						<img src={qrimg} className="mask" onTouchStart={this.touchStart} />
						<img src={qrimg} className="qr-img" />
						<div className="finger-print"></div>
						<div className="big-text">长按识别二维码</div>
						<div className="detail">
							<div className="red">关注官方公众号：</div>
							可查看已购预售券、提前进行消费预订、可获知最新会员优惠。
						</div>
					</div>
				</div> );
	}
});

export default QR;
