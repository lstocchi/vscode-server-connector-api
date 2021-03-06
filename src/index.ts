import { ExtensionHelper } from './helper';
import { RSPModelWrapper } from './api/rspModelWrapper';
import { RSPModel } from './api/rspModel';

export const extension: Extension = new ExtensionHelper();

export { SERVER_CONNECTOR_EXTENSION_ID } from './constants';

/**
 * Provides access to the Server Connector extension's RSP Provider API.
 */
export interface Extension {
    getCore(): Promise<API<any>>;
    get<T>(): Promise<API<T>>;
    /**
     * Provides access to the Server Connector extension's RSP Provider API.
     */
    readonly manager: RSPModelWrapper;
}

/**
 * The result of unsuccessfully requesting the API from the Server Connector extension.
 */
export interface APIUnavailable {
    /**
     * Contains the boolean value false, indicating that the requested API was unavailable.
     */
    readonly available: false;
    /**
     * The reason the API was unavailable.
     * 'extension-not-available': Visual Studio Code could not activate the Server Connector extension,
     *   for example because it was not installed. Your extension should declare the Server Connector
     *   extension as a dependency; you can also prompt the user to install the Server Connector extension.
     */
    readonly reason: 'extension-not-available';  // extension does not appear to be installed

}

/**
 * The result of successfully requesting the API from the Server Connector extension.
 */
export interface APIAvailable<T> {
    /**
     * Contains the boolean value true, indicating that the requested API was available.
     */
    readonly available: true;
    /**
     * The API interface from the Server Connector extension.
     */
    readonly api: T;
}

/**
 * The result of requesting the API from the Server Connector extension - either the API object,
 * or an indication of why the API is not available. Use the 'available' property to
 * distinguish the two cases.
 */
export type API<T> = APIAvailable<T> | APIUnavailable;

/**
 * The type of the Server Connector extension's raw API.
 * If you activate the extension directly using the Visual Studio Code
 * extensions API, the result will be an APIBroker instance.
 */
export interface APIBroker {
    /**
     * Gets an API object for RSP Provider within Server Connector extension
     */
    get(): API<RSPModel>;
}