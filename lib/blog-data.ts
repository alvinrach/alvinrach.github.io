export const blogContent: Record<string, any> = {
  "building-agentic-ai-chatbots-langgraph": {
    title: "Building Agentic AI Chatbots with LangGraph",
    date: "August 31, 2025",
    tags: ["AI Agents", "Chatbots", "LLM"],
    image: "/ai-conversation-flow.png",
    content: `
      <p>Agentic AI marks the next stage in chatbot development — where systems go beyond simple responses to reason, plan, and carry out complex tasks autonomously. This guide walks through how to build intelligent, task-oriented agents using the LangGraph framework.</p>
      
      <p>In this article we will explore the foundational things need to know about building agentic AI chatbots with LangGraph. It will be continously updated by involving a real use case in near time.</p>
      
      <p>
         <a href="https://medium.com/@alvinrach/building-agentic-ai-chatbots-with-langgraph-430e59c8426b" style="color: blue;">Read More</a>
      </p>
    `,
  },
  "hybrid-search-elasticsearch-milvus": {
    title: "Building Hybrid Search with ElasticSearch & Milvus",
    date: "August 28, 2025",
    tags: ["AI/ML", "Search", "Vector DB"],
    image: "/hybrid-search-architecture.png",
    content: `
      <p>In today's AI-driven world, building effective search systems requires combining the best of traditional keyword search with modern vector similarity search. This comprehensive guide explores how to implement a hybrid search system using ElasticSearch, Milvus, and ChromaDB.</p>
      
      <h2>Understanding Hybrid Search</h2>
      <p>Hybrid search combines lexical search (keyword matching) with semantic search (vector similarity) to provide more accurate and contextually relevant results. This approach is particularly powerful for AI applications where understanding user intent is crucial. Basically, the principle is:</p>
      
      <p>
         <a href="https://medium.com/@alvinrach/building-hybrid-search-with-elasticsearch-milvus-f5e18c6325c1" style="color: blue;">Read More</a>
      </p>
    `,
  },
  "from-jupyter-to-production": {
    title: "From Jupyter to Production: How to Use Classes and Packages for Data Science Projects",
    date: "March 23, 2023",
    tags: ["Notebook", "Data Science", "Python"],
    image: "/notebook-class.png",
    content: `
      <p>Let’s be honest. Mostly we work in notebook.</p>
      <br>
      <p>But sometimes when code is too much, we ended up dizzy about arrange or visualize it in notebook’s cells.</p>
      <br>
      <p>I just realize this. So now I give you simple tips from me to make your code more readable. The tips is: ...</p>
      <br>

      <p>
         <a href="https://medium.com/@alvinrach/from-jupyter-to-production-how-to-use-classes-and-packages-for-data-science-projects-1d310d38673" style="color: blue;">Read More</a>
      </p>
    `,
  },
  "deploying-ai-gcp-cicd": {
    title: "Deploying AI on GCP with CI/CD",
    date: "February 8, 2024",
    tags: ["Cloud", "DevOps", "GCP"],
    image: "/cloud-deployment-dashboard.png",
    content: `
      <p>Deploying AI models to production requires robust infrastructure, automated testing, and reliable deployment pipelines. This comprehensive guide walks through setting up a complete CI/CD pipeline for AI applications on Google Cloud Platform (GCP).</p>
      
      <h2>Why GCP for AI Deployment?</h2>
      <p>Google Cloud Platform offers a comprehensive suite of AI and ML services, including Vertex AI, Cloud Run, and Kubernetes Engine. These services provide scalable infrastructure with built-in monitoring and security features essential for production AI systems.</p>
      
      <h2>Architecture Overview</h2>
      <p>Our deployment architecture consists of:</p>
      <ul>
        <li><strong>Cloud Build</strong> - For automated CI/CD pipelines</li>
        <li><strong>Container Registry</strong> - For storing Docker images</li>
        <li><strong>Cloud Run</strong> - For serverless model serving</li>
        <li><strong>Vertex AI</strong> - For model management and monitoring</li>
        <li><strong>Cloud Monitoring</strong> - For observability and alerting</li>
      </ul>
      
      <h2>Setting Up the CI/CD Pipeline</h2>
      <p>The pipeline includes several key stages:</p>
      
      <h3>1. Code Quality and Testing</h3>
      <p>Every commit triggers automated tests including unit tests, integration tests, and model validation. We use pytest for Python testing and custom scripts for model performance validation.</p>
      
      <h3>2. Containerization</h3>
      <p>Models are packaged into Docker containers with all dependencies. This ensures consistency across development, staging, and production environments.</p>
      
      <h3>3. Automated Deployment</h3>
      <p>Successful builds automatically deploy to staging environments for further testing. Production deployments can be triggered manually or automatically based on approval workflows.</p>
      
      <h2>Model Versioning and Rollback</h2>
      <p>Vertex AI Model Registry provides comprehensive model versioning capabilities. Each model version is tagged with metadata including performance metrics, training data versions, and deployment configurations.</p>
      
      <h2>Monitoring and Observability</h2>
      <p>Production AI systems require continuous monitoring of both infrastructure and model performance. We implement:</p>
      <ul>
        <li>Real-time latency and throughput monitoring</li>
        <li>Model drift detection using statistical tests</li>
        <li>Custom business metrics tracking</li>
        <li>Automated alerting for anomalies</li>
      </ul>
      
      <h2>Security Best Practices</h2>
      <p>Security is paramount when deploying AI models. Key practices include:</p>
      <ul>
        <li>Using IAM roles with least privilege access</li>
        <li>Encrypting data in transit and at rest</li>
        <li>Implementing API authentication and rate limiting</li>
        <li>Regular security audits and vulnerability scanning</li>
      </ul>
      
      <h2>Cost Optimization</h2>
      <p>Cloud costs can escalate quickly with AI workloads. Optimization strategies include:</p>
      <ul>
        <li>Using preemptible instances for training</li>
        <li>Implementing auto-scaling for serving infrastructure</li>
        <li>Optimizing model size and inference speed</li>
        <li>Regular cost analysis and resource cleanup</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>A well-designed CI/CD pipeline is essential for reliable AI deployment. By leveraging GCP's managed services and following DevOps best practices, teams can build robust, scalable AI systems that deliver consistent value to users.</p>
    `,
  },
  "why-ai-would-never-eliminate-any-job": {
    title: "Why AI Would Never Eliminate Any Job",
    date: "March 4, 2023",
    tags: ["Future of Work", "AI and Jobs", "Career Development"],
    image: "/ai-never-replace.png",
    content: `
      <p>Peter is a designer, and he decided to use an AI for his work. Most of the case he manages. But his new task is now needs human creativity and cant be generated by AI.</p>
      <br>
      <p>Here we can conclude that, Peter is still needed, and secondly, the AI needs improvement. How to improve? So as always, more data is good. If an AI company wants to improve its program quickly, the easiest way is to ...</p>
      <br>

      <p>
         <a href="https://medium.com/@alvinrach/why-ai-would-never-eliminate-any-job-755ca309f489" style="color: blue;">Read More</a>
      </p>
    `,
  },
}