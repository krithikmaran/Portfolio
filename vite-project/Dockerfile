################################
## Stage 1: Build the React app using Node ##
################################

# Use Node.js Alpine image for building the app
FROM node:18-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files into the container
COPY . ./

# Build the React app for production
RUN npm run build

################################
## Stage 2: Serve the app with NGINX ##
################################

# Use the official NGINX Alpine image for production
FROM nginx:alpine as production

# Copy custom NGINX configuration (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output from the builder stage into NGINX's html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to allow access to the app
EXPOSE 80

# Run as non-root user
USER nginx

# Run NGINX in the foreground (default behavior)
CMD ["nginx", "-g", "daemon off;"]
