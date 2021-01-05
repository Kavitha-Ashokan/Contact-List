import React from "react";
import "./style.css";

class DisplayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      note: "",
      contactList: [],
    };
  }

  setName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  setEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  setPhoneNo = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  setNote = (e) => {
    this.setState({
      note: e.target.value,
    });
  };

  onPopUp = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };
  onClose = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    this.setState({ name: "", email: "", note: "", phone: "" });
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("note").value = "";
  };
  onAdd = (e) => {
    e.preventDefault();
    var mailinput = this.state.email;
    var mailformat = new RegExp(
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    );
    let setAdd = true;
    if (this.state.contactList.length > 0) {
      this.state.contactList.map((item) => {
        if (
          item.name.toLocaleLowerCase() === this.state.name.toLocaleLowerCase()
        ) {
          setAdd = false;
          alert("Name Already Exits Please Different Name");
        }
      });
    }

    console.log(setAdd);

    if (setAdd) {
      if (mailformat.test(mailinput) || this.state.email === "") {
        this.state.contactList.push({
          name: this.state.name,
          email: this.state.email,
          note: this.state.note,
          phone: this.state.phone,
        });
        this.setState({ contactList: this.state.contactList });
        this.onClose();
      } else {
        alert("You have entered an invalid email address!");
      }
    }
  };
  render() {
    const modal = document.getElementById("myModal");
    return (
      <div>
        <script>
          {
            (window.onclick = function (event) {
              this.console.log("inn", event);
              if (event.target === modal) {
                modal.style.display = "none";
              }
            })
          }
        </script>
        <center>
          <div className="top-content">
            <button onClick={this.onPopUp} className="createBtn">
              Create
            </button>
            <table id="table1">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Notes</th>
                </tr>
              </thead>
            </table>
          </div>
        </center>   
        <b><p>CONTACTS ({this.state.contactList.length})</p></b>
        <center>
          <table id="table2">
            <tbody>
              {this.state.contactList.length > 0 &&
                this.state.contactList.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.email ? item.email : "--"}</td>
                    <td>{item.phone}</td>
                    <td>{item.note ? item.note : "--"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </center>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={this.onClose}>
                &times;
              </span>
              <h2>Create New Contact</h2>
            </div>
            <form onSubmit={this.onAdd}>
              <div className="modal-body">
                <label>Name </label>
                <input id="name" type="text" onChange={this.setName} required />
                <br />
                <br />
                <label>Email </label>
                <input id="email" type="text" onChange={this.setEmail} />
                <br />
                <br />
                <label>Phone Number </label>
                <input
                  id="phone"
                  type="number"
                  onChange={this.setPhoneNo}
                  required
                />
                <br />
                <br />
                <label>Note </label>
                <input id="note" type="text" onChange={this.setNote} />
              </div>
              <div className="modal-footer">
                <h3>
                  <center>
                    <button type="submit">ADD</button>
                  </center>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayComponent;