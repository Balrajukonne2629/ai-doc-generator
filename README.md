# AI Doc Generator

AI Doc Generator is a full-stack hackathon project that turns raw source code or project notes into polished documentation with one click. It uses a React + Vite frontend, an Express API, and Google Gemini to generate README files or code explanations in seconds.

## What It Does

Paste code, choose a documentation mode, and generate structured output instantly. The app is designed for fast demos and clean presentation during hackathons, with a dark premium interface, responsive two-panel layout, and cached responses for a smoother experience.

## Screenshots

### Empty State

Use this view to show the clean input/output layout before generation.

### Generated Output

Use this view to show a completed README rendered in the output panel with copy support and scrolling.

> Add the provided screenshots here when preparing the final submission package. If you want, you can place them in a `docs/` or `screenshots/` folder and reference them below:
>
> ```md
> ![Empty state](docs/screenshot-empty.png)
> ![Generated output](docs/screenshot-output.png)
> ```

## Key Features

- AI-powered README generation from source code or plain text.
- Code explanation mode for turning implementation details into readable summaries.
- Dark, responsive UI with a split input/output workspace.
- Response caching to avoid regenerating the same output repeatedly.
- Copy-ready documentation output rendered with Markdown support.
- Fallback model support for more reliable generation.

## Tech Stack

### Frontend
- React 19
- Vite
- Axios
- React Markdown
- Tailwind CSS

### Backend
- Node.js
- Express
- Google Generative AI SDK
- CORS
- dotenv

### AI
- Gemini 1.5 Flash
- Gemini 2.5 Flash Lite fallback

## Project Structure

```text
ai-doc-generator/
  client/
    src/
      components/
      utils/
    package.json
    vite.config.js
  server/
    routes/
    index.js
    package.json
  README.md
```

## How It Works

1. The user pastes source code or a project description into the input panel.
2. The frontend sends the text to the backend API.
3. The server builds a prompt for Gemini based on the selected document type.
4. Gemini returns Markdown output for README generation or plain text for code explanation.
5. The frontend renders the result and stores it in a lightweight cache for repeat requests.

## API Endpoints

### `POST /generate-readme`
Generates a professional GitHub README in Markdown format.

Request body:
```json
{
  "text": "your code or project description"
}
```

### `POST /explain-code`
Generates a short plain-text explanation of the provided code.

Request body:
```json
{
  "text": "your code or project description"
}
```

### `GET /`
Health check route that returns:
```text
API is running...
```

## Environment Variables

Create a `.env` file in the server folder with:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

You can optionally define the frontend API URL with:

```env
VITE_API_URL=http://localhost:5000
```

## Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd ai-doc-generator
```

### 2. Install frontend dependencies
```bash
cd client
npm install
```

### 3. Install backend dependencies
```bash
cd ../server
npm install
```

### 4. Configure environment variables
Create `server/.env` and add your Gemini API key.

### 5. Start the backend
```bash
cd server
npm run dev
```

### 6. Start the frontend
```bash
cd client
npm run dev
```

## Usage

1. Open the app in your browser.
2. Paste code or a project summary into the input box.
3. Select the document type.
4. Click Generate documentation.
5. Copy the output into your GitHub README or project docs.

## Why This Project Works Well For Hackathons

- It solves a real developer problem: writing documentation is repetitive and often delayed.
- The UI is easy to demo live in under a minute.
- The generated output is immediately useful and visually clear.
- The architecture is simple enough to explain, but strong enough to show production thinking.

## Future Improvements

- Export generated docs directly to a file.
- Add more output styles like API docs, changelogs, and technical summaries.
- Support multi-file project analysis.
- Add authentication and saved generation history.

## License

This project was built for a hackathon demo and can be adapted for educational or personal use.
