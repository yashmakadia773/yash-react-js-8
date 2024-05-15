import { all } from "axios";
import { handle_get_user_saga, handle_post_user_saga } from "./rootsaga/Usersaga";

function* rootSaga (){

    yield all([
        handle_get_user_saga(),
        handle_post_user_saga(),
        handle_delete_user_saga(),
        handle_update_user_saga(),
    ]);
}