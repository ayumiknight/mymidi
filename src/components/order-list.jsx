require('./order-list.less');

const OrderList = React.createClass({

	propTypes: {
		orderCanceled: React.PropTypes.func.isRequired,
		orders: React.PropTypes.array
	},

	orderCanceled(idx,o) {
		o.can_cancel = false;
		o.status_text = '已取消';
		o.status_color = 'grey';
		o.cancel_rules = [];
		o.payment_url = '';
		this.props.orderCanceled(idx,o);
	},

	render() {
		let orders = this.props.orders;
		return (
			<div className="order-list-container">
				{orders.map((o,idx)=>{
					return <OrderItem key={idx} order={o} orderCanceled={()=>{
						this.orderCanceled(idx, o);
					}} />;
				})}
			</div>
		);
	}
});

const OrderItem = React.createClass({

	propTypes: {
		orderCanceled: React.PropTypes.func.isRequired
	},

	getInitialState() {
		return {
			showAll: false,
			loading: false,
			deleted: false,
			deletePopup: false
		}
	},

	cancelOrder() {
		let o = this.props.order;
		if (!o.can_cancel) return;
		if (!confirm('您确定要取消此订单吗？')) return;

		this.setState({
			loading: true
		});

		let order_id = o.order_id;
		fetch('/index.php?p=myorder', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				action: 'cancel_order',
				order_id: order_id
			}),
			credentials: 'include', //发送cookie
			mode: 'cors', //同源策略
			cache: 'default'
		}).then( res=> res.text() ).then( s => {
			if (s == 'ok')
			{
				if (o.pay_type == 'PREPAY' && o.payment_status != 'pendingpay')
				{
					alert('您的订单已经取消，我们已为您操作退款。');
				}
				else
				{
					alert('您的订单已经取消');
				}
				this.props.orderCanceled();
			}
			else
			{
				alert(s);
			}
			this.setState({
				loading: false
			});
		}).catch(err=>{
			alert(err);
		});
	},

	delete() {
		this.setState({
			deletePopup: true
		})
	},

	doDelete() {
		this.setState({loading:true});
		z.fetch('/index.php?p=r_orders&action=delete&order_id='+this.props.order.order_id).then(r=>{
			this.setState({
				deleted: true,
				loading: false
			});
		}).catch(err=>{
			this.setState({loading:false});
		});
	},

	render() {
		if (this.state.deleted) return null;


		let o = this.props.order;

		let btns = [];

		if (!location.href.match(/r_member/)) {
			btns.push(<span key="0"><div  className="btn btn-sm grey" {...z.tap(this.delete)}>删除</div>&nbsp; </span>);
		}

		if (o.payment_url) {
			btns.push(<span key="1"><a className="btn btn-sm green clickable" href={o.payment_url}>支付</a> &nbsp;</span>);
		}
		if (o.can_cancel) {
			btns.push(<div key="2" className="btn btn-sm red" {...z.tap(this.cancelOrder)}>取消</div>);
		}

		return (
			<div className="order-item">
				<Loading test={this.state.loading} />
				<Popup hideClose={true} visible={this.state.deletePopup} onClose={_=>{
					this.setState({
						deletePopup: false
					});
				}}>
					<h1 style={{textAlign:'center'}}>您确认要删除此订单吗？</h1>
					<div style={{textAlign:'center',marginTop:'.15rem'}}>
						<div className="btn btn-sm red" style={{display:'inline-block'}} {...z.tap(_=>{
							this.doDelete();
						})}>删除</div>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<div className="btn btn-sm grey" style={{display:'inline-block'}} {...z.tap(_=>{
							this.setState({
								deletePopup: false
							});
						})}>取消</div>
					</div>
				</Popup>

				<div className="line1 line">{'订单号：'+o.order_id}</div>
				<div className={'status '+o.status_color}>{o.status_text}</div>
				<div className="line2 line">
					<a href="javascript:;" {...z.tap(()=>{
						z.jumpTo('/?hotel_id='+o.hotel_id);
					})} className="hotel-name">{o.hotel_name}</a>
					<div className="product-name">{o.order_name}</div>
					<div className="clearfix date-range">
						<div className="pull-left">{o.checkin+' 至 '+o.checkout}</div>
						<div className="pull-right">{o.rooms+'间x'+o.nights+'晚'}</div>
					</div>
				</div>
				<IF test={this.state.showAll}>
					<div className="line more">
						<div className="clearfix">
							<div className="pull-left">入住人：</div>
							<div className="pull-right">{o.contact_name}</div>
						</div>
						<div className="clearfix">
							<div className="pull-left">联系电话：</div>
							<div className="pull-right">{o.contact_mobile}</div>
						</div>
						<div className="clearfix" {...z.hide(!o.special)}>
							<div className="pull-left">特殊需求：</div>
							<div className="pull-right">{o.special}</div>
						</div>
					</div>
				</IF>
				<div className={'line3 line '+(this.state.showAll?'':'no-border')}>
					<IF test={this.state.showAll}>
						<div className="clearfix">
							<div className="pull-left">
								订单总价：
							</div>
							<div className="pull-right">
								{(o.price*1).toFixed(2)+'元'}
							</div>
						</div>
						<div className="clearfix">
							<div className="pull-left">
								红包抵扣：
							</div>
							<div className="pull-right">
								{Math.min(o.discount*1+o.zkt_coupon_amount*1, o.price*1).toFixed(2)+'元'}
							</div>
						</div>
					</IF>
					<IF test={o.pay_type=='PREPAY'}>
						<div className="clearfix red">
							<div className="pull-left">
								已付金额（{ ({wxpay:'微信支付',prepay_card:'储值卡支付',counter:'前台支付'})[o.pay_channel] }）：
							</div>
							<div className="pull-right">
								{Math.max(o.paid*1, 0).toFixed(2)+'元'}
							</div>
						</div>
					</IF>
					<IF test={o.pay_type=='POSTPAY'}>
						<div className="clearfix red">
							<div className="pull-left">
								实付金额（前台支付）：
							</div>
							<div className="pull-right">
								{o.final_price+'元'}
							</div>
						</div>
					</IF>
				</div>
				<IF test={this.state.showAll}>
					<div className="line desc more">
						{o.cancel_rules.map((r,idx)=>{
							return <div key={idx}>{r}</div>;
						})}
						<IF test={o.gifts}>
							<span className="gift">礼</span> 
						 	<span>{o.gifts}</span>
						</IF>
					</div>
					<div className="show-more-btn inverse clickable" {...z.tap(()=>{
						this.setState({showAll:false})
					})}>
						收起
					</div>

				</IF>
				<IF test={!this.state.showAll}>
					<div className="show-more-btn clickable" {...z.tap(()=>{
						this.setState({showAll:true})
					})}>
						点击查看详情
					</div>
				</IF>
				<div className="buttons-line text-center">
					{btns}
				</div>
			</div>
		);
	}
});

export default OrderList;






