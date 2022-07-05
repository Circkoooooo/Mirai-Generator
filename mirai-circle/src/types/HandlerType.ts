import { Logger, MessageType } from 'mirai-ts'
import { ReplyModType } from './ModType'
export type DefaultHandlerType = {
	readonly handler: true
	_targetPath?: string
	log: Logger
	watchChatMessage: (msg: MessageType.ChatMessage) => void
	replyChatMessage: (
		msg: MessageType.ChatMessage,
		sendMsg: MessageType.MessageChain | string
	) => void
}
export interface ReplyHandlerType extends DefaultHandlerType {
	groupWhiteList: Array<number>
	friendWhiteList: Array<number>
	loadMod: () => void
	validateWhiteList: (msg: MessageType.ChatMessage) => boolean
	createConfigFile: () => void
	mods: { [key: string]: ReplyModType }
}
