import React from 'react';

import Preview from './Preview';
import { DraggableProps } from './interface';

const Draggable: React.FC<DraggableProps> = ({ children }) => {
  return (
    <div>
      <Preview target={children} />
      {children}
    </div>
  );
};

export default Draggable;
