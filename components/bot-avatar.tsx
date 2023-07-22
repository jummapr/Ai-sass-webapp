import { FC } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

interface BotAvatarProps {
  
}

const BotAvatar: FC<BotAvatarProps> = ({}) => {
  return <Avatar className='h-8 w-8'>
    <AvatarImage className='p-1' src='/logo.png'/>
  </Avatar>
}

export default BotAvatar