declare var GRAPHQL: string;
declare var SERVER: boolean;
declare var WS_SUBSCRIPTIONS: boolean;
declare var LOCAL_STORAGE_KEY: string;
import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}