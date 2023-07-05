const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/angelica_quijada", {
					method: "GET"
				})
					.then(response => response.json())
					.then(data => console.log({ contacts: data }))
					.then(error => console.log(error));
			},

			updateContact: (full_name, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },

					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "bertablancpastoragenda",
						address: address,
						phone: phone
					})
				})
					.then(response => response.jason())
					.then(data => console.log(data))
					.then(error => console.log(error));
			}
		}
	};
};

export default getState;
