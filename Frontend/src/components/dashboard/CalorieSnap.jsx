import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";

function CalorieSnap() {
	const [photo, setPhoto] = useState(null);
	const [file, setFile] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
			} else {
				// User is signed out
				navigate("/");
				// ...
			}
		});
	}, []);

	const handlePhotoChange = (event) => {
		setPhoto(event.target.files[0]);
		setFile(URL.createObjectURL(event.target.files[0]));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Do something with the photo, such as upload it to a server
		var data = new FormData();
		var imagedata = photo
		data.append("data", imagedata);
		// data.append("data", imagedata);

		fetch("http://localhost:8000/upload", {
			mode: "no-cors",
			method: "POST",
			body: data,
		}).then(
			function (res) {
				if (res.ok) {
					alert("Perfect! ");
				} else if (res.status == 401) {
					alert("Oops! ");
				}
			},
			function (e) {
				alert("Error submitting form!");
			}
		);
	};

	return (
		<div>
			<main>
				<div className="flex">
					<aside className="flex flex-col w-1/4 h-screen px-5 py-8 overflow-y-auto bg-black border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
						<a href="/">
							<img className="w-auto h-20 " src="" alt="" />
						</a>

						<div className="flex flex-col justify-between flex-1 mt-6">
							<nav className="flex-1 -mx-3 space-y-5 mt-16 ">
								<div id="list">
									<Link
										to={"/dashboard"}
										className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Dashboard
										</span>
									</Link>
									<Link
										to={"/nutri"}
										className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Nutri Tracker
										</span>
									</Link>
									<Link
										to={"/calorie"}
										className="listItem flex  px-7 py-5 text-black bg-gray-100 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Calorie Snap
										</span>
									</Link>
									<Link
										to={"/pantry"}
										className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Pantry locator
										</span>
									</Link>
									<Link
										to={"/attendance"}
										className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Nutritionist Checkup
										</span>
									</Link>
									<Link
										to={"/foodenc"}
										className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Food Encyclopedia
										</span>
									</Link>
									<Link
										to={"/yourarticles"}
										className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Your Articles
										</span>
									</Link>
								</div>
							</nav>
							<div className=" flex flex-col fixed bottom-0 left-0 pl-7 py-7 bg-black w-1/4 ">
								<div>
									<Link
										to="/userlist"
										className="flex items-center gap-x-2"
									>
										<img src="" alt="" className=" h-7" />
										<span className="font-medium text-lg text-white dark:text-gray-200">
											Back to Track Employees
										</span>
									</Link>
								</div>
								<div className="flex items-center justify-between mt-6 pr-5">
									<a href="#" className="flex items-center gap-x-2">
										<img
											className="object-cover rounded-full h-7 w-7 profile__pic mr-2"
											src={
												auth.currentUser?.photoURL != null
													? auth.currentUser?.photoURL
													: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_F8Fkc4WqCZ018z4t2RSPmA9iTAdeEaopA&usqp=CAU"
											}
											alt="avatar"
										/>
										<span className="text-sm font-medium text-white dark:text-gray-200">
											Feed India
										</span>
									</a>

									<a
										href="#"
										onClick={() => auth.signOut()}
										className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-5 h-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</aside>
					<div className=" w-3/4 flex p-32  ">
						<form
							onSubmit={handleSubmit}
							className="flex flex-col items-center justify-center w-full"
						>
							<div class="flex items-center justify-center w-full py-20">
								{!file ? (
									<label
										for="dropzone-file"
										class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
									>
										<div class="flex flex-col items-center justify-center pt-5 pb-6">
											<svg
												class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 20 16"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
												/>
											</svg>
											<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
												<span class="font-semibold">
													Click to upload
												</span>
												or drag and drop
											</p>
											<p class="text-xs text-gray-500 dark:text-gray-400">
												SVG, PNG, JPG or GIF (MAX. 800x400px)
											</p>
										</div>
										<input
											id="dropzone-file"
											type="file"
											class="hidden"
											onChange={handlePhotoChange}
										/>
									</label>
								) : (
									<img src={file} />
								)}
							</div>

							<button
								type="submit"
								className=" bg-btn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
}

export default CalorieSnap;
