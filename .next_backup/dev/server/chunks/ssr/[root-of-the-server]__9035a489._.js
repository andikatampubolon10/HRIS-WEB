module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/HRIS-WEB/lib/api/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
// lib/api/auth.ts
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8080/api/v1")?.startsWith('/') ? ("TURBOPACK compile-time value", "http://localhost:8080/api/v1") : '/api/v1';
function resolveApiUrl(path) {
    if (API_BASE.startsWith('http')) return `${API_BASE}${path}`;
    const origin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http://localhost:3000';
    return `${origin}${API_BASE}${path}`;
}
function isRecord(value) {
    return typeof value === 'object' && value !== null;
}
function isTokenExpired(token) {
    try {
        const payloadBase64 = token.split('.')[1];
        if (!payloadBase64) return true;
        const base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c)=>'%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        const payload = JSON.parse(jsonPayload);
        if (!payload.exp) return false;
        const currentTime = Math.floor(Date.now() / 1000);
        // Tambahkan buffer 5 detik
        return payload.exp < currentTime + 5;
    } catch (e) {
        return true;
    }
}
class AuthService {
    setAccessTokenCookie(token) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const maxAgeSeconds = undefined;
    }
    clearAccessTokenCookie() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    async login(credentials) {
        try {
            const response = await fetch(resolveApiUrl('/auth/login'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            const raw = await response.text();
            let data;
            try {
                data = raw ? JSON.parse(raw) : {};
            } catch  {
                throw new Error(`Invalid JSON response (status ${response.status})`);
            }
            if (!response.ok) {
                const errorData = data;
                throw new Error(errorData.error || errorData.message || 'Login failed');
            }
            const payloadRaw = isRecord(data) && isRecord(data.data) ? data.data : data;
            if (!isRecord(payloadRaw)) {
                console.error('Invalid response structure:', data);
                throw new Error('Invalid response from server');
            }
            const accessToken = payloadRaw.access_token;
            const refreshToken = payloadRaw.refresh_token;
            const expiresIn = payloadRaw.expires_in;
            const user = payloadRaw.user;
            if (typeof accessToken !== 'string' || typeof refreshToken !== 'string' || typeof expiresIn !== 'number' || !isRecord(user)) {
                console.error('Invalid response structure:', data);
                throw new Error('Invalid response from server');
            }
            const payload = payloadRaw;
            // Save tokens to localStorage
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return payload;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }
    async logout() {
        const token = this.getAccessToken();
        if (token) {
            try {
                await fetch(resolveApiUrl('/logout'), {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } catch (error) {
                console.error('Logout error:', error);
            // Continue with local logout even if API call fails
            }
        }
        // Clear localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    async refreshToken() {
        const refreshToken = this.getRefreshToken();
        if (!refreshToken) {
            throw new Error('No refresh token available');
        }
        try {
            const response = await fetch(resolveApiUrl('/auth/refresh'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refresh_token: refreshToken
                })
            });
            const raw = await response.text();
            let data;
            try {
                data = raw ? JSON.parse(raw) : {};
            } catch  {
                throw new Error(`Invalid JSON response (status ${response.status})`);
            }
            if (!response.ok) {
                const errorData = data;
                throw new Error(errorData.error || errorData.message || 'Token refresh failed');
            }
            const payloadRaw = isRecord(data) && isRecord(data.data) ? data.data : data;
            if (!isRecord(payloadRaw) || typeof payloadRaw.access_token !== 'string') {
                throw new Error('Invalid refresh response');
            }
            const payload = payloadRaw;
            // Update tokens
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return payload;
        } catch (error) {
            console.error('Refresh token error:', error);
            // Clear tokens on refresh failure
            this.clearTokens();
            throw error;
        }
    }
    getAccessToken() {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const token = undefined;
    }
    getRefreshToken() {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
    }
    getUser() {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const userStr = undefined;
    }
    isAuthenticated() {
        return !!this.getAccessToken();
    }
    clearTokens() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    // Helper to get auth headers
    getAuthHeaders() {
        const token = this.getAccessToken();
        return {
            'Content-Type': 'application/json',
            ...token ? {
                'Authorization': `Bearer ${token}`
            } : {}
        };
    }
}
const authService = new AuthService();
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/HRIS-WEB/contexts/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HRIS-WEB/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HRIS-WEB/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HRIS-WEB/lib/api/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HRIS-WEB/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if user is logged in on mount
        const initAuth = ()=>{
            const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getUser();
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAccessToken();
            if (currentUser && token) {
                setUser(currentUser);
            } else {
                setUser(null);
                // Clear invalid/expired tokens from localStorage and cookies
                __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].clearTokens();
                // Only redirect to login if not already on login page
                if (pathname && !pathname.startsWith('/login')) {
                    router.push('/login');
                }
            }
            setLoading(false);
        };
        initAuth();
    }, [
        pathname,
        router
    ]);
    const login = async (credentials)=>{
        try {
            console.log('AuthContext: Attempting login...');
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].login(credentials);
            console.log('AuthContext: Login successful', {
                user: response.user.full_name,
                role: response.user.role
            });
            setUser(response.user);
            // Redirect based on role
            const role = response.user.role;
            let redirectPath = '/dashboard';
            switch(role){
                case 'manager_hr':
                    redirectPath = '/dashboard/manager-hr';
                    break;
                case 'manager_departemen':
                    redirectPath = '/dashboard/manager-dept';
                    break;
                case 'admin_departemen':
                    redirectPath = '/dashboard/admin-dept';
                    break;
                case 'staf':
                    redirectPath = '/dashboard/staff';
                    break;
                case 'accountant':
                    redirectPath = '/dashboard/accountant';
                    break;
                default:
                    redirectPath = '/dashboard';
            }
            console.log('AuthContext: Redirecting to', redirectPath);
            router.push(redirectPath);
        } catch (error) {
            console.error('AuthContext: Login failed', error);
            setUser(null);
            throw error;
        }
    };
    const logout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally{
            setUser(null);
            router.push('/login');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            login,
            logout,
            isAuthenticated: !!user
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/HRIS-WEB/contexts/AuthContext.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HRIS$2d$WEB$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9035a489._.js.map