export const TOGGLEMENU = 'TOGGLEMENU';
export const CLOSEMENU = 'CLOSEMENU';
export const TOGGLEDISABLED = 'TOGGLEDISABLED';

export const closeMenu = () => ({
  type: CLOSEMENU,
});

export const toggleMenu = () => (dispatch, getState) => {
  const { isDisabled } = getState().navbar;

  if (!isDisabled) {
    dispatch({
      type: TOGGLEMENU,
    });

    setTimeout(() => {
      dispatch({
        type: TOGGLEDISABLED,
      });
    }, 400);
  }
};
