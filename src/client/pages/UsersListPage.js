import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const renderUsers = () => (
    <ul>
      {users.map(user => (
        <li key={user.id}> {user.name} </li>
      ))}
    </ul>
  );

  return <div> {renderUsers()}</div>;
};

const mapStateToProps = state => ({
  users: state.users
});

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList)
};
