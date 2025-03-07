import { useState, useEffect } from 'react';

const NowPlaying = () => {
  const [song, setSong] = useState({
    isPlaying: false,
    title: '',
    artist: '',
    albumArt: ''
  });

  // This is a placeholder. You'll need to implement actual Spotify API integration
  useEffect(() => {
    // Simulated data for now
    setSong({
      isPlaying: true,
      title: "Quantum Trading",
      artist: "Market Beats",
      albumArt: "https://placeholder.co/400"
    });
  }, []);

  if (!song.isPlaying) return null;

  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="animate-spin">🎵</div>
      <span className="text-gray-600 dark:text-gray-400">Now Playing:</span>
      <span className="font-medium">{song.title}</span>
      <span className="text-gray-600 dark:text-gray-400">by {song.artist}</span>
    </div>
  );
};

export default NowPlaying; 