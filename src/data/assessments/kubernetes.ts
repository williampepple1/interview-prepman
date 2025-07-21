import { AssessmentQuestion } from '../../types';

export const kubernetesAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'kubernetes-1',
    question: 'What is Kubernetes?',
    options: [
      'An open-source container orchestration platform',
      'A container runtime',
      'A cloud provider',
      'A programming language'
    ],
    correctAnswer: 'An open-source container orchestration platform',
    explanation: 'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
    category: 'Kubernetes Basics',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-2',
    question: 'What is the smallest deployable unit in Kubernetes?',
    options: [
      'Pod',
      'Container',
      'Node',
      'Service'
    ],
    correctAnswer: 'Pod',
    explanation: 'A Pod is the smallest and simplest unit in the Kubernetes object model that you create or deploy.',
    category: 'Kubernetes Basics',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-3',
    question: 'Which Kubernetes resource manages the desired state of your application?',
    options: [
      'Deployment',
      'Pod',
      'Service',
      'ConfigMap'
    ],
    correctAnswer: 'Deployment',
    explanation: 'A Deployment provides declarative updates for Pods and ReplicaSets, managing the desired state of your application.',
    category: 'Workloads',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-4',
    question: 'What is the purpose of a Kubernetes Service?',
    options: [
      'To provide network access to a set of pods',
      'To store configuration data',
      'To manage pod lifecycle',
      'To control resource allocation'
    ],
    correctAnswer: 'To provide network access to a set of pods',
    explanation: 'Services provide stable network endpoints for pods, enabling load balancing and service discovery.',
    category: 'Networking',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-5',
    question: 'Which command is used to create a resource from a YAML file?',
    options: [
      'kubectl apply',
      'kubectl create',
      'kubectl deploy',
      'kubectl run'
    ],
    correctAnswer: 'kubectl apply',
    explanation: 'The `kubectl apply` command creates or updates resources from a file or directory.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-6',
    question: 'What is a Kubernetes Namespace?',
    options: [
      'A mechanism for isolating groups of resources within a cluster',
      'A type of pod',
      'A network configuration',
      'A storage volume'
    ],
    correctAnswer: 'A mechanism for isolating groups of resources within a cluster',
    explanation: 'Namespaces provide a way to divide cluster resources between multiple users, teams, or applications.',
    category: 'Kubernetes Basics',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-7',
    question: 'Which Kubernetes resource is used for stateful applications?',
    options: [
      'StatefulSet',
      'Deployment',
      'ReplicaSet',
      'DaemonSet'
    ],
    correctAnswer: 'StatefulSet',
    explanation: 'StatefulSet is designed for applications that need stable network identities, stable persistent storage, and ordered deployment and scaling.',
    category: 'Workloads',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-8',
    question: 'What is the purpose of Kubernetes ConfigMaps?',
    options: [
      'To store non-sensitive configuration data',
      'To store sensitive data like passwords',
      'To manage network policies',
      'To control pod scheduling'
    ],
    correctAnswer: 'To store non-sensitive configuration data',
    explanation: 'ConfigMaps are used for non-sensitive configuration data like environment variables, configuration files, etc.',
    category: 'Configuration',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-9',
    question: 'Which command shows all pods in all namespaces?',
    options: [
      'kubectl get pods --all-namespaces',
      'kubectl get pods -a',
      'kubectl list pods',
      'kubectl show pods'
    ],
    correctAnswer: 'kubectl get pods --all-namespaces',
    explanation: 'The `kubectl get pods --all-namespaces` command lists pods across all namespaces.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-10',
    question: 'What is a Kubernetes Ingress?',
    options: [
      'A resource that manages external access to services in a cluster',
      'A type of pod',
      'A network policy',
      'A storage class'
    ],
    correctAnswer: 'A resource that manages external access to services in a cluster',
    explanation: 'Ingress manages external access to services, typically HTTP/HTTPS, with load balancing, SSL termination, and name-based virtual hosting.',
    category: 'Networking',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-11',
    question: 'Which Kubernetes resource is used for background processing?',
    options: [
      'Job',
      'Deployment',
      'StatefulSet',
      'DaemonSet'
    ],
    correctAnswer: 'Job',
    explanation: 'Jobs create one or more Pods and ensure that a specified number of them successfully terminate.',
    category: 'Workloads',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-12',
    question: 'What is the purpose of Kubernetes Secrets?',
    options: [
      'To store sensitive data like passwords and API keys',
      'To store configuration data',
      'To manage network policies',
      'To control pod access'
    ],
    correctAnswer: 'To store sensitive data like passwords and API keys',
    explanation: 'Secrets are used to store sensitive data like passwords, OAuth tokens, and ssh keys.',
    category: 'Configuration',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-13',
    question: 'Which command is used to describe a pod?',
    options: [
      'kubectl describe pod',
      'kubectl show pod',
      'kubectl info pod',
      'kubectl details pod'
    ],
    correctAnswer: 'kubectl describe pod',
    explanation: 'The `kubectl describe pod` command shows detailed information about a specific pod.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-14',
    question: 'What is a Kubernetes ReplicaSet?',
    options: [
      'A resource that ensures a specified number of pod replicas are running',
      'A type of service',
      'A network configuration',
      'A storage volume'
    ],
    correctAnswer: 'A resource that ensures a specified number of pod replicas are running',
    explanation: 'ReplicaSet ensures that a specified number of pod replicas are running at any given time.',
    category: 'Workloads',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-15',
    question: 'Which Kubernetes resource is used for system-level services?',
    options: [
      'DaemonSet',
      'Deployment',
      'StatefulSet',
      'Job'
    ],
    correctAnswer: 'DaemonSet',
    explanation: 'DaemonSet ensures that all (or some) nodes run a copy of a Pod, typically used for system-level services like monitoring agents.',
    category: 'Workloads',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-16',
    question: 'What is the purpose of Kubernetes PersistentVolumes?',
    options: [
      'To provide a way to decouple storage from the pod lifecycle',
      'To store temporary data',
      'To manage network storage',
      'To backup pod data'
    ],
    correctAnswer: 'To provide a way to decouple storage from the pod lifecycle',
    explanation: 'PersistentVolumes provide a way to decouple storage from the pod lifecycle, allowing data to persist beyond the lifetime of a pod.',
    category: 'Storage',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-17',
    question: 'Which command is used to delete a pod?',
    options: [
      'kubectl delete pod',
      'kubectl remove pod',
      'kubectl kill pod',
      'kubectl destroy pod'
    ],
    correctAnswer: 'kubectl delete pod',
    explanation: 'The `kubectl delete pod` command deletes a pod from the cluster.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-18',
    question: 'What is a Kubernetes CronJob?',
    options: [
      'A resource that creates Jobs on a time-based schedule',
      'A type of deployment',
      'A scheduled task',
      'A backup job'
    ],
    correctAnswer: 'A resource that creates Jobs on a time-based schedule',
    explanation: 'CronJob creates Jobs on a time-based schedule, similar to the Unix cron utility.',
    category: 'Workloads',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-19',
    question: 'Which Kubernetes resource is used for resource quotas?',
    options: [
      'ResourceQuota',
      'LimitRange',
      'ConfigMap',
      'Secret'
    ],
    correctAnswer: 'ResourceQuota',
    explanation: 'ResourceQuota provides constraints that limit resource consumption per namespace.',
    category: 'Resource Management',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-20',
    question: 'What is the purpose of Kubernetes NetworkPolicies?',
    options: [
      'To specify how groups of pods are allowed to communicate with each other',
      'To manage network routing',
      'To control bandwidth usage',
      'To set up VPN connections'
    ],
    correctAnswer: 'To specify how groups of pods are allowed to communicate with each other',
    explanation: 'NetworkPolicy allows you to specify how groups of pods are allowed to communicate with each other and other network endpoints.',
    category: 'Networking',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-21',
    question: 'Which command is used to get logs from a pod?',
    options: [
      'kubectl logs',
      'kubectl get logs',
      'kubectl show logs',
      'kubectl view logs'
    ],
    correctAnswer: 'kubectl logs',
    explanation: 'The `kubectl logs` command prints the logs for a container in a pod.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-22',
    question: 'What is a Kubernetes HorizontalPodAutoscaler?',
    options: [
      'A resource that automatically scales the number of pods based on observed CPU utilization',
      'A type of deployment',
      'A scaling policy',
      'A resource monitor'
    ],
    correctAnswer: 'A resource that automatically scales the number of pods based on observed CPU utilization',
    explanation: 'HPA automatically scales the number of pods in a replication controller, deployment, replica set, or stateful set based on observed CPU utilization.',
    category: 'Resource Management',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-23',
    question: 'Which Kubernetes resource is used for pod disruption budgets?',
    options: [
      'PodDisruptionBudget',
      'ResourceQuota',
      'LimitRange',
      'ConfigMap'
    ],
    correctAnswer: 'PodDisruptionBudget',
    explanation: 'PodDisruptionBudget limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions.',
    category: 'Resource Management',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-24',
    question: 'What is the purpose of Kubernetes Taints and Tolerations?',
    options: [
      'To allow you to repel pods from nodes unless the pod has a matching toleration',
      'To control network policies',
      'To manage storage allocation',
      'To control service discovery'
    ],
    correctAnswer: 'To allow you to repel pods from nodes unless the pod has a matching toleration',
    explanation: 'Taints allow a node to repel a set of pods, while tolerations allow pods to be scheduled on nodes with matching taints.',
    category: 'Scheduling',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-25',
    question: 'Which command is used to execute a command in a pod?',
    options: [
      'kubectl exec',
      'kubectl run',
      'kubectl execute',
      'kubectl command'
    ],
    correctAnswer: 'kubectl exec',
    explanation: 'The `kubectl exec` command executes a command in a container in a pod.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-26',
    question: 'What is a Kubernetes Custom Resource Definition?',
    options: [
      'A way to extend the Kubernetes API with custom resources',
      'A type of pod',
      'A custom deployment',
      'A user-defined service'
    ],
    correctAnswer: 'A way to extend the Kubernetes API with custom resources',
    explanation: 'Custom Resource Definitions allow you to define custom resources and extend the Kubernetes API without modifying the core Kubernetes code.',
    category: 'Advanced Concepts',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-27',
    question: 'Which Kubernetes resource is used for pod security policies?',
    options: [
      'PodSecurityPolicy',
      'NetworkPolicy',
      'ResourceQuota',
      'ConfigMap'
    ],
    correctAnswer: 'PodSecurityPolicy',
    explanation: 'PodSecurityPolicy controls security-sensitive aspects of the pod specification.',
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-28',
    question: 'What is the purpose of Kubernetes Admission Controllers?',
    options: [
      'To intercept requests to the Kubernetes API server',
      'To control pod scheduling',
      'To manage resource allocation',
      'To handle authentication'
    ],
    correctAnswer: 'To intercept requests to the Kubernetes API server',
    explanation: 'Admission Controllers intercept requests to the Kubernetes API server prior to persistence of the object.',
    category: 'Advanced Concepts',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-29',
    question: 'Which command is used to port-forward to a pod?',
    options: [
      'kubectl port-forward',
      'kubectl forward',
      'kubectl tunnel',
      'kubectl proxy'
    ],
    correctAnswer: 'kubectl port-forward',
    explanation: 'The `kubectl port-forward` command forwards one or more local ports to a pod.',
    category: 'Kubernetes CLI',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-30',
    question: 'What is a Kubernetes StorageClass?',
    options: [
      'A resource that describes the "class" of storage',
      'A type of volume',
      'A storage policy',
      'A backup configuration'
    ],
    correctAnswer: 'A resource that describes the "class" of storage',
    explanation: 'StorageClass describes the "class" of storage offered by different storage providers.',
    category: 'Storage',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-31',
    question: 'Which Kubernetes resource is used for pod affinity and anti-affinity?',
    options: [
      'PodAffinity and PodAntiAffinity',
      'NodeSelector',
      'Taints and Tolerations',
      'ResourceQuota'
    ],
    correctAnswer: 'PodAffinity and PodAntiAffinity',
    explanation: 'Pod affinity and anti-affinity allow you to constrain which nodes your pod is eligible to be scheduled on.',
    category: 'Scheduling',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-32',
    question: 'What is the purpose of Kubernetes RBAC?',
    options: [
      'To control access to Kubernetes resources',
      'To manage network policies',
      'To control resource allocation',
      'To handle authentication'
    ],
    correctAnswer: 'To control access to Kubernetes resources',
    explanation: 'Role-Based Access Control (RBAC) is a method of regulating access to computer or network resources based on the roles of individual users.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-33',
    question: 'Which command is used to scale a deployment?',
    options: [
      'kubectl scale',
      'kubectl resize',
      'kubectl adjust',
      'kubectl modify'
    ],
    correctAnswer: 'kubectl scale',
    explanation: 'The `kubectl scale` command sets a new size for a deployment, replica set, or replication controller.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-34',
    question: 'What is a Kubernetes Init Container?',
    options: [
      'A container that runs before the main containers in a pod',
      'A container that initializes the cluster',
      'A bootstrap container',
      'A setup container'
    ],
    correctAnswer: 'A container that runs before the main containers in a pod',
    explanation: 'Init containers run before the main containers in a pod and can be used to set up the environment for the main application.',
    category: 'Workloads',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-35',
    question: 'Which Kubernetes resource is used for pod disruption budgets?',
    options: [
      'PodDisruptionBudget',
      'ResourceQuota',
      'LimitRange',
      'ConfigMap'
    ],
    correctAnswer: 'PodDisruptionBudget',
    explanation: 'PodDisruptionBudget limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions.',
    category: 'Resource Management',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-36',
    question: 'What is the purpose of Kubernetes Service Accounts?',
    options: [
      'To provide an identity for processes that run in a pod',
      'To manage user accounts',
      'To control access to services',
      'To handle authentication'
    ],
    correctAnswer: 'To provide an identity for processes that run in a pod',
    explanation: 'Service accounts provide an identity for processes that run in a pod.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-37',
    question: 'Which command is used to get events from the cluster?',
    options: [
      'kubectl get events',
      'kubectl events',
      'kubectl show events',
      'kubectl list events'
    ],
    correctAnswer: 'kubectl get events',
    explanation: 'The `kubectl get events` command lists recent events from the cluster.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-38',
    question: 'What is a Kubernetes EndpointSlice?',
    options: [
      'A way to track a set of network endpoints',
      'A type of service',
      'A network configuration',
      'A load balancer'
    ],
    correctAnswer: 'A way to track a set of network endpoints',
    explanation: 'EndpointSlice represents a subset of the endpoints that implement a service.',
    category: 'Networking',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-39',
    question: 'Which Kubernetes resource is used for pod priority and preemption?',
    options: [
      'PriorityClass',
      'ResourceQuota',
      'LimitRange',
      'ConfigMap'
    ],
    correctAnswer: 'PriorityClass',
    explanation: 'PriorityClass defines the mapping from a priority class name to the priority integer value.',
    category: 'Scheduling',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-40',
    question: 'What is the purpose of Kubernetes Pod Security Standards?',
    options: [
      'To define security policies for pods',
      'To manage network security',
      'To control resource access',
      'To handle authentication'
    ],
    correctAnswer: 'To define security policies for pods',
    explanation: 'Pod Security Standards define different isolation levels for pods.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-41',
    question: 'Which command is used to create a namespace?',
    options: [
      'kubectl create namespace',
      'kubectl new namespace',
      'kubectl add namespace',
      'kubectl make namespace'
    ],
    correctAnswer: 'kubectl create namespace',
    explanation: 'The `kubectl create namespace` command creates a new namespace.',
    category: 'Kubernetes CLI',
    difficulty: 'Easy'
  },
  {
    id: 'kubernetes-42',
    question: 'What is a Kubernetes Mutating Admission Webhook?',
    options: [
      'A webhook that can modify objects before they are persisted',
      'A type of service',
      'A network policy',
      'A security controller'
    ],
    correctAnswer: 'A webhook that can modify objects before they are persisted',
    explanation: 'Mutating admission webhooks can modify objects before they are persisted.',
    category: 'Advanced Concepts',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-43',
    question: 'Which Kubernetes resource is used for pod topology spread constraints?',
    options: [
      'TopologySpreadConstraint',
      'PodAffinity',
      'NodeSelector',
      'Taints'
    ],
    correctAnswer: 'TopologySpreadConstraint',
    explanation: 'Topology spread constraints control how pods are spread across your cluster among failure-domains.',
    category: 'Scheduling',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-44',
    question: 'What is the purpose of Kubernetes Pod Presets?',
    options: [
      'To inject information into pods at creation time',
      'To preset pod configurations',
      'To manage pod templates',
      'To control pod scheduling'
    ],
    correctAnswer: 'To inject information into pods at creation time',
    explanation: 'Pod Presets inject information into pods at creation time.',
    category: 'Configuration',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-45',
    question: 'Which command is used to get resource usage of nodes?',
    options: [
      'kubectl top nodes',
      'kubectl stats nodes',
      'kubectl usage nodes',
      'kubectl metrics nodes'
    ],
    correctAnswer: 'kubectl top nodes',
    explanation: 'The `kubectl top nodes` command shows resource usage of nodes.',
    category: 'Kubernetes CLI',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-46',
    question: 'What is a Kubernetes Validating Admission Webhook?',
    options: [
      'A webhook that can validate objects before they are persisted',
      'A type of service',
      'A network policy',
      'A security controller'
    ],
    correctAnswer: 'A webhook that can validate objects before they are persisted',
    explanation: 'Validating admission webhooks can validate objects before they are persisted.',
    category: 'Advanced Concepts',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-47',
    question: 'Which Kubernetes resource is used for pod disruption budgets?',
    options: [
      'PodDisruptionBudget',
      'ResourceQuota',
      'LimitRange',
      'ConfigMap'
    ],
    correctAnswer: 'PodDisruptionBudget',
    explanation: 'PodDisruptionBudget limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions.',
    category: 'Resource Management',
    difficulty: 'Hard'
  },
  {
    id: 'kubernetes-48',
    question: 'What is the purpose of Kubernetes Pod Security Context?',
    options: [
      'To set security settings that apply to a pod',
      'To manage network security',
      'To control resource access',
      'To handle authentication'
    ],
    correctAnswer: 'To set security settings that apply to a pod',
    explanation: 'Pod Security Context defines privilege and access control settings for a Pod.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-49',
    question: 'Which command is used to get resource usage of pods?',
    options: [
      'kubectl top pods',
      'kubectl stats pods',
      'kubectl usage pods',
      'kubectl metrics pods'
    ],
    correctAnswer: 'kubectl top pods',
    explanation: 'The `kubectl top pods` command shows resource usage of pods.',
    category: 'Kubernetes CLI',
    difficulty: 'Medium'
  },
  {
    id: 'kubernetes-50',
    question: 'What is a Kubernetes Pod Disruption Budget?',
    options: [
      'A resource that limits the number of pods that can be down simultaneously',
      'A type of deployment',
      'A scaling policy',
      'A resource monitor'
    ],
    correctAnswer: 'A resource that limits the number of pods that can be down simultaneously',
    explanation: 'Pod Disruption Budget limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions.',
    category: 'Resource Management',
    difficulty: 'Hard'
  }
]; 