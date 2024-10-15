# Overview
This document is the Software Requirements Specification (SRS) for the Simple Banking System. It has both functional and non-functional requirements as required, all in an effort to ensure user needs are captured and satisfied efficiently.

# Functional Requirements
1. **User Authentication**
   1.1 The system shall allow verified users to sign in using their username and password.
   1.2 The system shall allow verified users to sign out of the platform.

2. **Balance Check**
   2.1 The system shall allow users to view their balance.
   2.2 The system shall allow authorized users to view the bank balance of any registered user.

3. **Transactional History**
   1. The system shall update the user balance after every transaction.
   2. The system shall allow users to view their recent transaction history.

4. **Money Transfer**
   1. The system shall allow users to transfer funds between themselves as long as they are registered platform users.
   2. The system shall update the bank balance after every successful money transfer.

5. **Deposit Functionality**
   1. The system shall allow users to deposit funds into their accounts.
   2. The system shall update the bank balance upon confirming the deposit transaction.

# Non-Functional Requirements
1. **Reliability**
   1. The system shall be operational 24/7, including weekends.
   2. The system shall have a 99.99% uptime.

2. **Usability**
   1. The system shall automatically alert users via email and in-app notifications 2 days prior to scheduled maintenance.

3. **Security Measures**
      1. The system shall allow users with incorrect username or password up to 4 sign-in attempts, after which they can retry after 30 seconds. If the fifth attempt fails, the user is locked out and asked to reset their password.
