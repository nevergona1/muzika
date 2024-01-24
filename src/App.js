import React, { useState } from 'react';
import './App.css'

// Импортируем папку с музыкой

// Пример массива треков
const tracks = [
  './music/Елка - красками разными белыми красными.mp3',
  './music/Abba - Lay All Your Love On Me.mp3',
  './music/Army_Of_Lovers_-_Crucified_(musmore.com).mp3',
  './music/Bad Style - Time Back (из Около Футбола).mp3',
  './music/Billie Eilish - bad guy (with Justin Bieber).mp3',
  './music/BLESSED MANE - Death Is No More.mp3',
  './music/Bob Marley - Bad boys.mp3',
  './music/coa white - hai domo.mp3',
  './music/ed-sheeran-shape-of-you_456289108.mp3',
  './music/Ellie Goulding Lights (Sped Up Version) Ft Speed Radio.mp3',
  './music/Elton John - Im Still Standing - Remastered.mp3',
  './music/Eminem, Nate Dogg – Till I Collapse.mp3',
  './music/EVADE FROM 宇宙 - FLYDAY CHINATOWN.mp3',
  './music/Frizk All My Fellas (1).mp3',
  './music/Gorillaz - Clint Eastwood.mp3',
  './music/Gucci Mane - Wake Up in the Sky (feat. Bruno Mars, Kodak Black).mp3',
  './music/Kaleo - Way Down We Go (AudioZona).mp3',
  './music/Kali Uchis - Moonlight.mp3',
  './music/kool-kidz-crew-vibes-456239294.mp3',
  './music/KSB muzic - Баратрум.mp3',
  './music/LSD - Genius.mp3',
  './music/xngvx-montagem-mysterious-game-mp3.mp3',
  './music/Marcos_Valle_-_Estrelar_(musmore.com).mp3',
  './music/moondeity-wake-up-mp3.mp3',
  './music/msht - OneShot.mp3',
  './music/neizvesten-moonlight---kali-uchis-sped-up-456239432.mp3',
  './music/outlandish-guantanamo-mp3.mp3',
  './music/Peggy Gou - (It Goes Like) Nanana.mp3',
  './music/Pharrell Williams - Happy.mp3',
  './music/Rushex_Jolixwery_PhonkGaskar.mp3',
  './music/Ryan Gosling - I Am Just Ken.mp3',
  './music/splice-records-hot-girl-bummer-speed-up-remix_456239712.mp3',
  './music/STANDY_Marc_Korn_-_You_Spin_Me_Round_Like_A_Record_(musmore.com).mp3',
  './music/STELLAR_-_Ashes_(musmore.com).mp3',
  './music/Sunstroke Project - Run Away (ft. Olia Tira).mp3',
  './music/The Rolling Stones - Paint It, Black.mp3',
  './music/Thousand Foot Krutch - Courtesy Call.mp3',
  './music/visioner.-menace-slowed-reverb_456764715.mp3',
  './music/Woodkid - Run Boy Run (Nissan Almera).mp3',


  // Добавьте другие треки при необходимости
];

// Функция для обработки пути к файлу
const processFilePath = (filePath) => {
  const fileName = filePath.split('/').pop(); // Получаем имя файла из пути
  const trackName = fileName.replace('.mp3', ''); // Убираем расширение ".mp3" из названия

  return {
    path: filePath,
    name: trackName,
  };
};

// Компонент для отдельной музыкальной карты
const MusicCard = ({ filePath }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audioElement = document.getElementById(filePath);
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch((error) => {
          console.error("Playback failed:", error);
        });
      }
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }
  };

  const { path, name } = processFilePath(filePath);

  return (
    <div className="music-player-container" style={{backgroundColor:"transparent", border: '5px solid black', marginBottom: '10px' }}>
      <button className="play-pause-button" onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="track-info">
        <p className="track-title">{name}</p>
      </div>
      <input type="range" className="volume-slider" />
      <audio id={filePath} src={path} controls={false} autoPlay={false}  />
    </div>
  );
};

// Компонент App, который рендерит все музыкальные карты
function App() {
  return (
    <div className="App">
      {tracks.map((filePath, index) => (
        <MusicCard key={index} filePath={filePath} />
      ))}
    </div>
  );
}

export default App;