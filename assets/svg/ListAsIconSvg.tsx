import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ListAsIconSvg(props: SvgProps) {
  return (
    <Svg width={15} height={14} viewBox="0 0 15 14" fill="none" {...props}>
      <Path fill="#D9D9D9" fillOpacity={0} d="M0.5 0.5H4.5V4.5H0.5z" />
      <Path
        stroke="#FFF"
        strokeOpacity={1}
        strokeWidth={1}
        d="M0.5 0.5H4.5V4.5H0.5z"
      />
      <Path fill="#D9D9D9" fillOpacity={0} d="M0.5 9.5H4.5V13.5H0.5z" />
      <Path
        stroke="#FFF"
        strokeOpacity={1}
        strokeWidth={1}
        d="M0.5 9.5H4.5V13.5H0.5z"
      />
      <Path stroke="#FFF" strokeOpacity={1} strokeWidth={1} d="M8 2.5L15 2.5" />
      <Path
        stroke="#FFF"
        strokeOpacity={1}
        strokeWidth={1}
        d="M8 11.5L15 11.5"
      />
    </Svg>
  );
}

export default ListAsIconSvg;
