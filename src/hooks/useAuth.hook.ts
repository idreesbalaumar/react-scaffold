import { KEYS } from "@/helpers/constants.helper";
import localforage from "localforage";

export const useAuth = () => {
  const signIn = async ({ access_token }: { access_token: string }) => {
    await localforage.setItem(KEYS.IS_SIGNED_IN, "true");
    await localforage.setItem(KEYS.TOKEN, access_token);
  };

  const signOut = async () => {
    await localforage.clear();
  };

  const checkIfSignedIn = async () => {
    const value = await localforage.getItem(KEYS.IS_SIGNED_IN);
    return JSON.parse(value as string);
  };

  return { signIn, signOut, checkIfSignedIn };
};

export type AuthContext = ReturnType<typeof useAuth>;
