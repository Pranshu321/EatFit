import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth} from "../../firebase/firebase";
import axios from 'axios';
import Layout from "../Layout";


function CalorieSnap() {
	const [photo, setPhoto] = useState(null);
	const [file, setFile] = useState();
	const handlePhotoChange = (event) => {
		setPhoto(event.target.files[0]);
		setFile(URL.createObjectURL(event.target.files[0]));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Do something with the photo, such as upload it to a server

        let custom_file_upload_url = `http://localhost:8000/upload`;


        let formData = new FormData();
        formData.append('customFile', photo);
        // the image field name should be similar to your api endpoint field name
        // in my case here the field name is customFile

        axios.post(
            custom_file_upload_url,
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
				
                },                    
            }
        )
        .then(res => {
            console.log(`Success` + res.data);
        })
        .catch(err => {
            console.log(err.message);
        })
	};

	return (
		<Layout>
			<main>
				<div className="flex justify-center">
					<div className=" w-3/4 flex p-32  ">
						<form
							onSubmit={handleSubmit}
							className="flex flex-col items-center justify-center w-full"
						>
							<div class="flex items-center justify-center w-full py-20">
								{!file ? (
									<label
										for="dropzone-file"
										class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
									>
										<div class="flex flex-col items-center justify-center pt-5 pb-6">
											<svg
												class="w-8 h-8 mb-4 text-gray-500"
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
											<p class="mb-2 text-sm text-gray-500 ">
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
		</Layout>
	);
}

export default CalorieSnap;
