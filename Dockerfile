
# base image 
FROM node:20-alpine3.18

# set the working directory
WORKDIR /app

# copy package.json and package-lock.json
# package*.json optimized
COPY package.json . 
COPY package-lock.json . 

# install dependencies in container
RUN npm install

# copy the rest application code
COPY . .

# cmmnd for starting the application
CMD ["npm","start"]