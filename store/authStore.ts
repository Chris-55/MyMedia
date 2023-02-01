import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const AuthStore = (set: any) => ({
    userProfile: null,

    addUser: (user: any) => set ({userProfile: user}),
    removeUser: () => set({ userProfile : null})
})

const useAuthStore = create(
    persist(AuthStore, {
        name: 'auth'
    })
)

export default useAuthStore;