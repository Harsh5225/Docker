```markdown
# Dockerized Node.js Express Application

A simple Express.js application containerized with Docker, demonstrating fundamental Docker concepts and workflows.

## 📦 What's Inside

- Node.js Express server with two endpoints
- Optimized Dockerfile using Alpine Linux
- Complete Docker workflow examples
- Essential Docker commands cheat sheet

## 🐳 Docker Concepts Demonstrated

### Core Concepts
- **Images**: Lightweight templates (`node:20-alpine3.18`)
- **Containers**: Running instances of images
- **Port Mapping**: Connecting host and container ports
- **Layered Builds**: Optimized Dockerfile structure

### Key Learnings
1. Always start with lightweight base images
2. Proper layer caching with `package.json` first
3. Container isolation and port forwarding
4. Docker lifecycle management (build, run, stop, remove)

## 🛠️ Setup & Usage

### Build the Image
```bash
docker build -t expressapp .
```

### Run the Container
```bash
docker run -it -p 3000:8000 --name express_container expressapp
```

### Access the Application
- Homepage: http://localhost:3000
- Products API: http://localhost:3000/product

## 🏗️ Dockerfile Breakdown

```dockerfile
# 1. Lightweight base image
FROM node:20-alpine3.18

# 2. Working directory setup
WORKDIR /app

# 3. Copy dependency files (optimized for caching)
COPY package.json .
COPY package-lock.json .

# 4. Install dependencies
RUN npm install

# 5. Copy application code
COPY . .

# 6. Runtime command
CMD ["npm", "start"]
```

## 🎯 Essential Docker Commands

### Container Management
| Command | Description |
|---------|-------------|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker stop <id>` | Stop a container |
| `docker rm <id>` | Remove a container |
| `docker run --name <name>` | Name your container |

### Image Management
| Command | Description |
|---------|-------------|
| `docker images` | List images |
| `docker rmi <image>` | Remove an image |
| `docker build -t <tag>` | Build with tag |

### Special Flags
| Flag | Meaning | Example |
|------|---------|---------|
| `-it` | Interactive terminal | `docker run -it alpine sh` |
| `-p` | Port mapping | `-p 3000:8000` |
| `--rm` | Auto-remove after exit | `docker run --rm` |

## 🌟 Key Takeaways

1. **Port Mapping**: Critical for host-container communication (`-p HOST:CONTAINER`)
2. **Layer Caching**: Proper `Dockerfile` structure speeds up rebuilds
3. **Lightweight Images**: Alpine reduces attack surface and size
4. **Container Lifecycle**: Understand create-run-stop-remove flow

## 🚀 Next Steps to Explore

1. Add multi-stage builds for production
2. Implement Docker Compose for services
3. Add health checks to your container
4. Explore Docker networking
5. Set up CI/CD with Docker

## 📚 Resources

- [Official Docker Documentation](https://docs.docker.com/)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
```