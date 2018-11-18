FROM node:6

# Create an app directory
WORKDIR /opt/meanauthappfrontend

# Copy and install node dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 4200
CMD ["npm", "start"]