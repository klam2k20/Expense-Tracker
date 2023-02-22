<p align="center">
    <img src="imgs/demo.gif" height="500">
</p>

## Overview

This is a responsive Expense Tracker App. It supports adding and deleting expenses in the
following categories: Investments, Savings and Expenses. It then calculates the percentage
of expenses per category and displays the data within a pie chart.

## Technology

- <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
- <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
- <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
- <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
- <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">

## Features

- Responsive Design
<p align="center">
    <img src="imgs/responsive.gif" height="400">
</p>

- Add Expenses
<p align="center">
    <img src="imgs/add-expenses.gif" height="400">
</p>

- Delete Expenses
<p align="center">
    <img src="imgs/delete-expenses.gif" height="400">
</p>

## Getting Started

### Prerequisites

- yarn/npm
- Sign up for MongoDB Atlas
  - Create a shared database

#### Backend Installation

```sh
# Clone the repo
git clone git clone https://github.com/klam2k20/Expense-Tracker.git

# Create config.env
cd Expense-Tracker/server
PORT=8080
MONG0DB_URI=<MONGODBURI>

# Install dependencies
yarn install

# Start the server
yarn start
```

#### Frontend Installation

```sh
cd ../client

# Install dependencies
yarn install

# Start the application on port 3000
yarn start
```
