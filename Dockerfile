FROM node:6

# Create an app directory
WORKDIR /opt/meanauthapp

# Copy and install node dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]