import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType - done
* 2 - описать тип MessagePropsType в файле Message.tsx - done
* 3 - в файле Message.tsx отобразить приходящие данные - done
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx - done
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any

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

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Dimych',  // можно менять
    },
    message: {
        text: 'Hello everyone! Lets do it!!!', // можно менять
        time: '21:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Ilych', // можно менять
    },
    message: {
        text: 'Okkaaay!!! Lets do it now!', // можно менять
        time: '21:05', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div className={s2.messenger}>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
