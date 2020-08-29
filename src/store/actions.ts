import { Commit } from 'vuex';
import { state } from './state';

import { getWeatherByCity } from '@/api/weatherApi';

export async function setWeatherObj({ commit }: { commit: Commit }, city: string) {
    try {
        state.loading = true;
        const response = await getWeatherByCity(city);
        commit('setWeatherObj', response.data);
    }
    catch (error) {
        console.log('Wrong city name');
    }

}
