# weather-api
A responsive weather web application built with HTML, CSS, and JavaScript using the OpenWeatherMap API. It displays real-time weather data, a 5-day forecast, automatic day/night theme based on the selected city's local time, and proper error handling. Created as a requirement for Elective 3.

# 🌤️ Weather API Application

A responsive **weather web application** built with **HTML, CSS, and JavaScript** using the **OpenWeatherMap API**.  
This application allows users to search for real-time weather information of any city.

This project was created as a **requirement for Elective 3 (ELEC3)**.

---

## 👤 Author
- **Name:** Camile Caragay  
- **GitHub Username:** Cams-mile  
- **Course:** BSIT  
- **Subject:** Elective 3  

---

## ✨ Features
- Search weather by **city name**
- Displays:
  - 🌡️ Temperature (Celsius)
  - 💧 Humidity
  - ☁️ Weather condition
  - 🌤️ Weather icon
- 📅 **5-day weather forecast**
- 🌞🌙 **Automatic Day/Night Theme**
  - Background changes based on the local time of the selected city
- ⏳ Loading indicator while fetching data
- ❌ Error handling:
  - Empty input
  - City not found
  - Invalid API key
  - Failed API request
- 📱 Responsive design
- 🎨 Modern purple-themed interface

---

## 🌐 API Information

### API Used
**OpenWeatherMap API**

### Base URL
```bash
https://api.openweathermap.org/data/2.5

```
🛠️ Technologies Used

HTML

CSS

JavaScript

OpenWeatherMap API

----

📂 File Structure

The project contains exactly three (3) files as required:

index.html
style.css
script.js

---

📥 Clone Repository

To get a copy of this project, run the following command:

```bash
git clone https://github.com/Cams-mile/weather-api.git

````

```bash
cd weather-api

````
▶️ How to Run the Project

Clone the repository

Open script.js

Replace the API key:
```bash
const API_KEY = "YOUR_API_KEY_HERE";

```
Save the file

Open index.html in a web browser

Enter a city name and click Check

-------
🔐 API Key Security

The real API key is not included in this repository

A placeholder key is used to protect sensitive information

The repository includes a .gitignore file to prevent API keys from being uploaded
