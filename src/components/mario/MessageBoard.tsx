import React from "react"

type MessageBoardType = {
  show: boolean
}

export const MessageBoard: React.FunctionComponent<MessageBoardType> = ({
  show,
}) => {
  return (
    <div
      className={`absolute bg-[#de5a18] message_board font-press-star text-white p-4 ${
        show ? "message_board_animate" : ""
      }`}
    >
      <div>Profile</div>
      <div className="my-4">LINKIN</div>
      <div className="my-4">GITHUB</div>
      <div className="my-4">CakeResume</div>
    </div>
  )
}
