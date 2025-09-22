# Basisimage mit Node.js verwenden
FROM node:20

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# package.json und package-lock.json kopieren und npm install ausführen
COPY package*.json ./
RUN npm install

# Den gesamten Rest des Codes kopieren
COPY . .

# Server-Port freigeben
EXPOSE 3000

# Startbefehl für den Entwicklungsserver
CMD ["npm", "run", "dev"]