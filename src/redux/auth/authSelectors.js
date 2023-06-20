export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectIsUserExist = state => Boolean(selectName(state));
export const selectIsLoggedIn = state => Boolean(selectToken(state));
export const selectError = state=> state.auth.error;
export const selectIsAuthLoading = state=> state.auth.isLoading;


