// src/data/projects.js
//
// featured: true   → shown on the home page (keep this to 6 for a clean 3 x 2 grid)
// category         → groups cards on the /projects archive page
// highlight        → short result shown as a chip on the card (optional)

const COURSEWORK_REPO = 'https://github.com/andrew-taggart/msds-data-science-projects'
const repoPath = (path) => `${COURSEWORK_REPO}/tree/main/${path}`

export const courseworkRepo = COURSEWORK_REPO

export const projects = [
  // ---------------------------------------------------------------- Featured
  {
    title: 'Tariff News Sentiment Analysis',
    label: 'NLP · Text Mining',
    type: 'NLP Pipeline + Web App',
    category: 'data',
    description:
      'Team project that measured how news outlets covered the 2025 U.S. tariff policy. It pulls articles from NewsAPI into SQLite, scores them with SentiWordNet, trains TF-IDF + Naive Bayes classifiers, finds topics with LDA, and serves predictions in a Streamlit app.',
    highlight: '96 articles · 61% positive coverage',
    stack: 'Python · NLTK · gensim · scikit-learn · SQLAlchemy · Streamlit',
    image: '/images/tariff-sentiment.png',
    url: repoPath('CSIT-558-data-mining/final-project-tariff-news-sentiment-analysis'),
    featured: true,
  },
  {
    title: 'NJ-EQUIP',
    label: 'Research + Web Portal',
    type: 'Analytics + Visualization Portal',
    category: 'data',
    description:
      'Interactive energy-equity portal with map-based visualizations, responsive pages, and an estimator connecting utility costs, heating costs, income, and energy burden.',
    stack: 'React · Vite · Leaflet · Data Visualization',
    image: '/images/njequip.png',
    url: 'https://nj-equip.netlify.app/',
    featured: true,
  },
  {
    title: 'Income Classification with Spark MLlib',
    label: 'Big Data · Machine Learning',
    type: 'Distributed ML Pipeline',
    category: 'data',
    description:
      'PySpark pipeline on the UCI Adult census data covering cleaning, one-hot encoding, and vector assembly. Logistic regression and gradient-boosted trees were each tuned with a grid search and 5-fold cross-validation on ROC AUC.',
    highlight: 'GBT test AUC 0.907',
    stack: 'PySpark · Spark MLlib · CrossValidator',
    image: '/images/spark-income.svg',
    url: repoPath('CSIT-554-big-data-analytics/final-project-spark-mllib-income-classification'),
    featured: true,
  },
  {
    title: 'US Retail Sales Forecasting',
    label: 'Time Series',
    type: 'Forecasting',
    category: 'data',
    description:
      'Forecasts 30+ years of monthly US retail sales. AR, MA, ARMA, and ARIMA orders were chosen with ADF, ACF, and PACF diagnostics, then compared with a seasonal Auto-ARIMA that adds unemployment and consumer sentiment as inputs.',
    highlight: 'ARIMA MAPE 0.73%',
    stack: 'statsmodels · pmdarima · pandas',
    image: '/images/retail-forecast.png',
    url: repoPath('CSIT-554-big-data-analytics/midterm-us-retail-sales-forecasting'),
    featured: true,
  },
  {
    title: 'Image Classification with Deep Learning',
    label: 'Computer Vision',
    type: 'Deep Learning',
    category: 'data',
    description:
      'Leaderboard-graded models: EfficientNetB0 transfer learning for cats vs. dogs, and a ResNet-18 adapted for MNIST and trained with noise augmentation, cosine learning-rate decay, and F1-based checkpointing. Both ship with command-line inference scripts.',
    highlight: '99.2% validation accuracy',
    stack: 'TensorFlow/Keras · PyTorch · torchvision',
    image: '/images/cats-dogs-cnn.png',
    url: repoPath('CSIT-599-deep-learning'),
    featured: true,
  },
  {
    title: 'Facebook Social Network Analysis',
    label: 'Network Science · Visualization',
    type: 'Graph Analytics',
    category: 'data',
    description:
      'Analyzes a Facebook network of 4,039 users with degree distributions and centrality heatmaps. Louvain community detection splits the network into communities, which are visualized as a force-directed graph and a community-to-community edge matrix.',
    highlight: '88K edges · Louvain communities',
    stack: 'NetworkX · python-louvain · seaborn',
    image: '/images/facebook-network.png',
    url: repoPath('CSIT-553-data-visualization/project-1-facebook-social-network-analysis'),
    featured: true,
  },

  // ------------------------------------------------------- Archive: data work
  {
    title: 'State Per-Capita Economic Trends',
    label: 'Geospatial Visualization',
    type: 'Geospatial Visualization',
    category: 'data',
    description:
      'BEA state-level income, disposable income, and consumer spending shown as choropleth and bubble maps, regional violin plots, and an interactive Plotly/Dash explorer.',
    stack: 'GeoPandas · folium · Plotly · Dash',
    image: '/images/state-economics.png',
    url: repoPath('CSIT-553-data-visualization/project-2-us-state-per-capita-economic-trends'),
  },
  {
    title: 'NHANES Body Measurements',
    label: 'Exploratory Data Analysis',
    type: 'Exploratory Data Analysis',
    category: 'data',
    description:
      'Cleans and explores CDC NHANES 2021–2023 body-measurement data, including missing-value profiling, BMI categories, waist-to-hip relationships, and a correlation heatmap.',
    stack: 'pandas · seaborn · matplotlib',
    image: '/images/nhanes-body-measures.png',
    url: repoPath('CSIT-553-data-visualization/project-3-nhanes-body-measurements-analysis'),
  },

  // ------------------------------------------------- Archive: software projects
  {
    title: 'Ticketly',
    label: 'Full-Stack Application',
    type: 'Full-Stack Application',
    category: 'software',
    description:
      'Venue and event discovery platform with backend development, database design, and responsive React views for events, venues, and reviews.',
    stack: 'React · Django · PostgreSQL · Python',
    image: '/images/Ticketly.png',
    url: 'https://github.com/Lane17027/Ticketly',
  },
  {
    title: 'DADA',
    label: 'Full-Stack Application',
    type: 'Task Manager Application',
    category: 'software',
    description:
      'Task manager group project built with a MERN-style stack, focused on organizing tasks, tracking work, and practicing full-stack application development.',
    stack: 'MongoDB · Express · React · Node',
    image: '/images/DADA.png',
    url: 'https://github.com/andrew-taggart/DADA',
  },
  {
    title: 'Workout Planner',
    label: 'Full-Stack Application',
    type: 'Fitness Planning Application',
    category: 'software',
    description:
      'Workout planner solo project focused on organizing routines, planning training sessions, and applying a MERN-style full-stack application structure.',
    stack: 'MongoDB · Express · React · Node',
    image: '/images/WorkoutOrganizer.png',
    url: 'https://github.com/andrew-taggart/Workout-Planner',
  },
  {
    title: 'Pro/Fit Book',
    label: 'Full-Stack Application',
    type: 'Appointment Scheduling Application',
    category: 'software',
    description:
      'Appointment scheduling application for fitness professionals and clients, built with a React frontend, Django backend, and PostgreSQL database.',
    stack: 'React · Django · PostgreSQL · Python',
    image: '/images/temporary.jpg',
    url: 'https://github.com/andrew-taggart/fit_book',
  },
  {
    title: 'FoodReactions',
    label: 'Full-Stack Application',
    type: 'Food Reaction Tracker',
    category: 'software',
    description:
      'Collaborative application concept focused on tracking food reactions and organizing user-reported food-related experiences.',
    stack: 'Full-Stack Development · React · Application Design',
    image: '/images/FoodReactionsImg.png',
    url: 'https://github.com/codydecoder/FoodReactions',
  },
]
