function PersonalDetails() {
  return (
    <div className="form form--personal">
      <div>
        <label htmlFor="fullName">Full name:</label>
        <input type="text" id="fullName" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone:</label>
        <input type="tel" id="phoneNumber" />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" />
      </div>
      <div>
        <label htmlFor="github">Github:</label>
        <input type="url" id="github" />
      </div>
      <div>
        <label htmlFor="linkedin">Linkedin:</label>
        <input type="urlm" id="linkedin" />
      </div>
    </div>
  );
}

export default PersonalDetails;
