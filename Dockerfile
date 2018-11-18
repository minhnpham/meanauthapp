FROM node:6

# Build node modules for main webapp
COPY package.json /tmp/package.json
RUN cd /tmp && npm install

# Create runtime dir
RUN mkdir -p /opt/meanauthapp

# Copy code to runtime dir
WORKDIR /opt/meanauthapp
COPY . /opt/meanauthapp

# Copy node_modules to runtime dir
RUN cp -a /tmp/node_modules /opt/meanauthapp

EXPOSE 3000
CMD ["npm", "start"]