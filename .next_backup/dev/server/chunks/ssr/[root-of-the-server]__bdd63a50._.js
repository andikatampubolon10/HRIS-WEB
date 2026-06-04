module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
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
"[project]/hris-attendance-dashboard/lib/api/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
// lib/api/auth.ts
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8080/api/v1") && ("TURBOPACK compile-time value", "http://localhost:8080/api/v1").length > 0 ? ("TURBOPACK compile-time value", "http://localhost:8080/api/v1") : '/api/v1';
function resolveApiUrl(path) {
    // jika API_BASE url full (http/https)
    if (API_BASE.startsWith('http')) return `${API_BASE}${path}`;
    // jika API_BASE path (mis. /api/v1)
    const origin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http://localhost:3000';
    return `${origin}${API_BASE}${path}`;
}
function isRecord(value) {
    return typeof value === 'object' && value !== null;
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
            const url = resolveApiUrl('/auth/login');
            console.log('LOGIN URL:', url, 'API_BASE:', API_BASE);
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
"[project]/hris-attendance-dashboard/contexts/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/api/auth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function redirectByRole(role) {
    switch(role){
        case 'manager_hr':
            return '/dashboard/manager-hr';
        case 'manager_departemen':
            return '/dashboard/manager-dept';
        case 'admin_departemen':
            return '/dashboard/admin-dept';
        case 'staf':
            return '/dashboard/staff';
        default:
            return '/dashboard';
    }
}
function AuthProvider({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const refresh = async ()=>{
        // Versi localStorage-based: cukup baca dari authService
        setLoading(true);
        try {
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAccessToken();
            const storedUser = __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getUser();
            if (token && storedUser) setUser(storedUser);
            else setUser(null);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // ✅ hanya sekali, jangan redirect di sini
        refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const login = async (credentials)=>{
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].login(credentials);
            // authService.login() Anda sudah simpan token+user ke localStorage + cookie
            setUser(res.user);
            router.replace(redirectByRole(res.user?.role));
        } finally{
            setLoading(false);
        }
    };
    const logout = async ()=>{
        setLoading(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].logout();
        } finally{
            setUser(null);
            setLoading(false);
            router.replace('/login');
        }
    };
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            user,
            loading,
            isAuthenticated: !!user && __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].isAuthenticated(),
            login,
            logout,
            refresh
        }), [
        user,
        loading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/hris-attendance-dashboard/contexts/AuthContext.tsx",
        lineNumber: 96,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
    return ctx;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdd63a50._.js.map