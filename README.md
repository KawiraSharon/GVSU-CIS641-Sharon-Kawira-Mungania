# Soloscribe

BankingMadeSimple is a banking application that utilizes a simple and intuitive user iterface to allow users to perform simple banking operations like signing up, signing in and out, sending and receiving money. It also allows users to link multiple bank accounts by utilizing an API called Plaid.

## Team Members and Roles

[Sharon Kawira Mungania](https://github.com/KawiraSharon/KawiraSharon-CIS641-HW2-Mungania.git) (Fullstack developer)

## Prerequisites

## Run Instructions

#### 1. Access and copy the link from my repository to your local machine.
Access my repository here:  
[GitHub Repository](https://github.com/KawiraSharon/GVSU-CIS641-Soloscribe.git)

Copy the link to the repository and codebase.

#### 2. Clone My Repository to Your Local Machine
Open your terminal and paste the clone command:
```bash
git clone <command copied from GitHub>
```

Navigate to your project directory:
```bash
cd <your repository>
```

#### 3. Install and Pull All Dependencies and Requirements
Run this command to install all necessary dependencies:
```bash
npm install
```

#### 4. Configure Environment Variables
Create a file in the root of your project and name it `<filename>.env.local`.

Configure the Appwrite, Plaid, and Dwolla environment variables by replacing the placeholders with your own values. Please create an account for each service if you don't have one already.

For Appwrite:
```bash
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://appwrite.your-domain.com
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<appwrite-project-id>
APPWRITE_API_KEY=<appwrite-api_key>
```

For Dwolla:
```bash
NEXT_PUBLIC_DWOLLA_ENV=sandbox
DWOLLA_KEY=<dwolla-key>
DWOLLA_SECRET=<dwolla-secret>
```

For Plaid:
```bash
NEXT_PUBLIC_PLAID_ENV=<sandbox>
PLAID_CLIENT_ID=<plaid-client_id>
PLAID_SECRET=plaid-<secret>
PLAID_PUBLIC_KEY=<plaid-public_key>
```

#### 5. Run the Application on Your Local Machine
Once the environment variables are set up, run the application using:
```bash
npm run dev
```

Nextjs port is 3000, therefore the application will run on:
[http://localhost:3000](http://localhost:3000)

#### 6. Deploying Using Vercel
To deploy the project using Vercel, follow these steps:

1. Go to the [Vercel Website](https://vercel.com/) and create an account if you don't have one.
2. Link your GitHub repository to deploy the application directly from your already cloned, installed, and running project, by connecting your github account.
3. You can also deploy the website by importing my repository here:
   [BankingMadeSimple](https://github.com/KawiraSharon/GVSU-CIS641-Soloscribe.git)
4. Update the environment variables on the Vercel website, matching those from your `.env.local` file.
5. Scroll down and click "Deploy".
6. After the first build, update the website url as well.

---

