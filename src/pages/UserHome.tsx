import React from 'react'
import { userSelector } from '../redux/slices/user'
import { useAppSelector } from '../redux/hooks'

interface UserInfoProps {
  label: string
  value: string | boolean
}

const UserInfo: React.FC<UserInfoProps> = ({ label, value }) => (
  <div className="mt-2 flex flex-row text-lg">
    <div className="pr-2 font-bold text-gray-600">{label}:</div>
    <div className="text-gray-800">{String(value)}</div>
  </div>
)

export default function UserHome() {
  const { email, isAdmin } = useAppSelector(userSelector)

  return (
    <div className="mb-4 flex w-full flex-col items-center rounded bg-white px-8 pb-8 pt-6 shadow-lg">
      <div className="pb-5 text-3xl text-stone-500">User Home</div>
      <div className="flex flex-col">
        <UserInfo label="User" value={email} />
        <UserInfo label="Admin" value={isAdmin ? 'True' : 'False'} />
      </div>
    </div>
  )
}
