<h1 align="center" size="30px">Feed India</h1> 
<div align="center">
  <a id="top" href="https://feedindia.netlify.app/" target="blank">
    <img src="https://github.com/Pranshu321/FeedIndia/assets/73426684/015e2814-30c0-4ee1-9f9e-a41eb94895fa" width="200px" alt="logo">
  </a>
<h3 align="center">We care for "Every Bite, Every Story, Every Nourished Life"</h3>
</div>
<p align="left">
<img src="https://github.com/Pranshu321/FeedIndia/assets/73426684/52315846-cd70-4bcd-a334-ba3987ec591b" width="300px" alt="picture">
<img src="https://github.com/Pranshu321/FeedIndia/assets/73426684/eac51d3f-ad88-47f5-ac62-2af5fd3bd7fa" width="400px" alt="picture">
<br>Just having a meal isn't enough , taking right meal for your body and making nutritional good choices is important. With <b>" Feed India " </b> we aim to improve India's Hunger Index ranking and hence reducing child wastage and stunting by making people aware of their nutrition intake. Through our app we can start making informed choices, take nutritionist suggestions, bridge the gap in your diet, and nourish your body with the nutrients it deserves. 
</p>


----
<div align="left">
<h2>Motivation</h2>
<img src="https://himanigottasay.files.wordpress.com/2018/11/stunting-child-survival-development-for-every-child-in-india_511a79bd548da_w1500.jpg" width="539px" alt="picture">

<img src="https://pbs.twimg.com/media/F8TYO5gbEAA1S-r.jpg" width="539px" alt="picture">
<p>

In the latest Hunger Index Report India was categorised with severity of hunger as serious. While the rate of undernourishment in India stood at 16.6 percent and under-five mortality at 3.1 percent, the prevalence of anemia in women aged between 15 and 24 years stood at 58.1 percent. Though this report has been rejected by GOI, child undernourishment and ignorance of food nutritional values and proper diet planning of pregnant women is still widely prevailing in our country. Thus we came up with the Feed India project to solve this crisis.   
</p>
</div>

<h2 align="center" size="30px">Features</h2> 
<details>
  <summary><strong>Calorie Snap </strong></summary>
<div align="left">
<h3> How it works </h3>
<h4>Capture and analyze your favorite Indian food photos to determine calorie counts and discover similar foods.</h4>
<img src="https://pbs.twimg.com/media/F8TYO5gbEAA1S-r.jpg" width="300px" alt="picture">
<p></p>
</div>
</details>

<details>
<summary><strong>Nutri Tracker </strong></summary>
<div align="left">
<h3> How it works </h3>
<h4>Plan and track your diet, monitor your nutritional intake of proteins, vitamins and other essentials, and make good food choices.</h4>
<img src="https://github.com/Pranshu321/FeedIndia/assets/73426684/b23a5272-23d7-4e99-9893-f511e84fe8eb" width="650px" alt="picture">
<p></p>
</div>
</details>

<details>
<summary><strong>Food Encyclopedia </strong></summary>
<div align="left">
<h3> How it works </h3>
<h4>Explore a comprehensive database of Indian foods, including their ingredients, their taste, and place of origin. Through this, you get to know how rich Indian cuisines are!</h4>
<img src="https://github.com/Pranshu321/FeedIndia/assets/73426684/9988fe2b-e6fa-4030-b00a-bf7db7675344" width="500px" alt="picture">
<p></p>
</div>  
</details>

<details>
  <summary><strong>Pantry Locator </strong></summary>
  <div align="left">
  <h3> How it works </h3>
  <h4>Find the nearest food pantries offering free food assistance based on your City or State.</h4>
  <img src="https://github.com/Pranshu321/FeedIndia/assets/73426684/f1781f4d-7ff2-4783-8ba7-c154b2d9cf01" width="500px" alt="picture">
  <p></p>
  </div> 
</details>

<details>
<summary><strong>Articles </strong></summary>
 <div align="left">
 <h3> How it works </h3>
 <h4>Access informative articles on nutrition, health, and culinary topics to enhance your food knowledge.</h4>
 <img src="https://pbs.twimg.com/media/F8TYO5gbEAA1S-r.jpg" width="300px" alt="picture">
 <p></p>
 </div>  
