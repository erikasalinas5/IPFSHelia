# Se instala typescript de forma global
npm install -g typescript
# Se inicializa el proyecto en Typescript
npm init -y
# Instalación de las bibliotecas
npm install helia @helia/strings
# Crea un archivo de configuración de TypeScript (tsconfig.json) en el directorio raíz del proyecto
# Se añade en el documento
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
# Se compila y ejecuta el código Typescript
tsc main.ts
# Se ejecuta el código
node main.js