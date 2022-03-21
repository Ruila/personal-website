import React from "react"

type MessageBoardType = {
  show: boolean
}

export const MessageBoard: React.FunctionComponent<MessageBoardType> = ({
  show,
}) => {
  return (
    <div className={`absolute bg-black ${show ? "message_board" : ""}`}></div>
  )
}
