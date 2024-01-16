# Installing Alpine OS and Node package
FROM node:18.18.2-alpine3.18

# Current Working Directory
WORKDIR /app

# Copy package.json file to current directory
COPY package.json .

# Install all dependencies
RUN npm install

# Copy all files and folders to current directory
COPY . .

# App will be started on 8000 port
EXPOSE 8000

# Start the app
CMD [ "npm", "run", "start:prod" ]
