import { commonEnv } from "./environment.common";


const env: Partial<typeof commonEnv> = {
    production: false,
    maintenance: false,
    authenticated: false, 
};

// Export all settings of common replaced by dev options
export const environment = Object.assign(commonEnv, env);




/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
