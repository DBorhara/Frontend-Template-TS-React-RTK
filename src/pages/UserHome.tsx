import React from 'react';
import { useSelector } from 'react-redux';

interface UserInfoProps {
	label: string;
	value: string | boolean;
}

const UserInfo: React.FC<UserInfoProps> = ({ label, value }) => (
	<div className='flex flex-row text-lg mt-2'>
		<div className='pr-2 font-bold text-gray-600'>{label}:</div>
		<div className='text-gray-800'>{String(value)}</div>
	</div>
);

export default function UserHome() {
	const { email, isAdmin } = useSelector((state: any) => state.user.data);

	return (
		<div className='w-full flex flex-col items-center bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-lg'>
			<div className='pb-5 text-3xl text-stone-500'>User Home</div>
			<div className='flex flex-col'>
				<UserInfo label='User' value={email} />
				<UserInfo label='Admin' value={isAdmin ? 'True' : 'False'} />
			</div>
		</div>
	);
}
