import * as React from 'react';

import { ENHANCE_DIALOG_DEFAULT_POSITION } from './config';
import { Position } from './interface';

export default React.createContext<Position>(ENHANCE_DIALOG_DEFAULT_POSITION);
