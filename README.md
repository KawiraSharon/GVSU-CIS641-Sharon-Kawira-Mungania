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




```
Access and copy the link from my repository here: [GitHub Repository](https://github.com/KawiraSharon/GVSU-CIS641-Soloscribe.git)

Clone my repository to your local machine using the following command: `git clone [GitHub Repository](https://github.com/KawiraSharon/GVSU-CIS641-Soloscribe.git)`

Create a file in the root of your project and call it `<filename>.env.local`

Configure the appwrite, plaid, and dwolla environment variables by replacing the keyholders with your own values.

For Next.js:
```
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://appwrite.your-domain.com
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<appwrite-project-id>
```

For Dwolla:
```
NEXT_PUBLIC_DWOLLA_ENV=sandbox
DWOLLA_KEY=<dwolla-key>
DWOLLA_SECRET=<dwolla-secret>
```

For Appwrite:
```
APPWRITE_API_KEY=<appwrite-api_key>
```

For Plaid:
```
NEXT_PUBLIC_PLAID_ENV=<sandbox>
PLAID_CLIENT_ID=<plaid-client_id>
PLAID_SECRET=plaid-<secret>
PLAID_PUBLIC_KEY=<plaid-public_key>
```

Please paste this command on your terminal after setting up the environment variables to run the program:
```
npm run dev
``` 
```


5. Now run the application on your machine
#Please paste this command on your terminal after setting up the environment variables:
npm run dev

****************************************************************************************************************************************************
Nextjs port is 3000, therefore the application will run on [localhost](http://localhost:3000) where you will be able to view it on your browser.
*******************************************************************************************************************************************************

#To deploy using Vercel

Go to the Vercel website and create an account if you don't have one: [Vercel Website](https://vercel.com/)

Link with Github Repository to deploy from your already cloned, installed and run application.

Or you can deploy the website from importing my repository here:
[BankingMadeSimple](https://github.com/KawiraSharon/GVSU-CIS641-Soloscribe.git)

Update the environment variables on the Vercel website as well, from your code.

Scroll down and deploy.

Change the website link after the first build.



Here’s an analysis of the text, along with a clean, organized version of your **Run and Deploy Instructions** for your README file. I've removed duplicates and ensured it makes sense while keeping your wording intact.

---




### Run and Deploy Instructions

#### 1. Access and Copy the Link to My Repository
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
Create a file in the root of your project and name it `.env.local`.

Configure the Appwrite, Plaid, and Dwolla environment variables by replacing the placeholders with your own values. You’ll need to create an account for each service if you don't have one already.

For **Appwrite**:
```bash
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://appwrite.your-domain.com
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<appwrite-project-id>
```

For **Dwolla**:
```bash
NEXT_PUBLIC_DWOLLA_ENV=sandbox
DWOLLA_KEY=<dwolla-key>
DWOLLA_SECRET=<dwolla-secret>
```

For **Appwrite API**:
```bash
APPWRITE_API_KEY=<appwrite-api_key>
```

For **Plaid**:
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

The application will run on **port 3000**, and you can view it in your browser at:
[http://localhost:3000](http://localhost:3000)

#### 6. Deploy Using Vercel
To deploy the project using Vercel, follow these steps:

1. Go to the [Vercel Website](https://vercel.com/) and create an account if you don't already have one.
2. Link your GitHub repository to deploy the application directly from your already cloned, installed, and running project.
3. Alternatively, you can deploy the website by importing my repository here:
   [BankingMadeSimple](https://github.com/KawiraSharon/GVSU-CIS641-Soloscribe.git)
4. Update the environment variables on the Vercel website, matching those from your `.env.local` file.
5. Scroll down and click **Deploy**.
6. After the first build, update the website link as needed.

---



- Make sure you replace `<command copied from GitHub>` and `<your repository>` with the actual commands.
- Replace `<appwrite-project-id>`, `<dwolla-key>`, `<dwolla-secret>`, and other placeholders with your actual values in the environment variables.
