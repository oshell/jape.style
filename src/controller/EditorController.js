// @flow
import type { Element, Area } from '../types/editor';
import { FONTS } from '../constants/Fonts';
import { ELEMENT_TYPES } from '../constants/ElementTypes';

class EditorController {
  static createDefaultElement(type: string = 'text'):Element {
    let element:Element = this.createTextElement();

    switch (type) {
      case ELEMENT_TYPES.text:
        element = this.createTextElement();
        break;
      default:
        break;
    }

    return element;
  }

  static createTextElement():Element {
    let element:Element =  {
      index: 0,
      type: 'text',
      active: true,
      title: 'Title',
      width: 20,
      position: {x: 0, y:0},
      rotation: 0,
      value: 'Lorem Ipsum',
      font: FONTS[0],
      fontSize: 20,
    };

    return element;
  }

  static createArea():Area {
    let area:Area = {
      index: 0,
      active: true,
      title: 'Untitled',
      width: 50,
      scale: 5,
      position: {x:0,y:0,z:0},
      rotation: {x:0,y:0,z:0},
      elements: []
    };

    return area;
  }

  static addArea(areas:Array<Area>):Array<Area> {
    let newArea:Area = this.createArea();
    let modified = areas.slice();
    modified.push(newArea);
    modified = this.activateLast(modified);
    modified = this.setIndexProp(modified);
    return modified;
  }

  static addElement(areas:Array<Area>, index:number, type:string  = 'text'):Array<Area> {
    let area:Area = areas[index];
    let elements:Array<Element> = area.elements;
    let element:Element = this.createDefaultElement(type);
    let modified:Array<Element> = elements.slice();
    modified.push(element);
    modified = this.activateLast(modified);
    modified = this.setIndexProp(modified);

    area.elements = modified;
    areas[index] = area;
    return areas;
  }

  static getActiveElement(areas:Array<Area>):Element | null {
    let activeArea = this.getActiveArea(areas);
    if (activeArea === null) {
      return null;
    }

    let elements = activeArea.elements;

    // just return element with active attribute true
    for (let i=0; i<elements.length; i++) {
      let element:Element = elements[i];
      if (element.active) {
        return element;
      }
    }
    // if there is no active one return null
    return null;
  }

  static getActiveArea(areas:Array<Area>):Area | null  {
    for (let i=0; i<areas.length; i++) {
      let area:Area = areas[i];
      if (area.active) {
        return area;
      }
    }
    // if there is no active one return null
    return null;
  }

  static setIndexProp(generics:Array<Object>):Array<Object> {
    for (let i=0; i<generics.length; i++) {
      let generic = generics[i];
      generic.index = i;
    }
    return generics;
  }

  static edit(generic:Object, areas:Array<Area>):Array<Area> {
    //check if generic is area or element
    let isElement = generic.hasOwnProperty('type');
    //working copy of areas
    let modified = areas.slice();
    // if we have an element, we replace it in the active area
    if (isElement) {
      let activeArea = this.getActiveArea(modified);
      let elements = activeArea.elements;
      let modifiedElements = elements.slice();
      modifiedElements[generic.index] = generic;
      modified.elements = modifiedElements;
    } else {
      modified[generic.index] = generic;
    }

    return modified;
  }

  static setActive(index:number, generics:Array<Object>):Array<Object> {
    let modified:Array<Object> = generics.slice();

    for (let i=0; i<modified.length; i++) {
      let generic:Object = modified[i];
      generic.active = false;
    }

    modified[index].active = true;
    return modified;
  }

  static activateLast(generics:Array<Object>):Array<Object> {
    let index = generics.length -1;
    let modified = this.setActive(index, generics);
    return modified;
  }
}

export default EditorController;
