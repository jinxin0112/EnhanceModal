import React from 'react';
import { useDrag, useDrop, XYCoord } from 'react-dnd';

import {
  Position,
  ItemTypes,
  DragItem,
  XLocation,
  YLocation,
} from './interface';

const getModalCurrentStyle = ({ top, left }: Position): React.CSSProperties => {
  let XStyle: React.CSSProperties = {};
  let YStyle: React.CSSProperties = {};

  if (left === XLocation.Left) {
    XStyle = { left: 0 };
  } else if (left === XLocation.Center) {
    XStyle = { left: '50%', transform: `translateX(-50%)` };
  } else if (left === XLocation.Right) {
    XStyle = { right: 0 };
  } else {
    XStyle = { left };
  }

  if (top === YLocation.Top) {
    YStyle = { top: 0 };
  } else if (top === YLocation.Center) {
    YStyle = { top: '50%', transform: `translateY(-50%)` };
  } else if (top === YLocation.Bottom) {
    YStyle = { bottom: 0 };
  } else {
    YStyle = { top };
  }

  return { ...XStyle, ...YStyle };
};

const useReactDndDrag = ({ top, left }: Position) => {
  const [{ isDragging }, dragRef, preview] = useDrag({
    item: { type: ItemTypes.Modal, top, left },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return { isDragging, dragRef, preview };
};

const useReactDndDrop = (
  setPosition: React.Dispatch<React.SetStateAction<Position>>,
) => {
  const [, drop] = useDrop({
    accept: ItemTypes.Modal,
    drop(item: DragItem, monitor) {
      // 通过 api 拿到偏移的位置
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      // 通过偏移位置和拖动前的位置计算出当前位置
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      setPosition({ top, left });
      return undefined;
    },
  });
  return { drop };
};

export { getModalCurrentStyle, useReactDndDrag, useReactDndDrop };
