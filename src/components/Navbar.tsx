import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/user';
import { useAppDispatch } from '../redux/hooks';

interface NavbarProps {
	isLoggedIn: boolean;
}

interface NavButtonProps {
	label: string;
	action: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, action }) => (
	<button
		onClick={action}
		className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
	>
		{label}
	</button>
);

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const buttons = isLoggedIn
		? [
				{ label: 'Home', action: () => navigate('/home') },
				{ label: 'Log Out', action: () => dispatch(logout()) },
		  ]
		: [
				{ label: 'Login', action: () => navigate('/login') },
				{ label: 'Sign Up', action: () => navigate('/signup') },
		  ];

	return (
		<nav className='flex items-center justify-between flex-wrap bg-slate-500 p-6'>
			<div className='flex items-center flex-shrink-0 text-white mr-6'>
				<span className='font-semibold text-xl tracking-tight'>
					Front-End Template
				</span>
			</div>
			<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-sm lg:flex-grow'>
					{buttons.map((button, index) => (
						<NavButton key={index} {...button} />
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
