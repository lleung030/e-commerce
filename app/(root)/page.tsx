import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className='p-4'>
      This is a protected route!
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default SetupPage