import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";
import { splitAsPath, buildAsPath } from "utils/url";

const scopeValues = ["oss", "cloud", "enterprise"] as const;

export type ScopeType = typeof scopeValues[number];
export type ScopesType = ScopeType | ScopeType[];

export const getScopes = (scope?: ScopeType | ScopeType[]) => {
  if (!scope) {
    return [];
  } else if (Array.isArray(scope)) {
    return scope;
  } else {
    return [scope];
  }
};

export const getScopeFromUrl = (asPath: string): ScopeType => {
  const { query } = splitAsPath(asPath);

  const scope = query.scope as ScopeType;

  return scopeValues.includes(scope) ? scope : "oss";
};

export const updateScopeInUrl = (asPath: string, scope: ScopeType): string => {
  const urlParts = splitAsPath(asPath);

  if (scope === "oss") {
    if (urlParts.query.scope) {
      delete urlParts.query.scope;
    }
  } else {
    urlParts.query.scope = scope;
  }

  return buildAsPath(urlParts);
};

export interface DocsContextProps {
  scope: ScopeType;
  setScope: (scope: ScopeType) => void;
  isCurrentVersion: boolean;
  setIsCurrentVersion: (isCurrentVersion: boolean) => void;
  version: string;
  setVersion: (version: string) => void;
}

export const DocsContext = createContext<DocsContextProps>({
  scope: "oss",
  setScope: () => undefined,
  isCurrentVersion: true,
  setIsCurrentVersion: () => undefined,
  version: "",
  setVersion: () => undefined,
});

interface DocsContextProviderProps {
  children: React.ReactNode;
}

export const DocsContextProvider = ({ children }: DocsContextProviderProps) => {
  const router = useRouter();

  const urlScope = getScopeFromUrl(router.asPath);
  const [ready, setReady] = useState<boolean>(false);
  const [scope, setScope] = useState<ScopeType>("oss");
  const [isCurrentVersion, setIsCurrentVersion] = useState<boolean>(false);
  const [version, setVersion] = useState<string>("");

  // We set these variables to prevent incosistency with ssr
  useEffect(() => {
    if (!ready) {
      const { path } = splitAsPath(router.asPath);

      setScope(urlScope);
      setIsCurrentVersion(!path.startsWith("/docs/ver/"));
      setReady(true);
    } else {
      if (scope === "cloud" && !isCurrentVersion) {
        router.replace("/docs/?scope=cloud");
      } else if (scope !== urlScope) {
        router.replace(
          updateScopeInUrl(router.asPath, scope),
          updateScopeInUrl(router.asPath, scope),
          { shallow: true }
        );
      }
    }
  }, [scope, ready, urlScope, router, isCurrentVersion]);

  return (
    <DocsContext.Provider
      value={{
        scope,
        setScope,
        isCurrentVersion,
        setIsCurrentVersion,
        version,
        setVersion,
      }}
    >
      {children}
    </DocsContext.Provider>
  );
};
