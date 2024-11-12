
# Social Diaries

A social media application that allows users to share their thoughts, connect with others, and explore posts in a simple and interactive environment. This project is built using Node.js, Express.js, and EJS for the frontend view, and it integrates RESTful APIs for efficient data management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Profiles**: Users can create accounts, update their profiles, and view profiles of other users.
- **Post Creation**: Users can create, edit, and delete their posts.
- **Real-Time Interactions**: Users can like, comment, and share posts.
- **Explore Feed**: Discover posts by other users and interact with them.
- **Notification System**: Get notified of likes, comments, and other activities.
  
## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS for server-side rendered views
- **Database**: MongoDB
- **APIs**: REST API
- **Real-Time Communication**: Socket.io

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/social-diaries.git
   cd social-diaries
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the application**

   ```bash
   npm start
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Sign up** or **log in** to your account.
2. **Create new posts** by navigating to the "New Post" section.
3. **Explore** posts from other users on the Explore page.
4. **Engage** with posts by liking, commenting, or sharing.

## API Endpoints

The following REST API endpoints are used in the Social Diaries app:

- **User Endpoints**
  - `POST /api/users/signup`: Register a new user.
  - `POST /api/users/login`: Log in a user.
  - `GET /api/users/:id`: Get user profile by ID.
  
- **Post Endpoints**
  - `POST /api/posts`: Create a new post.
  - `GET /api/posts`: Get all posts.
  - `GET /api/posts/:id`: Get a specific post by ID.
  - `PUT /api/posts/:id`: Update a post by ID.
  - `DELETE /api/posts/:id`: Delete a post by ID.

- **Interactions**
  - `POST /api/posts/:id/like`: Like a post.
  - `POST /api/posts/:id/comment`: Comment on a post.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
