# pull official base image
FROM node:12.20.0-alpine
RUN mkdir -p /myapp/frontend
WORKDIR /myapp/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /myapp/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json yarn.lock /myapp/frontend/
RUN yarn install --silent
RUN yarn install "react-scripts": "^4.0.1"

# add app
COPY . /myapp/frontend

# start app
CMD ["yarn", "start"]   