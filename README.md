# Form Builder — Fullstack App

Drag-and-drop form builder with a React frontend and Express/MongoDB backend.

## Structure

```
client/   React drag-and-drop form builder (pepperform)
server/   Express & MongoDB backend (form submission API)
```

## Setup

```bash
git clone https://github.com/jaswanth-geddam/formbuilder.git
cd formbuilder

# Install dependencies
cd client && npm install
cd ../server && npm install
cd ..
```

## Running

```bash
# Terminal 1 — Backend
cd server && npm start     # runs on port 2233

# Terminal 2 — Frontend
cd client && npm start     # runs on port 3000
```

## Features

- Drag fields (email, password, text, date, radio, number) onto a canvas
- Submit form data to the backend
- View stored submissions
