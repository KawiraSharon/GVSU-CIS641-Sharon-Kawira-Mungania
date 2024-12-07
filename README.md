# Soloscribe

BankingMadeSimple is a banking application that utilizes a simple and intuitive user iterface to allow users to perform simple banking operations like signing up, signing in and out, sending and receiving money. It also allows users to link multiple bank accounts by utilizing an API called Plaid.

## Team Members and Roles

[Sharon Kawira Mungania](https://github.com/KawiraSharon/KawiraSharon-CIS641-HW2-Mungania.git) (Fullstack developer)

## Prerequisites

## Run Instructions
1. Access and copy the link from my repository to your local machine.
#Access my repository here: 
#Copy the link to the repository and codebase:

2. Clone my repository to your local machine
#Open your terminal and paste the clone command: git clone <command copied from github>
#Open your directory: "hyperlink cd <your repository>

3. Install and pull all dependencies and requirements
#Run this command: "hyperlink npm install

4. Configure environment variables
#create a file in the root of your project and call it <filename>.env.local
#configure the appwrite, plaid and dwolla environment variables.
#Please create an account for each of the envs and replace the keyholder with your own values

    For Next.js
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://appwrite.your-domain.com""" find and replace 
    NEXT_PUBLIC_APPWRITE_PROJECT_ID=<appwrite-project-id>

    For Dwolla
    NEXT_PUBLIC_DWOLLA_ENV=sandbox
    DWOLLA_KEY=<dwolla-key>
    DWOLLA_SECRET=<dwolla-secret>

    For Appwrite
    APPWRITE_API_KEY=<appwrite-api_key>

    For Plaid
    NEXT_PUBLIC_PLAID_ENV=<sandbox>
    PLAID_CLIENT_ID=<plaid-client_id>
    PLAID_SECRET=plaid-<secret>
    PLAID_PUBLIC_KEY=<plaid-public_key>

For Next.js:

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://appwrite.your-domain.com NEXT_PUBLIC_APPWRITE_PROJECT_ID=<appwrite-project-id>

5. Now run the application on your machine
#Please paste this command on your terminal after setting up the environment variables:
npm run dev

****************************************************************************************************************************************************
Nextjs port is 3000, therefore the application will run on [localhost](http://localhost:3000) where you will be able to view it on your browser.
*******************************************************************************************************************************************************

#To deploy using Vercel