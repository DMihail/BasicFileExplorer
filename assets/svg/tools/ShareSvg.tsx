import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ShareSvg(props: SvgProps) {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M7 3.423l3.538 3.539-.707.719L7.5 5.35V14h-1V5.35L4.17 7.68l-.708-.718L7 3.423zM14 0v4.038h-1V1H1v3.038H0V0h14z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ShareSvg;
