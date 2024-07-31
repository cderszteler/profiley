import Auth0Provider from "next-auth/providers/auth0";
import {getServerSession, NextAuthOptions} from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
      issuer: process.env.AUTH0_ISSUER_BASE_URL as string,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          username: profile.username
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async session({session, token}) {
      if (token.username) {
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({token, user}) {
      if (user) {
        token.username = user.username;
      }
      return token;
    }
  }
}

export default async function getSession() {
  return getServerSession(authOptions)
}