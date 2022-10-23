import { paddingTop, paddingLeft } from './config';
import {
  spring,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';


export const Member = ({ memberName, lineHeight, position }) => {

  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const scale = spring({
    frame: frame - position,
    config: {
      mass: 0.5,
    },
    fps: videoConfig.fps,
  });


  const nameTopPosition = position * lineHeight + paddingTop;
  return (
    <p style={{
      fontFamily: "'JetBrains Mono', monospace",
      lineHeight: `${lineHeight}px`,
      fontSize: `${lineHeight}px`,
      marginBlock: 0,
      position: 'absolute',
      left: paddingLeft,
      top: nameTopPosition,
      transform: `scale(${scale})`
    }}>
      <span style={{
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        // background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(214,206,218,1) 100%)'
        color: 'white'
      }}>
        {memberName}
      </span>
    </p>
  )
}