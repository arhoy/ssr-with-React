import React, { useEffect } from 'react';

const UsersList = () => {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `User list `;
  });
  return <div>TYhis is user list</div>;
};

export default UsersList;
