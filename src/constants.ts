/**
 * Server Connector extension ID.
 */
export const SERVER_CONNECTOR_EXTENSION_ID = 'redhat.vscode-rsp-ui';

/**
 * Constants representing the state of the server itself or the state of publishing to the server
 */
export enum ServerState {
    /**
     * Server state constant (value 0) indicating that the
     * server is in an unknown state.
     */
    UNKNOWN = 0,
    /**
     * Server state constant (value 1) indicating that the
     * server is starting, but not yet ready to serve content.
     */
    STARTING = 1,
    /**
     * Server state constant (value 2) indicating that the
     * server is ready to serve content.
     */
    STARTED = 2,
    /**
     * Server state constant (value 3) indicating that the
     * server is shutting down.
     */
    STOPPING = 3,
    /**
     * Server state constant (value 4) indicating that the
     * server is stopped.
     */
    STOPPED = 4
}