import React from 'react';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

const Clerk = () => {
  return (
    <ClerkProvider frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}>
      <SignedIn>
        <RedirectToSignIn />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};