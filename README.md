# BlazeDemo Flight Booking – Playwright Automation

## Project Overview
This project automates the end-to-end flight booking process on the BlazeDemo demo website using Playwright with JavaScript.

The automation covers flight search, flight selection, passenger details submission, and booking confirmation.

**Website:** https://blazedemo.com/

## Technologies Used
- Playwright
- JavaScript
- Node.js
- Visual Studio Code

## Test Scenarios Covered

### 1. Flight Search
- Navigate to BlazeDemo website.
- Verify the website URL.
- Select departure city (Paris).
- Select destination city (New York).
- Click on Find Flights.

### 2. Flight Selection
- Verify the flight reservation page.
- Select the first available flight.
- Capture a screenshot of the selected flight page.

### 3. Passenger Details
- Enter passenger name.
- Enter address, city, state, and ZIP code.
- Select credit card type.
- Enter credit card details.
- Select Remember Me checkbox.
- Submit the booking form.

### 4. Booking Confirmation
- Capture the booking confirmation page.
- Verify and print the booking confirmation message.
- Extract and print the booking ID.

## Project Structure

```text
BlazeDemo-Flight-Booking-Playwright-Automation/
│
├── tests/
│   └── blazedemo.spec.js
│
├── screenshot/
│   ├── first_page.jpg
│   ├── second_page.jpg
│   └── third_form.jpg
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## How to Run This Project

### Step 1: Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

### Step 4: Run Tests

```bash
npx playwright test --headed
```

### Step 5: View HTML Report

```bash
npx playwright show-report
```

## Screenshots

Screenshots are captured during different stages of the flight booking process and saved in the `screenshot` folder.

## Learning Outcomes

- Hands-on experience with Playwright automation.
- Handling dropdowns using `selectOption()`.
- Handling text fields using `fill()`.
- Handling checkboxes using `check()`.
- Locating web elements using CSS selectors and placeholders.
- Validating URLs using Playwright assertions.
- Extracting text using `textContent()` and `innerText()`.
- Capturing screenshots.
- Automating an end-to-end flight booking workflow.

## Author

**Sonal Dhobi**

GitHub: https://github.com/sonaltester

LinkedIn: https://www.linkedin.com/in/sonal-dhobi-b00674271
