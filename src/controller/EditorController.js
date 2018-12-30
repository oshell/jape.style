import { ELEMENT_TYPES } from '../constants/ElementTypes';

class EditorController {
  static createDefaultElement(type = 'text') {
    var element= {
      active: true,
      type: type,
      value: 'Lorem Ipsum',
      position: {x: 0, y:0, z:0},
      rotation: {x: 0, y:0, z:0},
      scale: 10,
    }

    switch (type) {
      case ELEMENT_TYPES.text:
        element.font = '';
        element.fontSize = 50;
        break;
      case ELEMENT_TYPES.area:
        element.width = 500;
        break;
      default:
        break;
    }

    return element;
  }

  static addDefaultElement(elements, type = 'text') {
    elements = elements.length ? elements : [];
    let element = this.createDefaultElement(type);
    let modified = elements.slice();
    modified.push(element);
    modified = this.activateLastElement(modified);
    modified = this.addIndexProp(modified);
    return modified;
  }

  static getActiveElement(elements) {
    for (let i=0; i<elements.length; i++) {
      let element = elements[i];
      if (element.active) {
        return element;
      }
    }
  }

  static addIndexProp(elements) {
    for (let i=0; i<elements.length; i++) {
      let element = elements[i];
      element.index = i;
    }
    return elements;
  }

  static editElement(element, elements) {
    const modified = elements.slice();
    modified[element.index] = element;
    return modified;
  }

  static setActiveElement(index, elements) {
    let modified = elements.slice();

    for (let i=0; i<modified.length; i++) {
      let element = modified[i];
      element.active = false;
    }

    modified[index].active = true;
    return modified;
  }

  static activateLastElement(elements) {
    let index = elements.length -1;
    return this.setActiveElement(index, elements);
  }
}

export default EditorController;
