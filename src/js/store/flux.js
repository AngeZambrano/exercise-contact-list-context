const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/angelica_quijada", {
					method: "GET"
				})
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},

			updateContact: (id, full_name, email, address, phone) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },

					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "angelica?quijada",
						address: address,
						phone: phone
					})
				})
					.then(response => response.jason())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

			deleteContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => {
						if (data.msg === "ok") getActions().getContacts();
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
