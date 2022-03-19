import React from "react"
import { StaticImage } from "gatsby-plugin-image"

type MountainType = {}

export const Mountain: React.FunctionComponent<MountainType> = () => {
  return (
    <div className="absolute bottom-[100px] right-[25%] w-[350px]">
      <StaticImage src="../../images/mountain.png" alt="" id="coin" />
    </div>
  )
}
