// app.js for Workout Recommender
import { data } from './data.js';
import { matchesAllPreferences } from './matching.js';

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('preference-form');
const resultsList = document.getElementById('results-list');

form.addEventListener('submit', function(e) {
    // Prevent form from submitting normally
    e.preventDefault();

    // Get user preferences
    const preferences = {
        type: document.getElementById('type').value,
        target: document.getElementById('target').value,
        equipment: document.getElementById('equipment').value,
        duration: document.getElementById('duration').value,
        difficulty: document.getElementById('difficulty').value
    };

    //Convert numbers to strings for matching
    if (preferences.duration) {
      preferences.duration = preferences.duration.toString() + ' minutes';
    }

    //Find the results that match the preferences
    const results = findResults(preferences);
    
    // Display the results
    displayResults(results);
});

/**
 * Find workouts that match all user preferences
 * @param {*} workout - The workout to check
 * @param {*} preference - The user's workout preferences
 * @returns An array of workouts that match the user's preferences
 */
function findResults(preference) {
    const results = [];

    //Check each workout
    for (let i = 0; i < data.options.length; i++) {
        const workout = data.options[i];
        if (matchesAllPreferences(workout, preference)) {
            results.push(workout);
        }
    }
    return results;
}

function displayResults(results) {
    // Clear previous results
    resultsList.innerHTML = '';
    
    if (results.length === 0) {
        resultsList.innerHTML = '<p>No workouts match your preferences. Please try different options.</p>';
        return;
    }

    for (let i = 0; i < results.length; i++) {
        const workout = results[i];
        const card = createCard(workout);   
        resultsList.appendChild(card);
    }
}

function createCard(workout) {
    const card = document.createElement('div');
    card.className = 'workout-card';
    card.innerHTML = `
        <h3>${workout.name}</h3>
        <p>Type: ${workout.type}</p>
        <p>Target Area: ${workout.targetArea}</p>
        <p>Equipment: ${workout.equipment}</p>
        <p>Duration: ${workout.durationMinutes} minutes</p>
        <p>Difficulty: ${workout.difficulty}</p>
    `;
    return card;
}
});
