import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";

function App() {
	const [file, setFile] = useState(null);
	const [image, setImage] = useState(null);

	useEffect(() => {
		const getImage = () => {
			const img = new Image();
			img.src = URL.createObjectURL(file);

			img.onload = () => {
				setImage({
					url: img.src,
					width: 650,
					height: 450,
				});
			};
		};

		file && getImage();
	}, [file]);

	return (
		<div>
			<Navbar />
			{image ? (
				<NewPost image={image} setImage={setImage} />
			) : (
				<div className="newPostCard">
					<div className="addPost">
						<img
							src="https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
							className="avatar"
						/>
						<div className="postForm">
							<input
								type="text"
								placeholder="What's on your mind"
								className="postInput"
							/>
							<label htmlFor="file">
								<img
									className="addImg"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Octicons-cloud-upload.svg/1200px-Octicons-cloud-upload.svg.png"
									alt=""
								/>
								<img
									className="addImg"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Octicons-cloud-upload.svg/1200px-Octicons-cloud-upload.svg.png"
									alt=""
								/>
								<img
									className="addImg"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Octicons-cloud-upload.svg/1200px-Octicons-cloud-upload.svg.png"
									alt=""
								/>
								<button>Send</button>
							</label>
							<input
								onChange={(e) => setFile(e.target.files[0])}
								style={{ display: "none" }}
								type="file"
								id="file"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
