import { USER_REGISTER } from "../types";
import api from "../api";

export const userRegister = (user) => ({
	type: USER_REGISTER,
	user,
});

// ThunkAction
export const register = (credentials) => (dispatch) =>
	api.user
		.register(credentials)
		.then((user) => {
			dispatch(userRegister(user));
		})
