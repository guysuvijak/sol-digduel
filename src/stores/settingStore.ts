// Next.js 15 - src/stores/settingStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SettingStateProps } from '@/types';

export const useSettingStore = create<SettingStateProps>()(
    persist(
        (set) => ({
            flagIcon: 'default',
            flagColor: '#FF0000',
            bombIcon: 'default',
            numberStyle: 'default',
            setFlagIcon: (flagIcon) => set({ flagIcon }),
            setFlagColor: (flagColor) => set({ flagColor }),
            setBombIcon: (bombIcon) => set({ bombIcon }),
            setNumberStyle: (numberStyle) => set({ numberStyle })
        }),
        {
            name: 'setting-storage',
            partialize: (state) => ({
                flagIcon: state.flagIcon,
                flagColor: state.flagColor,
                bombIcon: state.bombIcon,
                numberStyle: state.numberStyle
            })
        }
    )
);
