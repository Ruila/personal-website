import React from "react"

type MountainType = {}

export const Mountain: React.FunctionComponent<MountainType> = () => {
  return (
    <div className="absolute bottom-[100px] right-[25%] w-[350px]">
      <img className="w-full" src="/images/Mountain.png" alt="" id="coin" />
    </div>
  )
}
