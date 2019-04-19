import React from 'react';
import { formatMessage } from '@/components/locale/FormattedMessage';
import Exception from '@/components/Exception';
import {Link} from "react-router-dom";

const Exception404 = () => (
  <Exception
    type="404"
    desc={formatMessage({ id: 'app.exception.description.404' })}
    linkElement={Link}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception404;
