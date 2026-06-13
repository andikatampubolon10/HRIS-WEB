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
    content = content.replace(/export\s+const\s+dynamic\s*=\s*['"]force-static['"];?\r?\n?/g, '');
    fs.writeFileSync(fullPath, content);
    console.log('Removed force-static from', f);
  } else {
    console.log('Not found:', f);
  }
});
