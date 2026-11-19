// Small illustrations for each project card, drawn with CSS/SVG.

// 8x8 pixel "7" for the digit recognizer
const SEVEN = [
  "00000000",
  "01111110",
  "00000110",
  "00001100",
  "00011000",
  "00110000",
  "00110000",
  "00000000",
];

function Digits() {
  const probs = [
    { d: 7, p: 94 },
    { d: 1, p: 4 },
    { d: 9, p: 2 },
  ];
  return (
    <div className="pv-window">
      <div className="pv-bar">draw_digit.py</div>
      <div className="pv-digits">
        <div className="pixel-grid">
          {SEVEN.join("")
            .split("")
            .map((c, i) => (
              <span key={i} className={c === "1" ? "on" : ""} />
            ))}
        </div>
        <div className="pv-probs">
          <p className="pv-label">Prediction</p>
          <p className="pv-big">7</p>
          {probs.map((r) => (
            <div key={r.d} className="prob-row">
              <span>{r.d}</span>
              <div className="prob-track">
                <div className="prob-fill" style={{ width: `${r.p}%` }} />
              </div>
              <span>{r.p}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Titanic() {
  // Survival rate by passenger class in the Kaggle Titanic training set
  const rows = [
    { c: "1st class", v: 63 },
    { c: "2nd class", v: 47 },
    { c: "3rd class", v: 24 },
  ];
  return (
    <div className="pv-window">
      <div className="pv-bar">survival_by_class.ipynb</div>
      <div className="pv-titanic">
        <p className="pv-label">Survival rate</p>
        {rows.map((r) => (
          <div key={r.c} className="bar-row">
            <span>{r.c}</span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${r.v}%` }} />
            </div>
            <strong>{r.v}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function Regression() {
  const pts = [
    [30, 150], [50, 138], [70, 140], [90, 118], [110, 120], [130, 100],
    [150, 104], [170, 84], [190, 88], [210, 66], [230, 70], [250, 50],
  ];
  return (
    <div className="pv-window">
      <div className="pv-bar">y = wx + b</div>
      <svg className="pv-svg" viewBox="0 0 280 180" role="img" aria-label="Scatter plot with fitted regression line">
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="20" x2="270" y1={y} y2={y} className="grid-line" />
        ))}
        <line x1="20" y1="158" x2="262" y2="44" className="fit-line" />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" className="pt" />
        ))}
      </svg>
    </div>
  );
}

const map = { digits: Digits, titanic: Titanic, regression: Regression };

export default function ProjectVisual({ type }) {
  const C = map[type];
  return C ? <C /> : null;
}
