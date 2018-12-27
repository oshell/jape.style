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

    let modified = Object.assign({}, element);

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
        position = this.xView(modified.positionX);
        newPosition = event.key === "ArrowLeft" ?
          this.xCalc(--position):
          this.xCalc(++position);
        modified.positionX = newPosition;
        break;
        case "ArrowUp":
        case "ArrowDown":
          position = this.yView(modified.positionY);
          newPosition = event.key === "ArrowUp" ?
            this.yCalc(--position):
            this.yCalc(++position);
          modified.positionY = newPosition;
          break;
      default:
        break;
    }

    return modified;
  }
}

export default PositionController;
