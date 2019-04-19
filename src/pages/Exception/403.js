import React from 'react';
import { formatMessage } from '@/components/locale/FormattedMessage';
import Exception from '@/components/Exception';
import {Link} from "react-router-dom";

const Exception403 = () => (
  <Exception
    type="403"
    desc={formatMessage({ id: 'app.exception.description.403' })}
    linkElement={Link}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception403;
