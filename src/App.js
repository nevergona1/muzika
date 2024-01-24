import React, { useState } from 'react';

// Импортируем папку с музыкой
import musicFolder from './music';

// Пример массива треков
const tracks = [
  musicFolder['Елка - красками разными белыми красными.mp3'],
  musicFolder['Abba - Lay All Your Love On Me.mp3'],
  musicFolder['Army_Of_Lovers_-_Crucified_(musmore.com).mp3'],
  musicFolder['Bad Style - Time Back (из Около Футбола).mp3'],
  musicFolder['Billie Eilish - bad guy (with Justin Bieber).mp3'],
  musicFolder['BLESSED MANE - Death Is No More.mp3'],
  musicFolder['Bob Marley - Bad boys.mp3'],
  musicFolder['coa white - hai domo.mp3'],
  musicFolder['ed-sheeran-shape-of-you_456289108.mp3'],
  musicFolder['Ellie Goulding Lights (Sped Up Version) Ft Speed Radio.mp3'],
  musicFolder['Elton John - Im Still Standing - Remastered.mp3'],
  musicFolder['Eminem, Nate Dogg – Till I Collapse.mp3'],
  musicFolder['EVADE FROM 宇宙 - FLYDAY CHINATOWN.mp3'],
  musicFolder['Frizk All My Fellas (1).mp3'],
  musicFolder['Gorillaz - Clint Eastwood.mp3'],
  musicFolder['Gucci Mane - Wake Up in the Sky (feat. Bruno Mars, Kodak Black).mp3'],
  musicFolder['Kaleo - Way Down We Go (AudioZona).mp3'],
  musicFolder['Kali Uchis - Moonlight.mp3'],
  musicFolder['kool-kidz-crew-vibes-456239294.mp3'],
  musicFolder['KSB muzic - Баратрум.mp3'],
  musicFolder['LSD - Genius.mp3'],
  musicFolder['xngvx-montagem-mysterious-game-mp3.mp3'],
  musicFolder['Marcos_Valle_-_Estrelar_(musmore.com).mp3'],
  musicFolder['moondeity-wake-up-mp3.mp3'],
  musicFolder['msht - OneShot.mp3'],
  musicFolder['neizvesten-moonlight---kali-uchis-sped-up-456239432.mp3'],
  musicFolder['outlandish-guantanamo-mp3.mp3'],
  musicFolder['Peggy Gou - (It Goes Like) Nanana.mp3'],
  musicFolder['Pharrell Williams - Happy.mp3'],
  musicFolder['Rushex_Jolixwery_PhonkGaskar.mp3'],
  musicFolder['Ryan Gosling - I Am Just Ken.mp3'],
  musicFolder['splice-records-hot-girl-bummer-speed-up-remix_456239712.mp3'],
  musicFolder['STANDY_Marc_Korn_-_You_Spin_Me_Round_Like_A_Record_(musmore.com).mp3'],
  musicFolder['STELLAR_-_Ashes_(musmore.com).mp3'],
  musicFolder['Sunstroke Project - Run Away (ft. Olia Tira).mp3'],
  musicFolder['The Rolling Stones - Paint It, Black.mp3'],
  musicFolder['Thousand Foot Krutch - Courtesy Call.mp3'],
  musicFolder['visioner.-menace-slowed-reverb_456764715.mp3'],
  musicFolder['Woodkid - Run Boy Run (Nissan Almera).mp3'],


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
    <div className="music-player-container" style={{ border: '5px solid black', marginBottom: '10px' }}>
      <button className="play-pause-button" onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="track-info">
        <p className="track-title">{name}</p>
      </div>
      <input type="range" className="volume-slider" />
      <audio id={filePath} src={path} controls={false} autoPlay={false} muted />
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