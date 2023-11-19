export { default } from 'next-auth/middleware'

export const config = {
    matcher: ["/reservation","/reservation/create","/reservation/update"
             ,"/restaurant","/restaurant/update"
    
]
}