FROM node:18.14.0 as build

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Copy all local files into the image.
COPY . .

RUN npm run dev



##
# Only copy over the Node pieces we need
# ~> Saves 35MB
##



#FROM node:18.14.0#

#WORKDIR /app
#COPY package.json package-lock.json ./
#RUN pnpm install
#COPY . .

#RUN npm run build

#EXPOSE 3000
#CMD ["node", "./app.js"]


