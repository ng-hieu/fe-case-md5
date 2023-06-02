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
    <div className='body'>
    <div className="profile-container" style={{marginTop: "px"}}>
      <div class="portfoliocard">
		<div class="coverphoto"></div>
		<div class="profile_picture"><img src={"https://th.bing.com/th/id/OIP.JFGRP2YIv1yzJek9v-tSJwHaFI?pid=ImgDet&rs=1"}></img></div>
		<div class="left_col">
			<div class="followers">
				<div class="follow_count">18,541</div>
				Followers
			</div>
			<div class="following">
				<div class="follow_count">181</div>
				Following
			</div>
		</div>
		<div class="right_col">
			<h2 class="name">name:{profile.name}</h2>
      <hr></hr>
			<h3 class="location"></h3>
      <h3 class="location">phoneNumber:{profile.phoneNumber}</h3>

      <hr></hr>
      <h3 class="location">address:{profile.address}</h3>
      <hr></hr>
      <h3 class="location">mail:user@gmail.com</h3>
			</div>
		</div>
		</div>
    </div>
  );
}
        // <div>{profile.name}</div>
