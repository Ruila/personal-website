import React, { useState } from "react"
import { Ground } from "./Ground"
import { Brick } from "./Brick"
import { Cloud } from "./Cloud"
import { Tile } from "./Tile"
import { Mountain } from "./Mountain"
import { MessageBoard } from "./MessageBoard"

export const MarioView: React.FunctionComponent = () => {
  const [showMessageBoard, setShowMessageBoard] = useState(false)

  return (
    <div className="bg-[#5e94fb] h-available relative overflow-hidden">
      <Cloud />
      <Brick />
      <Tile />
      <Mountain />
      <MessageBoard show={showMessageBoard} />
      <Ground />
    </div>
  )
}
