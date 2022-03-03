import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import TwitterProvider from 'next-auth/providers/twitter';
// import FacebookProvider from 'next-auth/providers/facebook';
// import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
  pages: {
    signIn: '/login',
  },
});
