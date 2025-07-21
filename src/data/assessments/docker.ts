import { AssessmentQuestion } from '../../types';

export const dockerAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'docker-1',
    question: 'What is Docker?',
    options: [
      'A platform for developing, shipping, and running applications in containers',
      'A programming language',
      'A type of database',
      'A cloud provider'
    ],
    correctAnswer: 'A platform for developing, shipping, and running applications in containers',
    explanation: 'Docker is an open platform that enables developers to automate the deployment of applications inside lightweight, portable containers.',
    category: 'Docker Basics',
    difficulty: 'Easy'
  },
  {
    id: 'docker-2',
    question: 'Which command is used to list all Docker images on your system?',
    options: [
      'docker images',
      'docker ps',
      'docker list',
      'docker containers'
    ],
    correctAnswer: 'docker images',
    explanation: 'The `docker images` command lists all images stored locally on your system.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-3',
    question: 'What is a Dockerfile?',
    options: [
      'A text file that contains instructions to build a Docker image',
      'A configuration file for Kubernetes',
      'A file that stores container logs',
      'A file that manages Docker networks'
    ],
    correctAnswer: 'A text file that contains instructions to build a Docker image',
    explanation: 'A Dockerfile is a script containing a series of instructions on how to build a Docker image.',
    category: 'Dockerfiles',
    difficulty: 'Easy'
  },
  {
    id: 'docker-4',
    question: 'Which instruction in a Dockerfile is used to specify the base image?',
    options: [
      'FROM',
      'RUN',
      'CMD',
      'COPY'
    ],
    correctAnswer: 'FROM',
    explanation: 'The FROM instruction sets the base image for subsequent instructions in the Dockerfile.',
    category: 'Dockerfiles',
    difficulty: 'Easy'
  },
  {
    id: 'docker-5',
    question: 'What does the `docker run` command do?',
    options: [
      'Creates and starts a new container from an image',
      'Builds a Docker image',
      'Removes a container',
      'Lists all running containers'
    ],
    correctAnswer: 'Creates and starts a new container from an image',
    explanation: 'The `docker run` command creates and starts a new container from a specified image.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-6',
    question: 'Which command is used to stop a running Docker container?',
    options: [
      'docker stop',
      'docker kill',
      'docker pause',
      'docker halt'
    ],
    correctAnswer: 'docker stop',
    explanation: 'The `docker stop` command gracefully stops a running container.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-7',
    question: 'What is the default network driver for Docker containers?',
    options: [
      'bridge',
      'host',
      'overlay',
      'none'
    ],
    correctAnswer: 'bridge',
    explanation: 'By default, Docker containers are connected to a bridge network unless specified otherwise.',
    category: 'Networking',
    difficulty: 'Medium'
  },
  {
    id: 'docker-8',
    question: 'Which command removes a Docker image from your system?',
    options: [
      'docker rmi',
      'docker rm',
      'docker image delete',
      'docker image remove'
    ],
    correctAnswer: 'docker rmi',
    explanation: 'The `docker rmi` command removes one or more images from your local storage.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-9',
    question: 'What is the purpose of the `CMD` instruction in a Dockerfile?',
    options: [
      'Specifies the default command to run when a container starts',
      'Copies files into the image',
      'Sets environment variables',
      'Specifies the base image'
    ],
    correctAnswer: 'Specifies the default command to run when a container starts',
    explanation: 'CMD sets the default command and arguments to run when the container starts.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-10',
    question: 'Which command is used to view the logs of a running Docker container?',
    options: [
      'docker logs',
      'docker view',
      'docker output',
      'docker show'
    ],
    correctAnswer: 'docker logs',
    explanation: 'The `docker logs` command fetches logs from a running or stopped container.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-11',
    question: 'What is the difference between `CMD` and `ENTRYPOINT` in a Dockerfile?',
    options: [
      'CMD can be overridden at runtime, ENTRYPOINT cannot',
      'ENTRYPOINT can be overridden at runtime, CMD cannot',
      'There is no difference between them',
      'CMD is for Linux, ENTRYPOINT is for Windows'
    ],
    correctAnswer: 'CMD can be overridden at runtime, ENTRYPOINT cannot',
    explanation: 'CMD provides default arguments that can be overridden when running the container, while ENTRYPOINT sets the executable that will always run.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-12',
    question: 'Which command is used to execute a command inside a running container?',
    options: [
      'docker exec',
      'docker run',
      'docker attach',
      'docker enter'
    ],
    correctAnswer: 'docker exec',
    explanation: 'The `docker exec` command runs a new command in a running container.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-13',
    question: 'What is the purpose of the `COPY` instruction in a Dockerfile?',
    options: [
      'To copy files from the host into the Docker image',
      'To copy files between containers',
      'To copy files from the internet',
      'To copy files from other images'
    ],
    correctAnswer: 'To copy files from the host into the Docker image',
    explanation: 'The COPY instruction copies new files or directories from the host and adds them to the filesystem of the container.',
    category: 'Dockerfiles',
    difficulty: 'Easy'
  },
  {
    id: 'docker-14',
    question: 'Which command is used to remove all stopped containers?',
    options: [
      'docker container prune',
      'docker rm all',
      'docker clean',
      'docker container remove'
    ],
    correctAnswer: 'docker container prune',
    explanation: 'The `docker container prune` command removes all stopped containers.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-15',
    question: 'What is a Docker volume?',
    options: [
      'A mechanism for persisting data generated by and used by Docker containers',
      'A type of Docker image',
      'A Docker network configuration',
      'A Docker container backup'
    ],
    correctAnswer: 'A mechanism for persisting data generated by and used by Docker containers',
    explanation: 'Docker volumes are the preferred mechanism for persisting data generated by and used by Docker containers.',
    category: 'Storage',
    difficulty: 'Medium'
  },
  {
    id: 'docker-16',
    question: 'Which command is used to create a Docker volume?',
    options: [
      'docker volume create',
      'docker create volume',
      'docker volume new',
      'docker volume add'
    ],
    correctAnswer: 'docker volume create',
    explanation: 'The `docker volume create` command creates a new volume.',
    category: 'Storage',
    difficulty: 'Easy'
  },
  {
    id: 'docker-17',
    question: 'What is the purpose of the `EXPOSE` instruction in a Dockerfile?',
    options: [
      'It documents which ports the container will listen on',
      'It automatically publishes the port to the host',
      'It opens a firewall port',
      'It creates a network connection'
    ],
    correctAnswer: 'It documents which ports the container will listen on',
    explanation: 'EXPOSE is documentation for developers and doesn\'t actually publish the port.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-18',
    question: 'Which command is used to build a Docker image from a Dockerfile?',
    options: [
      'docker build',
      'docker create',
      'docker image build',
      'docker make'
    ],
    correctAnswer: 'docker build',
    explanation: 'The `docker build` command builds an image from a Dockerfile and a context.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-19',
    question: 'What is the purpose of the `WORKDIR` instruction in a Dockerfile?',
    options: [
      'To set the working directory for subsequent instructions',
      'To create a new directory',
      'To change file permissions',
      'To set environment variables'
    ],
    correctAnswer: 'To set the working directory for subsequent instructions',
    explanation: 'The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD instructions that follow it.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-20',
    question: 'Which command is used to pull a Docker image from a registry?',
    options: [
      'docker pull',
      'docker download',
      'docker fetch',
      'docker get'
    ],
    correctAnswer: 'docker pull',
    explanation: 'The `docker pull` command downloads an image or a repository from a registry.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-21',
    question: 'What is the purpose of the `ENV` instruction in a Dockerfile?',
    options: [
      'To set environment variables',
      'To create environment files',
      'To set working directory',
      'To copy environment files'
    ],
    correctAnswer: 'To set environment variables',
    explanation: 'The ENV instruction sets the environment variable to the value.',
    category: 'Dockerfiles',
    difficulty: 'Easy'
  },
  {
    id: 'docker-22',
    question: 'Which command is used to tag a Docker image?',
    options: [
      'docker tag',
      'docker label',
      'docker name',
      'docker mark'
    ],
    correctAnswer: 'docker tag',
    explanation: 'The `docker tag` command creates a tag that points to an image.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-23',
    question: 'What is the purpose of the `ADD` instruction in a Dockerfile?',
    options: [
      'To copy files and directories and extract tar files',
      'To add users to the container',
      'To add packages to the image',
      'To add network connections'
    ],
    correctAnswer: 'To copy files and directories and extract tar files',
    explanation: 'The ADD instruction copies new files, directories, or remote file URLs and adds them to the filesystem of the image.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-24',
    question: 'Which command is used to inspect a Docker image?',
    options: [
      'docker inspect',
      'docker examine',
      'docker view',
      'docker show'
    ],
    correctAnswer: 'docker inspect',
    explanation: 'The `docker inspect` command returns detailed information on Docker objects.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-25',
    question: 'What is the purpose of the `USER` instruction in a Dockerfile?',
    options: [
      'To set the user name for subsequent instructions',
      'To create a new user',
      'To set file permissions',
      'To change ownership of files'
    ],
    correctAnswer: 'To set the user name for subsequent instructions',
    explanation: 'The USER instruction sets the user name (or UID) and optionally the user group (or GID) to use when running the image.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-26',
    question: 'Which command is used to save a Docker image to a tar file?',
    options: [
      'docker save',
      'docker export',
      'docker backup',
      'docker archive'
    ],
    correctAnswer: 'docker save',
    explanation: 'The `docker save` command saves one or more images to a tar archive.',
    category: 'Docker CLI',
    difficulty: 'Medium'
  },
  {
    id: 'docker-27',
    question: 'What is the purpose of the `ARG` instruction in a Dockerfile?',
    options: [
      'To define variables that users can pass at build-time',
      'To set runtime arguments',
      'To define environment variables',
      'To set build arguments'
    ],
    correctAnswer: 'To define variables that users can pass at build-time',
    explanation: 'The ARG instruction defines a variable that users can pass at build-time to the builder with the docker build command.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-28',
    question: 'Which command is used to load a Docker image from a tar file?',
    options: [
      'docker load',
      'docker import',
      'docker restore',
      'docker extract'
    ],
    correctAnswer: 'docker load',
    explanation: 'The `docker load` command loads an image from a tar archive or STDIN.',
    category: 'Docker CLI',
    difficulty: 'Medium'
  },
  {
    id: 'docker-29',
    question: 'What is the purpose of the `HEALTHCHECK` instruction in a Dockerfile?',
    options: [
      'To tell Docker how to test a container to check that it is still working',
      'To check the health of the host system',
      'To monitor resource usage',
      'To check network connectivity'
    ],
    correctAnswer: 'To tell Docker how to test a container to check that it is still working',
    explanation: 'The HEALTHCHECK instruction tells Docker how to test a container to check that it is still working.',
    category: 'Dockerfiles',
    difficulty: 'Hard'
  },
  {
    id: 'docker-30',
    question: 'Which command is used to remove all unused Docker images?',
    options: [
      'docker image prune',
      'docker images remove',
      'docker clean images',
      'docker image clean'
    ],
    correctAnswer: 'docker image prune',
    explanation: 'The `docker image prune` command removes all dangling images.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-31',
    question: 'What is the purpose of the `SHELL` instruction in a Dockerfile?',
    options: [
      'To override the default shell used for shell form of commands',
      'To install a shell',
      'To set shell environment variables',
      'To create shell scripts'
    ],
    correctAnswer: 'To override the default shell used for shell form of commands',
    explanation: 'The SHELL instruction allows the default shell used for the shell form of commands to be overridden.',
    category: 'Dockerfiles',
    difficulty: 'Hard'
  },
  {
    id: 'docker-32',
    question: 'Which command is used to rename a Docker container?',
    options: [
      'docker rename',
      'docker mv',
      'docker name',
      'docker label'
    ],
    correctAnswer: 'docker rename',
    explanation: 'The `docker rename` command renames a container.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-33',
    question: 'What is the purpose of the `ONBUILD` instruction in a Dockerfile?',
    options: [
      'To add a trigger instruction to be executed when the image is used as a base',
      'To build the image on demand',
      'To create a build trigger',
      'To set build conditions'
    ],
    correctAnswer: 'To add a trigger instruction to be executed when the image is used as a base',
    explanation: 'The ONBUILD instruction adds to the image a trigger instruction to be executed at a later time.',
    category: 'Dockerfiles',
    difficulty: 'Hard'
  },
  {
    id: 'docker-34',
    question: 'Which command is used to pause a running Docker container?',
    options: [
      'docker pause',
      'docker stop',
      'docker suspend',
      'docker halt'
    ],
    correctAnswer: 'docker pause',
    explanation: 'The `docker pause` command pauses all processes within one or more containers.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-35',
    question: 'What is the purpose of the `STOPSIGNAL` instruction in a Dockerfile?',
    options: [
      'To set the system call signal that will be sent to the container to exit',
      'To stop the build process',
      'To signal the host system',
      'To stop network connections'
    ],
    correctAnswer: 'To set the system call signal that will be sent to the container to exit',
    explanation: 'The STOPSIGNAL instruction sets the system call signal that will be sent to the container to exit.',
    category: 'Dockerfiles',
    difficulty: 'Hard'
  },
  {
    id: 'docker-36',
    question: 'Which command is used to unpause a paused Docker container?',
    options: [
      'docker unpause',
      'docker resume',
      'docker start',
      'docker continue'
    ],
    correctAnswer: 'docker unpause',
    explanation: 'The `docker unpause` command unpauses all processes within one or more containers.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-37',
    question: 'What is the purpose of the `LABEL` instruction in a Dockerfile?',
    options: [
      'To add metadata to an image',
      'To label containers',
      'To create labels for volumes',
      'To mark network interfaces'
    ],
    correctAnswer: 'To add metadata to an image',
    explanation: 'The LABEL instruction adds metadata to an image.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-38',
    question: 'Which command is used to show Docker system information?',
    options: [
      'docker system info',
      'docker info',
      'docker system',
      'docker status'
    ],
    correctAnswer: 'docker info',
    explanation: 'The `docker info` command displays system-wide information.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-39',
    question: 'What is the purpose of the `MAINTAINER` instruction in a Dockerfile?',
    options: [
      'To set the Author field of the generated images',
      'To maintain the container',
      'To set maintenance schedules',
      'To create maintenance scripts'
    ],
    correctAnswer: 'To set the Author field of the generated images',
    explanation: 'The MAINTAINER instruction sets the Author field of the generated images.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-40',
    question: 'Which command is used to show Docker disk usage?',
    options: [
      'docker system df',
      'docker disk usage',
      'docker space',
      'docker usage'
    ],
    correctAnswer: 'docker system df',
    explanation: 'The `docker system df` command shows the amount of disk space used by Docker.',
    category: 'Docker CLI',
    difficulty: 'Medium'
  },
  {
    id: 'docker-41',
    question: 'What is the purpose of the `VOLUME` instruction in a Dockerfile?',
    options: [
      'To create a mount point and mark it as holding externally mounted volumes',
      'To create a volume',
      'To mount a volume',
      'To backup data'
    ],
    correctAnswer: 'To create a mount point and mark it as holding externally mounted volumes',
    explanation: 'The VOLUME instruction creates a mount point with the specified name and marks it as holding externally mounted volumes.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-42',
    question: 'Which command is used to show Docker version information?',
    options: [
      'docker version',
      'docker --version',
      'docker info version',
      'docker system version'
    ],
    correctAnswer: 'docker version',
    explanation: 'The `docker version` command shows the Docker version information.',
    category: 'Docker CLI',
    difficulty: 'Easy'
  },
  {
    id: 'docker-43',
    question: 'What is the purpose of the `EXPOSE` instruction in a Dockerfile?',
    options: [
      'It documents which ports the container will listen on',
      'It automatically publishes the port to the host',
      'It opens a firewall port',
      'It creates a network connection'
    ],
    correctAnswer: 'It documents which ports the container will listen on',
    explanation: 'EXPOSE is documentation for developers and doesn\'t actually publish the port.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-44',
    question: 'Which command is used to show Docker container resource usage statistics?',
    options: [
      'docker stats',
      'docker top',
      'docker monitor',
      'docker usage'
    ],
    correctAnswer: 'docker stats',
    explanation: 'The `docker stats` command displays a live stream of container(s) resource usage statistics.',
    category: 'Docker CLI',
    difficulty: 'Medium'
  },
  {
    id: 'docker-45',
    question: 'What is the purpose of the `COPY` instruction in a Dockerfile?',
    options: [
      'To copy files from the host into the Docker image',
      'To copy files between containers',
      'To copy files from the internet',
      'To copy files from other images'
    ],
    correctAnswer: 'To copy files from the host into the Docker image',
    explanation: 'The COPY instruction copies new files or directories from the host and adds them to the filesystem of the container.',
    category: 'Dockerfiles',
    difficulty: 'Easy'
  },
  {
    id: 'docker-46',
    question: 'Which command is used to show Docker container processes?',
    options: [
      'docker top',
      'docker ps',
      'docker processes',
      'docker list'
    ],
    correctAnswer: 'docker top',
    explanation: 'The `docker top` command displays the running processes of a container.',
    category: 'Docker CLI',
    difficulty: 'Medium'
  },
  {
    id: 'docker-47',
    question: 'What is the purpose of the `RUN` instruction in a Dockerfile?',
    options: [
      'To execute commands and commit the results',
      'To run the container',
      'To run scripts',
      'To execute tests'
    ],
    correctAnswer: 'To execute commands and commit the results',
    explanation: 'The RUN instruction will execute any commands in a new layer on top of the current image and commit the results.',
    category: 'Dockerfiles',
    difficulty: 'Easy'
  },
  {
    id: 'docker-48',
    question: 'Which command is used to show Docker network information?',
    options: [
      'docker network ls',
      'docker networks',
      'docker net',
      'docker list networks'
    ],
    correctAnswer: 'docker network ls',
    explanation: 'The `docker network ls` command lists networks.',
    category: 'Networking',
    difficulty: 'Easy'
  },
  {
    id: 'docker-49',
    question: 'What is the purpose of the `CMD` instruction in a Dockerfile?',
    options: [
      'Specifies the default command to run when a container starts',
      'Copies files into the image',
      'Sets environment variables',
      'Specifies the base image'
    ],
    correctAnswer: 'Specifies the default command to run when a container starts',
    explanation: 'CMD sets the default command and arguments to run when the container starts.',
    category: 'Dockerfiles',
    difficulty: 'Medium'
  },
  {
    id: 'docker-50',
    question: 'Which command is used to show Docker volume information?',
    options: [
      'docker volume ls',
      'docker volumes',
      'docker vol',
      'docker list volumes'
    ],
    correctAnswer: 'docker volume ls',
    explanation: 'The `docker volume ls` command lists volumes.',
    category: 'Storage',
    difficulty: 'Easy'
  }
]; 