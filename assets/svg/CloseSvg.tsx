import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function CloseSvg(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.998 18.23L11.767 10l8.231-8.232L18.23 0 10 8.232 1.768 0 0 1.768 8.231 10 0 18.23 1.768 20l8.231-8.232 8.231 8.231 1.768-1.768z"
        fill="#222"
      />
    </Svg>
  );
}

export default CloseSvg;
