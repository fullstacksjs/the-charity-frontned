import { z } from 'zod';

const Config = z.object({
  schemaUrl: z.union([z.string().url(), z.string().regex(/^\/.*$/)]),
  hasuraSecret: z.string().optional(),
  isDev: z.boolean(),
  auth0: z.object({
    domain: z.string(),
    clientId: z.string(),
    scope: z.string(),
    audience: z.string(),
    cacheLocation: z.union([z.literal('memory'), z.literal('localstorage')]),
  }),
  apolloDevTools: z.boolean(),
});

export type Config = z.infer<typeof Config>;

export const config = Config.parse({
  schemaUrl: import.meta.env.APP_API_ENDPOINT,
  hasuraSecret: import.meta.env.APP_HASURA_ADMIN_SECRET,
  isDev: import.meta.env.NODE_ENV !== 'production',
  auth0: {
    domain: import.meta.env.APP_AUTH0_DOMAIN,
    clientId: import.meta.env.APP_AUTH0_CLIENT_ID,
    audience: import.meta.env.APP_AUTH0_AUDIENCE,
    scope: 'read:current_user',
    cacheLocation: 'localstorage',
  },
  apolloDevTools: JSON.parse(
    import.meta.env.APP_APOLLO_DEV_TOOLS ?? 'false',
  ) as boolean,
} satisfies Config);
