import { ethers } from "ethers";
import { abi, networkMapping } from "../../constants";
import {
  providerLoadSuccess,
  providerLoadFailed,
  providerLoadBegan,
  dataLoadBegan
} from "../actions";

const provider =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== providerLoadBegan.type) return await next(action);

    const { onStart, onSuccess, onEnd, next1} = action.payload;

    next(action);

    dispatch(onStart());
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
      const address = networkMapping[chainId.toString()]["MagicCityApe"][0];
      const magicCityApe = new ethers.Contract(
        address,
        abi,
        provider.getSigner()
      );

        dispatch(providerLoadSuccess());
        dispatch(onSuccess({ provider, chainId, magicCityApe }));
      dispatch(onEnd());
      dispatch(dataLoadBegan({
        onStart: onStart,
        onSuccess: next1,
        onEnd:onEnd
      }))
    } catch (error) {
      console.log(error)
        dispatch(providerLoadFailed())
        dispatch(onSuccess({}))
        dispatch(onEnd())
    }

  };

export default provider;
