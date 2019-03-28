export default React.createClass(
{
	getInitialState() {
		return {
			q: ''
		}
	},

	onChange() {
		var q = this.refs.searchInput.value;
		if (q) {
			this.setState({q:q});
		} else {
			this.setState({q:''});
		}
	},

	onSearch(evt) {
		if (evt) evt.preventDefault();
		var q = this.refs.searchInput.value;
		this.props.onSearch(q);
		this.refs.searchInput.blur();
	},

	onCancel() {
		this.refs.searchInput.value = '';
		this.setState({q:''});
		this.onSearch();
	},

	render() {
		return (
			<div className={this.state.q?"search-bar has-q" : "search-bar"}>
				<form onSubmit={this.onSearch}>
					<svg viewBox="0 0 32 32">
						<path d="M13.333 1.333q2.438 0 4.661 0.953t3.828 2.557 2.557 3.828 0.953 4.661q0 2.094-0.682 4.010t-1.943 3.479l7.573 7.563q0.385 0.385 0.385 0.948 0 0.573-0.38 0.953t-0.953 0.38q-0.563 0-0.948-0.385l-7.563-7.573q-1.563 1.26-3.479 1.943t-4.010 0.682q-2.438 0-4.661-0.953t-3.828-2.557-2.557-3.828-0.953-4.661 0.953-4.661 2.557-3.828 3.828-2.557 4.661-0.953zM13.333 4q-1.896 0-3.625 0.74t-2.979 1.99-1.99 2.979-0.74 3.625 0.74 3.625 1.99 2.979 2.979 1.99 3.625 0.74 3.625-0.74 2.979-1.99 1.99-2.979 0.74-3.625-0.74-3.625-1.99-2.979-2.979-1.99-3.625-0.74z"></path>
					</svg>
					<input onChange={this.onChange} type="search" ref="searchInput" placeholder={this.props.placeholder||"搜索"} />
				</form>
				<a  {...z.tap(this.onCancel)} href="javascript:" className="cancel" >取消</a>
			</div>
		)
	}
});

