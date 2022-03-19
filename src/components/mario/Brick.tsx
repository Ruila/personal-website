import React from "react"

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
        <img className="w-full" src={"/images/Mario_brick.png"} />
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
