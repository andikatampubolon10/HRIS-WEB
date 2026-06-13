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
    if (!content.includes("export const runtime = 'edge'")) {
      // insert after use client or at top
      if (content.startsWith('"use client";') || content.startsWith("'use client';")) {
        content = content.replace(/^(["']use client["'];?)\s*/, "$1\nexport const runtime = 'edge';\n");
      } else {
        content = "export const runtime = 'edge';\n" + content;
      }
      fs.writeFileSync(fullPath, content);
      console.log('Added runtime edge to', f);
    }
  } else {
    console.log('Not found:', f);
  }
});
