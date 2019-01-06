import { SIZES } from '../constants/Sizes';
import SizeController from './SizeController';

class PresentationController {
  static toggleZoom(state, payload) {
    let zoomed = state.zoomed;
    let element = payload.element;
    let scale = 0.1;

    if (zoomed) {
      state = {
        zoomed: false,
        zoomedIndex: -1,
        scale: scale,
        position: {x:0,y:0,z:0}
      }
    } else {
      let windowWidth = window.innerWidth;

      let availableWidth = windowWidth
        - SIZES.elementLinkListWidth
        - SIZES.elementDetailWidth
        - SIZES.presentationPadding * 2;

      let elementWidth = SizeController.relativeWidth(element.width);
      let widthRatio = availableWidth/elementWidth;
      let scaleRatio = 10/element.scale*0.8;

      scale *= widthRatio;
      scale *= scaleRatio;
      let x = (-1)*(element.position.x * scale);
      let y = (-1)*(element.position.y * scale);
      let z = (-1)*(element.position.z * scale);

      state = {
        zoomed: true,
        zoomedIndex: element.index,
        scale: scale,
        position: {x,y,z}
      }
    }
    
    return state;
  }
}

export default PresentationController;
