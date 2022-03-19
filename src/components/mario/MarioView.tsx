import React from "react"
import { Ground } from "./Ground"
import { Brick } from "./Brick"

export const MarioView: React.FunctionComponent = () => {
  return (
    <div className="bg-[#5e94fb] h-available relative overflow-hidden">
      <img
        id="cloud1"
        height="91"
        width="220"
        src="https://i.pinimg.com/originals/69/3c/73/693c7325f91ceebf4cd65d7c6eccf606.png"
        alt="Large Mario Cloud"
      />
      <img
        id="cloud2"
        height="146"
        width="228"
        src="https://i.pinimg.com/originals/3a/02/91/3a02910047fbe517dc20dfee72a62a6b.png"
      />
      <Brick />
      <Ground />
    </div>
  )
}
