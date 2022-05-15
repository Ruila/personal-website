import React, { useEffect, useRef, useState } from "react"
import { getOffset } from "../../core/plugins/getElementOffset"

export const PaintBoard: React.FunctionComponent = () => {
  const [drawing, setDrawing] = useState(false)
  const [currentX, setCurrentX] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const canvas = useRef(null)
  const initBoard = () => {
    const context = (canvas.current as unknown as HTMLCanvasElement).getContext(
      "2d"
    ) as CanvasRenderingContext2D
    context.strokeStyle = `#000`
    context.lineWidth = 3
    context.lineJoin = "round"
    context.lineCap = "round"
  }

  const startDrawing = e => {
    console.info("startDrawing")
    const { x, y } = getOffset(e)
    setDrawing(true)
    setCurrentX(x)
    setCurrentY(y)
  }

  const drawCanvas = e => {
    const context = (canvas.current as unknown as HTMLCanvasElement).getContext(
      "2d"
    ) as CanvasRenderingContext2D
    if (!drawing) return
    const { x, y } = getOffset(e)
    context.beginPath()
    context.moveTo(currentX, currentY)
    context.lineTo(x, y)
    context.stroke()
    setCurrentX(x)
    setCurrentY(y)
  }

  const stopDrawing = () => {
    console.info("stopDrawing")
    setDrawing(false)
  }

  useEffect(() => {
    initBoard()
  }, [])

  return (
    <canvas
      ref={canvas}
      width={300}
      height={300}
      className="border-[#000] border-[1px] border-solid"
      onTouchStart={startDrawing}
      onTouchMove={drawCanvas}
      onTouchEnd={stopDrawing}
      onTouchCancel={stopDrawing}
      onMouseDown={startDrawing}
      onMouseMove={drawCanvas}
      onMouseOut={stopDrawing}
      onMouseUp={stopDrawing}
    />
  )
}
