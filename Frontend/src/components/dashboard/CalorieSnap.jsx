import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import axios from "axios";
import Layout from "../Layout";
import useState from "react-usestateref";

function CalorieSnap() {
  const [photo, setPhoto, photoref] = useState(null);
  const [file, setFile, fileref] = useState();
  const [dish, setDish, dishref] = useState("");
  const [nutriData, setnutriData, nutridataref] = useState();
  const [dishContaints, setDishContaints, dishcontentref] = useState([]);
  const navigate = useNavigate();

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
    setFile(URL.createObjectURL(event.target.files[0]));
    console.log(photo);
    console.log(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the photo, such as upload it to a server
    console.log(photo);
    console.log(file);

    let custom_file_upload_url = `http://localhost:8000/upload`;

    let formData = new FormData();
    formData.append("file", photo);
    // the image field name should be similar to your api endpoint field name
    // in my case here the field name is customFile

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8000/upload",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        let dis = response.data[0].replace(/_/g, " ");
        setDish(dis);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function extractIngredients(inputString) {
    // Split the input string into an array of ingredients using semicolon as the delimiter
    const ingredientsArray = inputString.split(";");

    // Trim and capitalize each ingredient
    const formattedIngredients = ingredientsArray.map((ingredient) => {
      // Trim leading and trailing whitespace
      const trimmedIngredient = ingredient.trim();
      // Capitalize the first letter of each word
      const words = trimmedIngredient.split(" ");
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
      return capitalizedWords.join(" ");
    });

    return formattedIngredients;
  }

  useEffect(() => {
    if (dish) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.edamam.com/api/food-database/v2/parser",
        headers: {},
        params: {
          app_id: "b9db0027",
          app_key: "b495e1941607af35b205a97df54b4088",
          ingr: dish,
        },
      };

      axios
        .request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          console.log(response);
          setnutriData(response.data);
          if (response?.data?.hints[0].food.foodContentsLabel) {
            setDishContaints(
              extractIngredients(response.data.hints[0].food.foodContentsLabel)
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <Layout>
      <main>
        <div className="flex justify-center">
          <div className=" p-20  ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center w-full"
            >
              <div class="flex items-center justify-center w-full py-20">
                {!file ? (
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-[50rem] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
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
                        <span class="font-semibold">Click to upload</span>
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

            <div className="p-20">
              {nutriData ? (
                <>
                  <div className="card bg-base-100 shadow-xl flex flex-row">
                    <div className="card-body">
                      <h2 className="card-title">Nutrients</h2>
                      <p>Energy Kcal :</p>
                      <p>Protien count :</p>
                      <p>Fat :</p>
                      <p>carbohydrates :</p>
                      <p>FIBTG (fiber, total dietary) :</p>
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">Metrics</h2>
                      <p>{nutriData?.hints[0].food.nutrients.ENERC_KCAL}</p>
                      <p>{nutriData.hints[0].food.nutrients.PROCNT}</p>
                      <p>{nutriData.hints[0].food.nutrients.FAT}</p>
                      <p>{nutriData.hints[0].food.nutrients.CHOCDF}</p>
                      <p>{nutriData.hints[0].food.nutrients.FIBTG}</p>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl m-10">
                    <div className="card-body">
                      <h2
                        onClick={() => console.log(dishcontentref.current)}
                        className="card-title"
                      >
                        Food Contents{" "}
                      </h2>
                      <div className="flex gap-x-4 gap-y-3 flex-wrap ">
                        {dishcontentref.current?.map((item, idx) => (
                          <button className="btn bg-green-300">{item}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h1 className="font-semibold text-2xl mb-6">
                    Similar Dishes
                  </h1>
                  <div className="flex gap-x-4 gap-y-4 flex-wrap">
                    {nutriData?.hints.map((item, idx) => {
                      return (
                        <button className="btn bg-green-300">
                          {nutridataref.current?.hints[idx].food.label}
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default CalorieSnap;
