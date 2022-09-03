import React from "react";
import { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const NewPost = ({ image, setImage }) => {
	const { url, width, height } = image;
	const imgRef = useRef();
	const canvasRef = useRef();

	const handleImage = async () => {
		const detections = await faceapi
			.detectAllFaces(
				imgRef.current,
				new faceapi.TinyFaceDetectorOptions()
			)
			.withFaceLandmarks()
			.withFaceExpressions();

		canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
			imgRef.current
		);

		faceapi.matchDimensions(canvasRef.current, {
			width: 650,
			height: 450,
		});

		const resized = faceapi.resizeResults(detections, {
			width: 650,
			height: 450,
		});
		faceapi.draw.drawDetections(canvasRef.current, resized);
		faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
		faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
	};

	useEffect(() => {
		const loadModels = () => {
			Promise.all([
				faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
				faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
				faceapi.nets.faceExpressionNet.loadFromUri("/models"),
			])
				.then(handleImage)
				.catch((err) => console.log(err));
		};

		imgRef.current && loadModels();
	}, []);

	return (
		<div className="container">
			<div className="left" style={{ width, height }}>
				<img
					className="mainImg"
					ref={imgRef}
					crossOrigin="anonymous"
					src={url}
					alt={url}
				/>
				<canvas ref={canvasRef}></canvas>
			</div>
			<div className="right">
				<h1>Share your post</h1>
				{/* <input
					type="text"
					className="rightInput"
					placeholder="What's on your mind?"
				/> */}
				<button className="rightButton" onClick={() => setImage(null)}>
					back
				</button>
			</div>
		</div>
	);
};

export default NewPost;
