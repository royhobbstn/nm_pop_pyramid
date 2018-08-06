import React from 'react';

import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react';

const paragraph_image = 'https://react.semantic-ui.com/images/wireframe/short-paragraph.png';

const Loading = () => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader size='big'>Loading</Loader>
      </Dimmer>
      <Image src={paragraph_image} />
      <Image src={paragraph_image} />
      <Image src={paragraph_image} />
    </Segment>
  );
};

export default Loading;
