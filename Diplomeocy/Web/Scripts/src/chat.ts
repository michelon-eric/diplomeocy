import { HubConnectionBuilder } from '@microsoft/signalr'
import { MessageData } from './message_data'

import chatData from './chat_data'
import { ChatRoom } from './chat_voice_multi'

const sendButton = document.getElementById('send-button') as HTMLButtonElement
sendButton.disabled = true

const joinGroupButton = document.getElementById('join-group') as HTMLButtonElement
joinGroupButton.disabled = true

chatData.connect(() => {
	sendButton.disabled = false
	joinGroupButton.disabled = false

	chatData.user = userInput.value
	userInput.value = chatData.user
	chatData.joinGroup('all')
})

const userInput = document.getElementById('user-input') as HTMLInputElement
console.log(userInput)
console.log(userInput.value)
const messageInput = document.getElementById('message-input') as HTMLInputElement

sendButton.onclick = (_: Event) => {
	const user: string = userInput.value
	const message: string = messageInput.value

	chatData.user = user
	chatData.sendMessageToGroup(message)
	messageInput.value = ''
}

const joinGroupInput = document.getElementById('join-group-input') as HTMLSelectElement
let chatRoom: ChatRoom = null
joinGroupButton.onclick = async (_: Event) => {
	console.log(joinGroupInput.value)
	if (joinGroupInput.value === '') return

	const newGroup = joinGroupInput.value

	document.querySelector('#messages-list').innerHTML = ''

	await chatData.leaveGroup(chatData.group)
	await chatData.joinGroup(`${(document.getElementById('group') as HTMLInputElement).value}-${newGroup}`)

	chatRoom = new ChatRoom(newGroup)
	await chatRoom.start()
}
