# Spotify Full-Stack 

A simple Spotify-like stack with:
- Backend REST API (Express + MongoDB + Cloudinary)
- Admin dashboard (React + Vite + Tailwind) to manage albums and songs
- Client app (React + Vite + Tailwind) to browse albums and play songs

## Folder Structure
- `spotify-backend/` — Node.js Express API
- `spotify-admin/` — Admin React app for CRUD
- `spotify-clone/` — Client React app for playback

## Prerequisites
- Node.js 18+
- MongoDB instance (local or Atlas)
- Cloudinary account (for image/audio hosting)

## Environment Variables
Create a `.env` file in `spotify-backend/` with:

```
PORT=4000                 # optional
MONGODB_URI=mongodb://localhost:27017  # or your Atlas URI prefix
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret
```

The backend will connect to `${MONGODB_URI}/spotify`.

## Install Dependencies
Run in each folder:

```bash
cd spotify-backend && npm install
cd ../spotify-admin && npm install
cd ../spotify-clone && npm install
```

## Start Apps
In three terminals (or sequentially):

```bash
# Backend (port 4000 by default)
cd spotify-backend
npm run server

# Admin (Vite dev server)
cd ../spotify-admin
npm run dev

# Client (Vite dev server)
cd ../spotify-clone
npm run dev
```

Admin and Client expect the API at `http://localhost:4000` (see `spotify-admin/src/App.jsx` and `spotify-clone/src/context/PlayerContext.jsx`).

## API Overview
Base URL: `http://localhost:4000`

### Albums
- `POST /api/album/add` — multipart form
  - Fields: `name` (string), `desc` (string), `bgColour` (string)
  - File: `image` (single)
  - Response: `{ success: boolean, message?: string }`
- `GET /api/album/list` — list all
  - Response: `{ success: boolean, albums: Album[] }`
- `POST /api/album/remove` — remove by id
  - Body: `{ id: string }`
  - Response: `{ success: boolean, message?: string }`

Album model:
```
{
  name: string,
  desc: string,
  bgColour: string,
  image: string,
  _id: string
}
```

### Songs
- `POST /api/song/add` — multipart form
  - Fields: `name` (string), `desc` (string), `album` (string)
  - Files: `image` (single), `audio` (single)
  - Response: `{ success: boolean, message?: string }`
- `GET /api/song/list` — list all
  - Response: `{ success: boolean, songs: Song[] }`
- `POST /api/song/remove` — remove by id
  - Body: `{ id: string }`
  - Response: `{ success: boolean, message?: string }`

Song model:
```
{
  name: string,
  desc: string,
  album: string,
  image: string,   // Cloudinary URL
  file: string,    // Cloudinary URL to audio
  duration: string, // mm:ss
  _id: string
}
```

## Admin App
- Create albums and upload cover images
- Upload songs (image + audio) and associate to an album
- List and remove albums/songs

## Client App
- Fetches albums and songs from the API
- Plays audio with next/previous and seek support

## Development Notes
- CORS is enabled on the backend
- Multer stores uploads temporarily before Cloudinary upload
- Cloudinary `resource_type` is `image` for covers and `video` for audio files

## Scripts
- Backend: `npm run start` (prod), `npm run server` (dev with nodemon)
- Admin: `npm run dev`, `npm run build`, `npm run preview`
- Client: `npm run dev`, `npm run build`, `npm run preview`

## Troubleshooting
- If Admin/Client can’t reach the API, ensure backend is on port 4000 and `.env` is configured.
- Verify MongoDB is reachable at `MONGODB_URI`.
- Check Cloudinary credentials if uploads fail.
