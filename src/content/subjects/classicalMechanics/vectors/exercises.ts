import type { PracticeQuestion } from '../../../../types/physics';

export const VECTORS_EXERCISES: PracticeQuestion[] = [
  {
    id: 'vec-q1',
    chapterId: 'vectors',
    topicId: 'scalars-and-vectors',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'A car drives around a circular roundabout at a steady speedometer reading of 30 km/h. Which statement accurately describes its motion?',
    options: [
      'Both its speed and velocity remain constant.',
      'Its speed is constant, while its velocity vector is continuously changing.',
      'Its velocity is constant, while its speed changes with angle.',
      'Speed is a vector and velocity is a scalar.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Speed is a scalar magnitude (fixed at 30 km/h), whereas velocity is a vector. As the car curves, its direction changes continuously, so the velocity vector changes.',
  },
  {
    id: 'vec-q2',
    chapterId: 'vectors',
    topicId: 'magnitude-and-direction',
    difficulty: 'Easy',
    type: 'numerical',
    prompt:
      'A displacement vector has Cartesian components Δx = 6.0 m and Δy = 8.0 m. Calculate its magnitude in meters.',
    numericAnswer: 10,
    numericTolerance: 0.05,
    unit: 'm',
    explanation:
      'Using the Pythagorean theorem: $|\\Delta\\vec{r}| = \\sqrt{6.0^2 + 8.0^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10.0\\text{ m}$.',
  },
  {
    id: 'vec-q3',
    chapterId: 'vectors',
    topicId: 'vector-addition',
    difficulty: 'Easy',
    type: 'diagram',
    prompt:
      'Inspect the two vectors shown in the diagram: $\\vec{A} = (4, 1)$ and $\\vec{B} = (-1, 3)$. What are the coordinates of the resultant vector $\\vec{R} = \\vec{A} + \\vec{B}$?',
    diagram: {
      kind: 'addition-pair',
      ax: 4,
      ay: 1,
      bx: -1,
      by: 3,
      labelA: 'A (4, 1)',
      labelB: 'B (-1, 3)',
    },
    options: ['(5, 4)', '(3, 4)', '(3, -2)', '(5, -2)'],
    correctOptionIndex: 1,
    explanation:
      'Add components independently: $R_x = 4 + (-1) = 3$ and $R_y = 1 + 3 = 4$, giving $\\vec{R} = (3, 4)$.',
  },
  {
    id: 'vec-q4',
    chapterId: 'vectors',
    topicId: 'resolution-of-vectors',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: When a vector of magnitude 10 units points at an angle of 60° above the +x axis, its horizontal x-component is larger than its vertical y-component.',
    options: ['True', 'False'],
    correctOptionIndex: 1,
    explanation:
      'False. At $60^\\circ$, $A_x = 10\\cos(60^\\circ) = 5.0$ while $A_y = 10\\sin(60^\\circ) \\approx 8.66$, so the vertical component is larger.',
  },
  {
    id: 'vec-q5',
    chapterId: 'vectors',
    topicId: 'vector-subtraction',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Given $\\vec{A} = 5\\hat{i} - 2\\hat{j}$ and $\\vec{B} = 2\\hat{i} + 2\\hat{j}$, what is the magnitude of $\\vec{A} - \\vec{B}$?',
    options: ['3', '5', '7', '√53'],
    correctOptionIndex: 1,
    explanation:
      'First subtract components: $\\vec{A} - \\vec{B} = (5 - 2)\\hat{i} + (-2 - 2)\\hat{j} = 3\\hat{i} - 4\\hat{j}$. Its magnitude is $\\sqrt{3^2 + (-4)^2} = 5$.',
  },
  {
    id: 'vec-q6',
    chapterId: 'vectors',
    topicId: 'dot-product',
    difficulty: 'Medium',
    type: 'numerical',
    prompt:
      'Compute the dot product $\\vec{A} \\cdot \\vec{B}$ for $\\vec{A} = (3, -4)$ and $\\vec{B} = (5, 2)$.',
    numericAnswer: 7,
    numericTolerance: 0.05,
    unit: '',
    explanation:
      'Using component multiplication: $\\vec{A} \\cdot \\vec{B} = (3)(5) + (-4)(2) = 15 - 8 = 7$.',
  },
  {
    id: 'vec-q7',
    chapterId: 'vectors',
    topicId: 'unit-vectors',
    difficulty: 'Medium',
    type: 'diagram',
    prompt:
      'In the vector diagram below, vector $\\vec{A}$ ends at $(-3, 4)$. How is $\\vec{A}$ expressed in unit vector notation, and what is its unit direction vector $\\hat{u}_A$?',
    diagram: {
      kind: 'single-vector',
      ax: -3,
      ay: 4,
      labelA: 'A (-3, 4)',
    },
    options: [
      'A = -3i + 4j; û = -0.6i + 0.8j',
      'A = 3i - 4j; û = 0.6i - 0.8j',
      'A = -3i + 4j; û = -3i + 4j',
      'A = -4i + 3j; û = -0.8i + 0.6j',
    ],
    correctOptionIndex: 0,
    explanation:
      'With tip at $(-3, 4)$, $\\vec{A} = -3\\hat{i} + 4\\hat{j}$ and $|\\vec{A}| = 5$. Dividing by $5$ yields $\\hat{u}_A = -0.6\\hat{i} + 0.8\\hat{j}$.',
  },
  {
    id: 'vec-q8',
    chapterId: 'vectors',
    topicId: 'position-and-displacement',
    difficulty: 'Medium',
    type: 'numerical',
    prompt:
      'A particle moves from initial position $\\vec{r}_1 = (2, -1)\\text{ m}$ to final position $\\vec{r}_2 = (-6, 5)\\text{ m}$. Find the magnitude of its displacement vector in meters.',
    numericAnswer: 10,
    numericTolerance: 0.05,
    unit: 'm',
    explanation:
      '$\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1 = (-6 - 2, 5 - (-1)) = (-8, 6)\\text{ m}$. Magnitude $= \\sqrt{(-8)^2 + 6^2} = 10\\text{ m}$.',
  },
  {
    id: 'vec-q9',
    chapterId: 'vectors',
    topicId: 'cross-product',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Vector $\\vec{A} = 2\\hat{i} + 3\\hat{k}$ and vector $\\vec{B} = 4\\hat{j}$. What is $\\vec{A} \\times \\vec{B}$?',
    options: [
      '-12i + 8k',
      '12i - 8k',
      '8i + 12k',
      '-8i - 12k',
    ],
    correctOptionIndex: 0,
    explanation:
      'Using distributive cross products: $(2\\hat{i} + 3\\hat{k}) \\times 4\\hat{j} = 8(\\hat{i} \\times \\hat{j}) + 12(\\hat{k} \\times \\hat{j}) = 8\\hat{k} + 12(-\\hat{i}) = -12\\hat{i} + 8\\hat{k}$.',
  },
  {
    id: 'vec-q10',
    chapterId: 'vectors',
    topicId: 'dot-product',
    difficulty: 'Hard',
    type: 'numerical',
    prompt:
      'Two vectors have magnitudes $|\\vec{A}| = 8$ and $|\\vec{B}| = 5$, and their dot product is $\\vec{A} \\cdot \\vec{B} = 20$. What is the angle $\\theta$ between them in degrees?',
    numericAnswer: 60,
    numericTolerance: 0.5,
    unit: '°',
    explanation:
      '$\\cos\\theta = \\frac{\\vec{A}\\cdot\\vec{B}}{AB} = \\frac{20}{8 \\times 5} = 0.50 \\implies \\theta = \\cos^{-1}(0.50) = 60^\\circ$.',
  },
  {
    id: 'vec-q11',
    chapterId: 'vectors',
    topicId: 'cross-product',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Two non-zero vectors $\\vec{A}$ and $\\vec{B}$ have $|\\vec{A} \\times \\vec{B}| = \\vec{A} \\cdot \\vec{B}$. What is the angle $\\theta$ between them?',
    options: ['0°', '30°', '45°', '90°'],
    correctOptionIndex: 2,
    explanation:
      'Setting $AB\\sin\\theta = AB\\cos\\theta$ gives $\\tan\\theta = 1$, so $\\theta = 45^\\circ$.',
  },
  {
    id: 'vec-q12',
    chapterId: 'vectors',
    topicId: 'applications-of-vectors',
    difficulty: 'Hard',
    type: 'true-false',
    prompt:
      'True or False: If two vectors have different magnitudes, it is still possible for the sum of those two vectors alone to equal the zero vector.',
    options: ['True', 'False'],
    correctOptionIndex: 1,
    explanation:
      'False. Two vectors sum to zero only when $\\vec{A} = -\\vec{B}$, which requires them to have equal magnitudes and opposite directions. (You need at least three vectors of unequal magnitudes to sum to zero.)',
  },
  {
    id: 'vec-q13',
    chapterId: 'vectors',
    topicId: 'applications-of-vectors',
    difficulty: 'Hard',
    type: 'true-false',
    prompt:
      'True or False: If two vectors have different magnitudes, it is still possible for the sum of those two vectors alone to equal the zero vector.',
    options: ['True', 'False'],
    correctOptionIndex: 1,
    explanation:
      'False. Two vectors sum to zero only when $\\vec{A} = -\\vec{B}$, which requires them to have equal magnitudes and opposite directions. (You need at least three vectors of unequal magnitudes to sum to zero.)',
  },  
];

import type { PracticeQuestion } from '../../../../types/physics';

export const KINEMATICS_1D_EXERCISES: PracticeQuestion[] = [
  // ─────────────────────────────────────────────────────────────
  // Displacement, distance, speed, velocity
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q1',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'Can displacement be zero while the distance traveled is non-zero, and can the distance traveled be zero while displacement is non-zero?',
    options: [
      'Yes to both.',
      'Yes to the first; no to the second.',
      'No to the first; yes to the second.',
      'No to both.',
    ],
    correctOptionIndex: 1,
    explanation:
      'A round trip has zero displacement but non-zero distance. If the distance is zero, nothing moved, so the displacement must also be zero.',
  },
  {
    id: 'kin-q2',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Easy',
    type: 'multiple-choice',
    prompt:
      'A particle moves along the x-axis from x = 5 m to x = -2 m and then to x = 3 m. Which pair (distance, displacement) is correct?',
    options: [
      '12 m, -2 m',
      '12 m, +2 m',
      '2 m, -2 m',
      '7 m, -2 m',
    ],
    correctOptionIndex: 0,
    explanation:
      'Distance = |5-(-2)| + |-2-3| = 7 + 5 = 12 m. Displacement = x_final - x_initial = 3 - 5 = -2 m.',
  },
  {
    id: 'kin-q3',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'Can the magnitude of the average velocity over an interval ever exceed the average speed over the same interval?',
    options: [
      'Yes, whenever the particle reverses direction.',
      'No — |average velocity| is always less than or equal to the average speed.',
      'Yes, if the acceleration is constant.',
      'Only when the average velocity is zero.',
    ],
    correctOptionIndex: 1,
    explanation:
      '|Δx| is at most the total path length, so dividing both by Δt gives |v_avg| ≤ s_avg (triangle inequality).',
  },
  {
    id: 'kin-q4',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Easy',
    type: 'multiple-choice',
    prompt:
      'A car covers the first half of a distance at speed v1 and the second half at speed v2. What is its average speed?',
    options: [
      '2 v1 v2 / (v1 + v2)',
      '(v1 + v2) / 2',
      '√(v1 v2)',
      'v1 v2 / (v1 + v2)',
    ],
    correctOptionIndex: 0,
    explanation:
      'Let the total distance be 2d. Time = d/v1 + d/v2, so average speed = 2d/time = 2 v1 v2/(v1 + v2), the harmonic mean.',
  },
  {
    id: 'kin-q5',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Easy',
    type: 'multiple-choice',
    prompt:
      'A car travels for the first half of the TIME at speed v1 and for the second half at speed v2. What is its average speed?',
    options: [
      '(v1 + v2) / 2',
      '2 v1 v2 / (v1 + v2)',
      '√(v1 v2)',
      'v1 v2 / (v1 + v2)',
    ],
    correctOptionIndex: 0,
    explanation:
      'Let the total time be 2t. Distance = (v1 + v2)t, so average speed = (v1 + v2)/2, the arithmetic mean.',
  },
  {
    id: 'kin-q6',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'Can instantaneous speed be negative? Can the magnitude of instantaneous velocity exceed the instantaneous speed?',
    options: [
      'Neither is possible: speed is the magnitude of velocity.',
      'Speed can be negative when the particle moves backwards.',
      '|velocity| can exceed speed during deceleration.',
      'Both are possible in one-dimensional motion.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Speed is defined as |v| ≥ 0, so it is never negative and |v| = speed exactly.',
  },
  {
    id: 'kin-q7',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: In one-dimensional motion with continuous velocity, constant speed implies constant velocity.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True. A continuous v that never passes through zero cannot change sign, so v is either always +c or always -c.',
  },
  {
    id: 'kin-q8',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Easy',
    type: 'multiple-choice',
    prompt:
      'A particle moves at v = +3 m/s for 0 ≤ t ≤ 2 s and at v = -3 m/s for 2 < t ≤ 4 s. Which set of values is correct for [0, 4] s?',
    options: [
      'Displacement 0 m, distance 12 m, average velocity 0, average speed 3 m/s',
      'Displacement 12 m, distance 12 m, average velocity 3, average speed 3',
      'Displacement 0 m, distance 0 m, average velocity 0, average speed 0',
      'Displacement -12 m, distance 12 m, average velocity -3, average speed 3',
    ],
    correctOptionIndex: 0,
    explanation:
      'The two displacements (+6 m and -6 m) cancel, but the path length is 6 + 6 = 12 m; average speed = 12/4 = 3 m/s.',
  },
  {
    id: 'kin-q9',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Is it possible to have a non-zero average velocity over an interval during which the particle is instantaneously at rest at some point?',
    options: [
      'Yes — e.g. v(t) = (t - 1)^2 on [0, 2] has v(1) = 0 but a non-zero average velocity.',
      'No — the particle being at rest forces the average velocity to be zero.',
      'Only if the particle is at rest for the whole interval.',
      'Only if the motion is uniformly accelerated.',
    ],
    correctOptionIndex: 0,
    explanation:
      'For v(t) = (t-1)^2, v(1) = 0 but the average velocity is (1/2)∫₀² (t-1)² dt = 1/3 ≠ 0.',
  },
  {
    id: 'kin-q10',
    chapterId: 'kinematics-1d',
    topicId: 'displacement-distance-speed-velocity',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If a particle has zero speed at an instant, must its velocity be zero? Is the converse true?',
    options: [
      'Both are true: in 1D, speed = |velocity|, so they vanish together.',
      'Zero speed does not imply zero velocity, but zero velocity implies zero speed.',
      'Zero velocity does not imply zero speed, but zero speed implies zero velocity.',
      'Neither statement is true in 1D.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Speed is defined as |v|, so speed = 0 ⇔ |v| = 0 ⇔ v = 0. Both implications hold.',
  },

  // ─────────────────────────────────────────────────────────────
  // Average vs. instantaneous quantities
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q11',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Must the average velocity over an interval equal the instantaneous velocity at some point inside the interval?',
    options: [
      'Yes — by the mean value theorem, provided position is differentiable.',
      'No — this can fail for any accelerated motion.',
      'Only if the acceleration is zero.',
      'Only if the velocity never changes sign.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The MVT applied to x(t) guarantees a point where v equals the average velocity.',
  },
  {
    id: 'kin-q12',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'If the average velocity over every interval of a fixed duration T is the same constant, what can you conclude about v(t)?',
    options: [
      'v(t) is periodic with period T but need not be constant.',
      'v(t) must be constant.',
      'v(t) must be linear in t.',
      'v(t) must be zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'x(t+T) - x(t) = cT gives v(t+T) = v(t); v is T-periodic. It is constant only if this holds for all T.',
  },
  {
    id: 'kin-q13',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The average velocity over [t1, t2] always equals the instantaneous velocity at the midpoint (t1 + t2)/2.',
    options: ['True', 'False'],
    correctOptionIndex: 1,
    explanation:
      'False in general; it is true only for constant acceleration, where v(t) is linear.',
  },
  {
    id: 'kin-q14',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can instantaneous velocity be zero at some instant while the average velocity over a surrounding interval is non-zero?',
    options: [
      'Yes — e.g. v(t) = (t - 1)^2 has v(1) = 0 but a non-zero average over [0, 2].',
      'No — zero instantaneous velocity forces the average to be zero.',
      'Only if the acceleration is also zero.',
      'Only if the particle never moves.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A momentary rest does not force the time average of v to vanish; see v(t) = (t-1)^2.',
  },
  {
    id: 'kin-q15',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Is the time-average of instantaneous velocity equal to the average velocity? Is the distance-average of velocity equal to the average velocity?',
    options: [
      'The time average equals average velocity; the distance average generally does not.',
      'Both averages equal the average velocity.',
      'Neither average equals the average velocity.',
      'The distance average equals average velocity; the time average does not.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The time average of v is (1/Δt)∫v dt = Δx/Δt by definition; the distance average is (1/s)∫v ds, a different weighting.',
  },
  {
    id: 'kin-q16',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: For constant acceleration, the average velocity over any interval equals the instantaneous velocity at the midpoint of the interval.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True: v(t) = v0 + at is linear, so its mean over [t1, t2] is its value at the midpoint.',
  },
  {
    id: 'kin-q17',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can the average velocity over an interval be zero while the particle never comes to rest (with continuous v)?',
    options: [
      'No — continuity forces v to pass through zero somewhere in the interval.',
      'Yes — e.g. v(t) = (t - 1)^2 has zero average velocity on [0, 2].',
      'Yes, whenever the acceleration is constant.',
      'Only if the particle travels in the negative direction.',
    ],
    correctOptionIndex: 0,
    explanation:
      'If ∫v dt = 0 with v continuous, the mean value theorem gives a point where v = 0.',
  },
  {
    id: 'kin-q18',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt: 'Under what condition is the average speed over an interval zero?',
    options: [
      'Only if the particle never moves (distance = 0).',
      'Whenever the average velocity is zero.',
      'Whenever the particle reverses direction.',
      'Whenever the acceleration is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Average speed = (total distance)/(time) ≥ 0, and it vanishes only if the total distance is zero.',
  },
  {
    id: 'kin-q19',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'A particle moves with constant speed c in one dimension and completes a round trip. What are its average velocity and average speed?',
    options: [
      'Average velocity 0; average speed c',
      'Average velocity c; average speed c',
      'Average velocity 0; average speed 0',
      'Average velocity c; average speed 0',
    ],
    correctOptionIndex: 0,
    explanation:
      'The net displacement is zero, so the average velocity is zero, but the average speed is c.',
  },
  {
    id: 'kin-q20',
    chapterId: 'kinematics-1d',
    topicId: 'average-vs-instantaneous',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'When do average velocity and average speed have different magnitudes over the same interval?',
    options: [
      'Whenever the particle reverses direction; they coincide for unidirectional motion.',
      'Always, since velocity and speed are different quantities.',
      'Only when the acceleration is constant.',
      'Never; they always have the same magnitude.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Direction reversals make the path length exceed |Δx|; for unidirectional motion the two coincide.',
  },

  // ─────────────────────────────────────────────────────────────
  // Acceleration: concept and sign
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q21',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'Can a particle have zero acceleration but non-zero velocity? Can it have zero velocity but non-zero acceleration?',
    options: [
      'Both are possible (uniform motion; the top of a vertical throw).',
      'Only the first is possible.',
      'Only the second is possible.',
      'Neither is possible.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Uniform motion has a = 0 with v ≠ 0; a ball at the top of its flight has v = 0 with a = -g.',
  },
  {
    id: 'kin-q22',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can a particle have negative acceleration and increasing speed?',
    options: [
      'Yes — e.g. v = -5 m/s with a = -2 m/s²: the speed grows from 5 to 7 m/s.',
      'No — negative acceleration always slows the particle down.',
      'Only if the velocity is positive.',
      'Only if the acceleration is constant.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Speed increases whenever a and v have the same sign; with v < 0 and a < 0 the speed grows.',
  },
  {
    id: 'kin-q23',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can a particle have positive acceleration and decreasing speed?',
    options: [
      'Yes — e.g. v = -5 m/s with a = +2 m/s²: the speed falls from 5 to 3 m/s.',
      'No — positive acceleration always speeds the particle up.',
      'Only if the velocity is positive.',
      'Only if the acceleration is changing.',
    ],
    correctOptionIndex: 0,
    explanation:
      'With v < 0 and a > 0 the acceleration opposes the motion, so the speed decreases.',
  },
  {
    id: 'kin-q24',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If the acceleration is zero at an instant, can the velocity be changing at that instant? Can the acceleration itself be changing?',
    options: [
      'The velocity is instantaneously unchanging, but the acceleration may itself be changing (jerk ≠ 0).',
      'The velocity is changing, and the acceleration is constant.',
      'Neither can change when a = 0.',
      'The velocity is constant for all time.',
    ],
    correctOptionIndex: 0,
    explanation:
      'a = dv/dt = 0 means v has zero slope there; a can still vary because jerk = da/dt need not vanish.',
  },
  {
    id: 'kin-q25',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If a particle has positive acceleration at all times, must its speed always increase?',
    options: [
      'No — speed increases only when a and v have the same sign.',
      'Yes — positive acceleration always means speeding up.',
      'Yes, provided the velocity starts positive.',
      'No, because positive acceleration always slows the particle down.',
    ],
    correctOptionIndex: 0,
    explanation:
      'If v < 0 while a > 0, the speed decreases even though the acceleration is positive.',
  },
  {
    id: 'kin-q26',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can a particle have acceleration that is always non-zero while its velocity never changes sign?',
    options: [
      'Yes — e.g. v(t) = e^t > 0 with a = e^t ≠ 0 for all t.',
      'No — non-zero acceleration always forces v through zero.',
      'Only if the acceleration is constant.',
      'Only if the initial velocity is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'v(t) = e^t is always positive and has non-zero derivative for every t.',
  },
  {
    id: 'kin-q27',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'A particle moves with a = -kv (k > 0). Does it ever stop in finite time?',
    options: [
      'No — its velocity decays exponentially, approaching zero asymptotically.',
      'Yes — it stops at t = 1/k.',
      'Yes — it stops at t = 2v0/k.',
      'It reverses direction at t = 1/k.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Solving dv/dt = -kv gives v(t) = v0 e^{-kt}, which is never zero at finite t.',
  },
  {
    id: 'kin-q28',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'A particle moves with a = -k√v (k > 0, v ≥ 0). What happens?',
    options: [
      'It stops in finite time t = 2√v0/k and then stays at rest.',
      'It approaches rest only asymptotically.',
      'It reverses direction at t = 2√v0/k.',
      'It speeds up because the acceleration is negative.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Solving dv/√v = -k dt gives √v = √v0 - kt/2, so v reaches zero at t = 2√v0/k; afterwards a = 0 and it stays at rest.',
  },
  {
    id: 'kin-q29',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Among a = -kv, a = -kv² and a = -k√v, which lead to a stop in finite time? What is the general rule for a = -kvⁿ?',
    options: [
      'Only a = -k√v; in general a = -kvⁿ stops in finite time iff n < 1.',
      'All three stop in finite time.',
      'Only a = -kv²; in general a = -kvⁿ stops in finite time iff n > 1.',
      'None of them stop in finite time.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Integrating dv/vⁿ gives a finite stop time only when n < 1; for n ≥ 1 the velocity reaches zero only asymptotically.',
  },
  {
    id: 'kin-q30',
    chapterId: 'kinematics-1d',
    topicId: 'acceleration-concept-and-sign',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If the acceleration is always perpendicular to the velocity, what can you conclude about one-dimensional motion?',
    options: [
      'In 1D this forces a = 0 whenever v ≠ 0, so the velocity is constant.',
      'The particle must move in a circle.',
      'The speed must increase.',
      'The particle must reverse direction.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Perpendicularity in 1D means a·v = av = 0, hence a = 0 (if v ≠ 0); the motion is uniform.',
  },

  // ─────────────────────────────────────────────────────────────
  // Motion graphs
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q31',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Easy',
    type: 'multiple-choice',
    prompt:
      'What do the slopes of the x–t, v–t and a–t graphs represent, respectively?',
    options: [
      'Velocity, acceleration, and jerk',
      'Acceleration, velocity, and jerk',
      'Velocity, jerk, and acceleration',
      'Displacement, velocity, and acceleration',
    ],
    correctOptionIndex: 0,
    explanation:
      'Slope of x–t is dx/dt = v; slope of v–t is dv/dt = a; slope of a–t is da/dt = jerk.',
  },
  {
    id: 'kin-q32',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt: 'Can an x–t graph be a vertical line? What would that imply physically?',
    options: [
      'No — it would mean two positions at the same time, i.e. infinite velocity.',
      'Yes — it describes constant acceleration.',
      'Yes — it describes a particle at rest.',
      'No — it would mean zero acceleration.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A vertical line has infinite slope, implying infinite velocity, which is unphysical.',
  },
  {
    id: 'kin-q33',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'On a v–t graph, what does the area under the curve represent? How do you find the total distance?',
    options: [
      'Displacement is the net signed area; distance is the sum of the absolute areas.',
      'Both displacement and distance are the net signed area.',
      'Area gives acceleration; distance is the slope.',
      'Area gives distance; displacement is the slope.',
    ],
    correctOptionIndex: 0,
    explanation:
      '∫v dt is the signed displacement; summing |area| over subintervals gives the total path length.',
  },
  {
    id: 'kin-q34',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Two particles have x–t graphs that intersect. What does this mean? What does it mean if their v–t graphs intersect?',
    options: [
      'Intersecting x–t graphs mean they meet; intersecting v–t graphs mean only that their velocities coincide.',
      'Both intersections mean the particles meet.',
      'Both intersections mean the particles have the same velocity.',
      'Intersecting x–t graphs mean equal velocities; v–t intersections mean they meet.',
    ],
    correctOptionIndex: 0,
    explanation:
      'x–t intersection means the same position at the same time; v–t intersection means only equal velocity, not equal position.',
  },
  {
    id: 'kin-q35',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can a particle reverse direction without its velocity being zero at any instant? (Assume v is continuous.)',
    options: [
      'No — a continuous velocity must pass through zero to change sign.',
      'Yes — reversal can occur without v vanishing.',
      'Only if the acceleration is discontinuous.',
      'Only in free fall.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A sign change of a continuous function requires it to vanish somewhere (intermediate value theorem).',
  },
  {
    id: 'kin-q36',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can an x–t graph have an always-positive slope while the acceleration changes sign?',
    options: [
      'Yes — e.g. x(t) = t + sin t on (0, π): the slope is always positive but the concavity changes.',
      'No — positive slope forces positive acceleration.',
      'No — the acceleration must have the same sign as the velocity.',
      'Only if the velocity is constant.',
    ],
    correctOptionIndex: 0,
    explanation:
      'x(t) = t + sin t has v = 1 + cos t ≥ 0 but a = -sin t, which changes sign at t = π.',
  },
  {
    id: 'kin-q37',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can a v–t graph cross the time axis without the particle reversing direction?',
    options: [
      'No — crossing the axis means v changes sign, i.e. the direction reverses.',
      'Yes — crossing the axis only changes the acceleration.',
      'Yes — if the acceleration is constant.',
      'Only when the particle is in free fall.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The time axis is v = 0; crossing it means v goes from positive to negative (or vice versa), a reversal.',
  },
  {
    id: 'kin-q38',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can an x–t graph be a parabola opening upward while the particle moves in the negative direction during some interval?',
    options: [
      'Yes — e.g. x(t) = t² - 4t on [0, 2): the parabola opens upward while v = 2t - 4 < 0.',
      'No — an upward parabola always means positive velocity.',
      'No — a negative velocity gives a downward parabola.',
      'Only if the acceleration changes sign.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The parabola x = t² - 4t has positive curvature (a = +2) but negative slope until t = 2.',
  },
  {
    id: 'kin-q39',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'Given a v–t graph, how do you determine whether the displacement is positive or negative, and how do you find the total distance?',
    options: [
      'Displacement is the net signed area; distance is the sum of the absolute areas.',
      'Displacement is the absolute area; distance is the net signed area.',
      'Both are found from the slope of the graph.',
      'Displacement is the slope; distance is the area.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Areas above the axis count positively and below count negatively for displacement; |area| counts for distance.',
  },
  {
    id: 'kin-q40',
    chapterId: 'kinematics-1d',
    topicId: 'motion-graphs',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'If the v–t graph is a semicircle, describe the nature of the motion. Is the acceleration constant?',
    options: [
      'Speed rises and then falls (or vice versa) as the slope varies; the acceleration is not constant.',
      'The acceleration is constant because the graph is smooth.',
      'The particle moves with constant speed.',
      'The particle reverses direction at the centre of the semicircle.',
    ],
    correctOptionIndex: 0,
    explanation:
      'On a semicircle the slope changes continuously, so a = dv/dt varies; the speed rises to a maximum and then decreases.',
  },

  // ─────────────────────────────────────────────────────────────
  // Constant acceleration
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q41',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt: 'What assumption is required to derive v = v0 + at?',
    options: [
      'Constant acceleration',
      'Constant velocity',
      'Zero initial position',
      'Constant jerk',
    ],
    correctOptionIndex: 0,
    explanation:
      'Integrating dv/dt = a with constant a gives v = v0 + at.',
  },
  {
    id: 'kin-q42',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'What assumption is required to derive x = x0 + v0 t + ½ a t²?',
    options: [
      'Constant acceleration',
      'Constant velocity',
      'Zero initial velocity',
      'Constant jerk',
    ],
    correctOptionIndex: 0,
    explanation:
      'Integrating v = v0 + at with constant a gives x = x0 + v0 t + ½ a t².',
  },
  {
    id: 'kin-q43',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt: 'Is v² = v0² + 2a(x - x0) valid for non-constant acceleration?',
    options: [
      'No — it is valid only for constant acceleration.',
      'Yes — it holds for any acceleration.',
      'Yes, provided the acceleration is positive.',
      'Only if the velocity never changes sign.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The identity follows from a = constant; in general a(x - x0) must be replaced by ∫a dx.',
  },
  {
    id: 'kin-q44',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'A particle starts from rest with constant acceleration. What is the ratio of the distances traveled in successive equal time intervals?',
    options: ['1 : 3 : 5 : 7 : …', '1 : 2 : 3 : 4 : …', '1 : 4 : 9 : 16 : …', '1 : 1 : 1 : 1 : …'],
    correctOptionIndex: 0,
    explanation:
      'The nth interval distance is ½aT²(2n - 1), giving the odd-number ratio 1 : 3 : 5 : …',
  },
  {
    id: 'kin-q45',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'A particle starting from rest with constant acceleration travels distance s in time t. How far does it travel in 2t and in 3t?',
    options: [
      '4s in 2t and 9s in 3t; in general n²s in nt.',
      '2s in 2t and 3s in 3t.',
      '2s in 2t and 4s in 3t.',
      's in 2t and s in 3t.',
    ],
    correctOptionIndex: 0,
    explanation:
      'From rest, x ∝ t², so the distance scales as the square of the elapsed time.',
  },
  {
    id: 'kin-q46',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'A particle with constant acceleration has velocity v1 at position x1 and v2 at x2. What is its acceleration?',
    options: [
      '(v2² - v1²) / [2(x2 - x1)]',
      '(v2 - v1) / (x2 - x1)',
      '(v2² + v1²) / [2(x2 - x1)]',
      '(v2 - v1)² / [2(x2 - x1)]',
    ],
    correctOptionIndex: 0,
    explanation:
      'Rearranging v2² = v1² + 2a(x2 - x1) gives a = (v2² - v1²)/[2(x2 - x1)].',
  },
  {
    id: 'kin-q47',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can a particle with non-zero constant acceleration have zero velocity at two different times?',
    options: [
      'No — v = v0 + at crosses zero at most once.',
      'Yes — it passes through zero twice.',
      'Yes, if it reverses direction twice.',
      'Only if the acceleration is negative.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A linear function v(t) has at most one root (unless a = 0 and v0 = 0).',
  },
  {
    id: 'kin-q48',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: For constant acceleration, the average velocity over any interval equals (v1 + v2)/2.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True because v(t) is linear; for non-constant acceleration the average is generally different.',
  },
  {
    id: 'kin-q49',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'A ball is thrown vertically upward with speed u and returns to the thrower. What are the displacement, total distance, and time of flight?',
    options: [
      'Displacement 0; distance u²/g; time 2u/g',
      'Displacement u²/g; distance u²/g; time u/g',
      'Displacement 0; distance 2u²/g; time u/g',
      'Displacement 0; distance u²/(2g); time 2u/g',
    ],
    correctOptionIndex: 0,
    explanation:
      'The ball returns to its starting point (displacement 0); it rises u²/(2g) and falls the same, so the distance is u²/g, and the flight time is 2u/g.',
  },
  {
    id: 'kin-q50',
    chapterId: 'kinematics-1d',
    topicId: 'constant-acceleration',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can a particle with constant acceleration have an x–t graph that is a straight line?',
    options: [
      'Only when a = 0 (uniform motion).',
      'Yes, for any constant acceleration.',
      'Only when the acceleration is negative.',
      'Only when the initial velocity is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A straight x–t line means constant velocity, which requires zero acceleration.',
  },

  // ─────────────────────────────────────────────────────────────
  // Free fall
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q51',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'At the highest point of a vertical throw, what are the velocity and acceleration?',
    options: [
      'v = 0 but a = -g',
      'Both v and a are zero',
      'v = 0 and a = 0',
      'v is maximum and a = -g',
    ],
    correctOptionIndex: 0,
    explanation:
      'The velocity vanishes momentarily at the top, but gravity continues to act, so a = -g.',
  },
  {
    id: 'kin-q52',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Two balls are dropped from the same height, one after the other. How does the distance between them behave?',
    options: [
      'It increases linearly with time after the second is released.',
      'It stays constant.',
      'It decreases linearly with time.',
      'It increases quadratically with time.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Both have the same acceleration g, so their relative velocity is constant once both are falling; the separation grows linearly.',
  },
  {
    id: 'kin-q53',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Medium',
    type: 'numerical',
    prompt:
      'A ball is thrown vertically upward with speed 20 m/s. At what height (in metres, take g = 10 m/s²) is its speed half the initial speed?',
    numericAnswer: 15,
    numericTolerance: 0.2,
    unit: 'm',
    explanation:
      'Using v² = u² - 2gh with v = u/2: h = 3u²/(8g) = 3(400)/(80) = 15 m.',
  },
  {
    id: 'kin-q54',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Medium',
    type: 'numerical',
    prompt:
      'A ball thrown vertically upward returns to the thrower after 4 s. What is the maximum height reached (in metres, take g = 10 m/s²)?',
    numericAnswer: 20,
    numericTolerance: 0.2,
    unit: 'm',
    explanation:
      'T = 2u/g gives u = 20 m/s, so H = u²/(2g) = 400/20 = 20 m (equivalently H = gT²/8).',
  },
  {
    id: 'kin-q55',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'A ball is dropped from height h. Simultaneously, another ball is thrown downward with speed u from the same height. Which reaches the ground first?',
    options: [
      'The ball thrown downward.',
      'The dropped ball.',
      'They arrive together.',
      'It depends on the value of h.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The thrown ball has a larger initial downward velocity and the same acceleration, so it lands first.',
  },
  {
    id: 'kin-q56',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can two objects in free fall have the same velocity at some instant but different positions?',
    options: [
      'Yes — two balls released simultaneously from different heights have the same velocity -gt but different positions.',
      'No — equal velocities imply equal positions.',
      'Only if they are released from the same height.',
      'Only if one is thrown upward.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Velocity depends only on the elapsed fall time, not on the starting height, so equal velocities do not imply equal positions.',
  },
  {
    id: 'kin-q57',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'A ball is thrown upward from a moving elevator. How is its motion described in the elevator frame and in the ground frame?',
    options: [
      'Ordinary free fall in the elevator frame; in the ground frame its initial velocity is the vector sum of the elevator and throw velocities.',
      'Ordinary free fall in both frames with the same initial velocity.',
      'It moves with constant velocity in the ground frame.',
      'It falls straight down in both frames.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The elevator frame is inertial if it moves uniformly; a Galilean boost adds the elevator velocity to the initial velocity in the ground frame.',
  },
  {
    id: 'kin-q58',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'With air resistance, is the time to go up equal to the time to come down for a vertically thrown ball?',
    options: [
      'No — the upward trip is shorter than the downward trip.',
      'Yes — the times are always equal.',
      'No — the upward trip is longer.',
      'Only if the drag is linear in v.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Going up, drag and gravity both act downward (large deceleration); coming down, drag opposes gravity (smaller acceleration), so the descent takes longer.',
  },
  {
    id: 'kin-q59',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt: 'Can an object in free fall have zero speed for a finite duration?',
    options: [
      'No — the speed vanishes only at an isolated instant (the top of the motion).',
      'Yes — at the top of the trajectory.',
      'Yes — if it is dropped from rest.',
      'Only if the acceleration is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'At the top v = 0 for a single instant; gravity immediately changes it, so the rest is momentary.',
  },
  {
    id: 'kin-q60',
    chapterId: 'kinematics-1d',
    topicId: 'free-fall',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'A ball is thrown vertically upward. At the highest point, what are the velocity, acceleration, and jerk?',
    options: [
      'v = 0, a = -g, jerk = 0',
      'v = 0, a = 0, jerk = -g',
      'v = maximum, a = 0, jerk = 0',
      'v = 0, a = -g, jerk = -g',
    ],
    correctOptionIndex: 0,
    explanation:
      'The velocity vanishes at the top, the acceleration is the constant -g, and its derivative (jerk) is zero.',
  },

  // ─────────────────────────────────────────────────────────────
  // Calculus-based kinematics
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q61',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'For x(t) = t³ - 6t² + 9t, at which times is the particle at rest?',
    options: [
      't = 1 s and t = 3 s',
      't = 0 s and t = 3 s',
      't = 2 s only',
      't = 1 s only',
    ],
    correctOptionIndex: 0,
    explanation:
      'v = 3t² - 12t + 9 = 3(t - 1)(t - 3), so v = 0 at t = 1 s and t = 3 s.',
  },
  {
    id: 'kin-q62',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Hard',
    type: 'numerical',
    prompt:
      'For x(t) = t³ - 6t² + 9t (SI units), find the total distance traveled from t = 0 to t = 4 s (in metres).',
    numericAnswer: 12,
    numericTolerance: 0.1,
    unit: 'm',
    explanation:
      'x(0) = 0, x(1) = 4, x(3) = 0, x(4) = 4. Distance = 4 + 4 + 4 = 12 m.',
  },
  {
    id: 'kin-q63',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Given v(t), how do you find the displacement and the distance traveled?',
    options: [
      'Displacement = ∫v dt; distance = ∫|v| dt',
      'Both are ∫v dt',
      'Displacement = ∫|v| dt; distance = ∫v dt',
      'Displacement = dv/dt; distance = ∫v dt',
    ],
    correctOptionIndex: 0,
    explanation:
      'The signed integral gives displacement; integrating |v| accounts for reversals and gives the path length.',
  },
  {
    id: 'kin-q64',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Given a(t), what information is needed to determine x(t) uniquely?',
    options: [
      'The initial velocity v(0) and the initial position x(0).',
      'Only the initial position x(0).',
      'Only the initial velocity v(0).',
      'No further information is needed.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Two integrations introduce two constants of integration, fixed by v(0) and x(0).',
  },
  {
    id: 'kin-q65',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'For v(t) = sin t on [0, 2π], what are the displacement and the distance traveled?',
    options: [
      'Displacement 0; distance 4',
      'Displacement 4; distance 4',
      'Displacement 0; distance 0',
      'Displacement 2; distance 4',
    ],
    correctOptionIndex: 0,
    explanation:
      '∫₀^{2π} sin t dt = 0, while ∫₀^{2π} |sin t| dt = 4.',
  },
  {
    id: 'kin-q66',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'A particle has velocity v(t) = 3t² - 12t + 9. At which times does it reverse direction?',
    options: [
      't = 1 s and t = 3 s',
      't = 2 s only',
      't = 0 s and t = 2 s',
      'It never reverses direction',
    ],
    correctOptionIndex: 0,
    explanation:
      'v = 3(t - 1)(t - 3) changes sign at t = 1 s and t = 3 s.',
  },
  {
    id: 'kin-q67',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt: 'For x(t) = |t|, are the velocity and the acceleration defined at t = 0?',
    options: [
      'Neither is defined at t = 0 (the acceleration is distributional there).',
      'Both are defined and equal zero.',
      'The velocity is defined but the acceleration is not.',
      'The acceleration is defined but the velocity is not.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The left and right derivatives of |t| differ at 0, so v is undefined; a is then a delta function, not an ordinary function.',
  },
  {
    id: 'kin-q68',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can a particle have continuous velocity but discontinuous acceleration? Give an example.',
    options: [
      'Yes — e.g. x = t² for t < 0 and x = t³ for t ≥ 0 gives continuous v but a jumps at t = 0.',
      'No — continuity of v forces continuity of a.',
      'Yes, but only if v is constant.',
      'Only if the particle is in free fall.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The piecewise example has v = 2t (t < 0) and 3t² (t ≥ 0), both → 0 at t = 0, while a jumps from 2 to 0.',
  },
  {
    id: 'kin-q69',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt: 'If v(t) = 1/t, what happens as t → 0? Is this physically possible?',
    options: [
      'v → ∞ as t → 0, so the motion is unphysical.',
      'v → 0 as t → 0, which is physically reasonable.',
      'v remains finite, so there is no problem.',
      'The particle comes to rest at t = 0.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A diverging velocity (and position x = ln t → -∞) is not physically realizable.',
  },
  {
    id: 'kin-q70',
    chapterId: 'kinematics-1d',
    topicId: 'calculus-kinematics',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'A particle starts from rest at x = 0 with a(t) = 2t. What are v(t) and x(t)?',
    options: [
      'v = t², x = t³/3',
      'v = 2t, x = t²',
      'v = t², x = t²',
      'v = t³/3, x = t⁴/12',
    ],
    correctOptionIndex: 0,
    explanation:
      'Integrating a = 2t with v(0) = 0 gives v = t²; integrating again with x(0) = 0 gives x = t³/3.',
  },

  // ─────────────────────────────────────────────────────────────
  // Non-uniform acceleration
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q71',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'A particle moves with a = -kv². Which description of its motion is correct?',
    options: [
      'v = v0/(1 + v0 k t); it never stops in finite time.',
      'v = v0 e^{-kt}; it stops asymptotically.',
      'It stops in finite time t = 1/(v0 k).',
      'v = v0/(1 - v0 k t); it speeds up without bound.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Separating variables gives v = v0/(1 + v0 k t), which approaches zero only as t → ∞.',
  },
  {
    id: 'kin-q72',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt: 'A particle moves with a = -kx. Describe its motion.',
    options: [
      'Simple harmonic motion about x = 0.',
      'Exponential decay to x = 0 without oscillation.',
      'Uniform acceleration away from the origin.',
      'Constant-velocity motion.',
    ],
    correctOptionIndex: 0,
    explanation:
      'x'' = -kx is the SHM equation: x = A cos(ωt + φ) with ω = √k.',
  },
  {
    id: 'kin-q73',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'A particle falls with a = g - kv. What is the terminal velocity, and is it ever reached in finite time?',
    options: [
      'Terminal velocity g/k, approached only asymptotically.',
      'Terminal velocity g/k, reached in finite time t = 1/k.',
      'Terminal velocity k/g, approached asymptotically.',
      'There is no terminal velocity.',
    ],
    correctOptionIndex: 0,
    explanation:
      'v(t) = (g/k)(1 - e^{-kt}) approaches g/k as t → ∞ but never equals it at finite time.',
  },
  {
    id: 'kin-q74',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Hard',
    type: 'numerical',
    prompt:
      'A particle with initial speed 4 m/s moves with a = -2√v (SI units). How long (in seconds) does it take to stop?',
    numericAnswer: 2,
    numericTolerance: 0.05,
    unit: 's',
    explanation:
      'dv/√v = -2 dt gives 2(√v - √v0) = -2t, so t = √v0 = 2 s.',
  },
  {
    id: 'kin-q75',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt: 'A particle moves with a = v². Describe its motion.',
    options: [
      'v = v0/(1 - v0 t): the speed blows up in finite time and the particle never stops.',
      'The particle slows down exponentially and stops asymptotically.',
      'The particle stops in finite time t = 1/v0.',
      'The particle moves with constant velocity.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Separating dv/v² = dt gives v = v0/(1 - v0 t), which diverges at t = 1/v0.',
  },
  {
    id: 'kin-q76',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'For a drag law a = -kvⁿ (k > 0, v ≥ 0), for which n does the particle stop in finite time?',
    options: [
      'n < 1',
      'n > 1',
      'All n > 0',
      'No n gives a finite-time stop',
    ],
    correctOptionIndex: 0,
    explanation:
      'Integrating dv/vⁿ gives a finite stop time only when n < 1; for n ≥ 1 the velocity reaches zero only asymptotically.',
  },
  {
    id: 'kin-q77',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'A particle moves with constant jerk j. Given x0, v0 and a0 at t = 0, what is x(t)?',
    options: [
      'x0 + v0 t + ½ a0 t² + (1/6) j t³',
      'x0 + v0 t + ½ j t²',
      'x0 + a0 t + ½ j t²',
      'x0 + v0 t + j t³',
    ],
    correctOptionIndex: 0,
    explanation:
      'Integrating a = a0 + jt three times with the initial conditions gives the cubic expression.',
  },
  {
    id: 'kin-q78',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If the acceleration is always perpendicular to the velocity in one dimension, what can you conclude?',
    options: [
      'a = 0 whenever v ≠ 0, so the velocity is constant.',
      'The particle moves in a circle.',
      'The speed must increase.',
      'The particle must reverse direction.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Perpendicularity in 1D means a·v = 0; if v ≠ 0 then a = 0, so the motion is uniform.',
  },
  {
    id: 'kin-q79',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt: 'A particle moves with a = -kv³. Does it stop in finite time?',
    options: [
      'No — v = 1/√(2kt + 1/v0²) approaches zero only asymptotically.',
      'Yes — it stops at t = 1/(kv0²).',
      'Yes — it stops at t = 2v0/k.',
      'It reverses direction at t = 1/(kv0²).',
    ],
    correctOptionIndex: 0,
    explanation:
      'For n = 3 > 1, integrating dv/v³ gives a velocity that vanishes only as t → ∞.',
  },
  {
    id: 'kin-q80',
    chapterId: 'kinematics-1d',
    topicId: 'non-uniform-acceleration',
    difficulty: 'Hard',
    type: 'numerical',
    prompt:
      'A particle with initial speed 4 m/s moves with a = -2/v (SI units). How long (in seconds) does it take to stop?',
    numericAnswer: 4,
    numericTolerance: 0.1,
    unit: 's',
    explanation:
      'v dv/dt = -2 gives v² = v0² - 4t, so it stops at t = v0²/4 = 16/4 = 4 s.',
  },

  // ─────────────────────────────────────────────────────────────
  // Relative motion in one dimension
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q81',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Two trains move in the same direction with speeds v1 and v2 relative to the ground. What is their relative velocity, and does it depend on the inertial frame?',
    options: [
      'v1 - v2; it is invariant under Galilean boosts.',
      'v1 + v2; it depends on the frame.',
      'v1 - v2; it depends on the frame.',
      'v1 + v2; it is invariant under Galilean boosts.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Relative velocity is the difference; adding a common frame velocity to both leaves the difference unchanged.',
  },
  {
    id: 'kin-q82',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Two particles move along the x-axis with constant velocities v1 and v2, starting at x1 and x2. When do they meet?',
    options: [
      't = (x2 - x1)/(v1 - v2)',
      't = (x2 - x1)/(v1 + v2)',
      't = (x1 + x2)/(v1 - v2)',
      't = (v1 - v2)/(x2 - x1)',
    ],
    correctOptionIndex: 0,
    explanation:
      'Setting x1 + v1 t = x2 + v2 t and solving for t gives the stated result.',
  },
  {
    id: 'kin-q83',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Easy',
    type: 'multiple-choice',
    prompt:
      'A person walks with speed u relative to a moving walkway that moves at V relative to the ground. What is the person speed relative to the ground?',
    options: [
      'u + V in the same direction; |u - V| in the opposite direction',
      'u + V in both directions',
      'u - V in both directions',
      'u in both directions, since the walkway is irrelevant',
    ],
    correctOptionIndex: 0,
    explanation:
      'Velocities add vectorially along the direction of motion: u + V one way and u - V the other.',
  },
  {
    id: 'kin-q84',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: Two particles with different velocities can have zero relative velocity.',
    options: ['True', 'False'],
    correctOptionIndex: 1,
    explanation:
      'False: zero relative velocity requires v1 = v2, i.e. equal velocities.',
  },
  {
    id: 'kin-q85',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Two particles have the same acceleration. What can you say about their relative velocity?',
    options: [
      'It is constant, since d(v1 - v2)/dt = a1 - a2 = 0.',
      'It increases linearly with time.',
      'It must be zero.',
      'It decreases with time.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Equal accelerations cancel in the relative velocity, leaving it constant.',
  },
  {
    id: 'kin-q86',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'A ball is dropped from a train moving at constant velocity. Where does it land relative to the train and relative to the ground?',
    options: [
      'Directly below the release point in the train frame; a projectile path in the ground frame.',
      'Behind the release point in the train frame; straight down in the ground frame.',
      'Straight down in both frames.',
      'It lands ahead of the release point in the train frame.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The ball keeps the horizontal velocity of the train, so it stays under the release point in the train frame but follows a parabola in the ground frame.',
  },
  {
    id: 'kin-q87',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Easy',
    type: 'multiple-choice',
    prompt:
      'Two particles move toward each other with speeds v1 and v2 along the same line. What is their relative speed?',
    options: ['v1 + v2', '|v1 - v2|', 'v1 v2', '(v1 + v2)/2'],
    correctOptionIndex: 0,
    explanation:
      'When moving toward each other, the relative speed is the sum of the speeds.',
  },
  {
    id: 'kin-q88',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If two particles have the same velocity at some instant, what can you say about their positions?',
    options: [
      'Nothing definite — they may be at different positions.',
      'They must be at the same position.',
      'They must be moving in opposite directions.',
      'They must have the same acceleration.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Equal velocities say nothing about positions; equal positions say nothing about velocities.',
  },
  {
    id: 'kin-q89',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can relative velocity exceed the speed of light in classical mechanics? What does this imply?',
    options: [
      'Yes — in classical mechanics there is no speed limit; the framework is valid only for v ≪ c.',
      'No — relative velocity is always bounded by c.',
      'Yes, but only for equal masses.',
      'No, because velocities always add to less than c.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Classical kinematics has no upper bound on speed; relativity is needed when speeds approach c.',
  },
  {
    id: 'kin-q90',
    chapterId: 'kinematics-1d',
    topicId: 'relative-motion-1d',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Two cars approach each other. Does the magnitude of their relative velocity depend on which car you measure from? What about the sign?',
    options: [
      'The magnitude is the same; only the sign depends on the chosen positive direction.',
      'Both the magnitude and the sign depend on the car.',
      'Neither the magnitude nor the sign depends on the car.',
      'The magnitude changes but the sign does not.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Reversing the reference car flips the sign of the relative velocity but not its magnitude.',
  },

  // ─────────────────────────────────────────────────────────────
  // Tricky conceptual problems
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q91',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can an object have zero velocity and zero acceleration simultaneously? What does this mean physically?',
    options: [
      'Yes — the object is at rest and will remain at rest (equilibrium).',
      'No — if a = 0 the velocity must be non-zero.',
      'Yes, but only instantaneously.',
      'No — zero velocity always implies non-zero acceleration.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A book at rest on a table has v = 0 and a = 0; it stays at rest.',
  },
  {
    id: 'kin-q92',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can an object be accelerating when its speed is zero at that instant?',
    options: [
      'Yes — e.g. a ball at the top of a vertical throw has v = 0 and a = -g.',
      'No — zero speed implies zero acceleration.',
      'Only if the acceleration is zero too.',
      'Only if the object is in equilibrium.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Acceleration measures the rate of change of velocity; it need not vanish when v does.',
  },
  {
    id: 'kin-q93',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If v(t0) = 0 and a(t0) > 0, what happens immediately after t0?',
    options: [
      'The particle begins moving in the positive direction.',
      'The particle remains at rest.',
      'The particle moves in the negative direction.',
      'The particle reverses direction twice.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A positive acceleration makes the velocity become positive just after t0.',
  },
  {
    id: 'kin-q94',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can the acceleration be zero at a point where the velocity is a maximum or minimum?',
    options: [
      'Yes — at a local extremum of v, Fermat theorem gives a = dv/dt = 0.',
      'No — the acceleration is maximal there.',
      'Only if the velocity is zero.',
      'Only if the jerk is also zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A differentiable function has zero derivative at an interior extremum, so a = 0 at the extremum of v.',
  },
  {
    id: 'kin-q95',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If x(t) is monotonically increasing, what can you say about v(t) and a(t)?',
    options: [
      'v(t) ≥ 0; nothing definite about a(t).',
      'v(t) ≥ 0 and a(t) ≥ 0.',
      'v(t) ≥ 0 and a(t) ≤ 0.',
      'Both must be zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Monotonic increase requires v ≥ 0, but the acceleration may be positive, negative, or zero.',
  },
  {
    id: 'kin-q96',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Is it possible for a particle to have discontinuous velocity? What would cause this physically?',
    options: [
      'Yes, as an idealization of an impulsive force; with finite forces v is continuous.',
      'No, under no circumstances.',
      'Yes, whenever the acceleration is constant.',
      'Yes, only in free fall.',
    ],
    correctOptionIndex: 0,
    explanation:
      'An infinite force acting for zero time (an impulse) produces a jump in velocity; real finite forces give continuous v.',
  },
  {
    id: 'kin-q97',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can a particle have acceleration that changes sign while its velocity never changes sign?',
    options: [
      'Yes — e.g. v(t) = 2 + sin t > 0 with a = cos t changing sign.',
      'No — a sign change in a forces a sign change in v.',
      'Only if the velocity is constant.',
      'Only if the acceleration is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'v(t) = 2 + sin t is always positive, while a = cos t alternates sign.',
  },
  {
    id: 'kin-q98',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'For constant acceleration, can the average velocity over some interval be zero? What would that mean physically?',
    options: [
      'Yes — e.g. a ball thrown upward and caught at the same height has zero average velocity over the full flight.',
      'No — constant acceleration always gives non-zero average velocity.',
      'Yes, but only if the particle is at rest for the whole interval.',
      'Only if the acceleration is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A symmetric up-and-down flight has zero net displacement, hence zero average velocity.',
  },
  {
    id: 'kin-q99',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Can two particles with different initial velocities and different accelerations have the same velocity and position at the same time?',
    options: [
      'Yes — e.g. x1 = t² and x2 = 2t - 1: at t = 1 both have x = 1 and v = 2.',
      'No — different initial conditions prevent them from meeting.',
      'Only if their accelerations are equal.',
      'Only if their initial velocities are equal.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Solving x1 = x2 and v1 = v2 simultaneously can give a common time and position, as in the example.',
  },
  {
    id: 'kin-q100',
    chapterId: 'kinematics-1d',
    topicId: 'tricky-concepts',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Is it possible that at some instant v = 0, a = 0, but the jerk is non-zero?',
    options: [
      'Yes — x = t³ at t = 0 has v = 0, a = 0, and jerk = 6.',
      'No — zero a forces zero jerk.',
      'Only if the velocity is non-zero.',
      'Only if the acceleration is changing linearly.',
    ],
    correctOptionIndex: 0,
    explanation:
      'For x = t³, v = 3t², a = 6t, jerk = 6: at t = 0 both v and a vanish while the jerk does not.',
  },

  // ─────────────────────────────────────────────────────────────
  // Miscellaneous
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kin-q101',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'For x(t) = A sin(ωt), what kind of motion is this? What is the relation between a and x?',
    options: [
      'Simple harmonic motion with a = -ω²x.',
      'Uniform motion with a = 0.',
      'Uniformly accelerated motion with a = -ω².',
      'Free fall.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Differentiating twice gives a = -Aω² sin(ωt) = -ω²x, the SHM equation.',
  },
  {
    id: 'kin-q102',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Assuming constant deceleration, how does the stopping distance of a car depend on its initial speed?',
    options: [
      'Proportional to the square of the speed.',
      'Proportional to the speed.',
      'Independent of the speed.',
      'Proportional to the square root of the speed.',
    ],
    correctOptionIndex: 0,
    explanation:
      'From 0 = v0² - 2|a|d, the stopping distance d = v0²/(2|a|) ∝ v0².',
  },
  {
    id: 'kin-q103',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Hard',
    type: 'numerical',
    prompt:
      'A particle moves with v(t) = 8 - 2t² (SI units). How long (in seconds) does it take to stop?',
    numericAnswer: 2,
    numericTolerance: 0.05,
    unit: 's',
    explanation:
      'Setting v = 0 gives t² = 4, so t = 2 s.',
  },
  {
    id: 'kin-q104',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Two balls are thrown vertically upward from the same point with the same speed u, the second being thrown time T after the first. When can they meet?',
    options: [
      'If T < 2u/g; they meet at time t = u/g + T/2 after the first throw.',
      'Always, regardless of T.',
      'If T > 2u/g only.',
      'They can never meet.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The second must be launched before the first returns; solving the position equality gives t = u/g + T/2, valid for T < 2u/g.',
  },
  {
    id: 'kin-q105',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Hard',
    type: 'numerical',
    prompt:
      'A ball thrown vertically upward passes a point at height 10 m with speed 10 m/s. What maximum height (in metres, take g = 10 m/s²) does it reach?',
    numericAnswer: 15,
    numericTolerance: 0.2,
    unit: 'm',
    explanation:
      'The remaining rise is v²/(2g) = 100/20 = 5 m, so the maximum height is 10 + 5 = 15 m.',
  },
  {
    id: 'kin-q106',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'A particle starts from rest with a(t) = kt. What are v(t) and x(t)?',
    options: [
      'v = k t²/2, x = k t³/6',
      'v = k t, x = k t²/2',
      'v = k t², x = k t³/3',
      'v = k t³/3, x = k t⁴/12',
    ],
    correctOptionIndex: 0,
    explanation:
      'Integrating a = kt with v(0) = 0 gives v = kt²/2; integrating again with x(0) = 0 gives x = kt³/6.',
  },
  {
    id: 'kin-q107',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt: 'A particle moves with a = -k(x - x0). Describe the motion.',
    options: [
      'Simple harmonic motion about x = x0 with angular frequency √k.',
      'Exponential decay toward x = x0 without oscillation.',
      'Uniform acceleration away from x = x0.',
      'Constant-velocity motion.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Setting y = x - x0 gives y'' = -ky, so y oscillates harmonically about zero, i.e. x oscillates about x0.',
  },
  {
    id: 'kin-q108',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'If the displacement–time graph is a cubic polynomial, what can you say about the acceleration and the jerk?',
    options: [
      'The acceleration is linear in t and the jerk is constant.',
      'Both the acceleration and the jerk are constant.',
      'The acceleration is constant and the jerk is linear in t.',
      'The acceleration is quadratic in t and the jerk is linear in t.',
    ],
    correctOptionIndex: 0,
    explanation:
      'For x = at³ + bt² + ct + d, a = 6at + 2b (linear) and jerk = 6a (constant).',
  },
  {
    id: 'kin-q109',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Medium',
    type: 'numerical',
    prompt:
      'A ball is thrown vertically upward with speed 20 m/s. What is the total time of flight (in seconds, take g = 10 m/s²) before it returns to the thrower?',
    numericAnswer: 4,
    numericTolerance: 0.1,
    unit: 's',
    explanation:
      'The time of flight is 2u/g = 2(20)/10 = 4 s.',
  },
  {
    id: 'kin-q110',
    chapterId: 'kinematics-1d',
    topicId: 'miscellaneous',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'A particle moves with v(t) = v0 e^{-kt}. What is x(t), and how far does the particle travel in total as t → ∞?',
    options: [
      'x = x0 + (v0/k)(1 - e^{-kt}); the total distance is v0/k.',
      'x = x0 + v0 t; the distance is infinite.',
      'x = x0 + v0 e^{-kt}; the distance is v0/k.',
      'x = x0 + (v0/k)e^{-kt}; the distance is v0/(2k).',
    ],
    correctOptionIndex: 0,
    explanation:
      'Integrating v with x(0) = x0 gives x = x0 + (v0/k)(1 - e^{-kt}); as t → ∞, x → x0 + v0/k.',
  },
];

