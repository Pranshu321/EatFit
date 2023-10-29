import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";

const Articles = () => {
	const articles = [
		{
			id: 1,
			title: "My First Article",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 2,
			title: "My Second Article",
			content:
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 3,
			title: "My Third Article",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			id: 4,
			title: "My Third Article",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			id: 5,
			title: "My Third Article",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	];

	return (
		<div>
			<main>
				<div className="flex">
					<aside className=" flex flex-col w-1/4 h-screen px-5 py-8 overflow-y-auto bg-black border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
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
										to={"/calorie"}
										className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Calorie Snap
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
										to={"/yourarticles"}
										className="listItem flex  px-7 py-5 text-black bg-gray-100 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									>
										<span className="mx-2 text-lg font-medium">
											Your Articles
										</span>
									</Link>
								</div>
							</nav>
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
									className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-btn dark:hover:text-blue-400"
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
					</aside>
					<div className=" w-3/4 p-16 flex justify-center items-center ">
						<div>
                        <button className="btn float-right bg-btn">Publish a Article</button>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
								{articles.map((article) => (
									<div className="card w-96 bg-base-100 shadow-xl m-16">
										<div className="card-body">
											<h2 className="card-title">Shoes!</h2>
											<p>
												If a dog chews shoes whose shoes does he
												choose?
											</p>
										</div>
										<figure>
											<img
												src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
												alt="Shoes"
											/>
										</figure>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Articles;
