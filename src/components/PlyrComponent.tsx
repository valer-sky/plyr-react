import { useRef } from "react";
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";
import styles from './index.module.scss';

console.log(Plyr);


const videoId = "yWtFb9LJs3o";
const provider = "youtube";
// const videoOptions = undefined;


const PlyrComponent = () => {
  const ref = useRef<APITypes>(null);
  console.log(ref);

  const plyrVideo =
    videoId && provider ? (

      <Plyr 
        ref={ref}
        source={{
          type: "video",
          title: 'Example title',
          sources: [
            {
              size: 720,
              src: videoId,
              provider: provider
            }
          ]
        }}
        options={{
          
          // languages: ['ru', 'en', 'be', 'pl'],
          settings: [ 'captions', 'quality', 'speed' ],
          controls: [ 'play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen' ],
          captions: { active: false, language: 'auto', update: false },
          quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] },
          previewThumbnails: { enabled: false, src: '' },
          markers: { enabled: false, points: [] }
        }}
        
        
      />
    ) : null;
    
  return (
    <div className={styles.root}>
      <div className={styles.player__wrapper}>
      <h1 className={styles.description}>Plyr</h1>
      {plyrVideo}
    
      </div>
      
    </div>
  );
};

export default PlyrComponent;