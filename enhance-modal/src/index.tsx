import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Dialog, DialogDropContainer } from './Dialog';

import './App.css';

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCancelModal = () => {
    setVisible(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DialogDropContainer>
        <div className="App">
          <Dialog visible={visible} onCancel={handleCancelModal}>
            content
          </Dialog>
          <Button onClick={handleOpenModal}>
            Button
          </Button>
        </div>
      </DialogDropContainer>
    </DndProvider>
  );
};

render(<App />, document.getElementById('root'));
