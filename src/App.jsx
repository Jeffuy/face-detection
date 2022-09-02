import "./App.css";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";

function App() {
	return (
		<div>
			<Navbar />
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
								src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
								alt=""
							/>
							<img
								className="addImg"
								src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
								alt=""
							/>
							<img
								className="addImg"
								src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
								alt=""
							/>
							<button>Send</button>
						</label>
						<input
							style={{ display: "none" }}
							type="file"
							id="file"
						/>
					</div>
				</div>
			</div>
			<NewPost />
		</div>
	);
}

export default App;
