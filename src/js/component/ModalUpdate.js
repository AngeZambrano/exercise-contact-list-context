import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ModalUpdate = props => {
	// const [state, setState] = useState({
	// 	//initialize state here
	// });

	const { actions, store } = useContext(Context);


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
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input type="text"/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email"/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input type="phone"/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input type="text"/>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="btn btn-primary"
								data-dismiss="modal">
								Oh no!
							</button>
						) : (
							""
						)}

						<button
							onClick={() => handleDelete()}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal">
							Do it!
						</button>
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
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
