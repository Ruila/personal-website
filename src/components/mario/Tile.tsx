import React from "react"
import { StaticImage } from "gatsby-plugin-image"
type TileType = {}

export const Tile: React.FunctionComponent<TileType> = () => {
  return (
    <div className="absolute bottom-[100px] right-[15%] w-[100px]">
      <StaticImage src="../../images/tile.png" alt="" id="coin" />
    </div>
  )
}
