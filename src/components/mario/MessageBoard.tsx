import React from "react"
import { messageBoardContent } from "../../../dummies/messageBoardContent"

type MessageBoardType = {
  show: boolean
  handleMessageBoard: (value: boolean) => void
}

export const MessageBoard: React.FunctionComponent<MessageBoardType> = ({
  show,
  handleMessageBoard,
}) => {
  const renderContent = messageBoardContent.map(item => (
    <div className="mb-4 flex items-center" key={item.text}>
      <div
        className="mt-1 hover-effect cursor-pointer"
        onClick={() => window.open(item.link)}
      >
        {item.text}
      </div>
    </div>
  ))

  return (
    <div
      className={`absolute bg-[#de5a18] message_board font-press-star text-white px-12 py-8 ${
        show ? "message_board_animate" : ""
      }`}
    >
      <div
        className="absolute right-0 top-1 text-[10px] text-[#fffefc8f] cursor-pointer"
        onClick={() => handleMessageBoard(false)}
      >
        [X Close]
      </div>
      <div className="text-base mb-8">Choose where you want to go :</div>
      {renderContent}
    </div>
  )
}
