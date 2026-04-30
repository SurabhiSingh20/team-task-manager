Team Task Manager – Description

The Team Task Manager is a full-stack web application designed to help teams organize their work efficiently. It allows users to create projects, assign tasks to team members, and track progress in a structured way. The system uses role-based access control, where **Admin users** can manage projects and assign tasks, while **Members** can view and update their assigned tasks.
 How It Works

The application follows a client-server architecture with a backend built using Node.js and Express, and a database managed through MongoDB.

1. User Authentication
   Users first register and log in using their email and password. After successful login, the system generates a secure JWT (JSON Web Token), which is used to authenticate all further requests.

2. Project Management
   Admin users can create projects and add team members. Each project acts as a container for tasks.

3. Task Management
   Tasks can be created within a project, assigned to specific users, and given details such as title, description, status (pending/completed), and due date.

4. Task Tracking & Dashboard
   The system tracks task progress and provides a dashboard showing:

   * Total tasks
   * Completed tasks
   * Pending tasks
   * Overdue tasks

5. Security & Access Control
   Role-based access ensures that only authorized users (Admins) can create or manage projects, while Members have limited permissions.

This project demonstrates how a real-world task management system works by combining authentication, database relationships, and API-based communication. It helps teams collaborate, stay organized, and monitor work progress effectively.
