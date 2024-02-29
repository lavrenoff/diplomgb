FROM node:alpine
WORKDIR /
EXPOSE 5000
COPY package* ./
RUN npm install
COPY . ./
CMD ["npm","start"]