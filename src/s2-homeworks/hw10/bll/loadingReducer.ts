const initState = {
    isLoading: false,
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)

export const loadingReducer = (state = initState, action: LoadingActionType): typeof state => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state
    }
}

