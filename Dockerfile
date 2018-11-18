FROM node:6

# Create runtime dir
RUN mkdir -p /opt/meanauthapp

# Copy code to runtime dir
COPY . /opt/meanauthapp

# Install node modules
WORKDIR /opt/meanauthapp
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]