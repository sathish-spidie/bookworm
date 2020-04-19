import axios from "axios";

export default {
	user: {
		login: (credentials) =>
			axios
				.post("api/auth", { credentials })
				.then((res) => res.data.user),
		register: (credentials) =>
			axios
				.post("api/user/register", { credentials })
				.then((res) => res.data.user)
	},
};
