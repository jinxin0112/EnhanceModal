import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { Direction } from 're-resizable/lib/resizer';

import './style.css';

function App() {
  const [disabled, setDisabled] = useState(true);
  const [size, setSize] = useState({ width: 400, height: 300 });

  return (
    <Draggable disabled={disabled}>
      <Resizable
        size={size}
        className="box"
        onResizeStop={(e, direction, ref, d) => {
          setSize(p => ({
            width: p.width + d.width,
            height: p.height + d.height,
          }));
        }}
        handleComponent={{ bottom: <div>hello</div> }}
        enable={{ bottom: true, right: true, bottomRight: true }}
      >
        <div
          className="handle"
          style={{ cursor: 'move' }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
          // fix eslintjsx-a11y/mouse-events-have-key-events
          // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
          onFocus={() => {}}
          onBlur={() => {}}
        >
          Drag from here
        </div>
        <div>This readme is really dragging on...</div>
      </Resizable>
    </Draggable>
  );
}

export default App;
