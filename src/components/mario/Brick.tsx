import React from "react"
import { StaticImage } from "gatsby-plugin-image"
type BrickType = {}

let audio: HTMLAudioElement
if (typeof Audio !== "undefined") {
  audio = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/94617/coin.mp3"
  )
}

export const Brick: React.FunctionComponent<BrickType> = () => {
  const playCoinSound = () => {
    audio.play()
  }

  return (
    <div
      className="absolute bottom-[200px] left-[30%] w-[40px] h-[40px]"
      onClick={playCoinSound}
    >
      <div className="w-full absolute z-[1]">
        <StaticImage
          className="w-full"
          src={"../../images/mario_brick.png"}
          alt={"brick"}
          width={40}
          height={40}
        />
      </div>
      <div className="absolute top-0 flex w-full justify-center coin">
        <img
          className="w-[25px]"
          src="https://i.gifer.com/origin/50/509175766f72a32aeb3cde0de5114122_w200.gif"
          alt=""
          id="coin"
        />
      </div>
    </div>
  )
}
