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
{
    id: 'vect-q13',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Which is a correct vector equation for the plane containing non-collinear points $\\vec{r}_1,\\vec{r}_2,\\vec{r}_3$?',
    options: [
      '$(\\vec{r}-\\vec{r}_1)\\cdot[(\\vec{r}_2-\\vec{r}_1)\\times(\\vec{r}_3-\\vec{r}_1)] = 0$',
      '$(\\vec{r}-\\vec{r}_1)\\times[(\\vec{r}_2-\\vec{r}_1)\\times(\\vec{r}_3-\\vec{r}_1)] = 0$',
      '$(\\vec{r}-\\vec{r}_1)\\cdot(\\vec{r}_2-\\vec{r}_1) = 0$',
      '$(\\vec{r}-\\vec{r}_1)\\cdot(\\vec{r}_2-\\vec{r}_1)\\times(\\vec{r}_3-\\vec{r}_1) = 1$',
    ],
    correctOptionIndex: 0,
    explanation:
      'The scalar triple product of $\\vec{r}-\\vec{r}_1$ with the two edge vectors vanishes iff $\\vec{r}-\\vec{r}_1$ lies in the plane they span.',
  },
  {
    id: 'vect-q14',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: Four points $A,B,C,D$ are coplanar iff $(\\vec{B}-\\vec{A})\\cdot[(\\vec{C}-\\vec{A})\\times(\\vec{D}-\\vec{A})]=0$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — the triple product is the (signed) volume of the parallelepiped they span; zero volume means coplanarity.',
  },
  {
    id: 'vect-q15',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'The shortest distance from a point $P$ to a line through $Q$ with unit direction $\\hat{d}$ is:',
    options: [
      '$\\big|(\\vec{P}-\\vec{Q})\\times\\hat{d}\\big|$',
      '$\\big|(\\vec{P}-\\vec{Q})\\cdot\\hat{d}\\big|$',
      '$\\big|(\\vec{P}-\\vec{Q})\\big|$',
      '$\\big|\\vec{P}\\times\\vec{Q}\\big|$',
    ],
    correctOptionIndex: 0,
    explanation:
      'The cross product isolates the perpendicular component; its magnitude equals the perpendicular distance.',
  },
  {
    id: 'vect-q16',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'The shortest distance between two skew lines with unit directions $\\hat{d}_1,\\hat{d}_2$ and points $\\vec{r}_1,\\vec{r}_2$ on them is:',
    options: [
      '$\\big|(\\vec{r}_1-\\vec{r}_2)\\cdot(\\hat{d}_1\\times\\hat{d}_2)\\big|$',
      '$\\big|(\\vec{r}_1-\\vec{r}_2)\\times(\\hat{d}_1\\times\\hat{d}_2)\\big|$',
      '$\\big|(\\vec{r}_1-\\vec{r}_2)\\big|$',
      '$\\big|(\\vec{r}_1-\\vec{r}_2)\\cdot\\hat{d}_1\\big|$',
    ],
    correctOptionIndex: 0,
    explanation:
      'The common perpendicular is along $\\hat{d}_1\\times\\hat{d}_2$; the distance is the projection of $\\vec{r}_1-\\vec{r}_2$ onto it.',
  },
  {
    id: 'vect-q17',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'If $|\\vec{A}\\times\\vec{B}| = \\vec{A}\\cdot\\vec{B}$ and $\\vec{A}\\cdot\\vec{B}>0$, what is the angle between the vectors?',
    options: ['30°', '45°', '60°', '90°'],
    correctOptionIndex: 1,
    explanation:
      '$AB\\sin\\theta = AB\\cos\\theta$ gives $\\tan\\theta=1$, and $\\cos\\theta>0$ selects $\\theta=45^\\circ$.',
  },
  {
    id: 'vect-q18',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'What is the area of a parallelogram whose diagonals are $\\vec{D}_1$ and $\\vec{D}_2$?',
    options: [
      '$\\tfrac12|\\vec{D}_1\\times\\vec{D}_2|$',
      '$|\\vec{D}_1\\times\\vec{D}_2|$',
      '$\\tfrac14|\\vec{D}_1\\times\\vec{D}_2|$',
      '$|\\vec{D}_1\\cdot\\vec{D}_2|$',
    ],
    correctOptionIndex: 0,
    explanation:
      'The sides are $(\\vec{D}_1\\pm\\vec{D}_2)/2$, and the area is half the magnitude of the diagonal cross product.',
  },
  {
    id: 'vect-q19',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Hard',
    type: 'true-false',
    prompt:
      'True or False: $\\vec{A}\\times(\\vec{B}\\times\\vec{C}) + \\vec{B}\\times(\\vec{C}\\times\\vec{A}) + \\vec{C}\\times(\\vec{A}\\times\\vec{B}) = \\vec{0}$ (the Jacobi identity).',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — applying BAC–CAB to each triple makes all terms cancel in pairs.',
  },
  {
    id: 'vect-q20',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Why does $(\\vec{A}\\times\\vec{B})\\times\\vec{C}$ lie in the plane of $\\vec{A}$ and $\\vec{B}$, even though cross products are "perpendicular"?',
    options: [
      'Because $(\\vec{A}\\times\\vec{B})\\times\\vec{C} = \\vec{B}(\\vec{A}\\cdot\\vec{C}) - \\vec{A}(\\vec{B}\\cdot\\vec{C})$, a linear combination of $\\vec{A}$ and $\\vec{B}$.',
      'Because the cross product is commutative.',
      'Because all vectors lie in one plane.',
      'Because $\\vec{C}$ is perpendicular to $\\vec{A}\\times\\vec{B}$.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The BAC–CAB identity expresses the triple product as a linear combination of $\\vec{A}$ and $\\vec{B}$; the "perpendicularity" refers to each factor of the inner cross product, not the outer result.',
  },

  // ─────────────────────────────────────────────────────────────
  // Vector calculus
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q21',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt: 'If $\\nabla\\cdot\\vec{F}=0$ everywhere, does it follow that $\\vec{F}$ is constant?',
    options: [
      'No — e.g. $\\vec{F}=(y,-x,0)$ has $\\nabla\\cdot\\vec{F}=0$ but varies with position.',
      'Yes — divergence-free fields are constant.',
      'Only if $\\vec{F}$ is also irrotational.',
      'Only in one dimension.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Solenoidal fields need not be uniform; $\\vec{F}=(y,-x,0)$ is a standard counterexample.',
  },
  {
    id: 'vect-q22',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'For $\\vec{r}=x\\hat{i}+y\\hat{j}+z\\hat{k}$, what are $\\nabla\\cdot\\vec{r}$ and $\\nabla\\times\\vec{r}$?',
    options: [
      '$3$ and $\\vec{0}$',
      '$1$ and $\\vec{0}$',
      '$3$ and $2\\vec{r}$',
      '$0$ and $\\vec{0}$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Each Cartesian component contributes one to the divergence, giving $3$; the curl of a radial field vanishes.',
  },
  {
    id: 'vect-q23',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: $\\nabla\\times(\\nabla\\phi)=\\vec{0}$ for any twice-differentiable scalar field $\\phi$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — equality of mixed partials (Clairaut) makes every component of the curl vanish identically.',
  },
  {
    id: 'vect-q24',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Which field has $\\nabla\\times\\vec{F}=\\vec{0}$ away from a singular line but is not conservative there?',
    options: [
      'The magnetic field of a long straight wire, $\\vec{B}\\propto \\hat{\\phi}/\\rho$.',
      'A uniform field $\\vec{F}=\\vec{F}_0$.',
      'The gravitational field $\\vec{g}=-GM\\hat{r}/r^2$.',
      '$\\vec{F}=\\vec{r}$.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The azimuthal field $\\hat{\\phi}/\\rho$ is irrotational away from the wire, but its loop integral is non-zero ($\\mu_0 I$), so it is not a gradient.',
  },
  {
    id: 'vect-q25',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'For $\\vec{F}=\\vec{A}\\times\\vec{r}$ with $\\vec{A}$ constant, what are $\\nabla\\cdot\\vec{F}$ and $\\nabla\\times\\vec{F}$?',
    options: [
      '$0$ and $2\\vec{A}$',
      '$3$ and $\\vec{0}$',
      '$0$ and $\\vec{0}$',
      '$2\\vec{A}$ and $\\vec{0}$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Because $\\vec{A}$ is constant and $\\vec{r}$ has $\\nabla\\cdot\\vec{r}=3$, $\\nabla\\times\\vec{r}=\\vec{0}$, one obtains $\\nabla\\cdot(\\vec{A}\\times\\vec{r})=0$ and $\\nabla\\times(\\vec{A}\\times\\vec{r})=2\\vec{A}$.',
  },
  {
    id: 'vect-q26',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Hard',
    type: 'true-false',
    prompt:
      'True or False: $\\nabla\\cdot(\\vec{A}\\times\\vec{B}) = \\vec{B}\\cdot(\\nabla\\times\\vec{A}) - \\vec{A}\\cdot(\\nabla\\times\\vec{B})$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — this is the standard vector identity for the divergence of a cross product.',
  },
  {
    id: 'vect-q27',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The gravitational field $\\vec{g}=-GM\\hat{r}/r^2$ is conservative.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — $\\vec{g}=-\\nabla\\Phi$ with $\\Phi=-GM/r$, so the line integral is path-independent.',
  },
  {
    id: 'vect-q28',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Hard',
    type: 'numerical',
    prompt:
      'Compute $\\oint \\vec{F}\\cdot d\\vec{r}$ on the unit circle for $\\vec{F}=\\dfrac{(-y,\\,x,\\,0)}{x^2+y^2}$.',
    numericAnswer: 6.283,
    numericTolerance: 0.02,
    unit: '',
    explanation:
      'Parametrize by $\\theta$: $\\vec{F}\\cdot d\\vec{r}=d\\theta$, so the integral is $\\int_0^{2\\pi}d\\theta = 2\\pi \\approx 6.283$.',
  },
  {
    id: 'vect-q29',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Hard',
    type: 'numerical',
    prompt:
      'Compute the directional derivative of $\\phi(x,y,z)=x^2 y + y z^3$ at $(1,2,0)$ in the direction of $(1,-1,1)$. Give the numerical value.',
    numericAnswer: 1.732,
    numericTolerance: 0.02,
    unit: '',
    explanation:
      '$\\nabla\\phi = (2xy,\\,x^2+z^3,\\,3yz^2)$; at $(1,2,0)$ this is $(4,1,0)$. The unit direction is $(1,-1,1)/\\sqrt 3$, so the directional derivative is $(4-1)/\\sqrt 3 = \\sqrt 3 \\approx 1.732$.',
  },
  {
    id: 'vect-q30',
    chapterId: 'vectors',
    topicId: 'vector-calculus',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'If $\\nabla\\times\\vec{F}=\\vec{0}$ and $\\nabla\\cdot\\vec{F}=0$ in a simply-connected region, what follows?',
    options: [
      '$\\vec{F}=-\\nabla\\phi$ with $\\nabla^2\\phi=0$.',
      '$\\vec{F}$ is constant.',
      '$\\vec{F}=\\vec{0}$.',
      '$\\vec{F}=\\nabla\\times\\vec{A}$ with $\\nabla^2\\vec{A}=0$ and $\\nabla\\cdot\\vec{A}\\neq 0$.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Zero curl on a simply-connected domain gives $\\vec{F}=-\\nabla\\phi$; then zero divergence gives $\\nabla^2\\phi=0$ (harmonic).',
  },

  // ─────────────────────────────────────────────────────────────
  // Kinematics (vector form)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q31',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: A particle moving with constant speed along a curved path has acceleration perpendicular to its velocity at every instant.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — constant speed means $d|\\vec{v}|^2/dt=0$, so $\\vec{v}\\cdot\\vec{a}=0$.',
  },
  {
    id: 'vect-q32',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'Can a particle have zero velocity but non-zero acceleration? Zero acceleration but non-zero velocity?',
    options: [
      'Both are possible (top of a vertical throw; uniform motion).',
      'Only the first is possible.',
      'Only the second is possible.',
      'Neither is possible.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Velocity and acceleration are independent; either can vanish while the other is non-zero.',
  },
  {
    id: 'vect-q33',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If $\\vec{a}\\cdot\\vec{v}=0$ at all times, what can you conclude about the speed?',
    options: [
      'The speed is constant, so the "perpendicular acceleration increases speed" intuition is wrong.',
      'The speed increases linearly with time.',
      'The speed decreases linearly with time.',
      'Nothing — perpendicular acceleration always increases speed.',
    ],
    correctOptionIndex: 0,
    explanation:
      '$\\vec{a}\\cdot\\vec{v}=0$ means the acceleration has no tangential component, so the speed $|\\vec{v}|$ is constant.',
  },
  {
    id: 'vect-q34',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Hard',
    type: 'true-false',
    prompt:
      'True or False: A particle moving with $\\vec{a}=-k\\vec{v}$ never comes to rest in finite time.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — $\\vec{v}(t)=\\vec{v}_0 e^{-kt}$ approaches zero only asymptotically.',
  },
  {
    id: 'vect-q35',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'In projectile motion, what is true at the highest point of the trajectory?',
    options: [
      'The velocity and acceleration are perpendicular.',
      'The velocity and acceleration are parallel.',
      'The acceleration is zero.',
      'The velocity is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'At the top the velocity is horizontal while gravity acts vertically, so they are perpendicular. (The vertical velocity component is momentarily zero, not the whole velocity.)',
  },
  {
    id: 'vect-q36',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Which pair of projection angles (same initial speed, level ground) gives the same horizontal range?',
    options: [
      '$\\theta$ and $90^\\circ-\\theta$',
      '$\\theta$ and $\\theta+45^\\circ$',
      '$\\theta$ and $2\\theta$',
      'Only $45^\\circ$ gives the maximum range, so no other pair exists.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The range $R = v_0^2\\sin(2\\theta)/g$ is symmetric under $\\theta\\mapsto 90^\\circ-\\theta$.',
  },
  {
    id: 'vect-q37',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Which three vectors determine the plane of projectile motion in a uniform gravitational field?',
    options: [
      'The initial position $\\vec{r}_0$, the initial velocity $\\vec{v}_0$, and the gravitational acceleration $\\vec{g}$.',
      'Only $\\vec{v}_0$ and $\\vec{g}$.',
      'Only $\\vec{r}_0$ and $\\vec{g}$.',
      'The initial position, velocity, and the total flight time.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The motion stays in the plane spanned by $\\vec{v}_0$ and $\\vec{g}$ through the initial position; all three vectors determine that plane.',
  },
  {
    id: 'vect-q38',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'What is the acceleration of a particle in circular motion in terms of position $\\vec{r}$, angular velocity $\\vec{\\omega}$, and angular acceleration $\\vec{\\alpha}$?',
    options: [
      '$\\vec{a} = -\\omega^2\\vec{r} + \\vec{\\alpha}\\times\\vec{r}$ (for motion in a fixed plane through the origin).',
      '$\\vec{a} = \\vec{\\omega}\\times(\\vec{\\omega}\\times\\vec{r})$ only.',
      '$\\vec{a} = \\vec{\\alpha}\\times\\vec{r}$ only.',
      '$\\vec{a} = \\vec{\\omega}\\cdot\\vec{r}$.',
    ],
    correctOptionIndex: 0,
    explanation:
      'For planar motion with $\\vec{\\omega}\\perp\\vec{r}$, $\\vec{\\omega}\\times(\\vec{\\omega}\\times\\vec{r})=-\\omega^2\\vec{r}$; adding $\\vec{\\alpha}\\times\\vec{r}$ gives the tangential term.',
  },
  {
    id: 'vect-q39',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'A particle moves on a circle with constant speed. Which statements about $\\vec{v}$, $\\vec{\\omega}$, and $\\vec{a}$ are correct?',
    options: [
      '$\\vec{v}\\perp\\vec{\\omega}$, $\\vec{a}\\perp\\vec{v}$, and $\\vec{a}$ points toward the center.',
      '$\\vec{v}\\parallel\\vec{\\omega}$ and $\\vec{a}\\parallel\\vec{v}$.',
      '$\\vec{v}\\perp\\vec{\\omega}$ and $\\vec{a}$ points away from the center.',
      'All three vectors are parallel.',
    ],
    correctOptionIndex: 0,
    explanation:
      '$\\vec{v}=\\vec{\\omega}\\times\\vec{r}$ is perpendicular to $\\vec{\\omega}$; constant speed means $\\vec{a}\\perp\\vec{v}$, and the acceleration is centripetal.',
  },
  {
    id: 'vect-q40',
    chapterId: 'vectors',
    topicId: 'kinematics-vectors',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'A particle has $\\vec{v}=v_0\\hat{t}$ with $v_0$ constant. Does this imply a straight line? Where does the argument fail?',
    options: [
      'It does imply a straight line, since $\\hat{t}$ is constant when the speed is constant. The argument fails if the speed is not constant.',
      'It does not imply a straight line, because $\\hat{t}$ always rotates.',
      'It implies a circle, because $\\hat{t}$ is perpendicular to $\\vec{v}$.',
      'Nothing can be concluded without knowing the acceleration.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A constant vector $\\vec{v}$ integrates to $\\vec{r}=\\vec{r}_0+\\vec{v}t$, a straight line. If $v_0$ were not constant, $\\hat{t}$ could rotate and the path could curve.',
  },

  // ─────────────────────────────────────────────────────────────
  // Dynamics
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q41',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt: 'Is $\\vec{F}=m\\vec{a}$ universally valid?',
    options: [
      'No — variable-mass systems need $\\vec{F}_{\\rm ext}+\\vec{u}_{\\rm rel}\\dot m=m\\dot{\\vec{v}}$, and relativistically $\\vec{F}=d\\vec{p}/dt$ with $\\vec{p}=\\gamma m_0\\vec{v}$.',
      'Yes — it is exact in all regimes.',
      'Only in special relativity.',
      'Only for conservative forces.',
    ],
    correctOptionIndex: 0,
    explanation:
      '$\\vec{F}=m\\vec{a}$ holds in Newtonian mechanics for constant mass. Variable mass and relativistic cases require corrections.',
  },
  {
    id: 'vect-q42',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: Newton second law is invariant under a Galilean transformation $\\vec{r}\\,'=\\vec{r}-\\vec{V}t$ with constant $\\vec{V}$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — the acceleration is unchanged by a constant-velocity boost, so $\\vec{F}=m\\vec{a}$ retains the same form.',
  },
  {
    id: 'vect-q43',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'In a frame accelerating with $\\vec{a}_0$ relative to an inertial frame, what is the effective force?',
    options: [
      '$\\vec{F}_{\\rm eff}=\\vec{F}-m\\vec{a}_0$',
      '$\\vec{F}_{\\rm eff}=\\vec{F}+m\\vec{a}_0$',
      '$\\vec{F}_{\\rm eff}=\\vec{F}$',
      '$\\vec{F}_{\\rm eff}=\\vec{F}-\\vec{a}_0$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Substituting $\\vec{a}=\\vec{a}\\, '+\\vec{a}_0$ into $\\vec{F}=m\\vec{a}$ gives $m\\vec{a}\\, '=\\vec{F}-m\\vec{a}_0$; the extra $-m\\vec{a}_0$ is the fictitious force.',
  },
  {
    id: 'vect-q44',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt: 'Is the normal force always perpendicular to the contact surface?',
    options: [
      'Yes — it is by definition the perpendicular component of the contact force. With friction, the total contact force is not perpendicular.',
      'No — the normal force tilts with friction.',
      'Yes, and it always equals $mg$ in magnitude.',
      'Only on horizontal surfaces.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The normal force is the perpendicular component of the contact force by definition; the tangential component is friction.',
  },
  {
    id: 'vect-q45',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'A block rests on an accelerating wedge. Why is the normal force not equal to $mg\\cos\\theta$?',
    options: [
      'Because the block accelerates along the wedge, the acceleration has a component along the normal that requires a correction to $N=mg\\cos\\theta$.',
      'Because the normal force is always vertical.',
      'Because the wedge surface is curved.',
      'Because the normal force is zero in an accelerating frame.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Resolving forces in the wedge frame, the perpendicular component equation picks up a term $ma\\sin\\theta$, so $N=mg\\cos\\theta$ holds only when the wedge is inertial (not accelerating).',
  },
  {
    id: 'vect-q46',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Why is angular velocity $\\vec{\\omega}$ a pseudovector rather than a true vector?',
    options: [
      'It is unchanged under spatial reflection, unlike a true polar vector such as $\\vec{v}$.',
      'It changes sign under reflection like a true vector.',
      'It has zero magnitude under reflection.',
      'It cannot be added to other vectors.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Under parity, $\\vec{v}\\to-\\vec{v}$ and $\\vec{r}\\to-\\vec{r}$, but $\\vec{v}=\\vec{\\omega}\\times\\vec{r}$ requires $\\vec{\\omega}\\to\\vec{\\omega}$ — the defining property of a pseudovector.',
  },
  {
    id: 'vect-q47',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt: 'Why is the centrifugal force called a "fictitious" force?',
    options: [
      'Because it appears only in the rotating frame; in the inertial frame the only force is centripetal.',
      'Because its magnitude is zero.',
      'Because it does not affect motion.',
      'Because it is perpendicular to the velocity.',
    ],
    correctOptionIndex: 0,
    explanation:
      'It is a bookkeeping term introduced by transforming to a rotating frame; no physical agent produces it.',
  },
  {
    id: 'vect-q48',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'A particle is at rest in an inertial frame. What is the net pseudo-force on it when viewed from a frame rotating with angular velocity $\\vec{\\Omega}$?',
    options: [
      '$-m\\vec{\\Omega}\\times(\\vec{\\Omega}\\times\\vec{r})$ (the centrifugal term).',
      '$-2m\\vec{\\Omega}\\times\\vec{v}\\, \'$ (the Coriolis term) plus the centrifugal term.',
      'Only the Coriolis term.',
      'The net pseudo-force is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'In the rotating frame the particle appears to move with $\\vec{v}\\, \'=-\\vec{\\Omega}\\times\\vec{r}$, so the Coriolis term is $2m\\vec{\\Omega}\\times(\\vec{\\Omega}\\times\\vec{r})$ and the centrifugal term is $-m\\vec{\\Omega}\\times(\\vec{\\Omega}\\times\\vec{r})$. They combine to the total pseudo-force $-m\\vec{\\Omega}\\times(\\vec{\\Omega}\\times\\vec{r})$.',
  },
  {
    id: 'vect-q49',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Why is tension uniform along a massless string with no tangential forces?',
    options: [
      'Because the net force on any massless segment must vanish, so $\\vec{T}$ is the same vector on both ends of every segment.',
      'Because tension is always a scalar.',
      'Because gravity pulls equally on both ends.',
      'Because the string is straight.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A massless element has zero mass, so the net force on it is zero; therefore the tension vectors on its two sides must be equal and opposite, implying constant tension magnitude along the string.',
  },
  {
    id: 'vect-q50',
    chapterId: 'vectors',
    topicId: 'dynamics-vectors',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Which is the correct vector rocket equation?',
    options: [
      '$m\\dot{\\vec{v}} = \\vec{F}_{\\rm ext} - \\vec{u}_{\\rm rel}\\dot m$',
      '$m\\dot{\\vec{v}} = \\vec{F}_{\\rm ext} + \\vec{u}_{\\rm rel}\\dot m$',
      '$\\vec{F}_{\\rm ext} = m\\vec{v}$',
      '$m\\dot{\\vec{v}} = \\vec{F}_{\\rm ext}$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Momentum balance gives $\\vec{F}_{\\rm ext}=d(m\\vec{v})/dt=m\\dot{\\vec{v}}+\\dot m\\vec{v}$ with the exhaust velocity entering through the relative velocity term.',
  },

  // ─────────────────────────────────────────────────────────────
  // Work, energy, line integrals
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q51',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The work done by friction on a body is always negative.',
    options: ['True', 'False'],
    correctOptionIndex: 1,
    explanation:
      'False — e.g. a block on the flatbed of an accelerating truck is accelerated forward by static friction, which does positive work on it.',
  },
  {
    id: 'vect-q52',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Hard',
    type: 'true-false',
    prompt:
      'True or False: When a block rests on an accelerating wedge, the normal force does non-zero work on the block.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — the contact point moves as the wedge accelerates, so $\\vec{N}\\cdot d\\vec{r}\\neq 0$ in the ground frame. Energy is transferred between block and wedge.',
  },
  {
    id: 'vect-q53',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: For a central force $\\vec{F}=f(r)\\hat{r}$, the work depends only on the endpoints.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — any central force is conservative because $\\nabla\\times(f(r)\\hat{r})=\\vec{0}$.',
  },
  {
    id: 'vect-q54',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Can a force of constant magnitude do zero work? Can a force of zero magnitude do work?',
    options: [
      'Yes (centripetal force does zero work); a zero force always does zero work.',
      'No; yes.',
      'No; no.',
      'Yes; yes, in some frames.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Work is $\\vec{F}\\cdot d\\vec{r}$; a constant-magnitude force perpendicular to the displacement does zero work, while zero force gives zero work identically.',
  },
  {
    id: 'vect-q55',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'How is the work–energy theorem frame-dependent under a Galilean boost?',
    options: [
      'Both work and kinetic energy change under a boost, but the equality $W=\\Delta K$ holds in every inertial frame.',
      'Only work changes; kinetic energy is invariant.',
      'Only kinetic energy changes; work is invariant.',
      'The theorem fails in non-inertial frames only.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Under $\\vec{v}\\to\\vec{v}+\\vec{V}$, $W$ shifts by $\\vec{V}\\cdot\\int\\vec{F}\\,dt$ and $K$ shifts correspondingly; the equality remains valid in any inertial frame.',
  },
  {
    id: 'vect-q56',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Why can a velocity-dependent force such as $\\vec{F}=-k|\\vec{v}|\\vec{v}$ not be derived from a potential?',
    options: [
      'Because it depends on velocity, which is not a function of position alone; energy is dissipated rather than conserved.',
      'Because it is always zero.',
      'Because it is conservative.',
      'Because $k$ is a constant.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A potential $U(\\vec{r})$ cannot encode velocity dependence; such forces do path-dependent work, so mechanical energy is not conserved.',
  },
  {
    id: 'vect-q57',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: The work done by gravity between two heights is independent of the path taken.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — gravity is conservative; the work depends only on the initial and final heights.',
  },
  {
    id: 'vect-q58',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The work done by a constraint force is always zero.',
    options: ['True', 'False'],
    correctOptionIndex: 1,
    explanation:
      'False — a block on an accelerating wedge has the normal force doing non-zero work on it in the ground frame.',
  },
  {
    id: 'vect-q59',
    chapterId: 'vectors',
    topicId: 'work-energy-vectors',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If $\\vec{F}=-\\nabla U$, why does the additive constant in $U$ not matter physically?',
    options: [
      'Because only differences in $U$ (gradients) enter the force and energy balance.',
      'Because the constant is always zero.',
      'Because $U$ must be zero at infinity.',
      'Because the constant cancels the potential energy entirely.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The force depends on $\\nabla U$, which is insensitive to an additive constant; observable energies depend only on differences of $U$.',
  },

  // ─────────────────────────────────────────────────────────────
  // Angular momentum and torque
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q60',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'If the origin is shifted by $\\vec{a}$, what is the new angular momentum $\\vec{L}\\, \'$ in terms of the old $\\vec{L}$, $\\vec{a}$, and the momentum $\\vec{p}$?',
    options: [
      '$\\vec{L}\\, \' = \\vec{L} + \\vec{a}\\times\\vec{p}$',
      '$\\vec{L}\\, \' = \\vec{L} - \\vec{a}\\times\\vec{p}$',
      '$\\vec{L}\\, \' = \\vec{L}$',
      '$\\vec{L}\\, \' = \\vec{L} + \\vec{a}\\cdot\\vec{p}$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Substituting $\\vec{r}\\, \'=\\vec{r}-\\vec{a}$ gives $\\vec{L}\\, \'=\\vec{r}\\, \'\\times\\vec{p}=\\vec{L}-\\vec{a}\\times\\vec{p}$. (The sign depends on the shift convention; here $\\vec{a}$ is the shift of the origin.)',
  },
  {
    id: 'vect-q61',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'For $\\dot{\\vec{L}}=\\vec{\\tau}$ to hold, about which point must both $\\vec{L}$ and $\\vec{\\tau}$ be computed?',
    options: [
      'The same point — and if that point accelerates, additional terms appear unless the point is the center of mass or fixed in an inertial frame.',
      'Any point, independently for $\\vec{L}$ and $\\vec{\\tau}$.',
      'The center of mass only.',
      'The origin only.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The equation is derived about a single point; for an accelerating reference point an extra $\\vec{v}_{\\rm pt}\\times\\vec{p}$ term must be added (absent for the CM or a fixed origin).',
  },
  {
    id: 'vect-q62',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Easy',
    type: 'conceptual',
    prompt:
      'A particle moves uniformly on a circle with constant angular speed. About which point is its angular momentum constant in both magnitude and direction?',
    options: [
      'About the center of the circle — $\\vec{L}=mr^2\\omega\\,\\hat{n}$ is fixed.',
      'About any point in space.',
      'About no point.',
      'Only about a point on the circle.',
    ],
    correctOptionIndex: 0,
    explanation:
      'About the center, $\\vec{r}$ and $\\vec{p}$ rotate together so their cross product is constant. About other points $\\vec{L}$ generally varies.',
  },
  {
    id: 'vect-q63',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'A particle moves in a straight line with constant velocity. About any point, what is its angular momentum?',
    options: [
      '$\\vec{L}=m\\vec{r}\\times\\vec{v}$ has constant magnitude $m v d$, where $d$ is the perpendicular distance to the line.',
      'It is zero about every point.',
      'It grows linearly with time.',
      'It is zero only about the origin.',
    ],
    correctOptionIndex: 0,
    explanation:
      'In uniform straight-line motion, $\\vec{r}\\times\\vec{v}$ is constant about any fixed point, with magnitude $m v d$.',
  },
  {
    id: 'vect-q64',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: For a central force $\\vec{F}=f(r)\\hat{r}$, the angular momentum about the origin is conserved.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — $\\vec{\\tau}=\\vec{r}\\times f(r)\\hat{r}=\\vec{0}$, so $\\dot{\\vec{L}}=\\vec{0}$.',
  },
  {
    id: 'vect-q65',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt: 'How is Kepler second law derived from conservation of angular momentum?',
    options: [
      'The areal velocity $dA/dt = \\tfrac12 r^2\\dot\\theta = L/(2m)$ is constant when $L$ is conserved.',
      'Because the orbit is an ellipse by definition.',
      'Because the force is proportional to $r$.',
      'Because angular momentum is zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Equal areas in equal times is exactly the statement $dA/dt=L/(2m)=\\text{const}$.',
  },
  {
    id: 'vect-q66',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The total angular momentum of a system equals $\\vec{L}=\\vec{L}_{\\rm cm}+\\vec{L}_{\\rm about\\,cm}$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — splitting $\\vec{r}_i=\\vec{R}_{\\rm cm}+\\vec{r}_i\\,\'$ gives this decomposition, which is central to rigid-body dynamics.',
  },
  {
    id: 'vect-q67',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'In a rotating body frame, what is the relation between the inertial and body time derivatives of $\\vec{L}$?',
    options: [
      '$\\big(d\\vec{L}/dt\\big)_{\\rm inertial}=\\big(d\\vec{L}/dt\\big)_{\\rm body}+\\vec{\\omega}\\times\\vec{L}$',
      '$\\big(d\\vec{L}/dt\\big)_{\\rm inertial}=\\big(d\\vec{L}/dt\\big)_{\\rm body}-\\vec{\\omega}\\times\\vec{L}$',
      '$\\big(d\\vec{L}/dt\\big)_{\\rm inertial}=\\big(d\\vec{L}/dt\\big)_{\\rm body}$',
      '$\\big(d\\vec{L}/dt\\big)_{\\rm body}=\\vec{\\omega}\\times\\vec{L}$',
    ],
    correctOptionIndex: 0,
    explanation:
      'The rotating-frame time derivative picks up the $\\vec{\\omega}\\times\\vec{L}$ term, which is responsible for gyroscopic effects.',
  },
  {
    id: 'vect-q68',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt: 'Give a concrete example where $\\vec{L}$ and $\\vec{\\omega}$ are not parallel.',
    options: [
      'A diatomic molecule rotating about an axis not perpendicular to its bond, or any asymmetric rigid top.',
      'A particle moving in a straight line.',
      'A uniform sphere spinning about a diameter.',
      'A point particle.',
    ],
    correctOptionIndex: 0,
    explanation:
      'For non-spherical bodies the inertia tensor is anisotropic, so $\\vec{L}=\\mathbf{I}\\vec{\\omega}$ is not parallel to $\\vec{\\omega}$ in general.',
  },
  {
    id: 'vect-q69',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Angular momentum is a pseudovector. What is the cross product of two true (polar) vectors?',
    options: [
      'A pseudovector — it is unchanged under spatial reflection.',
      'A true vector — it flips sign under reflection.',
      'A scalar.',
      'Undefined under reflection.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Under parity, $\\vec{A}\\to-\\vec{A}$ and $\\vec{B}\\to-\\vec{B}$, so $\\vec{A}\\times\\vec{B}\\to+\\vec{A}\\times\\vec{B}$: the result is a pseudovector.',
  },
  {
    id: 'vect-q70',
    chapterId: 'vectors',
    topicId: 'angular-momentum-torque',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Why is $\\vec{L}=\\mathbf{I}\\vec{\\omega}$ with an inertia tensor $\\mathbf{I}$ rather than a scalar?',
    options: [
      'Because the mass distribution responds differently to rotation about different axes; a scalar cannot encode that anisotropy.',
      'Because angular velocity is a scalar.',
      'Because $\\mathbf{I}$ must be diagonal in every frame.',
      'Because $\\vec{L}$ and $\\vec{\\omega}$ are always parallel.',
    ],
    correctOptionIndex: 0,
    explanation:
      'A scalar moment of inertia would force $\\vec{L}\\parallel\\vec{\\omega}$; the tensor captures the directional dependence of the response of the mass distribution.',
  },

  // ─────────────────────────────────────────────────────────────
  // Rotational dynamics and inertia tensor
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q71',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Under what circumstances can the moment of inertia be treated as a scalar rather than a tensor?',
    options: [
      'For rotation about a fixed axis, or for a spherical top where $I_1=I_2=I_3$.',
      'Always — the moment of inertia is a scalar by definition.',
      'Only in two dimensions.',
      'Only for massless bodies.',
    ],
    correctOptionIndex: 0,
    explanation:
      'When rotation is confined to one axis (or the body is spherically symmetric), the relevant component is a single scalar.',
  },
  {
    id: 'vect-q72',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The principal axes of a symmetric inertia tensor are mutually orthogonal.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — real symmetric matrices are diagonalizable by an orthogonal transformation (the spectral theorem).',
  },
  {
    id: 'vect-q73',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: For a spherical top, $\\vec{L}$ is parallel to $\\vec{\\omega}$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — all principal moments are equal, so $\\vec{L}=I\\vec{\\omega}$ with a scalar $I$.',
  },
  {
    id: 'vect-q74',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'What are the principal moments of inertia of a uniform rectangular plate (sides $a,b$, mass $m$) about its center, and what happens when $a=b$?',
    options: [
      '$I_x=mb^2/12$, $I_y=ma^2/12$, $I_z=m(a^2+b^2)/12$; for $a=b$, $I_x=I_y$ and $I_z=I_x+I_y$.',
      '$I_x=ma^2/12$, $I_y=mb^2/12$, $I_z=0$.',
      '$I_x=I_y=ma^2/6$, $I_z=ma^2/12$.',
      'All three are equal for every rectangle.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The thin-plate (lamina) theorem gives $I_z=I_x+I_y$; for a square the two in-plane moments are equal.',
  },
  {
    id: 'vect-q75',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'What does a negative product of inertia $I_{xy}<0$ mean physically?',
    options: [
      'More mass lies in quadrants II and IV relative to the axes than in I and III.',
      'The body has negative mass.',
      'The moment of inertia about $x$ is negative.',
      'The body cannot rotate.',
    ],
    correctOptionIndex: 0,
    explanation:
      '$I_{xy}=-\\int xy\\,dm$; a negative value means $xy$ is positive on average in the mass distribution, i.e. more mass in quadrants II and IV.',
  },
  {
    id: 'vect-q76',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Which statement correctly reflects the parallel-axis theorem?',
    options: [
      '$I=I_{\\rm cm}+Md^2$, with the reference axis through the center of mass.',
      '$I=I_{\\rm cm}-Md^2$.',
      '$I=I_{\\rm cm}+Md$ (linear in $d$).',
      'The theorem holds for any reference axis, not just the CM.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The cross term vanishes only when the origin is the CM, which is why the theorem is stated specifically about the CM axis.',
  },
  {
    id: 'vect-q77',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'For a symmetric top, what do Euler equations predict about $\\omega_3$ and about $\\omega_1,\\omega_2$?',
    options: [
      '$\\omega_3$ is constant; $\\omega_1,\\omega_2$ precess with frequency $(I_3-I_1)\\omega_3/I_1$.',
      'All three components are constant.',
      '$\\omega_3$ oscillates; $\\omega_1,\\omega_2$ decay.',
      '$\\omega_1,\\omega_2,\\omega_3$ all grow exponentially.',
    ],
    correctOptionIndex: 0,
    explanation:
      'With $I_1=I_2$, the $\\omega_3$ equation decouples (constant); the other two satisfy a linear system whose solutions oscillate at the stated frequency.',
  },
  {
    id: 'vect-q78',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Hard',
    type: 'conceptual',
    prompt:
      'Why is rotation about the intermediate principal axis unstable (tennis racket theorem)?',
    options: [
      'Because simultaneous conservation of angular momentum and energy cannot be maintained for small perturbations about the intermediate axis, so they grow exponentially.',
      'Because the intermediate axis has zero moment of inertia.',
      'Because angular momentum is not conserved about that axis.',
      'Because energy is not conserved in rigid-body motion.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Linearizing Euler equations about rotation along the intermediate axis gives a growing mode; the other two axes give bounded oscillations.',
  },
  {
    id: 'vect-q79',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'For a rapidly spinning top under gravity, what is the vector relation that determines gyroscopic precession?',
    options: [
      '$\\vec{\\tau}=d\\vec{L}/dt=\\vec{\\Omega}\\times\\vec{L}$',
      '$\\vec{\\tau}=\\vec{L}\\times\\vec{\\Omega}$',
      '$\\vec{\\tau}=m\\vec{g}$',
      '$\\vec{\\tau}=\\vec{\\omega}\\cdot\\vec{L}$',
    ],
    correctOptionIndex: 0,
    explanation:
      'The gravitational torque changes the direction (not the magnitude) of the large spin angular momentum; this precession equation gives $\\vec{\\Omega}=\\vec{\\tau}/L$ for small tilt.',
  },
  {
    id: 'vect-q80',
    chapterId: 'vectors',
    topicId: 'rotational-dynamics',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: For a sphere rolling without slipping on a plane, $\\vec{v}_{\\rm cm}=\\vec{\\omega}\\times\\vec{R}$, where $\\vec{R}$ points from the contact point to the center.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — the contact point is instantaneously at rest; $\\vec{v}_{\\rm cm}=\\vec{\\omega}\\times\\vec{R}$ is the rolling-without-slipping condition.',
  },

  // ─────────────────────────────────────────────────────────────
  // Central forces and orbits
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q81',
    chapterId: 'vectors',
    topicId: 'central-forces',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt: 'Which central forces are conservative?',
    options: [
      'All of them — $\\nabla\\times(f(r)\\hat{r})=\\vec{0}$ for any radial function $f(r)$.',
      'Only $f(r)\\propto 1/r^2$.',
      'Only $f(r)\\propto r$.',
      'Only spherically symmetric potentials give conservative forces.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The curl of any radial field vanishes identically, so every central force is conservative regardless of the radial dependence.',
  },
  {
    id: 'vect-q82',
    chapterId: 'vectors',
    topicId: 'central-forces',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: Motion under a central force is always confined to a plane perpendicular to $\\vec{L}$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — $\\vec{L}$ is constant and $\\vec{r}\\cdot\\vec{L}=0$, so the position vector always lies in a fixed plane.',
  },
  {
    id: 'vect-q83',
    chapterId: 'vectors',
    topicId: 'central-forces',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Which is Binet equation for the orbit $u(\\theta)=1/r(\\theta)$ under a central force?',
    options: [
      '$u\\, \'+u = -\\dfrac{m F(1/u)}{L^2 u^2}$',
      '$u\\, \'+u = \\dfrac{m F(1/u)}{L^2 u^2}$',
      '$u\\, \'-u = -\\dfrac{m F(1/u)}{L^2 u^2}$',
      '$u\\, \'+2u = \\dfrac{m F(1/u)}{L^2 u^2}$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Binet equation follows from the radial equation with $L=mr^2\\dot\\theta$: $u\\, \'+u=-mF(1/u)/(L^2u^2)$.',
  },
  {
    id: 'vect-q84',
    chapterId: 'vectors',
    topicId: 'central-forces',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'For a power-law central force $F=-kr^n$, circular orbits are stable when:',
    options: [
      '$n>-3$',
      '$n>0$',
      '$n>-1$',
      'They are always stable.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The effective potential has a minimum with $V_{\\rm eff}\\,\'\'>0$ iff $n>-3$; for $n\\le -3$ the circular orbit is unstable.',
  },
  {
    id: 'vect-q85',
    chapterId: 'vectors',
    topicId: 'central-forces',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'For the inverse-square force, what is the Runge–Lenz vector and what is its role?',
    options: [
      '$\\vec{A}=\\vec{p}\\times\\vec{L}-mk\\hat{r}/r$; it is conserved and points along the major axis, fixing the orbit orientation.',
      '$\\vec{A}=\\vec{L}\\times\\vec{r}$; it is the angular momentum itself.',
      'It is zero in every orbit.',
      'It equals the total energy.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The Runge–Lenz vector is an additional conserved quantity special to the $1/r^2$ force; its direction fixes the perihelion of the Kepler ellipse.',
  },
  {
    id: 'vect-q86',
    chapterId: 'vectors',
    topicId: 'central-forces',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'According to Bertrand theorem, which central forces give closed orbits for all bounded motion?',
    options: [
      '$F\\propto 1/r^2$ and $F\\propto r$',
      'Only $F\\propto 1/r^2$',
      'Only $F\\propto r$',
      'Any attractive power law',
    ],
    correctOptionIndex: 0,
    explanation:
      'Bertrand theorem identifies exactly two: the inverse-square force and the harmonic-oscillator force.',
  },
  {
    id: 'vect-q87',
    chapterId: 'vectors',
    topicId: 'central-forces',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Under an inverse-square central force, which conic corresponds to each sign of total energy?',
    options: [
      '$E<0$: ellipse; $E=0$: parabola; $E>0$: hyperbola.',
      '$E<0$: hyperbola; $E>0$: ellipse.',
      'All orbits are circles.',
      'All orbits are parabolas.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The orbit is $r=p/(1+e\\cos\\theta)$ with eccentricity set by $E$; the three signs give the three conic types.',
  },
  {
    id: 'vect-q88',
    chapterId: 'vectors',
    topicId: 'central-forces',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The two-body problem under gravity reduces to a one-body problem in the relative coordinate $\\vec{r}=\\vec{r}_1-\\vec{r}_2$ with reduced mass $\\mu=m_1m_2/(m_1+m_2)$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — the center-of-mass motion decouples, and the relative motion is a one-body problem with $\\mu$.',
  },

  // ─────────────────────────────────────────────────────────────
  // Curvilinear coordinates and moving bases
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q89',
    chapterId: 'vectors',
    topicId: 'curvilinear-coordinates',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'In polar coordinates, what are $\\dot{\\hat{e}}_r$ and $\\dot{\\hat{e}}_\\theta$?',
    options: [
      '$\\dot{\\hat{e}}_r=\\dot\\theta\\hat{e}_\\theta$ and $\\dot{\\hat{e}}_\\theta=-\\dot\\theta\\hat{e}_r$',
      '$\\dot{\\hat{e}}_r=-\\dot\\theta\\hat{e}_\\theta$ and $\\dot{\\hat{e}}_\\theta=\\dot\\theta\\hat{e}_r$',
      '$\\dot{\\hat{e}}_r=\\dot\\theta\\hat{e}_\\theta$ and $\\dot{\\hat{e}}_\\theta=\\dot\\theta\\hat{e}_r$',
      'Both are zero.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Differentiating the unit vectors $\\hat{e}_r=(\\cos\\theta,\\sin\\theta)$ and $\\hat{e}_\\theta=(-\\sin\\theta,\\cos\\theta)$ gives these relations.',
  },
  {
    id: 'vect-q90',
    chapterId: 'vectors',
    topicId: 'curvilinear-coordinates',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'Why can one not simply differentiate the components of velocity in polar coordinates to obtain acceleration?',
    options: [
      'Because the polar basis vectors themselves rotate with position, contributing extra terms.',
      'Because polar coordinates are not orthogonal.',
      'Because velocity in polar coordinates is a scalar.',
      'Because acceleration is always radial.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The frame vectors $\\hat{e}_r,\\hat{e}_\\theta$ vary with $\\theta$; differentiating $\\vec{v}$ requires differentiating both components and basis vectors.',
  },
  {
    id: 'vect-q91',
    chapterId: 'vectors',
    topicId: 'curvilinear-coordinates',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'In spherical coordinates, which is the correct velocity expression?',
    options: [
      '$\\vec{v}=\\dot r\\hat{e}_r+r\\dot\\theta\\hat{e}_\\theta+r\\sin\\theta\\,\\dot\\phi\\,\\hat{e}_\\phi$',
      '$\\vec{v}=\\dot r\\hat{e}_r+r\\dot\\phi\\hat{e}_\\phi$',
      '$\\vec{v}=r\\dot\\theta\\hat{e}_\\theta+r\\dot\\phi\\hat{e}_\\phi$',
      '$\\vec{v}=\\dot r\\hat{e}_r+r\\dot\\phi\\hat{e}_\\theta$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Each velocity component is the corresponding scale factor times the rate of the coordinate: $h_r=1$, $h_\\theta=r$, $h_\\phi=r\\sin\\theta$.',
  },
  {
    id: 'vect-q92',
    chapterId: 'vectors',
    topicId: 'curvilinear-coordinates',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: In cylindrical coordinates, $\\dot{\\hat{e}}_\\rho=\\dot\\phi\\hat{e}_\\phi$ and $\\dot{\\hat{e}}_\\phi=-\\dot\\phi\\hat{e}_\\rho$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — differentiating $\\hat{e}_\\rho=(\\cos\\phi,\\sin\\phi)$ gives exactly these relations.',
  },
  {
    id: 'vect-q93',
    chapterId: 'vectors',
    topicId: 'curvilinear-coordinates',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: Unit vectors in curvilinear coordinates depend on position, while Cartesian unit vectors do not.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — curvilinear basis vectors point along changing coordinate directions, whereas Cartesian directions are fixed.',
  },
  {
    id: 'vect-q94',
    chapterId: 'vectors',
    topicId: 'curvilinear-coordinates',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'In spherical coordinates, $\\vec{r}=r\\hat{e}_r$. Why does it not follow that $\\nabla\\cdot\\vec{r}=1$?',
    options: [
      'Because $\\hat{e}_r$ itself depends on position, so $\\nabla\\cdot(r\\hat{e}_r)=3\\neq 1$.',
      'Because $\\vec{r}$ is not a vector in spherical coordinates.',
      'Because $\\nabla\\cdot\\vec{r}=0$ in spherical coordinates.',
      'Because the divergence is defined only in Cartesian coordinates.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The correct divergence is $3$; the naive $1$ ignores the position dependence of the radial unit vector.',
  },
  {
    id: 'vect-q95',
    chapterId: 'vectors',
    topicId: 'curvilinear-coordinates',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt: 'What role do Christoffel symbols play in curvilinear kinematics?',
    options: [
      'They encode the position-dependence of the basis, giving extra terms like $\\Gamma^\\theta_{r\\theta}\\dot r\\dot\\theta$ in the acceleration.',
      'They are the components of the acceleration itself.',
      'They vanish in every coordinate system.',
      'They are the components of the velocity.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Christoffel symbols appear because the basis vectors change with position; the acceleration picks up quadratic velocity terms weighted by them.',
  },
  {
    id: 'vect-q96',
    chapterId: 'vectors',
    topicId: 'curvilinear-coordinates',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: In an orthogonal curvilinear system with scale factors $h_i$, the velocity component along $\\hat{e}_i$ is $h_i\\dot q_i$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — the physical velocity component is the scale factor times the rate of change of the coordinate.',
  },

  // ─────────────────────────────────────────────────────────────
  // Rigid body motion
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q97',
    chapterId: 'vectors',
    topicId: 'rigid-body-motion',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: A rigid body has exactly six degrees of freedom.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — three translational plus three rotational (Euler angles).',
  },
  {
    id: 'vect-q98',
    chapterId: 'vectors',
    topicId: 'rigid-body-motion',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The velocity of any point of a rigid body can be written as $\\vec{v}=\\vec{v}_{\\rm cm}+\\vec{\\omega}\\times\\vec{r}\\,\'$, where $\\vec{r}\\,\'$ is measured from the center of mass.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — this is the standard rigid-body velocity decomposition.',
  },
  {
    id: 'vect-q99',
    chapterId: 'vectors',
    topicId: 'rigid-body-motion',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Do finite rotations commute? Do infinitesimal rotations commute?',
    options: [
      'Finite rotations generally do not commute; infinitesimal rotations do (to first order).',
      'Both commute.',
      'Neither commutes.',
      'Infinitesimal rotations do not commute; finite ones do.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Products of finite rotation matrices generally depend on order, but to first order in the angles the commutator vanishes.',
  },
  {
    id: 'vect-q100',
    chapterId: 'vectors',
    topicId: 'rigid-body-motion',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt: 'Why are three Euler angles needed to specify a rigid-body orientation?',
    options: [
      'Because $SO(3)$ has three independent parameters; fewer cannot fix the orientation of a frame in space.',
      'Because one angle per dimension is required.',
      'Because angular velocity is a vector.',
      'Because the inertia tensor is symmetric.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The rotation group $SO(3)$ is three-dimensional, so three angles (e.g. precession, nutation, spin) are necessary and sufficient.',
  },
  {
    id: 'vect-q101',
    chapterId: 'vectors',
    topicId: 'rigid-body-motion',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'In terms of Euler angle rates, which expression correctly gives the angular velocity?',
    options: [
      '$\\vec{\\omega}=\\dot\\phi\\,\\hat{k}+\\dot\\theta\\,\\hat{n}\\,\'+\\dot\\psi\\,\\hat{k}\\,\'\\,\'$ (with the corresponding rotated axes).',
      '$\\vec{\\omega}=\\dot\\phi+\\dot\\theta+\\dot\\psi$ as a scalar sum.',
      '$\\vec{\\omega}=\\dot\\theta\\,\\hat{k}$ only.',
      '$\\vec{\\omega}=\\dot\\psi\\,\\hat{k}$ only.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Each Euler angle contributes an angular velocity along its own instantaneous axis; the total is their vector sum.',
  },
  {
    id: 'vect-q102',
    chapterId: 'vectors',
    topicId: 'rigid-body-motion',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Angular velocity $\\vec{\\omega}$ is a pseudovector. Which statement reflects this?',
    options: [
      'Under spatial reflection $\\vec{\\omega}$ is unchanged, unlike a true vector such as $\\vec{v}$; yet it adds vectorially under rotations.',
      'It flips sign under spatial reflection.',
      'It is a scalar.',
      'It cannot be added to other vectors.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The reflection behaviour is the defining property of a pseudovector; vector addition is unaffected.',
  },
  {
    id: 'vect-q103',
    chapterId: 'vectors',
    topicId: 'rigid-body-motion',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The instantaneous axis of rotation of a rigid body may lie outside the body itself.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — e.g. a spinning top whose instantaneous axis passes through a point not contained in the material of the top.',
  },
  {
    id: 'vect-q104',
    chapterId: 'vectors',
    topicId: 'rigid-body-motion',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Why does the plane of oscillation of a Foucault pendulum precess, and how does the rate depend on latitude?',
    options: [
      'The Coriolis force deflects the bob; the precession rate is $\\Omega\\sin\\lambda$, where $\\lambda$ is latitude.',
      'The centrifugal force tilts the pendulum; the rate is $\\Omega\\cos\\lambda$.',
      'The Earth magnetic field twists the plane; the rate is constant.',
      'The pendulum precesses due to the gravitational gradient alone.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The horizontal component of the Coriolis force rotates the oscillation plane at a rate proportional to the vertical component of Earth angular velocity, $\\Omega\\sin\\lambda$.',
  },

  // ─────────────────────────────────────────────────────────────
  // Miscellaneous tricky problems
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q105',
    chapterId: 'vectors',
    topicId: 'tricky-vector-concepts',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The sum of the three vectors joining the centroid of a triangle to its vertices is zero.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — $\\vec{G}=(\\vec{A}+\\vec{B}+\\vec{C})/3$, so $\\vec{A}+\\vec{B}+\\vec{C}-3\\vec{G}=\\vec{0}$.',
  },
  {
    id: 'vect-q106',
    chapterId: 'vectors',
    topicId: 'tricky-vector-concepts',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: The scalar triple product is invariant under cyclic permutation and equals the (signed) volume of the parallelepiped spanned by the three vectors.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — both properties follow from the determinant representation of the triple product.',
  },
  {
    id: 'vect-q107',
    chapterId: 'vectors',
    topicId: 'tricky-vector-concepts',
    difficulty: 'Hard',
    type: 'true-false',
    prompt:
      'True or False: If $\\vec{A}\\cdot\\vec{B}=0$ and $\\vec{A}\\times\\vec{B}=\\vec{0}$ simultaneously, then $\\vec{A}=\\vec{0}$ or $\\vec{B}=\\vec{0}$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — perpendicular and parallel can only happen if at least one vector is zero.',
  },
  {
    id: 'vect-q108',
    chapterId: 'vectors',
    topicId: 'tricky-vector-concepts',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'From $\\vec{A}\\times\\vec{B}=\\vec{A}\\times\\vec{C}$ one cannot conclude $\\vec{B}=\\vec{C}$. What does $\\vec{A}\\times(\\vec{B}-\\vec{C})=\\vec{0}$ imply?',
    options: [
      '$\\vec{B}-\\vec{C}$ is parallel to $\\vec{A}$, i.e. $\\vec{B}=\\vec{C}+\\lambda\\vec{A}$.',
      '$\\vec{B}=\\vec{C}$ always.',
      '$\\vec{A}$ is perpendicular to $\\vec{B}-\\vec{C}$.',
      '$\\vec{B}-\\vec{C}=\\vec{0}$.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The cross product vanishes for parallel vectors; $\\vec{B}-\\vec{C}$ may be any multiple of $\\vec{A}$.',
  },
  {
    id: 'vect-q109',
    chapterId: 'vectors',
    topicId: 'tricky-vector-concepts',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: Equality in the Cauchy–Schwarz inequality holds iff $\\vec{A}$ and $\\vec{B}$ are parallel.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — equality requires $\\cos^2\\theta=1$; parallel or antiparallel is the condition.',
  },
  {
    id: 'vect-q110',
    chapterId: 'vectors',
    topicId: 'tricky-vector-concepts',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'Can four vectors in three-dimensional space be linearly independent?',
    options: [
      'No — any four vectors in $\\mathbb{R}^3$ are linearly dependent.',
      'Yes, if they are mutually orthogonal.',
      'Only if one of them is zero.',
      'Only if they are all unit vectors.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The dimension of $\\mathbb{R}^3$ is 3, so any set of four vectors is linearly dependent; a non-trivial combination must vanish.',
  },  
];

