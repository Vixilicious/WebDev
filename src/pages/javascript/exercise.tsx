
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const JavaScriptExercise = () => {
  return (
    <ContentLayout
      title="JavaScript Final Exercise"
      section="JavaScript Basics"
      currentStep={6}
      totalSteps={6}
      prevLink="/javascript/async"
      nextLink="/react-basics"
    >
      <div>
        <h2>Bringing It All Together</h2>
        <p>
          Congratulations on making it through the JavaScript basics! In this final exercise, we'll build a more complex application that incorporates everything you've learned so far.
        </p>
        <p>
          We're going to create an interactive weather dashboard that:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>Fetches weather data from an API</li>
          <li>Displays current weather conditions</li>
          <li>Shows a 5-day forecast</li>
          <li>Allows searching for different locations</li>
          <li>Saves search history</li>
        </ul>

        <h2>Project Overview: Weather Dashboard</h2>
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-4">Here's what our weather app will include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Features:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Current weather display</li>
                <li>5-day forecast</li>
                <li>Location search</li>
                <li>Recent searches history</li>
                <li>Temperature unit toggle (°C/°F)</li>
                <li>Weather icons and descriptions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">JavaScript concepts used:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Fetch API and async/await</li>
                <li>DOM manipulation</li>
                <li>Event handling</li>
                <li>Array methods</li>
                <li>LocalStorage for persistence</li>
                <li>Date and time handling</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Step 1: Setting Up the HTML Structure</h2>
        <p>
          First, let's create the basic HTML structure for our weather dashboard. Create a new file called <code>weather-dashboard.html</code> and add the following code:
        </p>

        <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather Dashboard</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    /* We'll add CSS here in Step 2 */
  </style>
</head>
<body>
  <header>
    <h1>Weather Dashboard</h1>
    <div class="unit-toggle">
      <button id="celsius" class="active">°C</button>
      <button id="fahrenheit">°F</button>
    </div>
  </header>

  <main>
    <aside class="search-section">
      <div class="search-container">
        <h2>Search for a City</h2>
        <div class="search-input">
          <input type="text" id="city-input" placeholder="Enter city name">
          <button id="search-button"><i class="fas fa-search"></i></button>
        </div>
      </div>
      
      <div class="recent-searches">
        <h3>Recent Searches</h3>
        <ul id="search-history"></ul>
      </div>
    </aside>

    <section class="weather-section">
      <div id="current-weather" class="current-weather">
        <div class="placeholder">
          <p>Search for a city to see weather information</p>
        </div>
      </div>

      <div class="forecast-container">
        <h2>5-Day Forecast</h2>
        <div id="forecast" class="forecast"></div>
      </div>
    </section>
  </main>

  <footer>
    <p>Weather data provided by OpenWeatherMap</p>
  </footer>

  <script>
    // We'll add JavaScript here in Step 3
  </script>
</body>
</html>`}
        </CodeBlock>

        <h2>Step 2: Adding CSS Styles</h2>
        <p>
          Next, let's add styles to make our weather dashboard visually appealing. Add this CSS to the <code>&lt;style&gt;</code> section in the head of your HTML file:
        </p>

        <CodeBlock language="css">
{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f5f7fa;
  line-height: 1.6;
}

header {
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.unit-toggle button {
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9rem;
}

.unit-toggle button.active {
  background-color: white;
  color: #3498db;
}

main {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
  margin: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  main {
    grid-template-columns: 1fr;
  }
}

.search-section {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.search-input {
  display: flex;
  margin-top: 10px;
}

.search-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

.search-input button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0 15px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.recent-searches {
  margin-top: 20px;
}

#search-history {
  list-style-type: none;
  margin-top: 10px;
}

#search-history li {
  background-color: #f0f0f0;
  margin-bottom: 5px;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

#search-history li:hover {
  background-color: #e0e0e0;
}

.weather-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.current-weather {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.current-weather .placeholder {
  text-align: center;
  padding: 40px 0;
  color: #888;
}

.current-weather-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.current-weather-header img {
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

.current-weather-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
}

.weather-detail {
  padding: 8px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.forecast-container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.forecast-container h2 {
  margin-bottom: 15px;
}

.forecast {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 15px;
}

.forecast-day {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.forecast-date {
  font-weight: bold;
  margin-bottom: 10px;
}

.forecast-icon {
  width: 50px;
  height: 50px;
  margin: 10px auto;
}

footer {
  text-align: center;
  padding: 20px;
  color: #666;
  font-size: 0.9rem;
}

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}`}
        </CodeBlock>

        <h2>Step 3: Adding the JavaScript Logic</h2>
        <p>
          Now, let's add the JavaScript code that powers our weather dashboard. Add this to the <code>&lt;script&gt;</code> section at the end of your HTML file:
        </p>

        <CodeBlock language="javascript">
{`// Constants
const API_KEY = '4d8fb5b93d4af21d66a2948710284366'; // This is a free OpenWeatherMap API key for demo purposes
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const searchHistory = document.getElementById('search-history');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');
const celsiusBtn = document.getElementById('celsius');
const fahrenheitBtn = document.getElementById('fahrenheit');

// App State
let currentUnit = 'metric'; // 'metric' for Celsius, 'imperial' for Fahrenheit
let searchedCities = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Event Listeners
searchButton.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

celsiusBtn.addEventListener('click', () => {
  if (currentUnit !== 'metric') {
    currentUnit = 'metric';
    updateUnitButtons();
    refreshDisplays();
  }
});

fahrenheitBtn.addEventListener('click', () => {
  if (currentUnit !== 'imperial') {
    currentUnit = 'imperial';
    updateUnitButtons();
    refreshDisplays();
  }
});

// Initialize
function init() {
  renderSearchHistory();
  // If there's search history, load the most recent city
  if (searchedCities.length > 0) {
    fetchWeatherData(searchedCities[0]);
  }
}

// Handle search
async function handleSearch() {
  const city = cityInput.value.trim();
  
  if (!city) {
    showError('Please enter a city name');
    return;
  }
  
  cityInput.value = '';
  await fetchWeatherData(city);
}

// Fetch weather data from API
async function fetchWeatherData(city) {
  try {
    // Show loading state
    currentWeather.innerHTML = '<div class="placeholder"><p>Loading...</p></div>';
    forecast.innerHTML = '';
    
    // Fetch current weather
    const currentWeatherResponse = await fetch(
      \`\${BASE_URL}/weather?q=\${city}&units=\${currentUnit}&appid=\${API_KEY}\`
    );
    
    if (!currentWeatherResponse.ok) {
      throw new Error(\`City not found (status \${currentWeatherResponse.status})\`);
    }
    
    const currentWeatherData = await currentWeatherResponse.json();
    
    // Fetch 5-day forecast
    const forecastResponse = await fetch(
      \`\${BASE_URL}/forecast?q=\${city}&units=\${currentUnit}&appid=\${API_KEY}\`
    );
    
    if (!forecastResponse.ok) {
      throw new Error('Failed to fetch forecast data');
    }
    
    const forecastData = await forecastResponse.json();
    
    // Update search history
    updateSearchHistory(city);
    
    // Render weather data
    renderCurrentWeather(currentWeatherData);
    renderForecast(forecastData);
    
  } catch (error) {
    showError(error.message);
  }
}

// Render current weather
function renderCurrentWeather(data) {
  const { name, main, weather, wind, sys } = data;
  const weatherIcon = \`https://openweathermap.org/img/wn/\${weather[0].icon}@2x.png\`;
  const tempUnit = currentUnit === 'metric' ? '°C' : '°F';
  const windUnit = currentUnit === 'metric' ? 'm/s' : 'mph';
  
  const timestamp = new Date(data.dt * 1000);
  const date = timestamp.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  currentWeather.innerHTML = \`
    <div class="current-weather-header">
      <img src="\${weatherIcon}" alt="\${weather[0].description}">
      <div>
        <h2>\${name}, \${sys.country}</h2>
        <p>\${date}</p>
        <p>\${weather[0].description}</p>
      </div>
    </div>
    <div class="current-weather-temp">
      <h1>\${Math.round(main.temp)}\${tempUnit}</h1>
      <p>Feels like \${Math.round(main.feels_like)}\${tempUnit}</p>
    </div>
    <div class="current-weather-details">
      <div class="weather-detail">
        <i class="fas fa-thermometer-half"></i> High/Low: 
        \${Math.round(main.temp_max)}\${tempUnit} / \${Math.round(main.temp_min)}\${tempUnit}
      </div>
      <div class="weather-detail">
        <i class="fas fa-tint"></i> Humidity: \${main.humidity}%
      </div>
      <div class="weather-detail">
        <i class="fas fa-wind"></i> Wind: \${wind.speed} \${windUnit}
      </div>
      <div class="weather-detail">
        <i class="fas fa-compress-alt"></i> Pressure: \${main.pressure} hPa
      </div>
    </div>
  \`;
}

// Render 5-day forecast
function renderForecast(data) {
  forecast.innerHTML = '';
  const tempUnit = currentUnit === 'metric' ? '°C' : '°F';
  
  // Group forecast by day (noon forecasts)
  const dailyForecasts = data.list.filter(item => {
    const time = new Date(item.dt * 1000).getHours();
    return time >= 11 && time <= 14; // Around noon
  }).slice(0, 5); // Limit to 5 days
  
  dailyForecasts.forEach(day => {
    const date = new Date(day.dt * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    
    const weatherIcon = \`https://openweathermap.org/img/wn/\${day.weather[0].icon}.png\`;
    
    const forecastDay = document.createElement('div');
    forecastDay.className = 'forecast-day';
    forecastDay.innerHTML = \`
      <div class="forecast-date">\${formattedDate}</div>
      <img src="\${weatherIcon}" alt="\${day.weather[0].description}" class="forecast-icon">
      <div class="forecast-temp">\${Math.round(day.main.temp)}\${tempUnit}</div>
      <div class="forecast-desc">\${day.weather[0].description}</div>
    \`;
    
    forecast.appendChild(forecastDay);
  });
}

// Update search history
function updateSearchHistory(city) {
  // Remove city if it already exists
  const cityIndex = searchedCities.indexOf(city);
  if (cityIndex !== -1) {
    searchedCities.splice(cityIndex, 1);
  }
  
  // Add city at the beginning of the array
  searchedCities.unshift(city);
  
  // Keep only the last 5 searches
  if (searchedCities.length > 5) {
    searchedCities = searchedCities.slice(0, 5);
  }
  
  // Save to local storage
  localStorage.setItem('searchHistory', JSON.stringify(searchedCities));
  
  // Render updated history
  renderSearchHistory();
}

// Render search history
function renderSearchHistory() {
  searchHistory.innerHTML = '';
  
  searchedCities.forEach(city => {
    const historyItem = document.createElement('li');
    historyItem.textContent = city;
    historyItem.addEventListener('click', () => {
      fetchWeatherData(city);
    });
    
    searchHistory.appendChild(historyItem);
  });
}

// Show error message
function showError(message) {
  currentWeather.innerHTML = \`
    <div class="error-message">
      <p>\${message}</p>
    </div>
    <div class="placeholder">
      <p>Please try another search</p>
    </div>
  \`;
}

// Update unit toggle buttons
function updateUnitButtons() {
  celsiusBtn.classList.toggle('active', currentUnit === 'metric');
  fahrenheitBtn.classList.toggle('active', currentUnit === 'imperial');
}

// Refresh current displays with new unit
function refreshDisplays() {
  if (searchedCities.length > 0) {
    fetchWeatherData(searchedCities[0]);
  }
}

// Initialize the app
init();`}
        </CodeBlock>

        <h2>Step 4: Testing the Weather Dashboard</h2>
        <p>
          Save your file and open it in a web browser. Test your weather dashboard thoroughly to make sure everything is working:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>Search for different cities and check if weather data appears</li>
          <li>Verify that the 5-day forecast is displayed correctly</li>
          <li>Test the temperature unit toggle between Celsius and Fahrenheit</li>
          <li>Check if your search history is saved and can be clicked to load previous searches</li>
          <li>Refresh the page to make sure your search history persists</li>
        </ul>

        <h2>Understanding the Code</h2>
        <p>
          Let's break down how this weather dashboard application works:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">API Integration</h4>
            <p>We use the OpenWeatherMap API to:</p>
            <ul className="list-disc ml-4 mt-1 text-sm">
              <li>Fetch current weather for a city</li>
              <li>Get a 5-day forecast</li>
              <li>Support different temperature units</li>
            </ul>
          </div>
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">State Management</h4>
            <p>The app keeps track of:</p>
            <ul className="list-disc ml-4 mt-1 text-sm">
              <li>Current temperature unit (Celsius/Fahrenheit)</li>
              <li>Search history (stored in localStorage)</li>
              <li>Current city weather data</li>
            </ul>
          </div>
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">DOM Manipulation</h4>
            <p>We update the UI by:</p>
            <ul className="list-disc ml-4 mt-1 text-sm">
              <li>Creating elements for weather data</li>
              <li>Building search history items dynamically</li>
              <li>Updating content based on API responses</li>
              <li>Handling error states</li>
            </ul>
          </div>
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">Key Functions</h4>
            <ul className="list-disc ml-4 text-sm">
              <li><code>fetchWeatherData()</code>: Makes API calls using async/await</li>
              <li><code>renderCurrentWeather()</code>: Updates current weather UI</li>
              <li><code>renderForecast()</code>: Creates the 5-day forecast</li>
              <li><code>updateSearchHistory()</code>: Manages search history array</li>
            </ul>
          </div>
        </div>

        <ExerciseBlock title="Challenge: Enhance the Weather Dashboard">
          <p>
            Now that you've built a basic weather dashboard, try enhancing it with these additional features:
          </p>
          
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <strong>Geolocation:</strong> Add a button to get the current weather based on the user's location using the <code>navigator.geolocation</code> API.
            </li>
            <li>
              <strong>Dark/Light Mode:</strong> Add a toggle switch to change between dark and light color schemes.
            </li>
            <li>
              <strong>Hourly Forecast:</strong> Add an option to view hourly forecasts in addition to the daily forecast.
            </li>
            <li>
              <strong>Weather Maps:</strong> Embed a weather map using a mapping library like Leaflet.
            </li>
            <li>
              <strong>Improved Error Handling:</strong> Add more specific error messages and better error recovery.
            </li>
          </ol>
          
          <p className="font-medium mt-4">
            Remember to break down these enhancements into small, manageable steps and test each new feature as you implement it.
          </p>
        </ExerciseBlock>

        <h2>Congratulations!</h2>
        <p>
          You've completed the JavaScript basics section of this course! You should now have a solid understanding of:
        </p>

        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>Adding JavaScript to HTML documents</li>
          <li>Working with variables, data types, and functions</li>
          <li>Using arrays and their powerful methods</li>
          <li>Manipulating the DOM and responding to events</li>
          <li>Working with APIs using Fetch and async/await</li>
          <li>Building interactive web applications</li>
        </ul>

        <p>
          In the next section, we'll introduce you to React, a powerful JavaScript library for building user interfaces. You'll learn how React simplifies the process of creating interactive web applications and how it builds on the JavaScript concepts you've learned.
        </p>
        
        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Ready for React?</h3>
          <p>
            React will introduce you to a more structured way of thinking about UI development, with components, props, and state. Having a solid JavaScript foundation (which you now have!) will make learning React much easier.
          </p>
          <div className="mt-4 text-center">
            <a href="/react-basics" className="btn-primary inline-flex items-center gap-2">
              Continue to React Basics
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default JavaScriptExercise;
