# Installation Guide

## 1. Clone the Repository

```bash
git clone https://github.com/suryanshsingh2001/echelon-script.git
```

## 2. Navigate to the Project Directory

```bash
cd echelon-script
npm install
```

## 3. Set Up Environment Variables

Create a `.env.local` file in the root of the project and add the following configuration:

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# MongoDB Configuration
MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/your_database?retryWrites=true&w=majority

# Uploadthing Configuration
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Webhook Secret
WEBHOOK_SECRET=your_webhook_secret

# Next.js Server URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# For Production, update the server URL
# NEXT_PUBLIC_SERVER_URL=https://your-production-url/
```

Make sure to replace all placeholders with your actual keys and credentials.

## 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 5. Explore the App

You're all set! Feel free to explore the app, contribute to its development, or provide feedback. If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.