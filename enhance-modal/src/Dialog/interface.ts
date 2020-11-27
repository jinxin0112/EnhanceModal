export enum ItemTypes {
  Modal = 'enhance-modal',
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
