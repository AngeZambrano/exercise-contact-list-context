import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ModalUpdate = props => {
	// const [state, setState] = useState({
	// 	//initialize state here
	// });

	const { actions, store } = useContext(Context);

	const contactInfo = store.contactInfo;

	const [contact, setContact] = useState({
		full_name: contactInfo.full_name,
		email: contactInfo.email,
		agenda_slug: "angelica_quijada",
		address: contactInfo.address,
		phone: contactInfo.phone
	});

	const handelUpdate = e => {
		e.preventDefault();
		actions.updateContact(
			contactInfo.id,
			contactInfo.full_name,
			contactInfo.email,
			contactInfo.address,
			contactInfo.phone
		);
		props.onClose();
	};

	const handleChange = e => {
		setContact({ ...contact, [e.target.nname]: e.target.value });
	};

	useEffect(() => {
		props.id ? actions.oneParticularContact(props.id) : null;
	}, []);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<form onSubmit={e => handelUpdate(e)}>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									onChange={handleChange}
									className="form-control"
									defaultValue={contactInfo.full_name}
									name="full_name"
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									onChange={handleChange}
									className="form-control"
									defaultValue={contactInfo.email}
									name="email"
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									onChange={handleChange}
									className="form-control"
									defaultValue={contactInfo.phone}
									name="phone"
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									type="text"
									onChange={handleChange}
									className="form-control"
									defaultValue={contactInfo.address}
									name="address"
								/>
							</div>
							<div className="modal-footer">
								{props.onClose ? (
									<input
										onClick={() => props.onClose()}
										type="button"
										className="btn btn-primary"
										data-dismiss="modal"
										value="On no!"
									/>
								) : (
									""
								)}

								<input
									type="submit"
									className="btn btn-secondary"
									data-dismiss="modal"
									value="Update it"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalUpdate.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalUpdate.defaultProps = {
	show: false,
	onClose: null
};
