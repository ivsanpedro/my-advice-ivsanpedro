// app.js for Workout Recommender
import { data } from './data.js';
import { matchesType, matchesTarget, matchesEquipment, matchesDuration, matchesDifficulty } from './matching.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('preference-form');
  const resultsList = document.getElementById('results-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get user preferences
    const type = form.type.value;
    const target = form.target.value;
    const equipment = form.equipment.value;
    const duration = form.duration.value;
    const difficulty = form.difficulty.value;

    // Filter workouts
    let filtered = data.options
      .filter(w => matchesType(w, type))
      .filter(w => matchesTarget(w, target))
      .filter(w => matchesEquipment(w, equipment))
      .filter(w => matchesDuration(w, duration))
      .filter(w => matchesDifficulty(w, difficulty));

    // Display results
    resultsList.innerHTML = '';
    if (filtered.length === 0) {
      resultsList.textContent = 'No matches found.';
      return;
    }
    filtered.forEach(workout => {
      const card = document.createElement('div');
      card.className = 'workout-card';
      card.innerHTML = `
        <img src="${workout.image}" alt="${workout.name}">
        <h3>${workout.name}</h3>
        <p><strong>Type:</strong> ${workout.type}</p>
        <p><strong>Target:</strong> ${workout.targetArea}</p>
        <p><strong>Equipment:</strong> ${workout.equipment}</p>
        <p><strong>Duration:</strong> ${workout.durationMinutes} min</p>
        <p><strong>Difficulty:</strong> ${workout.difficulty}</p>
      `;
      resultsList.appendChild(card);
    });
  });
});
