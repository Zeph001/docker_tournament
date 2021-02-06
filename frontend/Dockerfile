# pull official base image
FROM node:12.20.0-alpine
RUN mkdir -p /myapp/frontend
WORKDIR /myapp/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /myapp/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /myapp/frontend/package.json
RUN yarn install --silent

# add app
COPY . /myapp/frontend

# start app
CMD ["yarn", "start"]   