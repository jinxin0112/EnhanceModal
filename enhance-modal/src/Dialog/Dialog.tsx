import * as React from 'react';

import PositionContext from './PositionContext';
import { useReactDndDrag } from './utils';

const { memo, useContext, useMemo } = React;

const style: React.CSSProperties = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

export interface DialogProps {
  visible?: boolean;
  onCancel?: () => void;
}

function Dialog(props: React.PropsWithChildren<DialogProps>) {
  const { visible, children, onCancel } = props;

  // * 1. 拖拽对话框的头部改变对话框位置
  // 通过 PositionContext 拿到对话框当前的位置
  const position = useContext(PositionContext);
  // 使用 react-dnd 的 drag （抓起）实现拖拽
  const { isDragging, dragRef, preview } = useReactDndDrag(position);

  // * 2. 拖拽对话框又下边框改变对话框的大小 :todo

  // * 3. 将位置和大小转换成 style
  const dialogStyle: React.CSSProperties = useMemo(
    () => ({
      ...style,
      ...{ top: position.top, left: position.left },
      ...(visible && isDragging ? { opacity: '0' } : {}),
    }),
    [position, visible, isDragging],
  );

  // * visible 为 false 的时候直接返回 null，防止内存泄露
  if (!visible) {
    return null;
  }

  return (
    <div ref={preview} style={dialogStyle}>
      <header ref={dragRef}>EnhanceModal</header>
      <section>{children}</section>
      <footer onClick={onCancel}>hello</footer>
    </div>
  );
}
export default memo(Dialog);
