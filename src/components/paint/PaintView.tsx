import React from "react"
import { PaintBoard } from "./PaintBoard"

export const PaintView: React.FunctionComponent = () => {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center">
      <div className="flex items-center mb-4">
        <img className="w-[50px] h-[45px] mr-4" src="/react-icon.png" />
        <div className="text-[24px]">React Painting Board</div>
      </div>
      <PaintBoard />
    </div>
  )
}
