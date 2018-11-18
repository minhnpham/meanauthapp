FROM node:6

# Create runtime dir
RUN mkdir -p /opt/meanauthapp

# Copy code to runtime dir
WORKDIR /opt/meanauthapp
COPY . /opt/meanauthapp

# Install node modules
RUN cd /opt/meanauthapp && npm install

EXPOSE 3000
CMD ["npm", "start"]