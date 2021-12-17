import React from 'react';
import '@styles/ProfileOptions.css'

const ProfileOptions = () => {
	return (
		<div className="menu">
			<ul>
				<li>
					<i className="bi bi-person"></i>
					<a href="/" className="title">Mis datos</a>
				</li>
				<li>
					<i className="bi bi-inbox"></i>
					<a href="/">Mensajes</a>
				</li>
				<li>
				<i className="bi bi-box-arrow-in-left"></i>
					<a href="/">Cerrar sesion</a>
				</li>
			</ul>
		</div>
	);
}

export default ProfileOptions;