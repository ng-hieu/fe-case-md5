import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAllUsers } from "../../service/userService";
import { Link } from "react-router-dom";

export function UserManager() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => {
    return user.listUsers;
  });
  useEffect(() => {
    dispatch(showAllUsers());
  }, []);

  return (
    <>
      <div className="about-main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Fulname</th>
                      <th>User name</th>
                      <th>Phone number</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((item, index) => {
                      return (
                        <tr>
                          <td>{index+1}</td>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.address}</td>
                          <td>
                            <Link to={''}></Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
