<!-- autocomplete do '@ignite-ui/react' -->
em tsconfig.json: {
- "moduleResolution": "bundler"
+ "moduleResolution": "node"
}
--- moduleResolution define como o TypeScript encontra os arquivos dos módulos (como @ignite-ui/react). 
--- 'bundler' funciona com Vite, Bun, esbuild, é mais novo. Mas 'node' segue o pedrão do Node que é usado pelo Next.js, React, o tradicional. A troca faz com que o autocomplete encontre corretamente o 'node_modules\@ignite-ui\react\dist\index.d.ts'

<!-- Tag image i = quality e priority -->
<Image src={previewImage} height={400} quality={100} priority alt="" />