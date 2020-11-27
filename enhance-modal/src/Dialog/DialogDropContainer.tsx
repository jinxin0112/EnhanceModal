import * as React from 'react';

import PositionContext from './PositionContext';
import { ENHANCE_DIALOG_DEFAULT_POSITION } from './config';
import { useReactDndDrop } from './utils';

const { useState } = React;
const { Provider: PositionContextProvider } = PositionContext;

const styles: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  position: 'relative',
};

const EnhanceDialogDropContainer: React.FC = ({ children }) => {
  // * 对话窗的位置信息
  const [position, setPosition] = useState(ENHANCE_DIALOG_DEFAULT_POSITION);

  // * 通过 react-dnd 的 drop （释放）改变对话窗的位置
  const { drop } = useReactDndDrop(setPosition);

  return (
    <PositionContextProvider value={position}>
      <div ref={drop} style={styles}>
        {children}
      </div>
    </PositionContextProvider>
  );
};

export default EnhanceDialogDropContainer;
