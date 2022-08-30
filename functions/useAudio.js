import { useState, useEffect } from 'react';

function useAudio() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    let context = new (window.AudioContext || window.webkitAudioContext)();

    setAudio(new AudioContext());
  }, []);

  return { audio };
}

export default useAudio;
