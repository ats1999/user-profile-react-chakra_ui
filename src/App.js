import React from 'react';
import userData from './data/user-profile.json';
import UserProfile from './components/UserProfile';
import UserProfileEdit from './components/UserProfileEdit';
export default function App() {
  return (
    <div>
      <UserProfile data={userData} />
      {/* <UserProfileEdit initialData={userData} /> */}
    </div>
  );
}
