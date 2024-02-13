import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function NewFolderSvg(props: SvgProps) {
  return (
    <Svg width={15} height={13} viewBox="0 0 15 13" fill="none" {...props}>
      <Path
        d="M5.5 7.5h4m-2 2.056V5.5m-7-4v9a2 2 0 002 2h10a2 2 0 002-2V4.497a1.998 1.998 0 00-2-1.999l-5 .002-2-2h-4a1 1 0 00-1 1z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default NewFolderSvg;
