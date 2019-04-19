import React from 'react';

export function FormattedMessage({id, defaultMessage}: any) {
  return <span>{defaultMessage || id}</span>
}

export function formatMessage({ id, defaultMessage }: any) {
  return defaultMessage || id;
}

export function setLocale(lang: string) {
  return '';
}
export function getLocale() {
  return '';
}