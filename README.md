# 🧪 QA Task — Demoblaze Automation (Cypress)

## 📄 Overview
This project automates key user flows on [https://www.demoblaze.com/](https://www.demoblaze.com) using **Cypress** with a **Page Object Model (POM)** structure and **Mochawesome Reports**.  
The goal was to validate the **login** and **product purchase** flows, focusing on both positive and negative test scenarios.

---

## 📂 Project Structure
├── cypress
│   ├── e2e
│   │   ├── login.spec.js
│   │   └── purchase.spec.js
│   ├── fixtures
│   │   ├── orderDetails.json
│   │   ├── products.json
│   │   └── users.json
│   ├── pages
│   │   ├── CartPage.js
│   │   ├── LoginPage.js
│   │   ├── ProductDetailsPage.js
│   │   └── ProductsPage.js
│   ├── reports
│   │   └── index.html
│   ├── screenshots
│   └── support
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md

⚙️ Setup and Execution
🧩 Prerequisites

Node.js (v16 or higher)

npm installed

📦 Installation
npm install

▶️ Run Tests (Headless)
npx cypress run

▶️ Run Tests (Interactive)
npx cypress open

▶️ The Mochawesome HTML report with screenshots is genearted in the cypress/reports folder.

🧠 Test Design and Approach

🔹 What was considered essential to test
Login Flow

Covered all standard scenarios for authentication:

Login with valid credentials ✅

Login with invalid username ❌

Login with invalid password ❌

Login with blank username and password ❌

Product Purchase Flow

✅ Happy path: user adds a product to cart, enters valid order details, and completes purchase.

❌ Negative path: user tries to purchase without entering credit card details or name.

Bug Observations (found during testing)

When a registered user enters an invalid password, the app displays "Wrong password", which is a security risk (should display a generic message).

The order form has no validation for “Name” and “Credit Card” fields — the purchase succeeds with any random text input.

🔹 How tests were designed and why

Implemented Page Object Model (POM) for maintainability and readability.

Each page (Login, Cart, Product, etc.) contains its own selectors and reusable actions.

Used fixtures (users.json, orderDetails.json, products.json) to store all test data.

Added reusable custom commands in commands.js (for utilities and repeated actions).

Used Cypress Mochawesome Reporter to generate rich HTML reports (with screenshots).

Prioritized clarity and maintainability over advanced integrations given the short deadline.

🧩 Alternative Considerations

Could extend tests using Cypress API login (cy.request) or cy.session() for faster setup.

Could use BDD/Cucumber for human-readable test steps, but skipped here to avoid unnecessary complexity.

Future improvement: leverage API endpoints for adding products directly to cart to reduce UI dependency.

📸 Test Reports

Below is a screenshot of the Mochawesome HTML Report after successful execution:


✅ Summary

Framework: Cypress (JavaScript)

Design Pattern: Page Object Model (POM)

Reporting: Mochawesome

Key Scenarios: Login + Purchase

Strengths: Maintainable structure, clear separation of concerns, reusable data and commands.

Usage of AI:
The use of was very minimal as the test cases were very straight forward and no complex logic was required.
I have used AI to do some Stubing for verifying windows alert messages.
Also, the content of read me file was recreated with AI for better visibility.
