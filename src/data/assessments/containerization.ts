import { AssessmentQuestion } from '../../types';

export const containerizationQuestions: AssessmentQuestion[] = [
  {
    id: 'containerization-1',
    question: 'What is the primary purpose of containerization?',
    options: [
      'To package applications with their dependencies for consistent deployment',
      'To increase hardware resource usage',
      'To make applications run slower',
      'To complicate the deployment process'
    ],
    correctAnswer: 'To package applications with their dependencies for consistent deployment',
    explanation: 'Containerization packages an application and all its dependencies into a standardized unit (container) that can run consistently across different environments.',
    category: 'Containerization',
    difficulty: 'Easy'
  },
  {
    id: 'containerization-2',
    question: 'Which of the following is NOT a benefit of using Docker containers?',
    options: [
      'Consistent environment across different machines',
      'Reduced resource usage compared to VMs',
      'Increased hardware resource usage',
      'Faster deployment and scaling'
    ],
    correctAnswer: 'Increased hardware resource usage',
    explanation: 'Docker containers actually reduce resource usage compared to virtual machines, not increase it.',
    category: 'Containerization',
    difficulty: 'Easy'
  },
  {
    id: 'containerization-3',
    question: 'What is the difference between a Docker image and a Docker container?',
    options: [
      'An image is a running instance, while a container is a template',
      'An image is a template, while a container is a running instance of that image',
      'There is no difference between images and containers',
      'Images are for development, containers are for production'
    ],
    correctAnswer: 'An image is a template, while a container is a running instance of that image',
    explanation: 'Docker images are read-only templates used to create containers, which are running instances of those images.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-4',
    question: 'Which Docker command is used to build an image from a Dockerfile?',
    options: [
      'docker build',
      'docker create',
      'docker run',
      'docker start'
    ],
    correctAnswer: 'docker build',
    explanation: 'The docker build command creates an image from a Dockerfile.',
    category: 'Containerization',
    difficulty: 'Easy'
  },
  {
    id: 'containerization-5',
    question: 'What is the purpose of the EXPOSE instruction in a Dockerfile?',
    options: [
      'It automatically publishes the port to the host',
      'It creates a network connection',
      'It documents which ports the container will listen on',
      'It opens a firewall port'
    ],
    correctAnswer: 'It documents which ports the container will listen on',
    explanation: 'EXPOSE is documentation for developers and doesn\'t actually publish the port.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-6',
    question: 'Which Kubernetes resource is used to manage pods?',
    options: [
      'Deployment',
      'ReplicaSet',
      'Service',
      'ConfigMap'
    ],
    correctAnswer: 'ReplicaSet',
    explanation: 'ReplicaSet ensures a specified number of pod replicas are running at any given time.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-7',
    question: 'What is the purpose of Kubernetes ConfigMaps?',
    options: [
      'To store non-sensitive configuration data',
      'To store sensitive data like passwords',
      'To manage network policies',
      'To control pod scheduling'
    ],
    correctAnswer: 'To store non-sensitive configuration data',
    explanation: 'ConfigMaps are used for non-sensitive configuration data like environment variables, configuration files, etc.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-8',
    question: 'Which Docker command removes all stopped containers?',
    options: [
      'docker rm all',
      'docker clean',
      'docker container prune',
      'docker delete stopped'
    ],
    correctAnswer: 'docker container prune',
    explanation: 'docker container prune removes all stopped containers.',
    category: 'Containerization',
    difficulty: 'Easy'
  },
  {
    id: 'containerization-9',
    question: 'What is the purpose of Kubernetes Services?',
    options: [
      'To store configuration data',
      'To provide network access to a set of pods',
      'To manage pod lifecycle',
      'To control resource allocation'
    ],
    correctAnswer: 'To provide network access to a set of pods',
    explanation: 'Services provide stable network endpoints for pods, enabling load balancing and service discovery.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-10',
    question: 'Which of the following is true about Docker volumes?',
    options: [
      'Volumes persist data even after the container is deleted',
      'Volumes are deleted when the container is deleted',
      'Volumes can only store temporary data',
      'Volumes are not supported in Docker'
    ],
    correctAnswer: 'Volumes persist data even after the container is deleted',
    explanation: 'Docker volumes are designed to persist data independently of the container lifecycle.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-11',
    question: 'What is the purpose of Kubernetes Ingress?',
    options: [
      'To manage internal cluster communication',
      'To store secrets and configuration',
      'To manage external access to services in a cluster',
      'To control pod scheduling'
    ],
    correctAnswer: 'To manage external access to services in a cluster',
    explanation: 'Ingress manages external access to services, typically HTTP/HTTPS, with load balancing, SSL termination, and name-based virtual hosting.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-12',
    question: 'Which Docker command shows running containers?',
    options: [
      'docker ps',
      'docker list',
      'docker show',
      'docker containers'
    ],
    correctAnswer: 'docker ps',
    explanation: 'docker ps shows running containers by default.',
    category: 'Containerization',
    difficulty: 'Easy'
  },
  {
    id: 'containerization-13',
    question: 'What is the purpose of Kubernetes Namespaces?',
    options: [
      'To manage network policies',
      'To provide a mechanism for isolating groups of resources within a cluster',
      'To control resource quotas',
      'To manage pod lifecycle'
    ],
    correctAnswer: 'To provide a mechanism for isolating groups of resources within a cluster',
    explanation: 'Namespaces provide a way to divide cluster resources between multiple users, teams, or applications.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-14',
    question: 'Which of the following is NOT a Kubernetes controller?',
    options: [
      'ReplicaSet',
      'Deployment',
      'StatefulSet',
      'Pod'
    ],
    correctAnswer: 'Pod',
    explanation: 'Pod is not a controller; it\'s the smallest deployable unit in Kubernetes.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-15',
    question: 'What is the purpose of Docker Compose?',
    options: [
      'To define and run multi-container Docker applications',
      'To build single container images',
      'To manage Kubernetes clusters',
      'To create Docker volumes'
    ],
    correctAnswer: 'To define and run multi-container Docker applications',
    explanation: 'Docker Compose uses YAML files to configure application services and define multi-container applications.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-16',
    question: 'Which Kubernetes resource is used for stateful applications?',
    options: [
      'Deployment',
      'ReplicaSet',
      'StatefulSet',
      'DaemonSet'
    ],
    correctAnswer: 'StatefulSet',
    explanation: 'StatefulSet is designed for applications that need stable network identities, stable persistent storage, and ordered deployment and scaling.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-17',
    question: 'What is the purpose of Docker Hub?',
    options: [
      'A Docker command line tool',
      'A cloud-based registry service for Docker images',
      'A Docker networking feature',
      'A Docker volume management tool'
    ],
    correctAnswer: 'A cloud-based registry service for Docker images',
    explanation: 'Docker Hub is a cloud-based repository where users can find and share container images.',
    category: 'Containerization',
    difficulty: 'Easy'
  },
  {
    id: 'containerization-18',
    question: 'Which of the following is true about Kubernetes Pods?',
    options: [
      'Pods are the smallest deployable units in Kubernetes',
      'Pods are the same as containers',
      'Pods can only contain one container',
      'Pods are not used in Kubernetes'
    ],
    correctAnswer: 'Pods are the smallest deployable units in Kubernetes',
    explanation: 'Pods are the smallest and simplest unit in the Kubernetes object model that you create or deploy.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-19',
    question: 'What is the purpose of Docker networks?',
    options: [
      'To store container data',
      'To manage container images',
      'To enable communication between containers',
      'To control container resource usage'
    ],
    correctAnswer: 'To enable communication between containers',
    explanation: 'Docker networks allow containers to communicate with each other and with the host.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-20',
    question: 'Which Kubernetes resource manages rolling updates?',
    options: [
      'ReplicaSet',
      'Deployment',
      'Service',
      'ConfigMap'
    ],
    correctAnswer: 'Deployment',
    explanation: 'Deployment provides declarative updates for Pods and ReplicaSets, including rolling updates and rollbacks.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-21',
    question: 'What is the purpose of Docker secrets?',
    options: [
      'To securely manage sensitive data like passwords and API keys',
      'To store configuration files',
      'To manage network policies',
      'To control container access'
    ],
    correctAnswer: 'To securely manage sensitive data like passwords and API keys',
    explanation: 'Docker secrets are encrypted and only accessible to services that have been granted explicit access to them.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-22',
    question: 'Which of the following is NOT a Kubernetes Service type?',
    options: [
      'ClusterIP',
      'NodePort',
      'LoadBalancer',
      'ReplicaSet'
    ],
    correctAnswer: 'ReplicaSet',
    explanation: 'ReplicaSet is not a Service type; it\'s a controller that ensures a specified number of pod replicas are running.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-23',
    question: 'What is the purpose of Docker health checks?',
    options: [
      'To monitor system resources',
      'To test if a container is working properly',
      'To manage container networks',
      'To control container access'
    ],
    correctAnswer: 'To test if a container is working properly',
    explanation: 'Health checks allow Docker to test a container to see if it\'s still working as expected.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-24',
    question: 'Which Kubernetes resource is used for background processing?',
    options: [
      'Deployment',
      'StatefulSet',
      'Job',
      'DaemonSet'
    ],
    correctAnswer: 'Job',
    explanation: 'Jobs create one or more Pods and ensure that a specified number of them successfully terminate.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-25',
    question: 'What is the purpose of Docker multi-stage builds?',
    options: [
      'To create smaller production images by using multiple FROM statements',
      'To build multiple images simultaneously',
      'To create larger images with more features',
      'To speed up the build process'
    ],
    correctAnswer: 'To create smaller production images by using multiple FROM statements',
    explanation: 'Multi-stage builds allow you to use multiple FROM statements in your Dockerfile to create smaller final images.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-26',
    question: 'Which of the following is true about Kubernetes PersistentVolumes?',
    options: [
      'They are automatically deleted when pods are deleted',
      'They provide a way to decouple storage from the pod lifecycle',
      'They can only be used by one pod at a time',
      'They are not supported in Kubernetes'
    ],
    correctAnswer: 'They provide a way to decouple storage from the pod lifecycle',
    explanation: 'PersistentVolumes provide a way to decouple storage from the pod lifecycle, allowing data to persist beyond the lifetime of a pod.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-27',
    question: 'What is the purpose of Docker Swarm?',
    options: [
      'To build Docker images',
      'To manage Docker volumes',
      'To provide native clustering and orchestration capabilities for Docker',
      'To create Docker networks'
    ],
    correctAnswer: 'To provide native clustering and orchestration capabilities for Docker',
    explanation: 'Docker Swarm is Docker\'s native clustering and orchestration solution for managing a cluster of Docker hosts.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-28',
    question: 'Which Kubernetes resource is used for system-level services?',
    options: [
      'Deployment',
      'DaemonSet',
      'StatefulSet',
      'Job'
    ],
    correctAnswer: 'DaemonSet',
    explanation: 'DaemonSet ensures that all (or some) nodes run a copy of a Pod, typically used for system-level services like monitoring agents.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-29',
    question: 'What is the purpose of Docker context?',
    options: [
      'To manage multiple Docker environments from a single client',
      'To create Docker images',
      'To manage Docker networks',
      'To control container access'
    ],
    correctAnswer: 'To manage multiple Docker environments from a single client',
    explanation: 'Docker context allows you to manage multiple Docker environments (local, remote, etc.) from a single Docker client.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-30',
    question: 'Which of the following is NOT a Kubernetes volume type?',
    options: [
      'emptyDir',
      'hostPath',
      'persistentVolumeClaim',
      'Service'
    ],
    correctAnswer: 'Service',
    explanation: 'Service is not a volume type; it\'s a Kubernetes resource for networking.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-31',
    question: 'What is the purpose of Docker buildx?',
    options: [
      'To build Docker images faster',
      'To build Docker images for multiple platforms',
      'To create Docker networks',
      'To manage Docker volumes'
    ],
    correctAnswer: 'To build Docker images for multiple platforms',
    explanation: 'Docker buildx is a Docker CLI plugin that extends the docker build command with the full support of the features provided by Moby BuildKit builder toolkit.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-32',
    question: 'Which Kubernetes resource is used for cron jobs?',
    options: [
      'Job',
      'Deployment',
      'CronJob',
      'DaemonSet'
    ],
    correctAnswer: 'CronJob',
    explanation: 'CronJob creates Jobs on a time-based schedule, similar to the Unix cron utility.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-33',
    question: 'What is the purpose of Docker content trust?',
    options: [
      'To verify the integrity and publisher of Docker images',
      'To manage Docker networks',
      'To control container access',
      'To create Docker volumes'
    ],
    correctAnswer: 'To verify the integrity and publisher of Docker images',
    explanation: 'Docker Content Trust provides the ability to use digital signatures for data sent to and received from remote Docker registries.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-34',
    question: 'Which of the following is true about Kubernetes HorizontalPodAutoscaler?',
    options: [
      'It scales pods based on time of day',
      'It automatically scales the number of pods based on observed CPU utilization',
      'It only scales down pods, never up',
      'It requires manual intervention to scale'
    ],
    correctAnswer: 'It automatically scales the number of pods based on observed CPU utilization',
    explanation: 'HPA automatically scales the number of pods in a replication controller, deployment, replica set, or stateful set based on observed CPU utilization.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-35',
    question: 'What is the purpose of Docker layer caching?',
    options: [
      'To store container data',
      'To manage Docker networks',
      'To speed up image builds by reusing existing layers',
      'To control container access'
    ],
    correctAnswer: 'To speed up image builds by reusing existing layers',
    explanation: 'Docker layer caching allows you to reuse layers from previous builds, significantly speeding up the build process.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-36',
    question: 'Which Kubernetes resource is used for network policies?',
    options: [
      'NetworkPolicy',
      'Service',
      'Ingress',
      'ConfigMap'
    ],
    correctAnswer: 'NetworkPolicy',
    explanation: 'NetworkPolicy allows you to specify how groups of pods are allowed to communicate with each other and other network endpoints.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-37',
    question: 'What is the purpose of Docker registry mirroring?',
    options: [
      'To create backup images',
      'To cache images locally and reduce pull times',
      'To manage Docker networks',
      'To control container access'
    ],
    correctAnswer: 'To cache images locally and reduce pull times',
    explanation: 'Registry mirroring allows you to cache Docker images locally, reducing pull times and bandwidth usage.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-38',
    question: 'Which of the following is NOT a Kubernetes probe type?',
    options: [
      'livenessProbe',
      'readinessProbe',
      'startupProbe',
      'HealthCheck'
    ],
    correctAnswer: 'HealthCheck',
    explanation: 'HealthCheck is a Docker concept, not a Kubernetes probe type.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-39',
    question: 'What is the purpose of Docker buildkit?',
    options: [
      'To provide enhanced build capabilities and parallel processing',
      'To manage Docker networks',
      'To create Docker volumes',
      'To control container access'
    ],
    correctAnswer: 'To provide enhanced build capabilities and parallel processing',
    explanation: 'BuildKit is a toolkit for converting source code to build artifacts in an efficient, expressive, and repeatable manner.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-40',
    question: 'Which Kubernetes resource is used for resource quotas?',
    options: [
      'LimitRange',
      'ResourceQuota',
      'ConfigMap',
      'Secret'
    ],
    correctAnswer: 'ResourceQuota',
    explanation: 'ResourceQuota provides constraints that limit resource consumption per namespace.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-41',
    question: 'What is the purpose of Docker overlay networks?',
    options: [
      'To manage container data',
      'To enable communication between containers on different hosts',
      'To create Docker volumes',
      'To control container access'
    ],
    correctAnswer: 'To enable communication between containers on different hosts',
    explanation: 'Overlay networks allow containers running on different Docker hosts to communicate with each other.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-42',
    question: 'Which of the following is true about Kubernetes Taints and Tolerations?',
    options: [
      'They allow you to repel pods from nodes unless the pod has a matching toleration',
      'They control network policies',
      'They manage storage allocation',
      'They control service discovery'
    ],
    correctAnswer: 'They allow you to repel pods from nodes unless the pod has a matching toleration',
    explanation: 'Taints allow a node to repel a set of pods, while tolerations allow pods to be scheduled on nodes with matching taints.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-43',
    question: 'What is the purpose of Docker checkpoint/restore?',
    options: [
      'To backup container data',
      'To manage Docker networks',
      'To save and restore the state of running containers',
      'To control container access'
    ],
    correctAnswer: 'To save and restore the state of running containers',
    explanation: 'Checkpoint/restore allows you to save the state of a running container and restore it later, even on a different host.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-44',
    question: 'Which Kubernetes resource is used for pod disruption budgets?',
    options: [
      'PodDisruptionBudget',
      'ResourceQuota',
      'LimitRange',
      'ConfigMap'
    ],
    correctAnswer: 'PodDisruptionBudget',
    explanation: 'PodDisruptionBudget limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-45',
    question: 'What is the purpose of Docker build arguments?',
    options: [
      'To pass variables to the build process',
      'To manage Docker networks',
      'To create Docker volumes',
      'To control container access'
    ],
    correctAnswer: 'To pass variables to the build process',
    explanation: 'Build arguments allow you to pass variables to the Docker build process using the ARG instruction.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-46',
    question: 'Which of the following is NOT a Kubernetes admission controller?',
    options: [
      'AlwaysAdmit',
      'AlwaysDeny',
      'AlwaysPullImages',
      'Pod'
    ],
    correctAnswer: 'Pod',
    explanation: 'Pod is not an admission controller; it\'s a Kubernetes resource.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-47',
    question: 'What is the purpose of Docker build cache?',
    options: [
      'To store container data',
      'To store intermediate layers for faster subsequent builds',
      'To manage Docker networks',
      'To control container access'
    ],
    correctAnswer: 'To store intermediate layers for faster subsequent builds',
    explanation: 'Docker build cache stores intermediate layers so they can be reused in subsequent builds, significantly speeding up the build process.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-48',
    question: 'Which Kubernetes resource is used for pod security policies?',
    options: [
      'PodSecurityPolicy',
      'NetworkPolicy',
      'ResourceQuota',
      'ConfigMap'
    ],
    correctAnswer: 'PodSecurityPolicy',
    explanation: 'PodSecurityPolicy controls security-sensitive aspects of the pod specification.',
    category: 'Containerization',
    difficulty: 'Hard'
  },
  {
    id: 'containerization-49',
    question: 'What is the purpose of Docker build context?',
    options: [
      'The set of files located in the specified PATH or URL',
      'To manage Docker networks',
      'To create Docker volumes',
      'To control container access'
    ],
    correctAnswer: 'The set of files located in the specified PATH or URL',
    explanation: 'The build context is the set of files located in the specified PATH or URL that are sent to the Docker daemon during the build process.',
    category: 'Containerization',
    difficulty: 'Medium'
  },
  {
    id: 'containerization-50',
    question: 'Which of the following is true about Kubernetes Custom Resource Definitions?',
    options: [
      'They are only used for networking',
      'They allow you to extend the Kubernetes API with custom resources',
      'They are deprecated and should not be used',
      'They only work with specific Kubernetes versions'
    ],
    correctAnswer: 'They allow you to extend the Kubernetes API with custom resources',
    explanation: 'Custom Resource Definitions allow you to define custom resources and extend the Kubernetes API without modifying the core Kubernetes code.',
    category: 'Containerization',
    difficulty: 'Hard'
  }
]; 