const fs = require('fs');
const path = require('path');

const files = [
  'app/dashboard/accountant/payroll/[id]/page.tsx',
  'app/dashboard/manager-dept/karyawan/edit-pegawai/[id]/page.tsx',
  'app/dashboard/manager-dept/lembur/detail/[id]/page.tsx',
  'app/dashboard/manager-dept/lembur/edit-lembur/[id]/page.tsx',
  'app/dashboard/manager-dept/penugasan/detail/[id]/page.tsx',
  'app/dashboard/manager-dept/penugasan/edit-penugasan/[id]/page.tsx',
  'app/dashboard/manager-hr/gaji-karyawan/[id]/page.tsx',
  'app/dashboard/manager-hr/jam-kerja/[id]/page.tsx',
  'app/dashboard/manager-hr/karyawan/edit-pegawai/[id]/page.tsx',
  'app/dashboard/manager-hr/lembur/detail/[id]/page.tsx'
];

files.forEach(f => {
  const fullPath = path.join('C:\\Users\\Nesty\\OneDrive\\Documents\\GitHub\\HRIS-WEB', f);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/export\s+const\s+runtime\s*=\s*['"]edge['"];?\r?\n?/g, '');
    if (!content.includes("export const dynamic = 'force-static'")) {
      if (content.startsWith('"use client";') || content.startsWith("'use client';")) {
        content = content.replace(/^(["']use client["'];?)\s*/, "$1\nexport const dynamic = 'force-static';\n");
      } else {
        content = "export const dynamic = 'force-static';\n" + content;
      }
      fs.writeFileSync(fullPath, content);
      console.log('Replaced edge with force-static in', f);
    }
  } else {
    console.log('Not found:', f);
  }
});
