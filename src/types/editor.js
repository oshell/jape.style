// @flow
type Position3d = {
  x: number,
  y: number,
  z: number,
};

type Position2d = {
  x: number,
  y: number,
};

type Text = {
  index: number,
  type: string,
  active: boolean,
  // editable details
  title: string,
  width: number,
  position: Position2d,
  rotation: number,
  value: string,
  font: string,
  fontSize: number,
};

type Image = {
  index: number,
  type: string,
  active: boolean,
  // editable details
  title: string,
  width: number,
  position: Position2d,
  rotation: number,
  url: string,
};

export type Element = Image | Text;

export type Area = {
  index: number,
  active: boolean,
  elements: Array<Element>,
  // editable details
  title: string,
  width: number,
  scale: number,
  position: Position3d,
  rotation: Position3d,
};
