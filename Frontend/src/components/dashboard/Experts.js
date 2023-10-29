const Experts = [
  { 
    name: "Jatin Sahu",
    reviews: 302,
    languages: ["English", "Hindi"],
    email: "fool100abc@gmail.com",
    available: "2023-09-15T09:30:00",
    free: true,
    consultation: 0,
    about: "I am a professional dietitian with expertise healthy eating. I'm dedicated to helping you achieve your health goals.",
    latestCaseType: "Health Tracking",
    type: "Nutritionist",
  },
  {
    name: "Dietitian John",
    reviews: 120,
    languages: ["English", "Spanish"],
    email: "john.dietitian@email.com",
    available: "2023-09-15T09:30:00",
    free: true,
    consultation: 0,
    about:
      "I am a professional dietitian with expertise in weight management and healthy eating. I'm dedicated to helping you achieve your health and nutrition goals.",
    latestCaseType: "Weight Management",
    type: "Nutritionist",
  },
  {
    name: "HealthyLife Nutrition",
    reviews: 80,
    languages: ["English"],
    email: "info@healthylifenutrition.com",
    available: "2023-09-16T14:00:00",
    free: true,
    consultation: 0,
    about:
      "At HealthyLife Nutrition, we provide personalized nutrition plans to support your well-being. Our services include weight loss, dietary guidance, and nutritional counseling.",
    latestCaseType: "General Nutrition",
    type: "Nutritionist",
  },
  {
    name: "Nutritionist Lisa",
    reviews: 95,
    languages: ["English", "French"],
    email: "lisa.nutritionist@example.com",
    available: "2023-09-17T11:30:00",
    free: false,
    consultation: 1200,
    about:
      "I'm a certified nutritionist with a focus on women's health and prenatal nutrition. I offer comprehensive dietary plans for a healthy pregnancy and postpartum care.",
    latestCaseType: "Prenatal Nutrition",
    type: "Nutritionist",
  },
  {
    name: "Healthy Eats Diet Center",
    reviews: 55,
    languages: ["English", "Arabic"],
    email: "info@healthyeatsdietcenter.com",
    available: "2023-09-18T13:45:00",
    free: true,
    consultation: 0,
    about:
      "Our diet center specializes in promoting a balanced and healthy lifestyle. We provide dietary guidance for weight loss, diabetes management, and heart health.",
    latestCaseType: "Heart Health",
    type: "Nutritionist",
  },
  {
    name: "Dietitian Michelle",
    reviews: 110,
    languages: ["English", "German"],
    email: "michelle.dietitian@email.com",
    available: "2023-09-19T10:15:00",
    free: true,
    consultation: 0,
    about:
      "I'm passionate about helping individuals with food allergies and intolerances. I create personalized meal plans to address dietary restrictions and improve overall health.",
    latestCaseType: "Food Allergies",
    type: "Nutritionist",
  },
  {
    name: "Nutrition4Life",
    reviews: 75,
    languages: ["English", "Spanish"],
    email: "info@nutrition4life.com",
    available: "2023-09-20T15:30:00",
    free: true,
    consultation: 0,
    about:
      "At Nutrition4Life, we focus on holistic nutrition and well-being. Our services include weight management, stress eating control, and digestive health improvement.",
    latestCaseType: "Holistic Nutrition",
    type: "Nutritionist",
  },
  {
    name: "Dietitian Sarah",
    reviews: 135,
    languages: ["English", "Mandarin"],
    email: "sarah.dietitian@email.com",
    available: "2023-09-21T12:45:00",
    free: false,
    consultation: 1800,
    about:
      "I have extensive experience in pediatric nutrition. I provide guidance to parents on raising healthy children and managing childhood obesity.",
    latestCaseType: "Pediatric Nutrition",
    type: "Nutritionist",
  },
  {
    name: "Nutrition Wellness Hub",
    reviews: 70,
    languages: ["English", "French"],
    email: "info@nutritionwellnesshub.com",
    available: "2023-09-22T09:00:00",
    free: true,
    consultation: 0,
    about:
      "We offer nutrition counseling for stress management and emotional eating. Our approach is to help individuals develop a positive relationship with food.",
    latestCaseType: "Stress Management",
    type: "Nutritionist",
  },
  {
    name: "Healthy Hearts Nutrition",
    reviews: 90,
    languages: ["English", "Spanish"],
    email: "info@healthyheartsnutrition.com",
    available: "2023-09-23T14:30:00",
    free: true,
    consultation: 0,
    about:
      "Our primary focus is on heart-healthy diets and reducing the risk of cardiovascular diseases. We provide tailored nutrition plans for heart patients and prevention.",
    latestCaseType: "Cardiovascular Health",
    type: "Nutritionist",
  },
  {
    name: "Dietitian Alex",
    reviews: 70,
    languages: ["English"],
    email: "alex.dietitian@email.com",
    available: "2023-09-24T11:00:00",
    free: false,
    consultation: 1500,
    about:
      "I specialize in sports nutrition and performance enhancement. I work with athletes to optimize their diet and nutrition for peak performance and recovery.",
    latestCaseType: "Sports Nutrition",
    type: "Nutritionist",
  },
  {
    name: "Dietitian Nisha",
    reviews: 144,
    languages: ["English", "Hindi"],
    email: "test@gmail.com",
    available: "2023-09-12T10:00:00",
    free: true,
    consultation: 0,
    about:
      "I am an experienced dietitian with a focus on weight loss and weight management. I can help you create a personalized diet plan that meets your individual needs and goals.",
    latestCaseType: "Weight Loss",
    type: "Nutritionist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJS324sJIJ0Hzx5TdBwWHD_7snDCzLX0FfA&usqp=CAU",
  },
  {
    name: "Rekha Diet Clinic",
    reviews: 60,
    languages: ["English", "Hindi"],
    email: "test@gmail.com",
    available: "2023-09-13T12:00:00",
    free: true,
    consultation: 0,
    about:
      "I am a registered dietitian with a passion for helping people achieve their health and wellness goals. I offer a variety of services, including weight loss, weight management, diabetes management, and sports nutrition.",
    latestCaseType: "Diabetes Management",
    type: "Nutritionist",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dietitian Sarika",
    reviews: 103,
    languages: ["English", "Hindi"],
    email: "test@gmail.com",
    available: "2023-09-14T10:00:00",
    free: false,
    consultation: 1500,
    about:
      "I am a certified dietitian nutritionist with over 10 years of experience. I specialize in helping people with chronic diseases, such as diabetes, heart disease, and kidney disease. I can also help you with weight loss, weight management, and sports nutrition.",
    latestCaseType: "Chronic Disease Management",
    type: "Nutritionist",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dietitian John",
    reviews: 120,
    languages: ["English", "Spanish"],
    email: "john.dietitian@email.com",
    available: "2023-09-15T09:30:00",
    free: true,
    consultation: 0,
    about:
      "I am a professional dietitian with expertise in weight management and healthy eating. I'm dedicated to helping you achieve your health and nutrition goals.",
    latestCaseType: "Weight Management",
    type: "Nutritionist",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  }
];

const imageUrls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJS324sJIJ0Hzx5TdBwWHD_7snDCzLX0FfA&usqp=CAU",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=500&q=60",
];

// Shuffle the image URLs randomly
for (let i = Experts.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
}

// Assign random image URLs to the Nutritionists
Experts.forEach((nutritionist, index) => {
  nutritionist.image = imageUrls[index];
});

export default Experts;