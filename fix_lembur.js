const fs = require('fs');

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix object properties inside the map
  content = content.replace(/name: e\.user\?.+?\|\| "Unknown",/g, 'full_name: e.user?.full_name || e.full_name || e.name || e.employee_name || e.user?.name || "Unknown",');
  content = content.replace(/name: u\.full_name,/g, 'full_name: u.full_name,');
  
  // Fix JSX and variable usage
  content = content.replace(/\{emp\.name\}/g, '{emp.full_name}');
  content = content.replace(/\$\{emp\.name\}/g, '${emp.full_name}');
  
  fs.writeFileSync(filePath, content);
  console.log('Fixed', filePath);
}

const file1 = 'C:\\Users\\Nesty\\OneDrive\\Documents\\GitHub\\HRIS-WEB\\app\\dashboard\\manager-dept\\lembur\\edit-lembur\\[id]\\page.tsx';
const file2 = 'C:\\Users\\Nesty\\OneDrive\\Documents\\GitHub\\HRIS-WEB\\app\\dashboard\\manager-dept\\lembur\\tambah-lembur\\page.tsx';

fixFile(file1);
fixFile(file2);
