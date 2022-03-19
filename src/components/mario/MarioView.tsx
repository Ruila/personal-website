import React from "react"
import { Ground } from "./Ground"
import { Brick } from "./Brick"
import { Cloud } from "./Cloud"
import { Tile } from "./Tile"
import { Mountain } from "./Mountain"

export const MarioView: React.FunctionComponent = () => {
  return (
    <div className="bg-[#5e94fb] h-available relative overflow-hidden">
      <Cloud />
      <Brick />
      <Tile />
      <Mountain />
      <Ground />
    </div>
  )
}
