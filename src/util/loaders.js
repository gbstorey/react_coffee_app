import {getProfiles} from "./api.js"

export function loader() {
    return getProfiles();
}

export default loader;