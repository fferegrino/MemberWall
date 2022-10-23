import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Users} from './users'
import { Member } from './Member';
import { paddingBottom, paddingTop } from './config';

export const MemberWall = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps, height} = useVideoConfig();
	const paddedHeight = height - paddingTop - paddingBottom;
  const lineHeight = paddedHeight / Users.length;

	return (
		<AbsoluteFill style={{background:'linear-gradient(90deg, rgba(57,45,145,1) 0%, rgba(158,31,99,1) 100%)'}}>
			{Users.sort((a, b) => a.Miembro.length - b.Miembro.length).map((user, idx)=> <Member 
			position={idx}
			lineHeight={lineHeight} 
			memberName={user.Miembro} 
			/>)}
		</AbsoluteFill>
	)
};
