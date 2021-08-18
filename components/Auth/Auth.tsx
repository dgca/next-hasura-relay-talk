import {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
  ReactNode,
} from "react";
import SignIn from "components/SignIn/SignIn";
import SignUp from "components/SignUp/SignUp";

type AuthParamsType = {
  username: string | null;
  pk: string | null;
};

type AuthContextType = AuthParamsType & {
  onAuth: (incoming: AuthParamsType) => void;
};

const defaultContext = {
  username: null,
  pk: null,
  onAuth: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthParamsType>(defaultContext);

  const onAuth = useCallback(({ username, pk }: AuthParamsType) => {
    setAuth({ username, pk });
  }, []);

  const value = useMemo(
    () => ({
      ...auth,
      onAuth,
    }),
    [auth, onAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const authTypes = {
  signUp: "sign_up",
  signIn: "sign_in",
} as const;

type AuthType = typeof authTypes[keyof typeof authTypes];

export function Auth() {
  const [authType, setAuthType] = useState<AuthType>("sign_in");

  const isSignUp = authType === authTypes.signUp;

  const toggleAuthType = () => {
    setAuthType((current) => {
      const next =
        current === authTypes.signIn ? authTypes.signUp : authTypes.signIn;
      return next;
    });
  };

  const AuthComponent = isSignUp ? SignUp : SignIn;

  return (
    <div>
      <AuthComponent />
      <hr />
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleAuthType();
        }}
      >
        {isSignUp ? "Log in" : "Create an account"}
      </a>
    </div>
  );
}
