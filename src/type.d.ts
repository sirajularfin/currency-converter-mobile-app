declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  import { ImageURISource } from 'react-native';

  const content: ImageURISource;
  export default content;
}

declare module '*.jpg' {
  import { ImageURISource } from 'react-native';

  const content: ImageURISource;
  export default content;
}

declare module '*.jpeg' {
  import { ImageURISource } from 'react-native';

  const content: ImageURISource;
  export default content;
}

declare module '*.gif' {
  import { ImageURISource } from 'react-native';

  const content: ImageURISource;
  export default content;
}

declare module '*.webp' {
  import { ImageURISource } from 'react-native';

  const content: ImageURISource;
  export default content;
}
