import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function FileSvg(props: SvgProps) {
  return (
    <Svg width={66} height={80} viewBox="0 0 66 80" fill="none" {...props}>
      <Path
        d="M65.356 23.27L43.48 1.395a1.562 1.562 0 00-1.106-.458h-37.5A4.687 4.687 0 00.187 5.625v68.75a4.688 4.688 0 004.688 4.688h56.25a4.688 4.688 0 004.688-4.688v-50a1.562 1.562 0 00-.457-1.105zm-21.418-17l16.539 16.543h-16.54V6.27zm17.187 69.667H4.875a1.563 1.563 0 01-1.563-1.562V5.625a1.562 1.562 0 011.563-1.563h35.938v20.313a1.563 1.563 0 001.562 1.563h20.313v48.437a1.563 1.563 0 01-1.563 1.563z"
        fill="#fff"
      />
    </Svg>
  );
}

export default FileSvg;
