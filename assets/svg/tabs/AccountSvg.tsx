import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function AccountSvg(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M1.333 20a5.333 5.333 0 015.334-5.333h10.666A5.334 5.334 0 0122.668 20 2.667 2.667 0 0120 22.667H4A2.667 2.667 0 011.333 20z"
        stroke={props.fill ?? '#fff'}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        d="M12 9.333a4 4 0 100-8 4 4 0 000 8z"
        fill={props.fill ?? '#fff'}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default AccountSvg;
