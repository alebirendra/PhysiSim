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
    id: 'vect-q1',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'If $|\\vec{A}+\\vec{B}| = |\\vec{A}-\\vec{B}|$, what is the angle between $\\vec{A}$ and $\\vec{B}$?',
    options: ['0°', '45°', '90°', '180°'],
    correctOptionIndex: 2,
    explanation:
      'Squaring both sides gives $A^2+B^2+2A B\\cos\\theta = A^2+B^2-2AB\\cos\\theta$, so $\\cos\\theta=0$, i.e. $\\theta=90^\\circ$.',
  },
  {
    id: 'vect-q2',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'Three vectors of magnitudes $3, 4, 5$ satisfy $\\vec{A}+\\vec{B}+\\vec{C}=0$. Which one of the three pairwise angles must equal $90^\\circ$?',
    options: [
      'The angle between $\\vec{A}$ and $\\vec{B}$',
      'The angle between $\\vec{A}$ and $\\vec{C}$',
      'The angle between $\\vec{B}$ and $\\vec{C}$',
      'None is necessarily $90^\\circ$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Writing $\\vec{C}=-(\\vec{A}+\\vec{B})$ and squaring, $25=9+16+2\\vec{A}\\cdot\\vec{B}$ gives $\\vec{A}\\cdot\\vec{B}=0$, so the angle between $\\vec{A}$ (3) and $\\vec{B}$ (4) is $90^\\circ$.',
  },
  {
    id: 'vect-q3',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Medium',
    type: 'true-false',
    prompt:
      'True or False: For any two vectors, $|\\vec{A}\\times\\vec{B}|^2 + (\\vec{A}\\cdot\\vec{B})^2 = |\\vec{A}|^2|\\vec{B}|^2$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True. Writing $A B\\sin\\theta$ and $A B\\cos\\theta$ and adding squares gives $A^2B^2(\\sin^2\\theta+\\cos^2\\theta)=A^2B^2$.',
  },
  {
    id: 'vect-q4',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Easy',
    type: 'multiple-choice',
    prompt:
      'Can two vectors of equal magnitude sum to zero? Can two vectors of different magnitudes sum to zero?',
    options: [
      'Equal: yes ($\\vec{B}=-\\vec{A}$); Different: no (the sum of two vectors has magnitude at least $||\\vec{A}|-|\\vec{B}||>0$).',
      'Equal: no; Different: yes.',
      'Both are possible.',
      'Neither is possible.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Two vectors sum to zero only when they are equal in magnitude and opposite in direction. Different magnitudes cannot cancel.',
  },
  {
    id: 'vect-q5',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If $\\vec{A}\\cdot\\vec{B} = \\vec{A}\\cdot\\vec{C}$, must $\\vec{B} = \\vec{C}$?',
    options: [
      'No — $\\vec{B} = \\vec{C} + \\vec{u}$ where $\\vec{u}\\perp\\vec{A}$ is the general solution.',
      'Yes — the dot product has the cancellation property.',
      'Only if $\\vec{A}=0$.',
      'Only if the vectors are unit vectors.',
    ],
    correctOptionIndex: 0,
    explanation:
      '$\\vec{A}\\cdot(\\vec{B}-\\vec{C})=0$ means $\\vec{B}-\\vec{C}$ is perpendicular to $\\vec{A}$, which does not force it to vanish.',
  },
  {
    id: 'vect-q6',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If $\\vec{A}\\times\\vec{B} = \\vec{A}\\times\\vec{C}$, must $\\vec{B} = \\vec{C}$?',
    options: [
      'No — $\\vec{B} = \\vec{C} + \\lambda\\vec{A}$ is the general solution.',
      'Yes — the cross product has the cancellation property.',
      'Only if $\\vec{A}=0$.',
      'Only if $\\vec{B}$ and $\\vec{C}$ are parallel.',
    ],
    correctOptionIndex: 0,
    explanation:
      '$\\vec{A}\\times(\\vec{B}-\\vec{C})=0$ means $\\vec{B}-\\vec{C}$ is parallel to $\\vec{A}$; any $\\lambda\\vec{A}$ addition is invisible to the cross product with $\\vec{A}$.',
  },
  {
    id: 'vect-q7',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'For a differentiable vector $\\vec{A}(t)$ with $\\vec{A}\\neq\\vec{0}$, what is $d|\\vec{A}|/dt$?',
    options: [
      '$\\vec{A}\\cdot\\dot{\\vec{A}} / |\\vec{A}|$',
      '$|\\dot{\\vec{A}}|$',
      '$\\dot{\\vec{A}}\\cdot\\hat{A}$',
      '$|\\vec{A}\\times\\dot{\\vec{A}}|/|\\vec{A}|$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Differentiate $|\\vec{A}|^2=\\vec{A}\\cdot\\vec{A}$: $2|\\vec{A}|\\,d|\\vec{A}|/dt = 2\\vec{A}\\cdot\\dot{\\vec{A}}$, giving the result.',
  },
  {
    id: 'vect-q8',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Easy',
    type: 'true-false',
    prompt:
      'True or False: For differentiable vectors $\\vec{A}(t),\\vec{B}(t)$, $\\dfrac{d}{dt}(\\vec{A}\\times\\vec{B}) = \\vec{A}\\times\\dot{\\vec{B}} + \\dot{\\vec{A}}\\times\\vec{B}$.',
    options: ['True', 'False'],
    correctOptionIndex: 0,
    explanation:
      'True — the cross product obeys the product rule, with the order of the factors preserved (the cross product is not commutative).',
  },
  {
    id: 'vect-q9',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'If a vector $\\vec{A}(t)$ has constant magnitude, is $\\dot{\\vec{A}}\\perp\\vec{A}$? Is the converse true?',
    options: [
      'Both are true: $\\vec{A}\\cdot\\dot{\\vec{A}}=0$ holds iff $d|\\vec{A}|^2/dt=0$.',
      'The forward statement is true but the converse is false.',
      'The forward statement is false but the converse is true.',
      'Neither statement is true.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Differentiating $\\vec{A}\\cdot\\vec{A}=$ const gives $2\\vec{A}\\cdot\\dot{\\vec{A}}=0$; conversely, $\\vec{A}\\cdot\\dot{\\vec{A}}=0$ makes $|\\vec{A}|^2$ constant, hence $|\\vec{A}|$ is constant.',
  },
  {
    id: 'vect-q10',
    chapterId: 'vectors',
    topicId: 'vector-algebra-foundations',
    difficulty: 'Hard',
    type: 'multiple-choice',
    prompt:
      'If $\\vec{A}$ has constant magnitude, what is the component of $\\ddot{\\vec{A}}$ along $\\vec{A}$?',
    options: [
      '$-|\\dot{\\vec{A}}|^2/|\\vec{A}|$',
      '$+|\\dot{\\vec{A}}|^2/|\\vec{A}|$',
      '$0$',
      '$-|\\dot{\\vec{A}}|/|\\vec{A}|$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Differentiate $\\vec{A}\\cdot\\dot{\\vec{A}}=0$: $\\vec{A}\\cdot\\ddot{\\vec{A}}=-|\\dot{\\vec{A}}|^2$; dividing by $|\\vec{A}|$ gives the component. This is the "centripetal" term.',
  },

  // ─────────────────────────────────────────────────────────────
  // Dot and cross products: subtleties
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vect-q11',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Medium',
    type: 'multiple-choice',
    prompt:
      'What is the component of $\\vec{A}$ perpendicular to $\\vec{B}$?',
    options: [
      '$\\vec{A} - \\dfrac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|^2}\\vec{B}$',
      '$\\dfrac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|^2}\\vec{B}$',
      '$\\vec{A}\\times\\vec{B}$',
      '$\\vec{A} + \\dfrac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|^2}\\vec{B}$',
    ],
    correctOptionIndex: 0,
    explanation:
      'Subtracting the projection of $\\vec{A}$ onto $\\vec{B}$ from $\\vec{A}$ leaves a vector perpendicular to $\\vec{B}$. Check: dot with $\\vec{B}$ gives zero.',
  },
  {
    id: 'vect-q12',
    chapterId: 'vectors',
    topicId: 'dot-and-cross-products',
    difficulty: 'Medium',
    type: 'conceptual',
    prompt:
      'In the Cauchy–Schwarz inequality $(\\vec{A}\\cdot\\vec{B})^2 \\le |\\vec{A}|^2|\\vec{B}|^2$, when does equality hold?',
    options: [
      'When $\\vec{A}$ and $\\vec{B}$ are parallel (or antiparallel).',
      'When $\\vec{A}$ and $\\vec{B}$ are perpendicular.',
      'When $|\\vec{A}|=|\\vec{B}|$.',
      'Never.',
    ],
    correctOptionIndex: 0,
    explanation:
      'The inequality follows from $\\cos^2\\theta\\le 1$; equality requires $\\cos^2\\theta=1$, i.e. $\\theta=0$ or $\\pi$.',
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
];

