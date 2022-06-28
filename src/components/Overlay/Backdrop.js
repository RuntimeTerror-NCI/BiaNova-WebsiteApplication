import { useState } from 'react';
import { Overlay } from 'react-overlay-component';

import Login from '../Login/Login';

function Backdrop({ showModal, setShowModal }) {
	return (
		<div>
			{showModal ? (
				<div>
					<Login></Login>
				</div>
			) : null}
		</div>
	);
}

export default Backdrop;
