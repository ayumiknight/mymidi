require('./point-tab.less');

import React from "react";
import PropTypes from 'prop-types'

/**
 * 会员积分页面的tab选项卡
 */
export const PointCard = ({ tabs, activeIndex, handleRedirect}) => (
	<div className="tab-container">
		{tabs.map((tab,idx)=>{
			let className = '';
			let funcObj;
			if (idx === activeIndex) {
				className = 'active';
			} else {
				funcObj = handleRedirect
			}
			return <div key={idx} {...z.tap(funcObj)}  className={"tab-item "+ className} >{tab}</div>;
		})}
	</div>
)

PointCard.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  handleRedirect: PropTypes.func.isRequired
}

export default PointCard
