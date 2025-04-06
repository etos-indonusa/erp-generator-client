import { commonEnv } from "./environment.common";


const env: Partial<typeof commonEnv> = {
    production: true,
    maintenance: false,
    authenticated: false,
     
};

// Export all settings of common replaced by dev options
export const environment = Object.assign(commonEnv, env);
