import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function FolderSvg(props: SvgProps) {
  return (
    <Svg width={82} height={67} viewBox="0 0 82 67" fill="none" {...props}>
      <Path
        d="M75.375 12.29H42.293L31.625 1.939A6.21 6.21 0 0029.6.619a6.36 6.36 0 00-2.393-.458H6.625a6.348 6.348 0 00-4.42 1.776 5.974 5.974 0 00-1.83 4.288V61.04a5.75 5.75 0 001.762 4.12 6.11 6.11 0 004.246 1.71h69.34a6.003 6.003 0 004.171-1.68 5.65 5.65 0 001.731-4.047V18.354c0-1.608-.659-3.15-1.83-4.288a6.349 6.349 0 00-4.42-1.776zM6.625 6.225h20.582l6.25 6.065H6.625V6.225zm68.75 54.58H6.625V18.353h68.75v42.45z"
        fill="#5888E5"
      />
    </Svg>
  );
}

export default FolderSvg;
