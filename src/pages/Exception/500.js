import React from 'react';
import { formatMessage } from '@/components/locale/FormattedMessage';
import Exception from '@/components/Exception';
import {Link} from "react-router-dom";

const Exception500 = () => (
  <Exception
    type="500"
    desc={formatMessage({ id: 'app.exception.description.500' })}
    linkElement={Link}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception500;
