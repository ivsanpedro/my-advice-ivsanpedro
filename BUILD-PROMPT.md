# Prompt for Building a New Workout Recommender Website

## 1. Project Overview

The goal is to create a modern, visually appealing, and mobile-friendly "Workout Recommender" web application from scratch. This application will allow users to select their workout preferences and receive a list of suitable exercises.

This project will be built with brand new HTML, CSS, and JavaScript files.

## 2. Core Requirements

- **Domain:** Workout & Exercise Recommendations.
- **Design:** A modern, energetic, and clean design with a two-column layout.
- **Functionality:** Users can set preferences, and the app will filter a list of workouts to show only relevant matches.
- **Technology:** HTML, CSS, and vanilla JavaScript. No external libraries or frameworks are needed.

---

## 3. Step-by-Step Implementation Guide

### Step 3.1: Create the File Structure

Create the following files:
- `index.html`
- `styles.css`
- `app.js`
- `data.js`
- `matching.js`
- A folder named `images` for workout-related images/icons.

### Step 3.2: Build the HTML (`index.html`)

Create a two-column layout. The left column will contain the preference form, and the right column will display the results.

- **Header:** Include a main title like "Workout Recommender" and a catchy subtitle.
- **Preference Form (`<form id="preference-form">`):**
  - This form should be in the left column.
  - Include the following `<select>` dropdowns with a "Go!" or "Find Workout" submit button:
    - **Workout Type (`id="type"`):** Options: "Any Type", "Cardio", "Strength", "Flexibility", "HIIT".
    - **Target Area (`id="target"`):** Options: "Any Area", "Full Body", "Upper Body", "Lower Body", "Core".
    - **Equipment (`id="equipment"`):** Options: "Any Equipment", "No Equipment", "Dumbbells", "Resistance Bands", "Kettlebell".
    - **Duration (`id="duration"`):** Options: "Any Duration", "15 minutes", "30 minutes", "45 minutes", "60+ minutes".
    - **Difficulty (`id="difficulty"`):** Options: "Any Difficulty", "Beginner", "Intermediate", "Advanced".
- **Results Section (`<div id="results-list">`):**
  - This section should be in the right column.
  - Initially, it should display a placeholder message like "Your recommended workouts will appear here."

### Step 3.3: Style the Application (`styles.css`)

- **Layout:** Implement the two-column layout using Flexbox or CSS Grid.
- **Color Palette:** Use an energetic and clean color scheme.
  - Primary color for buttons and highlights (e.g., a vibrant blue or green).
  - Dark text color for readability.
  - Light background color for the page.
  - White for card backgrounds.
- **Typography:** Use a modern, sans-serif font like 'Poppins', 'Montserrat', or the system UI font.
- **Recommendation Cards:**
  - Style the results as "cards" (`<div class="workout-card">`).
  - Each card should have padding, a box shadow, and rounded corners.
  - Include a placeholder for an image or icon at the top of the card.
- **Responsiveness:** Ensure the layout adapts to smaller screens (e.g., stacking the columns on mobile).

### Step 3.4: Create the Workout Data (`data.js`)

Create a `data` object with an `options` array. Each object in the array represents a single workout and should have the following properties:

- `name` (string)
- `type` (string: "Cardio", "Strength", "Flexibility", "HIIT")
- `targetArea` (string: "Full Body", "Upper Body", "Lower Body", "Core")
- `equipment` (string: "No Equipment", "Dumbbells", etc.)
- `durationMinutes` (number)
- `difficulty` (string: "Beginner", "Intermediate", "Advanced")
- `image` (string: path to an image, e.g., `images/squats.svg`)

**Example Workout Object:**
```javascript
{
  name: "Bodyweight Squats",
  type: "Strength",
  targetArea: "Lower Body",
  equipment: "No Equipment",
  durationMinutes: 15,
  difficulty: "Beginner",
  image: "images/squats.svg"
}
```
Populate the `options` array with at least 10-15 different workout objects.

### Step 3.5: Implement Matching Logic (`matching.js`)

Create functions that will be used to filter the workouts based on user preferences. Each function should take a workout object and the user's preference as arguments and return `true` if it's a match, otherwise `false`.

- `matchesType(workout, type)`
- `matchesTarget(workout, targetArea)`
- `matchesEquipment(workout, equipment)`
- `matchesDuration(workout, duration)`
- `matchesDifficulty(workout, difficulty)`

### Step 3.6: Implement Application Logic (`app.js`)

This file will tie everything together.

- **Event Listener:** Add a `submit` event listener to the preference form.
- **Get Preferences:** Inside the event listener, get the selected values from all the dropdowns.
- **Filter Workouts:**
  - Start with the full list of workouts from `data.js`.
  - Apply each matching function from `matching.js` sequentially to filter down the list. For example, if the user selected "Cardio", filter out everything that isn't cardio first, then filter that smaller list by the next preference, and so on.
- **Display Results:**
  - Clear any previous results from the results list.
  - If no workouts match, display a "No matches found" message.
  - For each matching workout, create a workout card element and append it to the results list. The card should display the workout's properties (name, type, duration, etc.) and its image.
