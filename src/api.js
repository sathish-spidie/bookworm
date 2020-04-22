import axios from "axios";

export default {
	user: {
		login: (credentials) =>
			axios.post("api/auth", { credentials }).then((res) => res.data.user),
		register: (credentials) =>
			axios.post("api/users", { credentials }).then((res) => res.data.user),
		confirm: (token) =>
			axios.post("/confirmation", { token }).then((res) => res.data.user),
	},
};
