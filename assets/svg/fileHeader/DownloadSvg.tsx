import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function DownloadSvg(props: SvgProps) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        d="M6 12A6 6 0 116-.001 6 6 0 016 12zm2.136-6.53l-1.47 1.469V3.333a.667.667 0 00-1.333 0V6.94l-1.47-1.47a.75.75 0 10-1.06 1.062l2.666 2.666a.75.75 0 001.062 0l2.666-2.666a.751.751 0 00-1.06-1.062z"
        fill="#FFD964"
        fillOpacity={1}
        fillRule="nonzero"
      />
    </Svg>
  );
}

export default DownloadSvg;
