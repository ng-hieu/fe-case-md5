import { useDispatch, useSelector } from "react-redux";
import { setSortOrder } from "../../redux/house/houseSlice";
export function FilterHouse() {
  const house = useSelector(({ houseList }) => {
    return houseList.listHouse;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div className="search-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form
                id="search-form"
                name="gs"
                method="submit"
                role="search"
                action="#">
                <div className="row">
                  <div className="col-lg-2">
                    <h4>Sort Deals By:</h4>
                  </div>
                  <div className="col-lg-8">
                    <fieldset>
                      <select
                        name="Price"
                        className="form-select"
                        aria-label="Default select example"
                        id="choosePrice"
                        onChange={(e) => {
                          console.log(e.target.value);
                          dispatch(setSortOrder(e.target.value));
                        }}>
                        <option selected>Price Range</option>
                        <option value={1}>From low to hight</option>
                        <option value={2}>From high to low</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-2">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function filter() {
  const urlParams = new URLSearchParams(window.location.search);
  const price = urlParams.get("Price");
  console.log(price);
}
