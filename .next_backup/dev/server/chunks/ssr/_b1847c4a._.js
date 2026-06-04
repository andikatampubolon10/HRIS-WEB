module.exports = [
"[project]/hris-attendance-dashboard/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-gray-100 text-gray-900 hover:bg-gray-200",
            primary: "bg-blue-600 text-white hover:bg-blue-700",
            success: "bg-green-600 text-white hover:bg-green-700",
            outline: "border border-gray-300 bg-white hover:bg-gray-50",
            ghost: "hover:bg-gray-100",
            dark: "bg-gray-800 text-white hover:bg-gray-900"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-8 px-3 text-xs",
            lg: "h-12 px-6",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/hris-attendance-dashboard/components/ui/button.tsx",
        lineNumber: 38,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/hris-attendance-dashboard/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/hris-attendance-dashboard/components/ui/input.tsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/hris-attendance-dashboard/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/hris-attendance-dashboard/components/ui/textarea.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Textarea.displayName = "Textarea";
;
}),
"[project]/hris-attendance-dashboard/lib/api/employee.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "employeeApi",
    ()=>employeeApi,
    "employeeService",
    ()=>employeeService
]);
// lib/api/employee.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/api/auth.ts [app-ssr] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8080/api/v1")?.startsWith('/') ? ("TURBOPACK compile-time value", "http://localhost:8080/api/v1") : '/api/v1';
const employeeApi = {
    async getAll () {
        const res = await fetch("/api/v1/employees", {
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
        });
        const json = await res.json().catch(()=>null);
        if (!res.ok) {
            throw new Error(json?.error || json?.message || "Gagal memuat data karyawan");
        }
        return json?.data || [];
    },
    async getNextPayrollNumber () {
        const res = await fetch(`${API_BASE}/payroll/next-number`, {
            method: "GET",
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
        });
        const json = await res.json().catch(()=>null);
        if (!res.ok) {
            throw new Error(json?.error || json?.message || "Gagal mengambil nomor payroll");
        }
        return json?.data?.payroll_number ?? "";
    }
};
class EmployeeService {
    // ==================== EMPLOYEES ====================
    async getNextPayrollNumber() {
        try {
            const response = await fetch(`${API_BASE}/payroll/next-number`, {
                method: "GET",
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || "Gagal mengambil nomor payroll");
            }
            return data?.data?.payroll_number ?? "";
        } catch (error) {
            console.error("Get next payroll number error:", error);
            throw error;
        }
    }
    async getEmployeesByScope() {
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getUser();
        const role = currentUser?.role;
        if (role === 'manager_departemen' || role === 'admin_departemen') {
            return this.getEmployeesMyDepartment();
        }
        return this.getAllEmployees();
    }
    async getAllEmployees() {
        try {
            const response = await fetch(`${API_BASE}/employees`, {
                method: 'GET',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to fetch employees');
            }
            return data.data;
        } catch (error) {
            console.error('Fetch employees error:', error);
            throw error;
        }
    }
    async getEmployeesMyDepartment() {
        try {
            const response = await fetch(`${API_BASE}/employees/my-department`, {
                method: 'GET',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to fetch employees');
            }
            return data.data;
        } catch (error) {
            console.error('Fetch employees error:', error);
            throw error;
        }
    }
    async getEmployeeByID(id) {
        try {
            const response = await fetch(`${API_BASE}/employees/${id}`, {
                method: 'GET',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to fetch employee');
            }
            return data.data;
        } catch (error) {
            console.error('Fetch employee error:', error);
            throw error;
        }
    }
    async createEmployee(employeeData) {
        try {
            const payload = {
                ...employeeData,
                payroll_number: employeeData.payroll_number || employeeData.nik || "",
                office_email: employeeData.office_email ?? employeeData.email,
                phone_number: employeeData.phone_number ?? employeeData.phone,
                role: employeeData.role || "staf"
            };
            const response = await fetch(`${API_BASE}/employees`, {
                method: 'POST',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to create employee');
            }
            // If temporary password is returned (wrapped in data object)
            if (data.data && data.data.temporary_password) {
                return data.data;
            }
            // If just employee data
            return {
                employee: data.data
            };
        } catch (error) {
            console.error('Create employee error:', error);
            throw error;
        }
    }
    async updateEmployee(id, employeeData) {
        try {
            const response = await fetch(`${API_BASE}/employees/${id}`, {
                method: 'PUT',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                body: JSON.stringify(employeeData)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to update employee');
            }
            return data.data;
        } catch (error) {
            console.error('Update employee error:', error);
            throw error;
        }
    }
    async deleteEmployee(id) {
        try {
            const response = await fetch(`${API_BASE}/employees/${id}`, {
                method: 'DELETE',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to delete employee');
            }
        } catch (error) {
            console.error('Delete employee error:', error);
            throw error;
        }
    }
    async importEmployees(file) {
        try {
            const formData = new FormData();
            formData.append('file', file);
            // Note: Do not set Content-Type header manually for FormData,
            // let the browser set it with boundary
            const headers = __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders();
            delete headers['Content-Type'];
            const response = await fetch(`${API_BASE}/employees/import`, {
                method: 'POST',
                headers: headers,
                body: formData
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to import employees');
            }
            return data.data;
        } catch (error) {
            console.error('Import employees error:', error);
            throw error;
        }
    }
    async downloadTemplate() {
        try {
            const response = await fetch(`${API_BASE}/employees/template`, {
                method: 'GET',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            if (!response.ok) {
                throw new Error('Failed to download template');
            }
            return await response.blob();
        } catch (error) {
            console.error('Download template error:', error);
            throw error;
        }
    }
    // ==================== DEPARTMENTS ====================
    async getAllDepartments() {
        try {
            const response = await fetch(`${API_BASE}/departments`, {
                method: 'GET',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to fetch departments');
            }
            return data.data;
        } catch (error) {
            console.error('Fetch departments error:', error);
            throw error;
        }
    }
    // ==================== POSITIONS ====================
    async getAllPositions(departmentId) {
        try {
            let url = `${API_BASE}/positions`;
            if (departmentId) {
                url += `?department_id=${departmentId}`;
            }
            const response = await fetch(url, {
                method: 'GET',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Failed to fetch positions');
            }
            const rawList = data.data || [];
            const toPosition = (p)=>{
                const id = String(p.id ?? '');
                const departmentId = String(p.departmentId ?? p.department_id ?? '');
                const code = String(p.code ?? '');
                const name = String(p.name ?? '');
                const level = typeof p.level === 'number' ? p.level : 0;
                const grade = String(p.grade ?? '');
                const description = typeof p.description === 'string' ? p.description : undefined;
                const responsibilitiesRaw = p.responsibilities;
                const responsibilities = Array.isArray(responsibilitiesRaw) ? responsibilitiesRaw.filter((x)=>typeof x === 'string') : [];
                const requirementsRaw = p.requirements;
                const requirements = Array.isArray(requirementsRaw) ? requirementsRaw.filter((x)=>typeof x === 'string') : typeof requirementsRaw === 'string' && requirementsRaw.trim() !== '' ? [
                    requirementsRaw
                ] : [];
                const salaryRangeCandidate = p.salaryRange ?? p.salary_range;
                const salaryRangeObj = typeof salaryRangeCandidate === 'object' && salaryRangeCandidate !== null ? salaryRangeCandidate : {};
                const salaryMin = typeof salaryRangeObj.min === 'number' ? salaryRangeObj.min : 0;
                const salaryMax = typeof salaryRangeObj.max === 'number' ? salaryRangeObj.max : 0;
                const salaryCurrency = typeof salaryRangeObj.currency === 'string' ? salaryRangeObj.currency : 'IDR';
                const isActiveRaw = p.isActive ?? p.is_active;
                const isActive = typeof isActiveRaw === 'boolean' ? isActiveRaw : false;
                const createdAt = String(p.createdAt ?? p.created_at ?? '');
                const updatedAt = String(p.updatedAt ?? p.updated_at ?? '');
                return {
                    id,
                    departmentId,
                    code,
                    name,
                    level,
                    grade,
                    description,
                    responsibilities,
                    requirements,
                    salaryRange: {
                        min: salaryMin,
                        max: salaryMax,
                        currency: salaryCurrency
                    },
                    isActive,
                    createdAt,
                    updatedAt
                };
            };
            return rawList.map(toPosition);
        } catch (error) {
            console.error('Fetch positions error:', error);
            throw error;
        }
    }
    async updatePosition(id, positionData) {
        try {
            let response = await fetch(`${API_BASE}/positions/${id}`, {
                method: 'PUT',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                body: JSON.stringify(positionData)
            });
            if (!response.ok && (response.status === 404 || response.status === 405)) {
                response = await fetch(`${API_BASE}/positions/${id}`, {
                    method: 'PATCH',
                    headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                    body: JSON.stringify(positionData)
                });
            }
            const dataText = await response.text();
            let data = {};
            try {
                data = dataText ? JSON.parse(dataText) : {};
            } catch  {
                throw new Error('Invalid response from server');
            }
            const dataObj = (val)=>typeof val === 'object' && val !== null;
            if (!response.ok) {
                const msg = dataObj(data) && (typeof data.error === 'string' || typeof data.message === 'string') ? data.error || data.message : 'Failed to update position';
                throw new Error(msg);
            }
            const p = dataObj(data) && typeof data.data === 'object' && data.data !== null ? data.data : {};
            const toPosition = (p2)=>{
                const id2 = String(p2.id ?? '');
                const departmentId2 = String(p2.departmentId ?? p2.department_id ?? '');
                const code2 = String(p2.code ?? '');
                const name2 = String(p2.name ?? '');
                const level2 = typeof p2.level === 'number' ? p2.level : 0;
                const grade2 = String(p2.grade ?? '');
                const description2 = typeof p2.description === 'string' ? p2.description : undefined;
                const responsibilitiesRaw2 = p2.responsibilities;
                const responsibilities2 = Array.isArray(responsibilitiesRaw2) ? responsibilitiesRaw2.filter((x)=>typeof x === 'string') : [];
                const requirementsRaw2 = p2.requirements;
                const requirements2 = Array.isArray(requirementsRaw2) ? requirementsRaw2.filter((x)=>typeof x === 'string') : typeof requirementsRaw2 === 'string' && requirementsRaw2.trim() !== '' ? [
                    requirementsRaw2
                ] : [];
                const salaryRangeCandidate2 = p2.salaryRange ?? p2.salary_range;
                const salaryRangeObj2 = typeof salaryRangeCandidate2 === 'object' && salaryRangeCandidate2 !== null ? salaryRangeCandidate2 : {};
                const salaryMin2 = typeof salaryRangeObj2.min === 'number' ? salaryRangeObj2.min : 0;
                const salaryMax2 = typeof salaryRangeObj2.max === 'number' ? salaryRangeObj2.max : 0;
                const salaryCurrency2 = typeof salaryRangeObj2.currency === 'string' ? salaryRangeObj2.currency : 'IDR';
                const isActiveRaw2 = p2.isActive ?? p2.is_active;
                const isActive2 = typeof isActiveRaw2 === 'boolean' ? isActiveRaw2 : false;
                const createdAt2 = String(p2.createdAt ?? p2.created_at ?? '');
                const updatedAt2 = String(p2.updatedAt ?? p2.updated_at ?? '');
                return {
                    id: id2,
                    departmentId: departmentId2,
                    code: code2,
                    name: name2,
                    level: level2,
                    grade: grade2,
                    description: description2,
                    responsibilities: responsibilities2,
                    requirements: requirements2,
                    salaryRange: {
                        min: salaryMin2,
                        max: salaryMax2,
                        currency: salaryCurrency2
                    },
                    isActive: isActive2,
                    createdAt: createdAt2,
                    updatedAt: updatedAt2
                };
            };
            return toPosition(p);
        } catch (error) {
            console.error('Update position error:', error);
            throw error;
        }
    }
    async searchEmployees(q, exclude = [], departmentId) {
        try {
            const params = new URLSearchParams();
            if (q) params.set('q', q);
            if (departmentId) params.set('department_id', departmentId);
            exclude.forEach((id)=>params.append('exclude', id));
            const response = await fetch(`${API_BASE}/employees/search?${params.toString()}`, {
                method: 'GET',
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Gagal mencari karyawan');
            }
            return data.data || [];
        } catch (error) {
            console.error('Search employees error:', error);
            throw error;
        }
    }
}
const employeeService = new EmployeeService();
}),
"[project]/hris-attendance-dashboard/lib/api/overtime-requests.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deptOvertimeRequestsApi",
    ()=>deptOvertimeRequestsApi,
    "overtimeRequestsApi",
    ()=>overtimeRequestsApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/api/auth.ts [app-ssr] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8080/api/v1")?.startsWith("/") ? ("TURBOPACK compile-time value", "http://localhost:8080/api/v1") : "/api/v1";
function buildUrl(path, params) {
    const base = API_BASE.startsWith("http") ? API_BASE : `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "http://localhost:3000"}${API_BASE}`;
    const url = new URL(`${base}${path}`);
    if (params) {
        for (const [key, value] of Object.entries(params)){
            if (value) url.searchParams.set(key, value);
        }
    }
    return url.toString();
}
async function safeJson(res) {
    const raw = await res.text();
    if (!raw) return {};
    try {
        return JSON.parse(raw);
    } catch  {
        return {
            message: raw
        };
    }
}
// ─── Manager HR API ──────────────────────────────────────────────────────────
class OvertimeRequestsApi {
    async listForManagerHR(params) {
        const res = await fetch(buildUrl("/overtime-requests", {
            status: params?.status,
            search: params?.search
        }), {
            method: "GET",
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal mengambil data pengajuan lembur");
        return data.data ?? [];
    }
    async getForManagerHR(id) {
        const res = await fetch(buildUrl(`/overtime-requests/${id}`), {
            method: "GET",
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal mengambil pengajuan lembur");
        return data.data;
    }
    async approve(id) {
        const res = await fetch(buildUrl(`/overtime-requests/${id}/approve`), {
            method: "POST",
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal menyetujui pengajuan lembur");
        return data.data;
    }
    async reject(id, rejectionReason) {
        const res = await fetch(buildUrl(`/overtime-requests/${id}/reject`), {
            method: "POST",
            headers: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rejection_reason: rejectionReason
            })
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal menolak pengajuan lembur");
        return data.data;
    }
}
// ─── Kepala Departemen API ────────────────────────────────────────────────────
class DeptOvertimeRequestsApi {
    async list(params) {
        const res = await fetch(buildUrl("/dept-overtime-requests", {
            status: params?.status,
            search: params?.search
        }), {
            method: "GET",
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal mengambil data pengajuan lembur");
        return data.data ?? [];
    }
    async get(id) {
        const res = await fetch(buildUrl(`/dept-overtime-requests/${id}`), {
            method: "GET",
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal mengambil pengajuan lembur");
        return data.data;
    }
    async approve(id) {
        const res = await fetch(buildUrl(`/dept-overtime-requests/${id}/approve`), {
            method: "POST",
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders()
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal menyetujui pengajuan lembur");
        return data.data;
    }
    async reject(id, rejectionReason) {
        const res = await fetch(buildUrl(`/dept-overtime-requests/${id}/reject`), {
            method: "POST",
            headers: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rejection_reason: rejectionReason
            })
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal menolak pengajuan lembur");
        return data.data;
    }
    async create(payload) {
        const res = await fetch(buildUrl("/dept-overtime-requests"), {
            method: "POST",
            headers: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal membuat pengajuan lembur");
        return data.data;
    }
    async update(id, payload) {
        const res = await fetch(buildUrl(`/dept-overtime-requests/${id}`), {
            method: "PUT",
            headers: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal memperbarui pengajuan lembur");
        return data.data;
    }
    async publish(id, payload) {
        const res = await fetch(buildUrl(`/dept-overtime-requests/${id}/publish`), {
            method: "POST",
            headers: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAuthHeaders(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.error || data.message || "Gagal mempublikasikan SPKL");
        return data.data;
    }
}
const overtimeRequestsApi = new OvertimeRequestsApi();
const deptOvertimeRequestsApi = new DeptOvertimeRequestsApi();
}),
"[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuatPengajuanLemburBaru
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$employee$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/api/employee.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$overtime$2d$requests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/api/overtime-requests.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hris-attendance-dashboard/lib/api/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function formatDate(dateStr) {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}
function BuatPengajuanLemburBaru() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getUser();
    // Form state
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [endTime, setEndTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchEmp, setSearchEmp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pickedEmployees, setPickedEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estimasi jam lembur
    const estHours = (()=>{
        if (!startTime || !endTime) return 0;
        const [sH, sM] = startTime.split(":").map(Number);
        const [eH, eM] = endTime.split(":").map(Number);
        let jam = eH + eM / 60 - (sH + sM / 60);
        if (jam < 0) jam += 24; // handle lewat tengah malam
        return Math.max(parseFloat(jam.toFixed(1)), 0);
    })();
    // Debounced Search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(async ()=>{
            if (searchEmp.trim().length >= 1) {
                setIsSearching(true);
                try {
                    const exclude = pickedEmployees.map((e)=>e.id);
                    const results = await __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$employee$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["employeeService"].searchEmployees(searchEmp, exclude, currentUser?.department_id);
                    // Map backend User to Employee type used here
                    const mapped = results.map((u)=>({
                            id: u.id,
                            name: u.full_name,
                            nik: u.payroll_number || u.nik || "N/A"
                        }));
                    setSearchResults(mapped);
                } catch (error) {
                    console.error(error);
                } finally{
                    setIsSearching(false);
                }
            } else {
                setSearchResults([]);
            }
        }, 300);
        return ()=>clearTimeout(timer);
    }, [
        searchEmp,
        pickedEmployees
    ]);
    const isPicked = (id)=>pickedEmployees.some((e)=>e.id === id);
    const addEmployee = (emp)=>{
        if (!isPicked(emp.id)) setPickedEmployees((prev)=>[
                ...prev,
                emp
            ]);
        setSearchEmp("");
        setSearchResults([]);
    };
    const removeEmployee = (id)=>setPickedEmployees((prev)=>prev.filter((e)=>e.id !== id));
    const validate = ()=>{
        if (!date || !startTime || !endTime || !reason || pickedEmployees.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Mohon lengkapi semua data dan pilih minimal satu karyawan.");
            return false;
        }
        return true;
    };
    const handleSave = async (status)=>{
        if (!validate()) return;
        setIsSubmitting(true);
        try {
            const payload = {
                department_id: currentUser?.department_id || "",
                date,
                start_time: startTime,
                end_time: endTime,
                reason,
                status,
                employees: pickedEmployees.map((e)=>({
                        user_id: e.id
                    }))
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$lib$2f$api$2f$overtime$2d$requests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deptOvertimeRequestsApi"].create(payload);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(status === "draft" ? "Draft berhasil disimpan" : "Pengajuan berhasil dikirim");
            router.push("/dashboard/manager-dept/lembur");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Gagal membuat pengajuan");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleSimpanDraft = ()=>handleSave("draft");
    const handleSubmitHR = ()=>handleSave("submitted");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-8 py-8 max-w-[1300px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 text-sm text-gray-500 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:underline cursor-pointer",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:underline cursor-pointer",
                        children: "Pengajuan Lembur"
                    }, void 0, false, {
                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-700 font-bold",
                        children: "Baru"
                    }, void 0, false, {
                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gray-900 mb-2",
                children: "Buat Pengajuan Lembur Baru"
            }, void 0, false, {
                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-7 text-gray-500",
                children: "Lengkapi formulir di bawah ini untuk mengajukan instruksi lembur karyawan."
            }, void 0, false, {
                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-start gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-2/3 bg-white rounded-xl shadow-sm border p-10 space-y-6 min-w-[350px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-gray-700 font-semibold mb-1 block flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Tanggal Lembur"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "date",
                                                value: date,
                                                onChange: (e)=>setDate(e.target.value),
                                                className: "mt-1",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-gray-700 font-semibold mb-1 block flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Jam Mulai"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "time",
                                                value: startTime,
                                                onChange: (e)=>setStartTime(e.target.value),
                                                className: "mt-1",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-gray-700 font-semibold mb-1 block flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Jam Selesai"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "time",
                                                value: endTime,
                                                onChange: (e)=>setEndTime(e.target.value),
                                                className: "mt-1",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold text-gray-700 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Pilih Karyawan"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#all-karyawan",
                                                className: "text-blue-600 text-sm hover:underline font-medium",
                                                children: "Lihat Semua Karyawan"
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Ketik nama atau NIK karyawan...",
                                                value: searchEmp,
                                                onChange: (e)=>setSearchEmp(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, this),
                                            isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 animate-spin text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            searchEmp && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute z-10 bg-white border rounded-lg mt-1 left-0 right-0 max-h-52 overflow-auto shadow-lg",
                                                children: searchResults.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center",
                                                        onClick: ()=>addEmployee(emp),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: emp.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-xs text-gray-500",
                                                                children: [
                                                                    "(",
                                                                    emp.nik,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, emp.id, true, {
                                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: pickedEmployees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 text-blue-800 rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium",
                                                children: [
                                                    emp.name,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-blue-500 ml-2",
                                                        children: [
                                                            "(",
                                                            emp.nik,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 30
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        "aria-label": "Delete",
                                                        className: "ml-1 focus:outline-none text-blue-600 hover:text-red-500",
                                                        onClick: ()=>removeEmployee(emp.id),
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, emp.id, true, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-gray-700 font-semibold mb-1 block",
                                        children: "Alasan Lembur"
                                    }, void 0, false, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                        placeholder: "Jelaskan urgensi dan tugas yang akan dikerjakan selama jam lembur…",
                                        value: reason,
                                        onChange: (e)=>setReason(e.target.value),
                                        rows: 4,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-3 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: handleSimpanDraft,
                                        disabled: isSubmitting,
                                        children: [
                                            isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 31
                                            }, this) : null,
                                            "Simpan Draft"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hris$2d$attendance$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "bg-blue-600 hover:bg-blue-700 text-white shadow",
                                        onClick: handleSubmitHR,
                                        disabled: isSubmitting,
                                        children: [
                                            isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 31
                                            }, this) : null,
                                            "Submit ke HR"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/3 max-w-xs md:max-w-sm bg-white rounded-xl shadow-sm border p-6 h-fit self-start min-w-[260px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-blue-800 flex items-center gap-2 text-lg mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    " Ringkasan Pengajuan"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-gray-500 text-sm",
                                                children: "Tanggal Lembur"
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "font-medium text-gray-900",
                                                children: formatDate(date)
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-gray-500 text-sm",
                                                children: "Estimasi Jam"
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "font-medium text-gray-900",
                                                children: [
                                                    estHours,
                                                    " Jam"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-gray-500 text-sm",
                                                children: "Total Karyawan"
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "font-medium text-gray-900",
                                                children: [
                                                    pickedEmployees.length,
                                                    " Orang"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-gray-500 text-sm",
                                                children: "Status Pengajuan"
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-zinc-100 text-zinc-800 rounded-full px-3 py-0.5 text-xs font-medium",
                                                    children: "DRAFT"
                                                }, void 0, false, {
                                                    fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hris-attendance-dashboard/app/dashboard/manager-dept/lembur/tambah-lembur/page.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CalendarDays
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ],
    [
        "path",
        {
            d: "M8 14h.01",
            key: "6423bh"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ],
    [
        "path",
        {
            d: "M16 14h.01",
            key: "1gbofw"
        }
    ],
    [
        "path",
        {
            d: "M8 18h.01",
            key: "lrp35t"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ],
    [
        "path",
        {
            d: "M16 18h.01",
            key: "kzsmim"
        }
    ]
];
const CalendarDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("calendar-days", __iconNode);
;
 //# sourceMappingURL=calendar-days.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarDays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_b1847c4a._.js.map