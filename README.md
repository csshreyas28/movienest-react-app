# MovieNest

MovieNest is a React-based application that allows users to search for movies, view details, and add them to their favorites list. It pulls movie data from an external API and provides a seamless experience for discovering and organizing movies.

---

## Features

* **Search Movies**: Search for movies by title and view detailed information (release year, poster, etc.).
* **Popular Movies**: View a predefined list of popular movies on the homepage.
* **Add to Favorites**: Add movies to a favorites list for quick access.
* **Favorites Page**: View all your favorite movies in one place.
* **Toast Notifications**: Notifications when a movie is added or removed from favorites.
* **Responsive Design**: Fully responsive and mobile-friendly.

---

## Tech Stack

* **Frontend**: React, Vite, JSX, Tailwind CSS, Custom CSS
* **API**: OMDb API
* **State Management**: Context API
* **Deployment**: Netlify
* **Backend**: None (Client-side only)

---

## Demo

Check the live demo here:
[MovieNest on Netlify](https://mymovienest.netlify.app)

---

## Installation

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/csshreyas28/movienest-react-app.git
cd movienest-react-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root directory and add the following:

```plaintext
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

Replace `your_omdb_api_key_here` with your actual API key from [OMDb API](https://www.omdbapi.com/).

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000), or the URL provided in the console, in your browser.

---

## Folder Structure

```plaintext
movienest-react-app/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── NavBar.jsx
│   │   └── Toast.jsx
│   ├── context/
│   │   └── FavoriteContext.jsx
│   ├── css/
│   │   ├── App.css
│   │   ├── Favorites.css
│   │   ├── Home.css
│   │   ├── index.css
│   │   ├── MovieCard.css
│   │   ├── Navbar.css
│   │   └── Toast.css
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   └── Home.jsx
│   └── services/
│       └── api.js
└── .env
```

### Key Files

* `src/App.jsx`: Main app structure and route management.
* `src/pages/Home.jsx`: Home page with movie search and popular listings.
* `src/pages/Favorites.jsx`: Shows the list of favorited movies.
* `src/components/MovieCard.jsx`: Renders individual movie cards.
* `src/context/FavoriteContext.jsx`: Global state for managing favorites.
* `src/services/api.js`: Functions for calling the OMDb API.

---

## Deployment

### Deploying to Netlify

1. **Push to GitHub**
   Make sure your project is committed and pushed to a GitHub repository.

2. **Create a Netlify Account**
   Sign up at [https://www.netlify.com](https://www.netlify.com).

3. **Connect Your Repo**

   * Go to the Netlify Dashboard.
   * Click on **"New site from Git"**.
   * Connect your GitHub and select the repo.

4. **Build Settings**

   * **Build Command**: `npm run build`
   * **Publish Directory**: `dist`

5. **Deploy**

   * Click **Deploy Site**.
   * Netlify will build and host your app.
   * You'll get a live URL like `your-app-name.netlify.app`.

### Environment Variables on Netlify

Add your OMDb API key as an environment variable:

* In the Netlify dashboard, go to **Site Settings → Environment Variables**.
* Add:

```plaintext
VITE_OMDB_API_KEY=your_api_key_here
```

---

## Contributing

Contributions are welcome!

1. Fork the repo.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:

   ```bash
   git commit -am 'Add feature'
   ```
4. Push to your branch:

   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---