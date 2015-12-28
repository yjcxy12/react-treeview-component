import assign from 'object-assign';

export function defaultHandleArrowClick(model, instance) {
  instance.setState({
    model: assign({}, instance.state.model,
      assign({}, model, {
        initialState: { opened: !model.initialState.opened }
      })
    )
  });
}

export function defaultHandleIconClick() {

}

export function defaultHandleTextClick() {

}
