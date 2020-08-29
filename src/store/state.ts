export interface State {
    current: object | null;
    loading: boolean;
    background: string;
}

export const state: State = {
    current: null,
    loading: true,
    background: '',
}