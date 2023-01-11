import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'

type UserType = {
    avatar: string,
    name: string,
}
type FirstMessageType = {
    text: string,
    time: string,
}
export type MessageType = {
    id: number,
    user: UserType,
    message: FirstMessageType
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://sun6-23.userapi.com/s/v1/ig2/c_IviuU0uE6m6USOjCIvi2-VrSOlMfI0K57G3_LN0HzA5zhpDOZhJdb0322FIFZAqNwMDC2QN8dJi1gF2FoeuC8d.jpg?size=50x50&quality=96&crop=0,0,452,452&ava=1', // можно менять
        name: 'Billy Harrington',
    },
    message: {
        text: 'Welcome to the club Buddy', // можно менять
        time: '21:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://pp.userapi.com/c834301/v834301547/175ca5/EVZ-20MXzsw.jpg?ava=1',
        name: 'Van DarkHolme',
    },
    message: {
        text: 'Come on! Lets go',
        time: '21:05',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'} className={'container'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div className={s2.messenger}>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
