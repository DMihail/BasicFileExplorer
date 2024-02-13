import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ScanSvg(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M15.428 12v2.286a1.143 1.143 0 01-1.142 1.143H12M12 .572h2.286a1.143 1.143 0 011.142 1.142V4M.571 4V1.714A1.143 1.143 0 011.714.572H4m0 14.857H1.714a1.143 1.143 0 01-1.143-1.143V12M12 12.572V2.857H4v9.714h8z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ScanSvg;
