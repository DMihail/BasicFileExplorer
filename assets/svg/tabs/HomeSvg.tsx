import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function HomeSvg(props: SvgProps) {
  return (
    <Svg width={28} height={26} viewBox="0 0 28 26" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.72.74l12.72 11.6-1.42 1.42L24 11.928V24.98l-1 1h-6l-1-1v-7h-4v7l-1 1H5l-1-1V11.944L2 13.76.58 12.34 13.28.74h1.44zM6 10.126V23.98h4v-7l1-1h6l1 1v7h4V10.114L14 2.86l-8 7.266z"
        fill={props.fill ?? '#fff'}
      />
    </Svg>
  );
}

export default HomeSvg;
