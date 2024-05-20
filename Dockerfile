# Use the official Node.js image
FROM node:21.2.0

# Create and set the working directory
WORKDIR /home/app

# Copy package.json and package-lock.json
COPY package*.json ./

COPY tsconfig.json ./

COPY .env ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY src/ ./src

COPY prisma/ ./prisma


# Expose the application port
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "dev"]