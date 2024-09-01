import React, { useState, useEffect } from "react";
import activitiesData from "../activities.json";
import styles from "../components/Popup.module.css";
import { getFormattedDate } from "../utils/dateUtils";

const Popup = () => {
  const [category, setCategory] = useState("all");
  const [activity, setActivity] = useState("");
  const [motivation, setMotivation] = useState("");

  useEffect(() => {
    suggestActivity();
  });

  const suggestActivity = () => {
    const activities = activitiesData.activities;
    let filteredActivities = activities;
    if (category !== "all") {
      filteredActivities = activities.filter((a) => a.category === category);
    }
    const randomIndex = Math.floor(Math.random() * filteredActivities.length);
    const selectedActivity = filteredActivities[randomIndex];
    const emoji = getEmoji(selectedActivity.category);
    setActivity(`${emoji} ${selectedActivity.activity}`);
    setMotivation(selectedActivity.motivation);
  };

  const getEmoji = (category) => {
    switch (category) {
      case "outdoor":
        return "🌳";
      case "indoor":
        return "🏠";
      case "creative":
        return "🎨";
      case "relaxing":
        return "🧘";
      case "self-improvement":
        return "📈";
      default:
        return "✨";
    }
  };

  const formatDate = getFormattedDate();

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>What to do?</h1>
        <select
          className={styles.select}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="outdoor">Outdoor</option>
          <option value="indoor">Indoor</option>
          <option value="creative">Creative</option>
          <option value="relaxing">Relaxing</option>
          <option value="self-improvement">Self-Improvement</option>
        </select>
        <button className={styles.button} onClick={suggestActivity}>
          Suggest an Activity
        </button>
      </div>
      <div className={styles.activity}>
        <p>{activity}</p>
        <p>{motivation}</p>
      </div>
      <footer>
        <p>{formatDate}</p>
      </footer>
    </div>
  );
};

export default Popup;
