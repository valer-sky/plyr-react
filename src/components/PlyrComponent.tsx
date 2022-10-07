import { useRef } from "react";
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";
import styles from './index.module.scss';


const videoId = "yWtFb9LJs3o";
const provider = "youtube";
const videoOptions = undefined;


const PlyrComponent = () => {
  const ref = useRef<APITypes>(null);

  // const enterVideo = () => {
  //   (ref.current?.plyr as Plyr)?.fullscreen.enter();
  // };

  const plyrVideo =
    videoId && provider ? (
      <Plyr 
        ref={ref}
        source={{
          type: "video",
          sources: [
            {
              src: videoId,
              provider: provider
            }
          ]
        }}
        options={videoOptions}
        
      />
    ) : null;

  return (
    <div className={styles.root}>
      <div className={styles.player__wrapper}>
      <h1 className={styles.description}>Plyr</h1>
      {plyrVideo}
      {/* <button onClick={enterVideo}>fullscreen</button> */}
      </div>
      
    </div>
  );
};

export default PlyrComponent;