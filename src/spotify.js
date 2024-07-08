// URL for Spotify Authorization
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Your app's client ID, redirect URI and required scopes
const clientId = "c1565d8a76ba4efe95a39615520b29bb";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played",
  "user-read-playback-position",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-top-read",
  "user-read-email",
  "user-read-private"
];

// Function to get the access token from the URL after redirect
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// Spotify Authorization URL
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
