import React from "react";

const OfflineMessageComponent: React.FunctionComponent = () => {
  return window.navigator.onLine ? (
    ""
  ) : (
    <>
      <aside className="offline-message-component">
        <p>You are currently offline!</p>
      </aside>
    </>
  );
}; 

export default OfflineMessageComponent;
