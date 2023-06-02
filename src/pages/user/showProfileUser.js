import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShowProfileUser } from '../../service/userService';
import { NavbarOfAdmin } from '../../components/Navbar/navbarOfAdmin';

export function ProfilePage() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.current);

  useEffect(() => {
    dispatch(ShowProfileUser());
  }, []);

  return (
    <div className="profile-container" style={{marginTop: "200px"}}>
      <div className="profile-item">
        <label>Name:</label>
        <div>{profile.name}</div>
      </div>
      <div className="profile-item">
        <label>Phone Number:</label>
        <div>{profile.phoneNumber}</div>
      </div>
      <div className="profile-item">
        <label>Address:</label>
        <div>{profile.address}</div>
      </div>
    </div>
  );
}
