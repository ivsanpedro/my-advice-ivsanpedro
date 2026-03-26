// matching.js for Workout Recommender

export function matchesType(workout, type) {
  return type === "Any Type" || workout.type === type;
}

export function matchesTarget(workout, targetArea) {
  return targetArea === "Any Area" || workout.targetArea === targetArea;
}

export function matchesEquipment(workout, equipment) {
  return equipment === "Any Equipment" || workout.equipment === equipment;
}

export function matchesDuration(workout, duration) {
  if (duration === "Any Duration") return true;
  const mins = workout.durationMinutes;
  if (duration === "15 minutes") return mins <= 15;
  if (duration === "30 minutes") return mins > 15 && mins <= 30;
  if (duration === "45 minutes") return mins > 30 && mins <= 45;
  if (duration === "60+ minutes") return mins > 45;
  return false;
}

export function matchesDifficulty(workout, difficulty) {
  return difficulty === "Any Difficulty" || workout.difficulty === difficulty;
}
