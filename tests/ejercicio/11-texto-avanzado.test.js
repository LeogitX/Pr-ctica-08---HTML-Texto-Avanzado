const fs = require('fs');
const path = require('path');

describe('Ejercicio 11: Estructura HTML con texto avanzado', () => {
  const rootPath = path.join(__dirname, '../../');
  const srcPath = path.join(rootPath, 'src');
  const ejercicio11Path = path.join(srcPath, 'ejercicio-11');
  const indexPath = path.join(ejercicio11Path, 'index.html');
  
  test('La carpeta src debe existir', () => {
    expect(fs.existsSync(srcPath)).toBe(true);
    
    const stats = fs.statSync(srcPath);
    expect(stats.isDirectory()).toBe(true);
  });  
 
  test('La carpeta src/ejercicio-11 debe existir', () => {
    expect(fs.existsSync(ejercicio11Path)).toBe(true);

    const stats = fs.statSync(ejercicio11Path);
    expect(stats.isDirectory()).toBe(true);
  });

  test('El archivo src/ejercicio-11/index.html debe existir', () => {
    expect(fs.existsSync(indexPath)).toBe(true);

    const stats = fs.statSync(indexPath);
    expect(stats.isFile()).toBe(true);
  });

  test('El archivo index.html debe contener estructura HTML5 básica', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<!DOCTYPE html>/i);
    expect(content).toMatch(/<html[^>]*>/i);
    expect(content).toMatch(/<head>/i);
    expect(content).toMatch(/<body>/i);
    expect(content).toMatch(/<\/html>/i);
  });

  test('El archivo index.html debe contener lista de definiciones (dl)', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<dl>/i);
    expect(content).toMatch(/<dt>/i);
    expect(content).toMatch(/<dd>/i);
    expect(content).toMatch(/<\/dl>/i);
  });

  test('El archivo index.html debe contener cita en bloque (blockquote)', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<blockquote[^>]*>/i);
    expect(content).toMatch(/<\/blockquote>/i);
  });

  test('El archivo index.html debe contener código en línea (code)', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<code>/i);
    expect(content).toMatch(/<\/code>/i);
  });

  test('El archivo index.html debe contener abreviaturas (abbr)', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<abbr[^>]*title[^>]*>/i);
    expect(content).toMatch(/<\/abbr>/i);
  });

  test('El archivo index.html debe contener información de contacto (address)', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<address>/i);
    expect(content).toMatch(/<\/address>/i);
  });

  test('El archivo index.html debe contener superíndice (sup)', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<sup>/i);
    expect(content).toMatch(/<\/sup>/i);
  });

  test('El archivo index.html debe contener subíndice (sub)', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<sub>/i);
    expect(content).toMatch(/<\/sub>/i);
  });
  
});
