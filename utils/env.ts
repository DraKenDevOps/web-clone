const runtimeConfig = useRuntimeConfig()
export const environment = {
    BASE_API_URL: runtimeConfig.public.BASE_API_URL,
};