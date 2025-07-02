import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">SOLO LEVELING</span>
              <span className="title-sub">Computer Science Academy</span>
            </h1>
            <p className="hero-description">
              Rise from E-Rank to S-Rank Developer. Master the dungeons of code, 
              level up your programming skills, and become the strongest CS student.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-label">Current Level</span>
                <span className="stat-value">Beginner</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Experience Points</span>
                <span className="stat-value">0 / 1000</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Skills Unlocked</span>
                <span className="stat-value">3 / 50</span>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn-primary">Start Your Journey</button>
              <button className="btn-secondary">View Skill Tree</button>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="section-title">Programming Skills to Master</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <h3>Python Mastery</h3>
            <p>Master the serpent's power for data science and backend development</p>
            <div className="skill-level">Level 1</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React Dominance</h3>
            <p>Command the elements of modern frontend development</p>
            <div className="skill-level">Level 1</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Database Sorcery</h3>
            <p>Manipulate data with SQL spells and NoSQL enchantments</p>
            <div className="skill-level">Level 1</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>Algorithm Arts</h3>
            <p>Solve complex problems with legendary algorithmic techniques</p>
            <div className="skill-level">Level 1</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">☁️</div>
            <h3>Cloud Ascension</h3>
            <p>Deploy your applications to the heavens of cloud computing</p>
            <div className="skill-level">Locked</div>
          </div>
          <div className="skill-card locked">
            <div className="skill-icon">🤖</div>
            <h3>AI Awakening</h3>
            <p>Unlock the mysteries of machine learning and artificial intelligence</p>
            <div className="skill-level">Locked</div>
          </div>
        </div>
      </div>

      <div className="dungeon-section">
        <h2 className="section-title">Code Dungeons</h2>
        <div className="dungeon-list">
          <div className="dungeon-item available">
            <div className="dungeon-rank">E</div>
            <div className="dungeon-info">
              <h3>Basic Syntax Cavern</h3>
              <p>Learn the fundamentals of programming syntax</p>
            </div>
            <div className="dungeon-reward">+50 XP</div>
          </div>
          <div className="dungeon-item available">
            <div className="dungeon-rank">D</div>
            <div className="dungeon-info">
              <h3>Data Structure Depths</h3>
              <p>Master arrays, lists, and basic data structures</p>
            </div>
            <div className="dungeon-reward">+100 XP</div>
          </div>
          <div className="dungeon-item locked">
            <div className="dungeon-rank">C</div>
            <div className="dungeon-info">
              <h3>Algorithm Abyss</h3>
              <p>Conquer sorting and searching algorithms</p>
            </div>
            <div className="dungeon-reward">+200 XP</div>
          </div>
          <div className="dungeon-item locked">
            <div className="dungeon-rank">S</div>
            <div className="dungeon-info">
              <h3>System Design Sanctum</h3>
              <p>Design scalable systems like a true architect</p>
            </div>
            <div className="dungeon-reward">+1000 XP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
