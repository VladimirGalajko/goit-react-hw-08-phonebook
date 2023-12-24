import { createSelector } from '@reduxjs/toolkit';
export const selectToken = state => state.auth.token;
export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;


export const selectContacts = ({ contacts }) => contacts.items;
export const selectFilter = ({ filter }) => filter;


export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase())
    );

    return filteredContacts;
  }
);

