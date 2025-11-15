let pointCoordinates={
  "blue": [{"x":112, "y":92}, {"x":289, "y":120}, {"x":110, "y":35}, {"x":221, "y":55}, {"x":269, "y":196}],
  "red": [{"x":413, "y":140}, {"x":334, "y":132}, {"x":521, "y":96}, {"x":384, "y":148}, {"x":330, "y":48}],
  "yellow": [{"x":13, "y":278}, {"x":101, "y":409}, {"x":209, "y":332}, {"x":52, "y":367}, {"x":110, "y":266}],
  "green": [{"x":522, "y":340}, {"x":544, "y":283}, {"x":535, "y":327}, {"x":611, "y":362}, {"x":346, "y":246}]
}

function drawCompass(canvas){
  //create the x and y axis
  canvas.beginPath(); 
  canvas.moveTo(overlay.width/2, 0); 
  canvas.lineTo(overlay.width/2,overlay.height); 
  canvas.stroke(); 

  canvas.beginPath(); 
  canvas.moveTo(0, overlay.height/2); 
  canvas.lineTo(overlay.width,overlay.height/2); 
  canvas.stroke(); 

  for (const color in pointCoordinates){
    canvas.fillStyle=color
    for(const points in pointCoordinates[color]){
      // add the points and output the point coordinates
      canvas.beginPath();
      canvas.arc(pointCoordinates[color][points].x, pointCoordinates[color][points].y, 10, 0, 2 * Math.PI);
      canvas.stroke();
      canvas.fill();
    }
  }
}
