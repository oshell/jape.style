class Position {
  xCalc(pos) {
    return pos * 100 - 5000;
  }

  yCalc(pos) {
    return pos * 60 - 3000;
  }

  xView(pos) {
    return (5000 + pos)/100;
  }

  yView(pos) {
    return (3000 + pos)/60;
  }
}

export default new Position();
