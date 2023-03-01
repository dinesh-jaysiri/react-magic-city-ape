import { dataLoadBegan, dataLoadFailed, dataLoadSuccess } from "../actions";

const contractData=
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== dataLoadBegan.type) return await next(action);

    const { onStart, onSuccess, onEnd } = action.payload;

    next(action);

    dispatch(onStart());

    try {
      const magicCityApe = getState().contract.providerData.magicCityApe;
      const maxSupply = (await magicCityApe.maxSupply()).toString();
      const totalSupply = (await magicCityApe.totalSupply()).toString();
      const presaleAmountLimit = (await magicCityApe.presaleAmountLimit()).toString();
      const isPresaleActivated = await magicCityApe.presaleM();
      const isPublicsaleActivated = await magicCityApe.publicM();
      const isPaused = await magicCityApe.paused();

      dispatch(dataLoadSuccess());
      dispatch(
        onSuccess({
          maxSupply,
          totalSupply,
          presaleAmountLimit,
          isPresaleActivated,
          isPublicsaleActivated,
          isPaused,
        })
      );
      dispatch(onEnd());
    } catch (error) {
      console.log(error.message)
      dispatch(dataLoadFailed());
      dispatch(onSuccess({}));
      dispatch(onEnd());
    }
  };

export default contractData;
