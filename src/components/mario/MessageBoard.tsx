import React from "react"

type MessageBoardType = {
  show: boolean
}

export const MessageBoard: React.FunctionComponent<MessageBoardType> = ({
  show,
}) => {
  return (
    <div
      className={`absolute bg-[#de5a18] message_board ${
        show ? "message_board_animate" : ""
      }`}
    >
      ss
    </div>
  )
}
