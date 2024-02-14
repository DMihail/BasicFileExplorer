import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function BackSvg(props: SvgProps) {
  return (
    <Svg
      width={8.095703}
      height={14.356445}
      viewBox="0 0 8.0957 14.3564"
      fill="none"
      {...props}>
      <Path
        d="M7.36 13.678l-6-6.5 6-6.5"
        stroke="#5888E5"
        strokeOpacity={1}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default BackSvg;
