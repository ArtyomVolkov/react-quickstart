import React, {Component} from 'react';

// Style
import * as style from './Header.styl';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div class={style.title}>
				<span>Header</span>
			</div>
		)
	}
}

export default Header;
