import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function LoupeSvg(props: SvgProps) {
  return (
    <Svg
      width={17.001953}
      height={15.224365}
      viewBox="0 0 17.002 15.2244"
      fill="none"
      {...props}>
      <Path
        d="M.974 8.147c.312.671.77 1.281 1.348 1.795.578.513 1.264.92 2.02 1.199a6.899 6.899 0 002.38.42 6.9 6.9 0 002.382-.42 6.324 6.324 0 002.018-1.2 5.539 5.539 0 001.349-1.794c.313-.67.473-1.39.473-2.116 0-.727-.16-1.446-.473-2.117a5.536 5.536 0 00-1.349-1.794A6.329 6.329 0 009.104.92 6.906 6.906 0 006.722.5c-.817 0-1.626.143-2.38.42a6.33 6.33 0 00-2.02 1.2A5.536 5.536 0 00.974 3.914 5.005 5.005 0 00.5 6.031c0 .726.161 1.445.474 2.116zM16.5 14.722l-5.334-4.74"
        stroke="#5888E5"
        strokeOpacity={1}
        strokeWidth={1}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default LoupeSvg;
