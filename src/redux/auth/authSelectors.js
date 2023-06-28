export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectIsUserExist = state => Boolean(selectName(state));
export const selectIsLoggedIn = state => Boolean(selectToken(state));
export const selectError = state=> state.auth.error;
export const selectIsAuthLoading = state => state.auth.isLoading;
export const selectUser = state => state.auth.user;
export const selectUserTheme = state => state.auth.user.theme;
export const selectUserAvatar = state => state.auth.user.avatar;
export const selectAvatar = state => state.auth.avatar;
// export const selectIsSidebar = state => state.auth.isSidebar; 



