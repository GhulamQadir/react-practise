import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const store = (set) => ({
    isUser: false,
    setIsUser: (value) => {
        set(() => ({
            isUser: value
        }))
    }

})
const useRoutesStore = create(
    persist(store, {
        name: "user"
    }))
export default useRoutesStore;