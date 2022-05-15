import { SyntheticEvent } from "react"

export function getOffset(e: SyntheticEvent) {
  console.info("event", e)
  console.info("getOffset", (e.nativeEvent as MouseEvent).offsetX, "xx", (e as TouchEventInit).touches, "yy", ((e as unknown as Event).target as Element).getBoundingClientRect())
  if ((e.nativeEvent as MouseEvent).offsetX) {
    return { x: (e.nativeEvent as MouseEvent).offsetX, y: (e.nativeEvent as MouseEvent).offsetY };
  }
  const touch = (e as TouchEventInit).touches?.[0] || {};
  const bcr = ((e as unknown as Event).target as Element).getBoundingClientRect();
  return {
    x: (touch as Touch).clientX - bcr.x,
    y: (touch as Touch).clientY - bcr.y
  };
}