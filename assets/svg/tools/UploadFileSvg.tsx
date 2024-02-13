import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function UploadFileSvg(props: SvgProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M16.5.375h-12A1.125 1.125 0 003.375 1.5v1.875H1.5A1.125 1.125 0 00.375 4.5v12A1.125 1.125 0 001.5 17.625h12a1.125 1.125 0 001.125-1.125v-1.875H16.5a1.125 1.125 0 001.125-1.125v-12A1.125 1.125 0 0016.5.375zM4.125 1.5a.375.375 0 01.375-.375h12a.375.375 0 01.375.375v7.406l-2.204-2.205a1.125 1.125 0 00-1.594 0l-7.17 7.174H4.5a.375.375 0 01-.375-.375v-12zm9.75 15a.375.375 0 01-.375.375h-12a.375.375 0 01-.375-.375v-12a.375.375 0 01.375-.375h1.875V13.5A1.125 1.125 0 004.5 14.625h9.375V16.5zm2.625-2.625H6.97l6.64-6.64a.375.375 0 01.53 0l2.735 2.734V13.5a.375.375 0 01-.375.375zm-8.25-6.75a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zm0-3a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25z"
        fill="#fff"
      />
    </Svg>
  );
}

export default UploadFileSvg;
