# Culinary-Japan-Map

A full-stack web application that serves as a personal guide to Japan's regional cuisine. Discover hidden culinary gems and manage a personal wish list of dishes to try. This project is built while following the learning path of the book "The Complete Developer" by Martin Krause.

<p align="center">
    <img width="80%" src="./images/homepage.png" alt="homepage" style="border-radius: 8px;"/>
</p>

## Tech Stack

* **Framework:** Next.js
* **Language:** TypeScript
* **Database:** MongoDB with Mongoose
* **API:** GraphQL
* **Authentication:** Next-Auth (with GitHub OAuth)
* **Styling:** Tailwind CSS
* **Testing:** Jest
* **Containerization:** Docker

## Setup and Installation
To get the project up and running locally, follow these steps.

<b>Prerequisites</b> - Make sure you have the following installed on your system:
- Node.js
- Docker: For running the MongoDB database in a container.

<b>1. Clone the Repository</b><br>
Start by cloning the project from GitHub and navigating into the directory.

    git clone [REPO_URL]
    cd Culinary-Japan-Map

<b>2. Install Dependencies</b><br>
Install the required Node.js packages for the project.

    npm install

<b>3. Set Up the Database</b><br>
The application uses Docker to run a local MongoDB instance. Use the provided <code>docker-compose.yml</code> file to start the database.

    docker-compose up -d

<b>4. Configure Environment Variables</b><br>
Create a <code>.env.local</code> file in the root of the project to store your environment variables, such as the MongoDB connection string.

    touch .env.local
Then, add the following line to the file, using the default MongoDB connection string from the docker-compose.yml.

    MONGODB_URI=mongodb://root:password@localhost:27017/culinaryjapanmap?authSource=admin

<b>5. Run the Application</b><br>
Finally, start the Next.js development server to run the application.

    npm run dev