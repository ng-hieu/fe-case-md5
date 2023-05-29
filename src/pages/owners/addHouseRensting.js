export function AddHouseRenting() {
  return (
    <>
      <div className="container-addHouse">
        <form className="form-addHouse">
          <div className="descr-addHouse">Contact us</div>
          <div className="input-addHouse">
            <input required autoComplete="off" type="text" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-addHouse">
            <input required autoComplete="off" name="email" type="text" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-addHouse">
            <textarea
              required
              cols={30}
              rows={1}
              id="message"
              defaultValue={""}
            />
            <label htmlFor="message">Message</label>
          </div>
          <button>Send message →</button>
        </form>
      </div>
    </>
  );
}
