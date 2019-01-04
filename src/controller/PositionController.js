import _ from 'lodash';

class PositionController {
  static xCalc(pos) {return pos * 100 - 5000;}
  static yCalc(pos) {return pos * 60 - 3000;}
  static xView(pos) {return (5000 + pos)/100;}
  static yView(pos) {return (3000 + pos)/60;}

  static handleOnKeyDown(element, event) {
    let position=0, newPosition=0;

    if (!element) {
      return;
    }

    let modified = _.cloneDeep(element);

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
        position = this.xView(modified.position.x);
        newPosition = event.key === "ArrowLeft" ?
          this.xCalc(--position):
          this.xCalc(++position);
        modified.position.x = newPosition;
        break;
        case "ArrowUp":
        case "ArrowDown":
          position = this.yView(modified.position.y);
          newPosition = event.key === "ArrowUp" ?
            this.yCalc(--position):
            this.yCalc(++position);
          modified.position.y = newPosition;
          break;
      default:
        break;
    }

    return modified;
  }

  static positionChanged(element, movedElement) {
    return element.position.x !== movedElement.position.x ||
      element.position.y !== movedElement.position.y;
  }
}

export default PositionController;
