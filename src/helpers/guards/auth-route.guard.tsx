import { ROUTES } from "@/routes";
import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.hook";

type Props = PropsWithChildren;

const AuthProtect = ({ children }: Props) => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();
    const { checkIfSignedIn } = useAuth();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useLayoutEffect(() => {
        (async () => {
            const isSigned = await checkIfSignedIn();
            if (isSigned) {
                navigate({ pathname: ROUTES.DASHBOARD, search: `?redirect=${pathname}${search}` }, { replace: true });
            }
            setIsLoggedIn(isSigned);
        })();
    });

    return !isLoggedIn ? <Outlet /> : null;
};

export default AuthProtect;