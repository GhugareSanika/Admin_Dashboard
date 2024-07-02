export const authConfig = {
    providers:[],
    pages: {
      signIn: "/login",
    },
    callbacks: {
      authorized({ auth, request }) {
        const isLoggedIn = auth?.user;
        const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return true;
      },
    },
  };


// export const authConfig = {
//   providers: [],
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized({ auth, request }) {
//       const isLoggedIn = auth?.user;
//       const pathname = request.nextUrl?.pathname || ""; // Ensure pathname is a string

//       const isOnDashboard = pathname.startsWith("/dashboard");

//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false;
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL("/dashboard", request.nextUrl.origin)); // Ensure origin is used
//       }
//       return true;
//     },
//   },
// };


// import GitHubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';

// export const authConfig = {
//   providers: [
//     // Add your providers here, e.g., GitHub, Google
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     async session({ session, token }) {
//       session.user = token.user;
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },
//     async authorized({ token }) {
//       // Return true if user is authorized, false otherwise
//       return !!token;
//     },
//   },
// };
