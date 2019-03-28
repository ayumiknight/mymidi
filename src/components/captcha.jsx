const CaptchaBtn = React.createClass({

	getInitialState() {
		return {
			loading: false,
			seconds: 60,
			counting: 60,
			timer: 0,
			getting: false
		}
	},

	propTypes: {
		mobile: React.PropTypes.string.isRequired
	},

	getCaptcha() {
		if (this.state.getting) return;
		if (!this.props.mobile.match(/^\d{11}$/)) return alert('请输入正确的手机号');

		this.setState({getting:true});

		z.fetch('/?p=r_login&action=send_captcha', {
			method: 'POST',
			json:{
				mobile: this.props.mobile
			}
		}).then( data=> {
			this.setState({getting:false});
			if (data.success) {
				this.tick();
			} else {
				alert(data.msg);
			}
		}).catch( err=> {
			this.setState({getting:false});
		});
	},

	componentWillUnmount() {
		try {
			clearTimeout(this.state.timer);
		}catch(e){ }
	},

	tick() {
		console.log(this.state.counting);
		if (this.state.counting == 0) {
			this.setState({loading: false,counting: this.state.seconds});
		} else {
			this.setState({
				counting: this.state.counting-1,
				loading: true
			});
			this.state.timer = setTimeout(()=>{
				this.tick();
			},1000);
		}
	},

	render() {
		if (this.state.loading) {
			return ( <div className="captcha-btn disabled">{this.state.counting}</div>
			);
		} else {
			return ( <div {...z.tap(this.getCaptcha)} className="captcha-btn clickable">获取验证码</div>
			);
		}
	}
});


module.exports = CaptchaBtn;