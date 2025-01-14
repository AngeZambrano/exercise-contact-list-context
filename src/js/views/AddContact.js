import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: "angelica_quijada",
		address: "",
		phone: ""
	});

	const createContact = event => {
		event.preventDefault();
		console.log(contact);

		fetch("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },

			body: JSON.stringify(contact)
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	};

	const handleOnChange = event => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={createContact}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={handleOnChange}
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={handleOnChange}
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={handleOnChange}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={handleOnChange}
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
