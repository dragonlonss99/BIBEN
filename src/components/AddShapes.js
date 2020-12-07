import React, { useState } from "react";
import { fabric } from "fabric";
import ellipse from "../Img/addshapes/LogoMakr-9rD1kw.png";
import circle from "../Img/addshapes/LogoMakr-00Rh5a.png";
import triangle from "../Img/addshapes/LogoMakr-4keFSv.png";
import isotri from "../Img/addshapes/LogoMakr-101qmV.png";
import parra from "../Img/addshapes/LogoMakr-0mlYb5.png";
import line from "../Img/addshapes/LogoMakr-7xibzp.png";
import righttriangle from "../Img/addshapes/LogoMakr-6YA1tz.png";
import square from "../Img/addshapes/LogoMakr-60BBJ5.png";
import textbox from "../Img/addshapes/LogoMakr-26YKdq.png";
import RectAdjust from "./RectAdjust";
//Rect

export default function AddShapes(props) {
  let canvas = props.canvas;
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [fillColor, setFillColor] = useState("#ffffff");
  const [strokeWidthInput, setStrokeWidthInput] = useState("2");

  // console.log(props);
  const addRect = (canvas) => {
    const rect = new fabric.Rect({
      height: 100,
      width: 100,
      strokeWidth: parseFloat(parseFloat(strokeWidthInput)),
      stroke: strokeColor,
      fill: fillColor,
      owner: "owner",
    });
    canvas.add(rect);
    canvas.renderAll();
  };
  //Circle
  const addCircle = (canvas) => {
    const circle = new fabric.Circle({
      radius: 50,
      top: 50,
      left: 50,
      strokeWidth: parseFloat(strokeWidthInput),
      stroke: strokeColor,
      fill: fillColor,
    });
    canvas.add(circle);
    canvas.renderAll();
  };
  //Textbox IText
  const addTextbox = (canvas) => {
    const Textbox = new fabric.Textbox("please fill in", {
      top: 50,
      left: 50,
      // strokeWidth: parseFloat(strokeWidthInput),
      // stroke: strokeColor,
      fill: fillColor,
      width: 200,
      fontSize: 16,
      // fontWeight: 200,
      editingBorderColor: "blue",
    });
    canvas.add(Textbox);
    canvas.renderAll();
  };
  //Triangle
  const addTriangle = (canvas) => {
    const Triangle = new fabric.Triangle({
      top: 50,
      left: 50,
      strokeWidth: parseFloat(strokeWidthInput),
      stroke: strokeColor,
      fill: fillColor,
      width: 100,
      height: 100,
    });
    canvas.add(Triangle);
    canvas.renderAll();
  };
  //Line
  const addLine = (canvas) => {
    const Line = new fabric.Line([50, 100, 200, 200], {
      top: 50,
      left: 50,
      strokeWidth: parseFloat(strokeWidthInput),
      stroke: strokeColor,
    });
    canvas.add(Line);
    canvas.renderAll();
  };
  //Ellipse
  const addEllipse = (canvas) => {
    const Ellipse = new fabric.Ellipse({
      top: 60,
      left: 60,
      strokeWidth: parseFloat(strokeWidthInput),
      stroke: strokeColor,
      fill: fillColor,
      radius: 30,
      rx: 60,
      ry: 40,
    });
    canvas.add(Ellipse);
    canvas.renderAll();
  };
  //RightTriangle
  const addRightTriangle = (canvas) => {
    const RightTriangle = new fabric.Polygon(
      [
        { x: 50, y: 0 },
        { x: 50, y: 100 },
        { x: 100, y: 100 },
      ],
      {
        top: 100,
        left: 100,
        strokeWidth: parseFloat(strokeWidthInput),
        stroke: strokeColor,
        fill: fillColor,
      }
    );
    canvas.add(RightTriangle);
    canvas.renderAll();
  };
  //IsoscelesTriangle
  const addIsoscelesTriangle = (canvas) => {
    const IsoscelesTriangle = new fabric.Polygon(
      [
        { x: 100, y: 0 },
        { x: 200, y: 100 },
        { x: 0, y: 100 },
      ],
      {
        top: 100,
        left: 100,
        strokeWidth: parseFloat(strokeWidthInput),
        stroke: strokeColor,
        fill: fillColor,
      }
    );
    canvas.add(IsoscelesTriangle);
    canvas.renderAll();
  };
  //Parallelogram
  const addParallelogram = (canvas) => {
    const Parallelogram = new fabric.Polygon(
      [
        { x: 50, y: 0 },
        { x: 80, y: 100 },
        { x: 150, y: 100 },
        { x: 120, y: 0 },
      ],
      {
        top: 100,
        left: 100,
        strokeWidth: parseFloat(strokeWidthInput),
        stroke: strokeColor,
        fill: fillColor,
      }
    );
    canvas.add(Parallelogram);
    canvas.renderAll();
  };
  //freeDrawing
  const freeDwawing = (canvas) => {
    canvas.isDrawingMode = true;
  };
  // spray
  const Spray = () => {
    canvas.freeDrawingBrush = new fabric.SprayBrush(canvas, {
      // width: 70,
      opacity: 0.6,
      // color: "#ff0000",
    });
  };
  //stopDrawing
  const stopDwawing = (canvas) => {
    canvas.isDrawingMode = false;
    if (canvas.getActiveObject()) {
      console.log(canvas.getActiveObject().type);
    }
    // console.log(canvi.getActiveObject().fontStyle);
  };

  return (
    <div id="addShapes">
      {/* <div onClick={cancel}>X</div> */}
      <img src={square} onClick={() => addRect(canvas)} className="shapeIcon" />
      <img
        src={circle}
        onClick={() => addCircle(canvas)}
        className="shapeIcon"
      />

      <img
        src={triangle}
        onClick={() => addTriangle(canvas)}
        className="shapeIcon"
      />
      <img
        src={ellipse}
        onClick={() => addEllipse(canvas)}
        className="shapeIcon"
      />
      <img
        src={righttriangle}
        onClick={() => addRightTriangle(canvas)}
        className="shapeIcon"
      />
      <img
        src={isotri}
        onClick={() => addIsoscelesTriangle(canvas)}
        className="shapeIcon"
      />
      <img
        src={parra}
        onClick={() => addParallelogram(canvas)}
        className="shapeIcon"
      />
      <img src={line} onClick={() => addLine(canvas)} className="shapeIcon" />
      <RectAdjust
        canvas={canvas}
        strokeColor={strokeColor}
        fillColor={fillColor}
        strokeWidthInput={strokeWidthInput}
        setStrokeColor={(v) => {
          setStrokeColor(v);
        }}
        setFillColor={(v) => {
          setFillColor(v);
        }}
        setStrokeWidthInput={(v) => {
          setStrokeWidthInput(v);
        }}
      />
      {/* <button onClick={() => addRect(canvas)}>Rectangle</button>
      <button onClick={() => addCircle(canvas)}>Circle</button>
      <button onClick={() => addTextbox(canvas)}>Textbox</button>
      <button onClick={() => addTriangle(canvas)}>Triangle</button>
      <button onClick={() => addLine(canvas)}>Line</button>
      <button onClick={() => addEllipse(canvas)}>Ellipse</button>
      <button onClick={() => addRightTriangle(canvas)}>Right Triangle</button>
      <button onClick={() => addIsoscelesTriangle(canvas)}>
        Isosceles Triangle
      </button>
      <button onClick={() => addParallelogram(canvas)}>Parallelogram</button>
      <button onClick={() => freeDwawing(canvas)}>Draw</button>
 */}
    </div>
  );
}
