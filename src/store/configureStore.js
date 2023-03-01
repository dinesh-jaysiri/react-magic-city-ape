import { configureStore} from "@reduxjs/toolkit"

import reducer from "./contract"
import account from "./middlewares/account"
import contractData from "./middlewares/contractData"
import provider from "./middlewares/provider"

export default function () {
    return configureStore({
        reducer: {
            contract: reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat([account,provider,contractData]),
    })
}