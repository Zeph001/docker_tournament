# pull official base image
FROM node:12.20.0-alpine
RUN mkdir -p /myapp/frontend
WORKDIR /myapp/frontend

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /myapp/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json package-lock.json /myapp/frontend/
RUN npm install --silent

# add app
COPY . /myapp/frontend

EXPOSE 3000
# start app
CMD ["npm", "start"]   