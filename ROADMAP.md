Project Roadmap:

UP NEXT:

    Build out Users

    >Figure out my auth<

    Delete user ability

    Controller for users

    Change bonsai object to have a user authorization
    Ensure that only authors can edit, delete their bonsai

Environment Setup:
    []  Set up your local development environment for PHP and SQLite.
    []  Configure a React development environment.
    []  Prepare your testing environment with PHPUnit for PHP backend testing and possibly 
    []  Jest for React components.
    []  Backend Development (PHP & SQLite):
    []  Database Design: Design a SQLite database schema for storing user data and bonsai 
        profiles (photos, dob, species, geographic location, etc.).



API Development:
    []  Create PHP APIs using PDO for CRUD operations on bonsai profiles and user accounts.
        [] Create bonsai profile   
            Prereqs: Create database, create schema for bonsai profile
    []  Implement authentication and authorization for user mandobment.
    []  Develop search functionality to filter bonsai profiles based on different criteria.



Frontend Development (React):
    []  Component Design: Sketch out the main components (e.g., profile forms, search bars, 
        login/logout components).
    Routing: 
        []  Set up React Router for navigating between different components.
    State Mandobment: 
        []  Use Context API or Redux for managing state across the application.
    Form Handling: 
        []  Implement forms for user registration, login, and bonsai profile uploads.
    Integration: 
        []  Connect the React frontend with the PHP backend via API calls.

Testing:
    PHPUnit: 
        []  Write tests for the backend to ensure all functionalities like database interactions and user session mandobment are working as expected.
    React Testing: 
        []  Use Jest to test React components and ensure that the frontend behaves correctly.

Deployment:
    []  Prepare the application for deployment.
    []  Choose a suitable hosting environment for both the PHP backend and React frontend.
   