import React from 'react';
import { formatMessage } from '@/components/locale/FormattedMessage';
import Exception from '@/components/Exception';
import {Link} from "react-router-dom";

export default () => (
  <Exception
    type="404"
    linkElement={Link}
    desc={formatMessage({ id: 'app.exception.description.404' })}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);
