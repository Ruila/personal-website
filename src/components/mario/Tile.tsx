import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { clickButton } from "../../core/plugins/prompt"
type TileType = {}
export const Tile: React.FunctionComponent<TileType> = () => {
  return (
    <div
      className="absolute bottom-[100px] right-[15%] w-[100px]"
      id="install_button"
      onClick={clickButton}
    >
      <StaticImage src="../../images/tile.png" alt="" id="coin" />
    </div>
  )
}
