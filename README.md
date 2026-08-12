# Ticket System Application

## Overview
The Ticket System Application is a web application designed to allow users to report computer repairs or hardware issues. It provides a platform for users to submit tickets and for the support team to manage and resolve these tickets efficiently.

## Features
- User registration and login system using Supabase.
- Users can report issues and view the status of their tickets.
- Support team can view, claim, and manage tickets.
- Each ticket displays a message indicating it has been checked by a specific support team member.

## Technology Stack
- **Frontend**: React
- **Backend**: Supabase
- **Styling**: CSS with a color scheme of white, navy blue, and orange.

## Project Structure
```
ticket-system-app
├── public
│   ├── index.html
│   ├── styles.css
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── TicketList.tsx
│   │   ├── TicketDetails.tsx
│   │   ├── LoginForm.tsx
│   │   └── RegistrationForm.tsx
│   ├── pages
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── DashboardPage.tsx
│   ├── utils
│   │   └── supabaseClient.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ticket-system-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up Supabase and configure the `supabaseClient.ts` file with your Supabase credentials.
5. Start the development server:
   ```
   npm start
   ```

## Usage
- Visit the home page to register or log in.
- Users can submit tickets for hardware issues.
- Support team members can log in to view and manage tickets.

## License
This project is licensed under the MIT License.