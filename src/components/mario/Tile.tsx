import React from "react"

type TileType = {}

export const Tile: React.FunctionComponent<TileType> = () => {
  return (
    <div className="absolute bottom-[100px] right-[15%] w-[100px]">
      <img className="w-full" src="/images/Tile.png" alt="" id="coin" />
    </div>
  )
}
