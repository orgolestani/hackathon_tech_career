import windowSize from '../actions/windowDimensions.actions'

type State =
    | {}
    | {
          width: number
          height: number
      }

interface Action {
    type: string
    payload: object
}

const { SET_WINDOW_DIMENSIONS } = windowSize.windowDimensionsTypes

export default function windowDimensions(state: State = {}, action: Action) {
    switch (action.type) {
        case SET_WINDOW_DIMENSIONS:
            const { width, height } = action.payload as {
                height: number
                width: number
            }
            return { width, height }
        default:
            return state
    }
}
