export enum ItemTypes {
  Draggable = 'draggable',
}

export interface DragItem {
  type: string;
  top: number;
  left: number;
}

export enum XLocation {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}
export enum YLocation {
  Center = 'center',
  Top = 'top',
  Bottom = 'bottom',
}

export interface Position {
  top: YLocation | number;
  left: XLocation | number;
}

export interface DraggableProps {}
