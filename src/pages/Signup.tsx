import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { signup } from '../redux/slices/user';

interface CustomError {
	name: string;
	message: string;
	code: string;
}

interface FormState {
	email: string;
	password: string;
}

export default function Signup() {
	const [error, setError] = useState<CustomError | null>(null);
	const [formState, setFormState] = useState<FormState>({
		email: '',
		password: '',
	});

	const dispatch = useAppDispatch();

	const handleSignupSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const userSignup = await dispatch(signup(formState)).unwrap();
			// TODO: Redirect to home page on successful signup
		} catch (error: any) {
			setError(error);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	return (
		<div className='w-full flex flex-col items-center bg-white rounded px-8 pt-6 pb-8 mb-4'>
			<form
				className='bg-white w-full md:w-3/12 shadow-md rounded px-8 pt-6 pb-8 mb-4'
				onSubmit={handleSignupSubmit}
				name='signup'
			>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='email'
					>
						Email
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='text'
						placeholder='email'
						name='email'
						onChange={handleInputChange}
					/>
				</div>
				<div className='mb-6'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='password'
					>
						Password
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						type='password'
						placeholder='password'
						name='password'
						onChange={handleInputChange}
					/>
				</div>
				<div className='flex items-center justify-between mb-5'>
					<button
						className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full'
						type='submit'
					>
						Sign Up
					</button>
				</div>
				{error && (
					<div className='text-red-500 border border-red-600 p-2 rounded mb-5'>
						{error.message}
					</div>
				)}
				<div className='flex'>
					<a
						className='flex-wrap flex justify-center border bg-blue-300 hover:bg-blue-400 focus:bg-red-300  text-black font-bold py-2 px-4 rounded w-full text-center'
						href={`${
							process.env.NODE_ENV === 'development'
								? process.env.REACT_APP_LOCAL_BACKEND_URL
								: process.env.REACT_APP_REMOTE_BACKEND_URL
						}/auth/google`}
					>
						Sign up with
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 600 250'
							width='150'
							height='40'
						>
							<g strokeWidth='16' fill='none'>
								<path
									d='M173 102a51 51 0 1 1-13-30m20 37h-53'
									stroke='#4a87ee'
								/>
								<circle
									cx='227'
									cy='128'
									r='32'
									stroke='#d83038'
								/>
								<circle
									cx='313'
									cy='128'
									r='32'
									stroke='#f4c022'
								/>
								<path
									d='M401 160a31 31 0 1 1 0-61m-4 0a24 29 0 1 1 0 61m26-67v79m-1-12a20 20 0 1 1-52 17'
									stroke='#4a87ee'
								/>
								<path stroke='#4ab95a' d='M449 51v115' />
								<path
									d='M529 118a30 30 0 1 0-2 24m5-32l-62 28'
									stroke='#d83038'
								/>
							</g>
						</svg>
					</a>
				</div>
			</form>
		</div>
	);
}
