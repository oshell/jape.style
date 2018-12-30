export const ADD_ELEMENT = 'ADD_ELEMENT';
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
export const EDIT_ELEMENT = 'EDIT_ELEMENT';
export const ACTIVATE_ELEMENT = 'ACTIVATE_ELEMENT';
export const TOGGLE_ZOOM = 'TOGGLE_ZOOM';

export const addElement = (type) => ({
  type: ADD_ELEMENT,
  payload: {type}
});

export const removeElement = (element) => ({
  type: REMOVE_ELEMENT,
  payload: {element}
});

export const editElement = (element) => ({
  type: EDIT_ELEMENT,
  payload: {element}
});

export const activateElement = (index) => ({
  type: ACTIVATE_ELEMENT,
  payload: {index}
});

export const toggleZoom = (element) => ({
  type: TOGGLE_ZOOM,
  payload: {element}
});
