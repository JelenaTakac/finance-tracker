# Personal Finance Tracker Application

A peronal finance tracking application built with React, Vite, and Tailwind CSS. This application allows users to manage their finances by adding, updating, and deleting transactions. Users can also filter transactions by category and date, view summaries of income, expenses, and balance, and view transaction details.

## Table of contents

- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Libraries Used](#libraries-used)
- [Data Management](#data-management)
- [Responsive Design](#responsive-design)

## Features

- **Add Transaction**: Users can add new transactions with details such as amount, type, category, description and date.
- **Update & Delete Transaction**: Users can update or delete existing transaction.
- **Transaction Listing**: Displays a list of all transactions, with options to filter by category and date.
- **Transaction Filtering**: Filter transactions by category or date.
- **Summary View**: Displays a summary of total income, total expenses, and balance.
- **Transaction Detail View**: View details of individual transactions.
- **Responsive Design**: Fully responsive layout for both mobile and desktop.

## Setup and Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn (package managers)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JelenaTakac/finance-tracker.git
   cd finance-tracker

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install

3. **Run the application**:
    ```bash
    npm run dev
    # or
    yarn dev

## Usage

- **Adding Transactions**: Go to the "Add New Transaction" form and input the required details.
- **Updating or Deleting Transactions**: Select a transaction to view options for editing or deleting.
- **Filtering**: Use the filter options to view transactions by category and date.
- **Summary**: The summary view calculates and displays the total income, total expenses, and overall balance.
- **Transaction Details**: Select any transaction for a detailed view.


## Project Structure

```plaintext
src/
├── assets/             # Static assets like images
├── components/         # Reusable UI components
├── context/            # Context setup for managing state
├── reducer/            # Reducer setup for managing state
├── mockApi/            # Mock data (data.json)
├── utils/              # Constants for reducer actions (actionTypes.js)
├── views/              # Main views (e.g., Home, Transactions, TransactionDetail)
├── App.jsx             # Main application component
└── main.jsx            # Entry point for the React app
```

## Libraries Used

- **lucide-icons**: Icon library used for UI icons.
- **sweetalert**: For alerts and confirmation modals.
- **recharts**: For data visualization (e.g., pie charts for transaction categories).
- **react-router-dom**: For routing between different pages and views.

## Data Management

- **Local Storage**: Transactions are stored in the browser's local storage, so data persists across sessions.
- **React Context and Reducer**: Used for managing the application state related to transactions, including adding, updating, and deleting transactions.

## Responsive Design

The application is designed to be responsive, with layouts optimized for both mobile devices and larger screens using Tailwind CSS.
