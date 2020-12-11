/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import '../../../node_modules/bulma/css/bulma.min.css';
import Logo from '../../assets/images/logo-clip.svg';

const NavBar = () => {
	return (
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<Link className="navbar-item" to="/">
					<img src={Logo} width="112" height="28" alt="logo" />
				</Link>

				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
  		</div>
		
			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-light">
								<strong>Mi Cuenta</strong>
							</a>
							<a class="button is-black">
								Registrate
							</a>
						</div>
					</div>
				</div>
  		</div>
		</nav>
	)
}

export default NavBar;
