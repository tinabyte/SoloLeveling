import React, { useState } from 'react';
import './App.css';

function App() {
  const [stats, setStats] = useState({
    rockClimbing: { level: 1, grade: '5.6', xp: 0, maxXp: 100 },
    internship: { level: 1, progress: 'Getting Started', xp: 0, maxXp: 100 },
    networking: { level: 1, connections: 5, xp: 0, maxXp: 100 },
    bayArea: { level: 1, placesVisited: 3, xp: 0, maxXp: 100 },
    books: { level: 1, booksRead: 2, xp: 0, maxXp: 100 },
    leetcode: { level: 1, problemsSolved: 15, xp: 0, maxXp: 100 }
  });

  const [levelUpEffect, setLevelUpEffect] = useState(null);

  const playLevelUpSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const levelUp = (skill) => {
    setStats(prev => {
      const newStats = { ...prev };
      const currentStat = newStats[skill];
      
      if (currentStat.xp + 25 >= currentStat.maxXp) {
        currentStat.level += 1;
        currentStat.xp = (currentStat.xp + 25) - currentStat.maxXp;
        currentStat.maxXp = Math.floor(currentStat.maxXp * 1.5);
        
        switch(skill) {
          case 'rockClimbing':
            const grades = ['5.6', '5.7', '5.8', '5.9', '5.10a', '5.10b', '5.10c', '5.10d', '5.11a', '5.11b'];
            currentStat.grade = grades[Math.min(currentStat.level - 1, grades.length - 1)];
            break;
          case 'internship':
            const progressLevels = ['Getting Started', 'Learning the Ropes', 'Contributing', 'Taking Initiative', 'Leading Projects'];
            currentStat.progress = progressLevels[Math.min(currentStat.level - 1, progressLevels.length - 1)];
            break;
          case 'networking':
            currentStat.connections += 3;
            break;
          case 'bayArea':
            currentStat.placesVisited += 2;
            break;
          case 'books':
            currentStat.booksRead += 1;
            break;
          case 'leetcode':
            currentStat.problemsSolved += 5;
            break;
        }
        
        setLevelUpEffect(skill);
        setTimeout(() => setLevelUpEffect(null), 2000);
      } else {
        currentStat.xp += 25;
      }
      
      return newStats;
    });
    
    playLevelUpSound();
  };

  return (
    <div className="App">
      <div className="pixel-bg"></div>
      
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="pixel-title">
            <span className="title-main">SOLO LEVELING</span>
            <span className="title-sub">Personal Growth Journey</span>
          </h1>
          <p className="hero-description">
            Level up your life! Track your progress in climbing, internship, networking, 
            exploration, reading, and coding. Every improvement counts! ✨
          </p>
          <div className="overall-stats">
            <div className="stat-pixel">
              <span className="stat-label">Total Level</span>
              <span className="stat-value">{Object.values(stats).reduce((sum, stat) => sum + stat.level, 0)}</span>
            </div>
            <div className="stat-pixel">
              <span className="stat-label">Areas Mastered</span>
              <span className="stat-value">{Object.values(stats).filter(stat => stat.level >= 5).length}/6</span>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="section-title pixel-text">Personal Growth Areas</h2>
        <div className="skills-grid">
          
          <div className={`skill-card pixel-card ${levelUpEffect === 'rockClimbing' ? 'level-up-effect' : ''}`}>
            <div className="skill-icon">🧗‍♀️</div>
            <h3>Rock Climbing Strength</h3>
            <p>Current Grade: {stats.rockClimbing.grade}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(stats.rockClimbing.xp / stats.rockClimbing.maxXp) * 100}%`}}></div>
            </div>
            <div className="skill-stats">
              <span>Level {stats.rockClimbing.level}</span>
              <span>{stats.rockClimbing.xp}/{stats.rockClimbing.maxXp} XP</span>
            </div>
            <button className="level-up-btn" onClick={() => levelUp('rockClimbing')}>
              Level Up! 🚀
            </button>
          </div>

          <div className={`skill-card pixel-card ${levelUpEffect === 'internship' ? 'level-up-effect' : ''}`}>
            <div className="skill-icon">💼</div>
            <h3>Internship Progress</h3>
            <p>Status: {stats.internship.progress}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(stats.internship.xp / stats.internship.maxXp) * 100}%`}}></div>
            </div>
            <div className="skill-stats">
              <span>Level {stats.internship.level}</span>
              <span>{stats.internship.xp}/{stats.internship.maxXp} XP</span>
            </div>
            <button className="level-up-btn" onClick={() => levelUp('internship')}>
              Level Up! 🚀
            </button>
          </div>

          <div className={`skill-card pixel-card ${levelUpEffect === 'networking' ? 'level-up-effect' : ''}`}>
            <div className="skill-icon">🤝</div>
            <h3>Networking with Interns</h3>
            <p>Connections Made: {stats.networking.connections}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(stats.networking.xp / stats.networking.maxXp) * 100}%`}}></div>
            </div>
            <div className="skill-stats">
              <span>Level {stats.networking.level}</span>
              <span>{stats.networking.xp}/{stats.networking.maxXp} XP</span>
            </div>
            <button className="level-up-btn" onClick={() => levelUp('networking')}>
              Level Up! 🚀
            </button>
          </div>

          <div className={`skill-card pixel-card ${levelUpEffect === 'bayArea' ? 'level-up-effect' : ''}`}>
            <div className="skill-icon">🌉</div>
            <h3>Exploring Bay Area</h3>
            <p>Places Visited: {stats.bayArea.placesVisited}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(stats.bayArea.xp / stats.bayArea.maxXp) * 100}%`}}></div>
            </div>
            <div className="skill-stats">
              <span>Level {stats.bayArea.level}</span>
              <span>{stats.bayArea.xp}/{stats.bayArea.maxXp} XP</span>
            </div>
            <button className="level-up-btn" onClick={() => levelUp('bayArea')}>
              Level Up! 🚀
            </button>
          </div>

          <div className={`skill-card pixel-card ${levelUpEffect === 'books' ? 'level-up-effect' : ''}`}>
            <div className="skill-icon">📚</div>
            <h3>Books Read</h3>
            <p>Books Completed: {stats.books.booksRead}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(stats.books.xp / stats.books.maxXp) * 100}%`}}></div>
            </div>
            <div className="skill-stats">
              <span>Level {stats.books.level}</span>
              <span>{stats.books.xp}/{stats.books.maxXp} XP</span>
            </div>
            <button className="level-up-btn" onClick={() => levelUp('books')}>
              Level Up! 🚀
            </button>
          </div>

          <div className={`skill-card pixel-card ${levelUpEffect === 'leetcode' ? 'level-up-effect' : ''}`}>
            <div className="skill-icon">💻</div>
            <h3>LeetCode Progress</h3>
            <p>Problems Solved: {stats.leetcode.problemsSolved}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(stats.leetcode.xp / stats.leetcode.maxXp) * 100}%`}}></div>
            </div>
            <div className="skill-stats">
              <span>Level {stats.leetcode.level}</span>
              <span>{stats.leetcode.xp}/{stats.leetcode.maxXp} XP</span>
            </div>
            <button className="level-up-btn" onClick={() => levelUp('leetcode')}>
              Level Up! 🚀
            </button>
          </div>

        </div>
      </div>

      {levelUpEffect && (
        <div className="level-up-overlay">
          <div className="level-up-animation">
            <h2>LEVEL UP!</h2>
            <div className="sparkles">✨⭐✨⭐✨</div>
            <p>You've improved your {levelUpEffect.replace(/([A-Z])/g, ' $1').toLowerCase()}!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
