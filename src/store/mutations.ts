import { State } from './state';

export function setWeatherObj(state: State, weatherObj:object) {
    state.current = weatherObj;
    state.loading = false;
}
