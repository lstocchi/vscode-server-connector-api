import { RSPModel } from './rspModel';
import { API } from '..';

export interface RSPModelWrapper {
    /**
     * Provides access to main UI's manager of the list of declared RSP servers
     */
    readonly unwrapped: Promise<API<RSPModel>>;
}