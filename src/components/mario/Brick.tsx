import React from "react"

type BrickType = {}

export const Brick: React.FunctionComponent<BrickType> = () => {
  const audio = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/94617/coin.mp3"
  )

  const playCoinSound = () => {
    audio.play()
  }

  return (
    <div
      className="absolute bottom-[200px] left-[30%] w-[40px] h-[40px]"
      onClick={playCoinSound}
    >
      <div className="w-full absolute z-[1]">
        <img className="w-full" src={"images/mario_brick.png"} />
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
