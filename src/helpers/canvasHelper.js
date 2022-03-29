import Paper from "paper";

const initPaper = (theme) => {
  //Stroke color depending on theme
  const strokeColor = theme === "dark" ? "rgba(255, 128, 59, .5)" : "rgba(136, 0, 255, .75)";

  Paper.setup("canvas");

  var strokeWidthVh = 0.5; //in vh
  var strokeWidthPx = (strokeWidthVh * window.innerHeight) / 100; //px equivalent of vw

  var path = new Paper.Path({
    strokeColor: strokeColor,
    strokeWidth: strokeWidthPx,
    strokeCap: 'round'
  });

  createPaperPath(path);
}

const createPaperPath = (path) => {
  if(path !== null) {
    Paper.project.activeLayer.addChild(path); //Add path to layer

    var points = 20;
    var length = 7.5;

    var start = Paper.view.center / [10, 1];

    for (var i = 0; i < points; i++)
      path.add(start + new Paper.Point(i * length, 0));

    Paper.view.onMouseMove = (event) => {
      path.firstSegment.point = event.point;

      for (var i = 0; i < points - 1; i++) {
        var segment = path.segments[i];
        var nextSegment = segment.next;
        var vector = segment.point.subtract(nextSegment.point);
        vector.length = length;
        nextSegment.point.set(segment.point.subtract(vector));
      }

      path.smooth({ type: 'continuous' });
    };
  }
}

const clearPaperCanvas = () => {
  if(Paper.project != null) Paper.project.remove();
}

export { initPaper, clearPaperCanvas };