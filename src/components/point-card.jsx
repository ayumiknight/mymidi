require('./point-card.less')

import React from "react"
import PropTypes from 'prop-types'

/**
 * 会员卡，传入会员姓名，手机号，会员级别，和当前所用积分
 */
export const PointCard = ({ member_name, mobile, level_name, balance }) => (
	<div className="mycard-container">
  		<div className="card-membername">{member_name}</div>
	  	<div className="level-name">{level_name}</div>
		<div className="point-info">
	    	<b>{balance}</b>积分
	    </div>
    </div>
)

export default PointCard