</details>

<details>
  <summary><strong>Nutritionist </strong></summary>
  <div align="left">
  <h3> How it works </h3>
  <h4>Get expert advice from certified nutritionists to support your dietary goals and make healthier choices.</h4>
  <img src="https://pbs.twimg.com/media/F8TYO5gbEAA1S-r.jpg" width="300px" alt="picture">
  <p></p>
  </div>
</details>

<h2 align="center" size="30px">Getting Started</h2> 
<div align="center">
  <a id="top" href="https://feedindia.netlify.app/" target="blank">
    <img src="https://github.com/Pranshu321/FeedIndia/assets/73426684/015e2814-30c0-4ee1-9f9e-a41eb94895fa" width="100px" alt="logo">
  </a>
<h3 align="center">Instructions for setting up your project locally. Get a local copy up and follow these simple steps in your terminal.</h3>
<h3 align = "center">Installation</h3>
</div>
<!-- <ul align = "left"> 
<li> </li>
<li> </li>
<li> </li>
</ul> -->

_Below is an example of how you can instruct your audience on installing and setting up your app. This project doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/Pranshu321/FeedIndia.git
   ```
2. Now install all npm packages.
   ```sh
    npm i 
   ```
   
3. Now you have to define own firebase project config at `src/firebase.js`.

<img src="https://user-images.githubusercontent.com/86917304/201507081-c0e7cc6b-4d3f-4d99-8611-1ddf98afcd3f.png" width="400px" alt="logo">
  
5. Download the pretrained model_weights from the drive link given and save the folder here `Backend\Calorie_Snap\indian_food_image_detection`  

6. Go to the specified folder of `app.py` , which is here as  `Backend\Calorie_Snap\app.py` , then start the server.
    ```sh
    uvicorn app:app --reload
    ```

7. Go to the `Backend\knowYourfood\app.py` and start the server similarly on a different port
    ```sh
    uvicorn app:app --reload
    ```

8. After all steps defined above you can run the command `npm start` to run the application at `localhost:3000`.

<p align="right">(<a href="#top">back to top</a>)</p>


<h2 align="center" size="30px">Technologies Used</h2> 

1. **Frontend frameworks** : `React` , `Tailwind CSS` , `react-router-dom` , `react-hot-toast` , `Daisy UI`

2. **Authenciation**       : `Firebase-Auth`

3. **Database and storage**: `Firestore` , `App Script`

4. **Services**            : `Food data API` , `Kaggle Notebooks`
   
5. **Deployment**          : `Netlify`
  
6. **ML frameworks**       : `Hugging Face` , `Pytorch` , `Google VIT Image Classification`, `pandas`
  
7. **Model Backend**       : `FastAPI` , `Uvicorn`
  
<p align="right">(<a href="#top">back to top</a>)</p>


<h2 align="center" size="30px"> Our team - Hackit </h2>

Leader   - [Sreetama Ghosh Hazra](https://github.com/Sreetama2001)

Member 2 - [Pranshu Jain](https://github.com/Pranshu321)

Member 3 - [Mohammad Sami](https://github.com/MSamiDev)



Web APP : [Feed India](https://feedindia.netlify.app/)

Video Link : [Demo Video](https://www.loom.com/share/07374277cc9242ab89b023517e9a3c8c)


<p align="right">(<a href="#top">back to top</a>)</p>

<h2 align="center" size="30px"> Resources and Data </h2>

1. [Pantry API: Niti Aayog Scraped Data](https://script.google.com/macros/s/AKfycbyHhdTcTC1vUM7EdrAfXGAPKwmrHSjTGYtKlT2fLpC3IbEqr_4LDo86MyIyEdLe5nsAzw/exec)
2. [Food Detection from Food Platter with RCNN](https://medium.com/smileinnovation/capturing-your-dinner-a-deep-learning-story-bf8f8b65f26f)
3. [Articles and videos on nutrition](https://nutritionfacts.org/)
4. [Kaggle Indian Food dataset](https://www.kaggle.com/datasets/iamsouravbanerjee/indian-food-images-dataset)
5. [Indian Food 101](https://www.kaggle.com/datasets/nehaprabhavalkar/indian-food-101)
6. [Icons](https://www.flaticon.com/)