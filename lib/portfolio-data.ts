export const portfolioData = {
  name: "Alvin Rachmat",
  title: "Machine Learning Engineer / Data Scientist",
  location: "Abu Dhabi, UAE",
  contact: {
    phoneID: "+6285214888118",
    phoneUAE: "+971502140290",
    email: "alvinracht@gmail.com",
    linkedin: "https://www.linkedin.com/in/alvin-rachmat",
    github: "https://github.com/alvinrach",
    // website: "https://alvinrach.github.io",
  },
  about:
    "Alvin has 5+ years of experience in data & AI. He has worked in startups (Chatbot & Retrieval Engine, Crypto AI), IT research labs, corporate environments (Financial Sector), and now consulting at Artefact, one of the world's leading data science consulting firms, delivering banking and government AI projects across the UAE, the Philippines & Indonesia.\nHis stack spans from Data Science (PyTorch, Scikit-learn, MongoDB, SQL), data platforms (Databricks, Snowflake), LLM frameworks (LangChain, LlamaIndex, LangGraph) to daily cloud operations and analytical dashboards. Although experienced with diverse tools, he believes that technology stacks are merely instruments to solve real problems.",
  skills: [
    "AI Agents",
    "LLM",
    "Generative AI",
    "Cloud (GCP, Azure)",
    "Docker",
    "Financial Data Science",
    "Pandas",
    "Scikit Learn",
    "FastAPI",
    "NodeJS",
    "LangChain",
    "LangGraph",
    "HuggingFace",
    "ElasticSearch",
    "Milvus",
    "ChromaDB",
    "Streamlit",
    "Autogen",
    "Faceswap",
    "Databricks",
    "Snowflake",
    "Entity Resolution (Splink)",
    "RAG Evaluation",
    "Speech-to-Text (Whisper)",
    "Redis",
    "Geospatial (Folium, Google Maps API, OSRM)",
  ],
  languages: ["English", "Bahasa Indonesia"],
  interests: ["AI Agents", "Generative AI", "Blockchain-Socmed", "Cloud Architecture"],
  experience: [
    {
      company: "Artefact Consulting Singapore Pte Ltd",
      role: "Data Scientist",
      dates: "11/25 – Now",
      details: [],
      engagements: [
        {
          location: "Abu Dhabi, UAE (On-Site)",
          details: [
            "Maintaining data governance workflows for the Abu Dhabi Department of Government Enablement through LLM-assisted rule generation & quality checks across ~800 datasets",
            "Built an entity resolution & deduplication pipeline using Splink's unsupervised probabilistic record linkage to match and merge citizen records across government tables, enriching incomplete records (e.g. backfilling missing emails via shared national ID)",
            "Built an LLM-powered remediation agent on Databricks using LangChain that scans tables against governance rules and generates proposed corrections as output tables for steward review",
          ],
        },
        {
          location: "Philippines (On-Site)",
          details: [
            "Sales leads (PoS) optimization project with RCBC Bank (5th largest private bank in the Philippines), using Snowflake, Google Maps API, and geospatial visualization (Folium) to identify and prioritize high-potential business locations",
            "Built data-driven lead scoring and mapping solutions, including Shortest Route Problem & Clustering, enabling commercial teams to improve targeting efficiency and on-ground execution to 70% lead acceptance rate",
            "Leveraged AI heavily (Claude Code, Cursor, Databricks Genie, Snowflake Cortex) to improve project delivery speed without sacrificing quality, validating all AI output through hands-on review",
          ],
        },
        {
          location: "Indonesia (On-Site)",
          details: [
            "Delivered end-to-end AI solutions (Speech-to-Text, RAG, LLM evaluation) for CIMB Bank (2nd largest private bank in Indonesia by assets), to support customer service transformation",
            "Architected a RAG pipeline on Speech-to-Text outputs and owned the evaluation strategy, improving precision from 20% to 70% and recall from 20% to 85%, achieved NPS of 50% among CS agents",
            "Stack: Whisper, LangChain, Elasticsearch (hybrid retrieval), Redis, FastAPI",
          ],
        },
      ],
    },
    {
      company: "Foru AI / Untukmu.ai",
      role: "Machine Learning Engineer",
      dates: "09/23 – 11/25",
      details: [
        "Developed AI chatbots with LLMs, including fine-tuning BERT and LLaMA for domain-specific tasks",
        "Created and deployed an AI Testing Framework in Streamlit to validate chatbot responses efficiently",
        "Engineered hybrid semantic search using ElasticSearch, Milvus, and ChromaDB",
        "Optimized cloud operations on GCP with CI/CD pipelines, serverless deployments, & concurrency improvements",
        "Explored agentic LLM frameworks (Autogen, Eliza) to automate code execution & blockchain-social integrations",
        "Led the AI team: managed daily operations, mentored juniors, & handled model/API migrations across OpenAI, Gemini, HuggingFace"
      ],
    },
    {
      "company": "EventCHI (Dutch-based event-tech startup)",
      "role": "AI Engineer – Chatbot & Agent Development",
      "dates": "08/24 – 11/24",
      "details": [
        "Designed and discussed chatbot architecture with team members",
        "Developed chatbots using agentic frameworks such as LangGraph, Autogen, & crewAI",
        "Deployed AI components on Google Cloud (Cloud Run, Kubernetes Engine, Cloud Storage CDN) & Microsoft Azure (OpenAI models)",
        "Implemented APIs with both HTTP & WebSocket architectures, enable real-time chatbot communication",
        "Built CI/CD pipelines for AI chatbot product deployment & created simple HTML-CSS-JS demo frontend",
        "Integrated flux-based image generation, background removal with Rembg/PIL, Redis caching, & asynchronous multi-image load-save (90% faster upload)"
      ],
    },
    {
      company: "Sinar Mitra Sepadan Finance (ORIX Japan & Sinarmas)",
      role: "Data Scientist",
      dates: "05/22 – 09/23",
      details: [
        "Developed and presented credit scoring models to Japanese and Indonesian BODs monthly",
        "Built predictive collection models to identify high-risk customers, improving repayment forecasting",
        "Automated dashboards with Streamlit, Voila, and Metabase to track KPIs such as sales efficiency",
        "Implemented DataRobot-based ML pipelines with third-party vendors for automated model deployment",
        "Deployed scalable APIs for scoring using FastAPI and Docker frameworks",
        "Maintained SQL and Postgres databases for data pipelines, ensuring reliability and accuracy"
      ],
    },
    {
      company: "Smart City & Community Innovation Center ITB",
      role: "Data Scientist",
      dates: "08/21 – 05/22",
      details: [
        "Built a churn prediction model for Jasa Raharja using 6.5M+ records under CRISP-DM methodology to predict insurance arrears and payment delays",
        "Collaborated on IoT anomaly detection and forecasting research using GRU autoencoders for smart-farming sensors"
      ],
    },
  ],
  education: [
    {
      institution: "Bandung Institute of Technology (ITB)",
      degree: "Bioenergy and Chemurgical Engineering (Chemical Engineering)",
      dates: "2015 – 2019",
    },
  ],
  projects: [
    {
      title: "Dewi – AI Gifting Chatbot",
      description: "Rebuilt & self-hosted (2026) version of the Untukmu.ai gifting chatbot",
      links: {
        details: "https://dewi.alvinrach.my.id",
      },
    },
    {
      title: "Paylater Default Prediction in Fintech",
      description: "Paylater default prediction using Gradient Boosting & CRISP-DM Framework",
      links: {
        github: "https://github.com/alvinrach/financial-tech-prediction",
      },
    },
    {
      title: "BBC News Sentiment Analysis",
      description: "End-to-end ML pipeline (training + FastAPI inference + Docker deployment + PyTorch-Tensorflow comparation)",
      links: {
        github: "https://github.com/alvinrach/learn-ai-bbc",
      },
    },
    {
      title: "Walmart Stock Prediction",
      description: "Forecasting with ~0.45% MAE (Neural Network)",
      links: {
        github: "https://github.com/alvinrach/25-Time_Series-Stock_Prediction",
      },
    },
    {
      title: "EventCHI",
      description: "AI chatbot + blockchain-powered event-tech platform (LangGraph, Autogen, crewAI, GCP, Azure)",
      links: {
        details: "https://chi.app/",
      },
    },
    {
      title: "Car Insurance Sales Prediction",
      description: "Classification with XGBoost (3rd place on AI Planet leaderboard)",
      links: {
        github: "https://github.com/alvinrach/21-Car-Insurance-Sales-Prediction",
      },
    },
    {
      title: "Travelling Salesman Optimizer (FMCG)",
      description: "Efficient sales routing for 1M+ rows (Python, OSRM, Docker, Jenkins)",
      links: {},
    },
    {
      title: "Bank Sales Area Optimizer",
      description: "Unsupervised regrouping + routing (Streamlit, MongoDB, Docker CI/CD)",
      links: {},
    },
    {
      title: "Chatbot Testing Framework",
      description: "Built with Streamlit (Untukmu.ai)",
      links: {},
    },
  ],
  activities: [
    {
      name: "Google Cloud Skill Badge – Evaluate & Improve ADK Agents (2026)",
      url: "https://www.credly.com/badges/5d37b9a9-04dd-48c7-9fa3-ed86543b1310"
    },
    {
      name: "Google Cloud Skill Badge – Deploy an Agent with ADK (2026)",
      url: "https://www.credly.com/badges/173b7306-f970-4bd1-983f-bcf946736f13"
    },
    {
      name: "Google Cloud Skill Badge – Accelerate Development with Antigravity (2026)",
      url: "https://www.credly.com/badges/48508f2a-4344-4ce7-b2dd-44d50264f16b"
    },
    {
      name: "AI Planet – Data Science Bootcamp (3rd place, 2021)",
      url: "https://aiplanet.com/challenges/74/getting-started-with-data-science-bootcamp-final-assignment-74/leaderboard/practice"
    },
    {
      name: "AI Planet – Deep Learning Bootcamp (1st place, 2021)",
      url: "https://aiplanet.com/challenges/144/gender-determination-by-morphometry-of-eyes-144/leaderboard/practice"
    },
    {
      name: "AI Planet – RAG & Agents Bootcamp (2024)",
      url: "https://aiplanet.com/bootcamp/certificate/download/102ac4f6-9516-420a-972b-698616b71bdc/"
    },
    {
      name: "IdCamp (Indosat Ooredoo) – Machine Learning Expert (2021)",
      url: "https://www.dicoding.com/certificates/QLZ91N4QEP5D"
    },
    {
      name: "FGA Digital Talent Scholarship – IBM Machine Learning (2021)",
      url: "https://drive.google.com/file/d/1P2zuvzQlKs-w71T8yMCdOvf0hD_1g276/view"
    },
  ],
  leadership: [
    {
      role: "Head of Professionalism Division",
      organization: "Bioenergy & Chemurgy Eng. Student Association, ITB",
      dates: "01/17 – 12/17",
    },
  ],
}
