# 🎬 MovieSlice

MovieSlice is a **React-based movie and TV show discovery application** powered by **The Movie Database (TMDb) API**. Users can explore trending movies, view detailed information, watch trailers, and find similar or recommended content.

## 🚀 Features

✅ **Trending Movies & TV Shows** – Browse the most popular and top-rated content.  
✅ **Detailed Movie & TV Show Pages** – View information like cast, ratings, and runtime.  
✅ **Video Playback** – Watch trailers directly from YouTube.  
✅ **Similar & Recommended Content** – Get suggestions based on what you like.  
✅ **Responsive Design** – Works seamlessly on all devices.  

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS, React Router
- **State Management**: React Hooks, Context API
- **Data Fetching**: Axios, Custom Hooks
- **Icons**: React Icons
- **API**: TMDb API (https://www.themoviedb.org/)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movieslice.git
   cd movieslice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API Key**
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     REACT_APP_TMDB_API_KEY=your_api_key_here
     ```
   - Get your API key from [TMDb](https://www.themoviedb.org/settings/api).

4. **Run the development server**
   ```bash
   npm start
   ```

5. **Open the app in your browser**  
   Navigate to: `http://localhost:3000`

## 📂 Project Structure
```
movieslice/
│── public/           # Static assets
│── src/
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom hooks (data fetching, etc.)
│   ├── pages/        # App pages (Home, Details, etc.)
│   ├── styles/       # Global styles (Tailwind config)
│   ├── App.js        # Main application entry
│   ├── index.js      # Renders the React app
│── .env              # Environment variables
│── package.json      # Project metadata and dependencies
│── README.md         # Documentation
```

## 🔥 API Endpoints Used

- **Trending Movies & TV Shows**: `/trending/{media_type}/week`
- **Movie/TV Show Details**: `/{media_type}/{id}`
- **Cast & Crew**: `/{media_type}/{id}/credits`
- **Similar Content**: `/{media_type}/{id}/similar`
- **Recommendations**: `/{media_type}/{id}/recommendations`
- **Videos (Trailers, Clips, etc.)**: `/{media_type}/{id}/videos`

## 🚧 Future Enhancements

- 🔹 **Search functionality** for movies and TV shows.  
- 🔹 **User authentication** for personalized watchlists.  
- 🔹 **Dark mode toggle** for better user experience.  
- 🔹 **More streaming links** and content sources.  

## 📝 License
This project is licensed under the **MIT License**.

---
💡 **Contributions Welcome!** If you find issues or have ideas for improvements, feel free to submit a pull request. 😊

