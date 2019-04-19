import React from "react";

interface State {
}

class Main extends React.PureComponent<{}, State> {
  state = {
  };

  render() {
    return (
      <>
        {/* Note: The <h1> style will have a yellow background due to @/global/styles.ts! */}
        <h1>Hi from ReactQL</h1>
      </>
    );
  }
}

export default Main;
