import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function FilesSvg(props: SvgProps) {
  return (
    <Svg width={28} height={23} viewBox="0 0 28 23" fill="none" {...props}>
      <Path
        d="M2.82 22.36a2.07 2.07 0 01-1.52-.633 2.075 2.075 0 01-.633-1.522V5.436H2v14.77c0 .24.077.436.23.589.154.153.35.23.59.23h20.513v1.334L2.82 22.36zm4-4a2.07 2.07 0 01-1.52-.633 2.075 2.075 0 01-.633-1.522V2.153c0-.592.21-1.098.633-1.52A2.07 2.07 0 016.82 0h6.616l2.666 2.667h9.078a2.07 2.07 0 011.52.633c.422.421.633.928.633 1.52v11.385a2.07 2.07 0 01-.633 1.52 2.07 2.07 0 01-1.52.634l-18.36.001z"
        fill={props.fill ?? '#fff'}
      />
    </Svg>
  );
}

export default FilesSvg;
