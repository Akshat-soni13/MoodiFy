import { useState, useEffect } from "react";
import "../shared/sstyles/Loader.scss";

const ACTS = [
  {
    tag: "Act I · sensing",
    headline: ["Listening to the", "silence between your thoughts…"],
    headlineEm: [false, true],
    sub: "hold on, something is taking shape",
    progress: 20,
    mode: "wave",
    cta: "calibrating your emotional frequency",
    moods: [],
  },
  {
    tag: "Act II · reading",
    headline: ["Your mood is", "whispering its name…"],
    headlineEm: [false, true],
    sub: "we hear every frequency of feeling",
    progress: 42,
    mode: "wave",
    cta: "decoding the patterns in your pulse",
    moods: [],
  },
  {
    tag: "Act III · mapping",
    headline: ["Three words rise", "from the noise…"],
    headlineEm: [false, true],
    sub: "your mood takes form",
    progress: 65,
    mode: "mood",
    cta: "cross-referencing 10 million tracks",
    moods: ["melancholic", "nostalgic", "longing"],
  },
  {
    tag: "Act IV · curating",
    headline: ["The record spins.", "Your playlist breathes."],
    headlineEm: [true, false],
    sub: "songs chosen just for this moment",
    progress: 85,
    mode: "vinyl",
    cta: "sequencing the perfect arc",
    moods: [],
  },
  {
    tag: "Act V · ready",
    headline: ["Your soundtrack", "is alive."],
    headlineEm: [true, false],
    sub: "press play. feel everything.",
    progress: 100,
    mode: "vinyl",
    cta: "your music is waiting",
    moods: [],
  },
];

const WAVE_DELAYS = [0, 0.1, 0.2, 0.05, 0.15, 0.25, 0.08, 0.18, 0.12, 0.22, 0.04, 0.14, 0.09, 0.19, 0.03, 0.13];
const MOOD_COLORS = ["purple", "teal", "pink"];

export default function MoodifyLoader() {
  const [actIndex, setActIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [moodVisible, setMoodVisible] = useState([false, false, false]);

  const act = ACTS[actIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setMoodVisible([false, false, false]);
      setTimeout(() => {
        setActIndex((i) => (i + 1) % ACTS.length);
        setVisible(true);
      }, 350);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (act.mode === "mood") {
      act.moods.forEach((_, i) => {
        setTimeout(() => {
          setMoodVisible((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 400 + i * 150);
      });
    }
  }, [actIndex, act.mode]);

  return (
    <div className="moodify-loader">
      <div className="moodify-loader__bg">
        <span className="moodify-loader__bg-circle moodify-loader__bg-circle--1" />
        <span className="moodify-loader__bg-circle moodify-loader__bg-circle--2" />
        <span className="moodify-loader__bg-circle moodify-loader__bg-circle--3" />
      </div>

      <div className={`moodify-loader__story ${visible ? "moodify-loader__story--visible" : ""}`}>
        <p className="moodify-loader__tag">{act.tag}</p>

        {act.mode === "vinyl" && (
          <div className="moodify-loader__vinyl">
            <span className="moodify-loader__vinyl-groove moodify-loader__vinyl-groove--lg" />
            <span className="moodify-loader__vinyl-groove moodify-loader__vinyl-groove--md" />
            <span className="moodify-loader__vinyl-groove moodify-loader__vinyl-groove--sm" />
            <span className="moodify-loader__vinyl-core" />
          </div>
        )}

        <h2 className="moodify-loader__headline">
          {act.headline.map((line, i) => (
            <span key={i} className="moodify-loader__headline-line">
              {act.headlineEm[i] ? <em>{line}</em> : line}
            </span>
          ))}
        </h2>

        <p className="moodify-loader__sub">{act.sub}</p>

        {act.mode === "wave" && (
          <div className="moodify-loader__waveform">
            {WAVE_DELAYS.map((delay, i) => (
              <span
                key={i}
                className="moodify-loader__bar"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </div>
        )}

        {act.mode === "mood" && (
          <div className="moodify-loader__moods">
            {act.moods.map((mood, i) => (
              <span
                key={mood}
                className={`moodify-loader__pill moodify-loader__pill--${MOOD_COLORS[i]} ${moodVisible[i] ? "moodify-loader__pill--show" : ""}`}
              >
                {mood}
              </span>
            ))}
          </div>
        )}

        <div className="moodify-loader__progress">
          <div
            className="moodify-loader__progress-fill"
            style={{ width: `${act.progress}%` }}
          />
        </div>

        <div className="moodify-loader__dots">
          {ACTS.map((_, i) => (
            <span
              key={i}
              className={`moodify-loader__dot ${i < actIndex ? "moodify-loader__dot--done" : ""} ${i === actIndex ? "moodify-loader__dot--active" : ""}`}
            />
          ))}
        </div>

        <p className="moodify-loader__cta">{act.cta}</p>
      </div>
    </div>
  );
}